import { validateOnboardingPayload } from "@/lib/schemas/onboarding.schema";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = validateOnboardingPayload(payload);

  if (!result.valid) {
    return Response.json(
      {
        ok: false,
        error: result.error,
      },
      { status: 400 }
    );
  }

  return Response.json({
    ok: true,
    data: result.data,
  });
}
