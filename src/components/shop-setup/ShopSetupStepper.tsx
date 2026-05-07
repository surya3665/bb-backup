import { useShopSetupStepper } from "@/lib/hooks/useShopSetupStepper";
import type { ShopSetupStepId } from "@/lib/types/shop-setup.types";

type ShopSetupStepperProps = {
  activeStep: ShopSetupStepId;
};

export function ShopSetupStepper({ activeStep }: ShopSetupStepperProps) {
  const steps = useShopSetupStepper(activeStep);

  return (
    <div className="mx-auto max-w-[1080px] px-1 sm:px-0">
      <div className="relative flex justify-between gap-1 sm:gap-3 md:gap-4">
        <span
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-[9px] h-px bg-black sm:top-[11px] md:top-[13px] lg:top-[15px]"
        />

        {steps.map((step) => (
          <div
            key={step.id}
            className="relative z-10 flex min-w-0 flex-1 flex-col items-center text-center"
          >
            <span
              className={`flex h-[18px] w-[18px] items-center justify-center rounded-full border sm:h-[22px] sm:w-[22px] md:h-[26px] md:w-[26px] lg:h-[30px] lg:w-[30px] ${
                step.status === "current"
                  ? "border-black bg-black text-white"
                  : "border-black bg-white text-black"
              }`}
            >
              {step.status === "completed" ? (
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="h-[9px] w-[9px] sm:h-[11px] sm:w-[11px] md:h-[13px] md:w-[13px] lg:h-[15px] lg:w-[15px]"
                  fill="none"
                >
                  <path
                    d="M3 8.5 6.2 11.5 13 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </span>
            <span className="mt-2 max-w-[82px] text-[9px] font-medium leading-[1.2] text-[#17110f] sm:mt-3 sm:max-w-[100px] sm:text-[11px] md:max-w-[120px] md:text-[12px] lg:mt-4 lg:max-w-none lg:text-[14px]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
