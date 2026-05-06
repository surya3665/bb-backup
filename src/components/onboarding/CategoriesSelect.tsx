"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { BEAUTY_CATEGORIES } from "@/lib/constants/beauty-categories";
import { useOnboardingFlow } from "@/lib/hooks/useOnboardingFlow";

import { OnboardingLayout } from "./OnboardingLayout";

export function CategoriesSelect() {
  const router = useRouter();
  const { categories, toggleCategory } = useOnboardingFlow();

  return (
    <OnboardingLayout
      imageSrc="/category/category-image.jpg"
      imageAlt="Beauty products arranged for category selection."
      imagePriority
      imageClassName="object-contain md:object-cover"
    >
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
            What categories are you interested in?
          </h1>
          <p className="max-w-[34rem] text-[1rem] leading-7 text-[#4b3f38]">
            Choose the types of beauty products you want to sell. You can select
            more than one.
          </p>
        </div>

        <div className="space-y-4">
          {BEAUTY_CATEGORIES.map((category) => (
            <Checkbox
              key={category.id}
              id={category.id}
              label={category.label}
              checked={categories.includes(category.id)}
              onChange={() => toggleCategory(category.id)}
            />
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <Button href="/what-brings-you" variant="secondary">
            Back
          </Button>
          <Button
            onClick={() => {
              if (categories.length > 0) {
                router.push("/start-your-shop");
              }
            }}
            disabled={categories.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
