import type {
  OnboardingOption,
  OnboardingStep,
} from "@/lib/types/onboarding.types";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    title: "Personalize your beauty store",
    description:
      "We'll guide you through setting up your brand, from store details to product listings.",
  },
  {
    title: "Tell us about your brand",
    description:
      "Share a few details about your store and set up secure payments.",
  },
  {
    title: "Set up your store essentials",
    description:
      "Add your products, pricing, and delivery preferences to start selling with confidence.",
  },
  {
    title: "Start your journey",
    description:
      "Reach customers and grow your beauty business with BeautyBarn.",
  },
];

export const ONBOARDING_REASON_OPTIONS: OnboardingOption[] = [
  {
    id: "exploring",
    label: "I'm exploring and not sure what beauty products to sell yet",
  },
  {
    id: "first-sale",
    label: "I have products ready and want to start selling for the first time",
  },
  {
    id: "expand",
    label:
      "I already sell beauty products elsewhere and want to expand to BeautyBarn",
  },
  {
    id: "new-store",
    label: "I already have a store and want to create a new one",
  },
];
