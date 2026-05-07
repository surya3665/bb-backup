import Link from "next/link";

import { Button } from "@/components/ui/Button";

import { OnboardingLayout } from "./OnboardingLayout";

export function StartYourShopCTA() {
  return (
    <OnboardingLayout
      imageSrc="/shop/shop-setup.jpg"
      imageAlt="Beauty store setup products arranged on a table."
      imagePriority
    >
      <div className="space-y-5">
        <Link
          href="/categories"
          className="inline-flex w-fit text-[20px] font-medium leading-none text-[#17110f]"
        >
          ← Back
        </Link>

        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-display)] text-[20px] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
            Now let&apos;s bring your beauty store to life ✨
          </h1>
          <p className="max-w-[34rem] text-[14px] leading-6 text-[#4b3f38]">
            We&apos;ll guide you through creating your store and adding your
            products so you can start selling with confidence.
          </p>
        </div>

        <Button
          href="/shop-setup"
          className="h-[36.22px] w-[158.05px] px-0 py-0 text-[15px] leading-[18px]"
        >
          Start Your Shop
        </Button>
      </div>
    </OnboardingLayout>
  );
}
