import { Button } from "@/components/ui/Button";
import { ONBOARDING_STEPS } from "@/lib/constants/onboarding-steps";

import { OnboardingLayout } from "./OnboardingLayout";

export function WelcomeScreen() {
  return (
    <OnboardingLayout
      imageSrc="/welcome.png"
      imageAlt="Applying skincare product from a pump bottle."
      imagePriority
    >
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-display)] text-[25px] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
            Welcome to BeautyBarn !
          </h1>
          <p className="max-w-[34rem] text-[14px] leading-6 text-[#4b3f38]">
            We&apos;re excited to have you here, your space to showcase
            skincare and beauty products that customers will love. Let&apos;s get
            your store ready to shine{" "}
            <span role="img" aria-label="sparkles">
              ✨
            </span>
          </p>
        </div>

        <ol className="space-y-8">
          {ONBOARDING_STEPS.map((step, index) => {
            const isLastStep = index === ONBOARDING_STEPS.length - 1;

            return (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-6">
                <div className="relative flex justify-center">
                  {!isLastStep ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-[10px] h-[calc(100%+2rem)] w-[2px] -translate-x-1/2 bg-[#b03a48]"
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-0.5 block h-5 w-5 rounded-full bg-[#a33441]"
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[#17110f]">
                    {step.title}
                  </h2>
                  <p className="max-w-[30rem] text-[14px] leading-6 text-[#4b3f38]">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="space-y-4 pt-2">
          <Button
            href="/what-brings-you"
            fullWidth
            className="h-[46px] max-w-[392px] px-0 py-0 text-[15px] leading-[18px]"
          >
            Let&apos;s do this!
          </Button>
          <p className="text-[14px] leading-6 text-[#4b3f38]">
            By clicking, you agree to our{" "}
            <span className="font-medium text-[#17110f]">Terms and Policies</span>
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
}
//hi