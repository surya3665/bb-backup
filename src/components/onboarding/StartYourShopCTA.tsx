import { Button } from "@/components/ui/Button";

import { OnboardingLayout } from "./OnboardingLayout";

export function StartYourShopCTA() {
  return (
    <OnboardingLayout
      imageSrc="/shop/shop-setup.jpg"
      imageAlt="Beauty store setup products arranged on a table."
      imagePriority
    >
      <div className="space-y-6">
        <Button href="/categories" variant="secondary">
          Back
        </Button>

        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
            Now let&apos;s bring your beauty store to life ✨
          </h1>
          <p className="max-w-[34rem] text-[1rem] leading-7 text-[#4b3f38]">
            We&apos;ll guide you through creating your store and adding your
            products so you can start selling with confidence.
          </p>
        </div>

        <Button href="/shop-setup">Start Your Shop</Button>
      </div>
    </OnboardingLayout>
  );
}
