import { useShopSetupStepper } from "@/lib/hooks/useShopSetupStepper";
import type { ShopSetupStepId } from "@/lib/types/shop-setup.types";

type ShopSetupStepperProps = {
  activeStep: ShopSetupStepId;
};

export function ShopSetupStepper({ activeStep }: ShopSetupStepperProps) {
  const steps = useShopSetupStepper(activeStep);

  return (
    <div className="mx-auto max-w-[1080px]">
      <div className="relative flex justify-between gap-4">
        <span
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-black"
        />

        {steps.map((step) => (
          <div
            key={step.id}
            className="relative z-10 flex min-w-0 flex-1 flex-col items-center text-center"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                step.status === "current"
                  ? "border-black bg-black text-white"
                  : "border-black bg-white text-black"
              }`}
            >
              {step.status === "completed" ? (
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="h-4 w-4"
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
            <span className="mt-4 text-[0.95rem] font-medium text-[#17110f]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
