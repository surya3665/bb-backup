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
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-display)] text-[25px] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
            What categories are you interested in?
          </h1>
          <p className="max-w-[34rem] text-[14px] leading-6 text-[#4b3f38]">
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
          <Button
            href="/what-brings-you"
            variant="secondary"
            className="h-[36px] min-w-[72px] px-4 py-0 text-[15px] leading-[18px]"
          >
            Back
          </Button>
          <Button
            className="h-[36px] w-[72px] px-0 py-0 text-[15px] leading-[18px]"
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
