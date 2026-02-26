export const NextResponse = {
  json: (data: unknown, init?: { status?: number }) => ({
    status: init?.status ?? 200,
    json: async () => data,
  }),
};
