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
  return new Request("http://localhost/api/blueprint-download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const valid = {
  name: "Jane Smith",
  email: "jane@example.com",
  company: "Acme Corp",
  aiStage: "Exploring",
  guide: "digital-credibility-stack",
  source: "blueprint-download",
};

const OK = { data: { id: "id" }, error: null };

beforeEach(() => {
  mockSend.mockReset();
  mockSend.mockResolvedValue(OK);
  process.env.CONTACT_EMAIL = "owner@airy.test";
  delete process.env.NEXT_PUBLIC_SITE_URL;
});

describe("POST /api/blueprint-download", () => {
  it("sends guide, notification and scheduled follow-up, returns 200", async () => {
    const before = Date.now();
    const res = await POST(makeRequest(valid));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(mockSend).toHaveBeenCalledTimes(3);

    const [guideMail, notifyMail, followUpMail] = mockSend.mock.calls.map((c) => c[0]);
    const url = "https://airytransformation.com/blueprint/guides/digital-credibility-stack.html";

    expect(guideMail.to).toBe("jane@example.com");
    expect(guideMail.html).toContain(url);
    expect(guideMail.scheduledAt).toBeUndefined();

    expect(notifyMail.to).toBe("owner@airy.test");
    expect(notifyMail.replyTo).toBe("jane@example.com");
    expect(notifyMail.html).toContain("Guide download: digital-credibility-stack");
    expect(notifyMail.html).toContain("blueprint-download");
    expect(notifyMail.html).toContain("Exploring");

    expect(followUpMail.to).toBe("jane@example.com");
    const scheduled = new Date(followUpMail.scheduledAt).getTime();
    const twoDays = 2 * 24 * 60 * 60 * 1000;
    expect(scheduled).toBeGreaterThanOrEqual(before + twoDays);
    expect(scheduled).toBeLessThan(before + twoDays + 60_000);
  });

  it("uses NEXT_PUBLIC_SITE_URL for the guide link", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.example.com";
    await POST(makeRequest(valid));
    expect(mockSend.mock.calls[0][0].html).toContain(
      "https://preview.example.com/blueprint/guides/digital-credibility-stack.html"
    );
  });

  it("returns 400 when name or email is missing", async () => {
    expect((await POST(makeRequest({ ...valid, name: "" }))).status).toBe(400);
    expect((await POST(makeRequest({ ...valid, email: undefined }))).status).toBe(400);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns 400 for invalid email", async () => {
    expect((await POST(makeRequest({ ...valid, email: "nope" }))).status).toBe(400);
  });

  it("returns 400 for guides not on the allowlist or with bad characters", async () => {
    for (const guide of ["unknown-guide", "../etc/passwd", "Graph-Engineering", "", 42]) {
      const res = await POST(makeRequest({ ...valid, guide }));
      expect(res.status).toBe(400);
    }
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns 400 on malformed JSON", async () => {
    expect((await POST(makeRequest("{not json"))).status).toBe(400);
  });

  it("still returns 200 when the follow-up and notification fail", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockSend
      .mockResolvedValueOnce(OK)
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce({ data: null, error: { message: "scheduling not allowed" } });
    const res = await POST(makeRequest(valid));
    expect(res.status).toBe(200);
    spy.mockRestore();
  });

  it("returns 500 when the guide email fails", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockSend.mockResolvedValueOnce({ data: null, error: { message: "bad" } });
    const res = await POST(makeRequest(valid));
    expect(res.status).toBe(500);

    mockSend.mockReset();
    mockSend.mockRejectedValueOnce(new Error("down")).mockResolvedValue(OK);
    expect((await POST(makeRequest(valid))).status).toBe(500);
    spy.mockRestore();
  });
});
