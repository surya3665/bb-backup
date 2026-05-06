import { BEAUTY_CATEGORIES } from "@/lib/constants/beauty-categories";
import { ONBOARDING_REASON_OPTIONS } from "@/lib/constants/onboarding-steps";
import type { OnboardingState } from "@/lib/types/onboarding.types";

const validReasons = new Set<string>(
  ONBOARDING_REASON_OPTIONS.map((option) => option.id)
);
const validCategories = new Set<string>(
  BEAUTY_CATEGORIES.map((category) => category.id)
);

export function isValidReason(value: unknown) {
  return typeof value === "string" && validReasons.has(value);
}

export function isValidCategory(value: unknown) {
  return typeof value === "string" && validCategories.has(value);
}

export function validateOnboardingPayload(payload: unknown):
  | { valid: true; data: OnboardingState }
  | { valid: false; error: string } {
  if (!payload || typeof payload !== "object") {
    return { valid: false, error: "Payload must be an object." };
  }

  const reason = "reason" in payload ? payload.reason : null;
  const categories = "categories" in payload ? payload.categories : [];

  if (reason !== null && !isValidReason(reason)) {
    return { valid: false, error: "Invalid onboarding reason." };
  }

  if (!Array.isArray(categories) || categories.some((item) => !isValidCategory(item))) {
    return { valid: false, error: "Invalid beauty categories." };
  }

  return {
    valid: true,
    data: {
      reason: reason as OnboardingState["reason"],
      categories: categories as OnboardingState["categories"],
    },
  };
}
