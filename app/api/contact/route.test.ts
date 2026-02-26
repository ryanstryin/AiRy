/**
 * @jest-environment node
 */
import { POST } from "./route";

jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: "test-id" }, error: null }),
    },
  })),
}));

describe("POST /api/contact", () => {
  it("returns 400 when required fields are missing", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
  });

  it("returns 200 on valid submission", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Jane Smith",
        email: "jane@example.com",
        company: "Acme Corp",
        message: "I need an AI employee",
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  it("returns 400 for invalid email format", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Jane",
        email: "not-an-email",
        company: "Acme",
        message: "Hello",
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
