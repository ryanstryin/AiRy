/**
 * @jest-environment node
 */
import { POST } from "./route";

const mockSend = jest.fn();

jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: (...args: unknown[]) => mockSend(...args),
    },
  })),
}));

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBase = {
  name: "Jane Smith",
  email: "jane@example.com",
  company: "Acme Corp",
};

beforeEach(() => {
  mockSend.mockReset();
  mockSend.mockResolvedValue({ data: { id: "test-id" }, error: null });
});

describe("POST /api/contact", () => {
  it("returns 400 when required fields are missing", async () => {
    const res = await POST(makeRequest({ name: "Test" }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns 200 on valid submission", async () => {
    const res = await POST(makeRequest({ ...validBase, message: "I need an AI employee" }));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(mockSend).toHaveBeenCalledTimes(1);
    const payload = mockSend.mock.calls[0][0];
    expect(payload.replyTo).toBe("jane@example.com");
    expect(payload.subject).toBe("New AIRY Inquiry — Acme Corp");
  });

  it("returns 400 for invalid email format", async () => {
    const res = await POST(
      makeRequest({ name: "Jane", email: "not-an-email", company: "Acme", message: "Hello" })
    );
    expect(res.status).toBe(400);
  });

  it("returns 500 when Resend reports an error", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockSend.mockResolvedValueOnce({ data: null, error: { message: "boom" } });
    const res = await POST(makeRequest(validBase));
    expect(res.status).toBe(500);
    spy.mockRestore();
  });

  it("forwards path, aiStage, layer and source to the email", async () => {
    const res = await POST(
      makeRequest({
        ...validBase,
        path: "agentops",
        aiStage: "Running agents in production",
        layer: "Shared brain",
        source: "blueprint",
      })
    );
    expect(res.status).toBe(200);
    const { subject, html } = mockSend.mock.calls[0][0];
    expect(subject).toBe("[AgentOps] New AIRY Inquiry — Acme Corp");
    expect(html).toContain("AgentOps Partner");
    expect(html).toContain("Running agents in production");
    expect(html).toContain("Shared brain");
    expect(html).toContain("blueprint");
  });

  it("ignores an invalid path", async () => {
    const res = await POST(makeRequest({ ...validBase, path: "hacker" }));
    expect(res.status).toBe(200);
    const { subject, html } = mockSend.mock.calls[0][0];
    expect(subject).not.toContain("[AgentOps]");
    expect(html).not.toContain("hacker");
    expect(html).not.toContain("Interested in");
  });

  it("truncates over-long optional values to 100 characters", async () => {
    const long = "x".repeat(250);
    const res = await POST(makeRequest({ ...validBase, aiStage: long, layer: long, source: long }));
    expect(res.status).toBe(200);
    const { html } = mockSend.mock.calls[0][0] as { html: string };
    expect(html).toContain("x".repeat(100));
    expect(html).not.toContain("x".repeat(101));
  });

  it("escapes HTML in submitted fields", async () => {
    await POST(makeRequest({ ...validBase, name: "<script>alert(1)</script>", layer: "<b>x</b>" }));
    const { html } = mockSend.mock.calls[0][0];
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&lt;b&gt;x&lt;/b&gt;");
  });

  it("uses RESEND_FROM when set", async () => {
    process.env.RESEND_FROM = "AIRY <hello@airytransformation.com>";
    try {
      await POST(makeRequest(validBase));
      expect(mockSend.mock.calls[0][0].from).toBe("AIRY <hello@airytransformation.com>");
    } finally {
      delete process.env.RESEND_FROM;
    }
  });
});
