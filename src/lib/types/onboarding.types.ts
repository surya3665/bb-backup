export type OnboardingStep = {
  title: string;
  description: string;
};

export type OnboardingReason =
  | "exploring"
  | "first-sale"
  | "expand"
  | "new-store";

export type BeautyCategory =
  | "skincare"
  | "makeup"
  | "haircare"
  | "fragrance";

export type OnboardingOption = {
  id: OnboardingReason;
  label: string;
};

export type BeautyCategoryOption = {
  id: BeautyCategory;
  label: string;
};

export type OnboardingState = {
  reason: OnboardingReason | null;
  categories: BeautyCategory[];
};
