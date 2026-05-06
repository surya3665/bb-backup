"use client";

import { useState } from "react";

import { initialOnboardingState } from "@/lib/store/onboardingStore";
import { isValidCategory, isValidReason } from "@/lib/schemas/onboarding.schema";
import type {
  BeautyCategory,
  OnboardingReason,
  OnboardingState,
} from "@/lib/types/onboarding.types";

export function useOnboardingFlow(
  initialState: Partial<OnboardingState> = initialOnboardingState
) {
  const [reason, setReasonState] = useState<OnboardingReason | null>(
    initialState.reason ?? null
  );
  const [categories, setCategories] = useState<BeautyCategory[]>(
    initialState.categories ?? []
  );

  function setReason(nextReason: OnboardingReason) {
    if (isValidReason(nextReason)) {
      setReasonState(nextReason);
    }
  }

  function toggleCategory(category: BeautyCategory) {
    if (!isValidCategory(category)) {
      return;
    }

    setCategories((currentCategories) =>
      currentCategories.includes(category)
        ? currentCategories.filter((currentCategory) => currentCategory !== category)
        : [...currentCategories, category]
    );
  }

  return {
    reason,
    setReason,
    categories,
    toggleCategory,
  };
}
