import { Button } from "@/components/ui/Button";

import { ShopSetupLayout } from "./ShopSetupLayout";

export function ShopReadySuccess() {
  return (
    <ShopSetupLayout activeStep="ready" stepCaption="Your Shop is Ready">
      <div className="mx-auto max-w-[960px]">
        <div className="mx-auto max-w-[620px] rounded-[22px] border border-[#bfb8b2] px-8 py-10 text-center shadow-[0_16px_35px_rgba(34,25,22,0.05)]">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#45b34a] text-white">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-10 w-10"
              fill="none"
            >
              <path
                d="M5 12.5 10 17.5 19 7.5"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-[#17110f]">
            Your Shop is Ready!
          </h1>
          <p className="mx-auto mt-5 max-w-[420px] text-[1.05rem] leading-8 text-[#6c645d]">
            Your BeautyBarn store is now live and ready for customers. Start
            adding your products and grow your business.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/welcome" className="w-full sm:w-[220px]">
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </ShopSetupLayout>
  );
}
