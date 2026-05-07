import { Check } from "lucide-react";

import { useShopSetupStepper } from "@/lib/hooks/useShopSetupStepper";
import type { ShopSetupStepId } from "@/lib/types/shop-setup.types";

type ShopSetupStepperProps = {
  activeStep: ShopSetupStepId;
};

export function ShopSetupStepper({ activeStep }: ShopSetupStepperProps) {
  const steps = useShopSetupStepper(activeStep);
  const currentStep = steps.find((step) => step.status === "current");

  return (
    <nav aria-label="Shop setup progress" className="w-full py-2">
      <div className="mx-auto w-full max-w-[720px] px-3 sm:px-0">
        <div className="relative flex items-center justify-between">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 z-0 h-px w-full -translate-y-1/2 bg-black"
          />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center"
            >
              <span
                aria-current={step.status === "current" ? "step" : undefined}
                className={`flex h-5 w-5 items-center justify-center rounded-full border border-black transition-colors ${
                  step.status === "current"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {step.status === "completed" ? (
                  <Check
                    aria-hidden="true"
                    className="h-3 w-3 text-black"
                    strokeWidth={1.8}
                  />
                ) : null}
              </span>
              <span className="absolute top-8 hidden max-w-none whitespace-nowrap text-center text-[10px] font-medium leading-tight text-[#17110f] sm:block md:text-[11px]">
                {step.label}
              </span>
            </div>
          ))}
        </div>
        {currentStep ? (
          <div className="mt-3 text-center text-[10px] font-medium leading-tight text-[#17110f] sm:hidden">
            {currentStep.label}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
