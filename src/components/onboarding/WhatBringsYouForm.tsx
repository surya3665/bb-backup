"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { ONBOARDING_REASON_OPTIONS } from "@/lib/constants/onboarding-steps";
import { useOnboardingFlow } from "@/lib/hooks/useOnboardingFlow";

import { OnboardingLayout } from "./OnboardingLayout";

export function WhatBringsYouForm() {
  const router = useRouter();
  const { reason, setReason } = useOnboardingFlow();

  return (
    <OnboardingLayout
      imageSrc="/what bring you here.jpg"
      imageAlt="A makeup brush creating a dramatic cloud of powder."
      imageClassName="object-[33%_center]"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-display)] text-[25px] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
            What brings you to BeautyBarn?
          </h1>
          <p className="max-w-[34rem] text-[14px] leading-6 text-[#4b3f38]">
            We&apos;ll guide you every step of the way, whether you&apos;re just
            starting or already selling beauty products.
          </p>
        </div>

        <RadioGroup
          name="onboarding-reason"
          value={reason}
          options={ONBOARDING_REASON_OPTIONS}
          onChange={setReason}
        />

        <div className="flex justify-end pt-1">
          <Button
            className="h-[36px] w-[72px] px-0 py-0 text-[15px] leading-[18px]"
            onClick={() => {
              if (reason) {
                router.push("/categories");
              }
            }}
            disabled={!reason}
          >
            Next
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
