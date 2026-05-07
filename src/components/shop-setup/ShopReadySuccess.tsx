import { Button } from "@/components/ui/Button";

import { ShopSetupLayout } from "./ShopSetupLayout";

export function ShopReadySuccess() {
  return (
    <ShopSetupLayout activeStep="ready" stepCaption="Your Shop is Ready">
      <div className="mx-auto max-w-[960px]">
        <div className="mx-auto max-w-[620px] rounded-[22px] border border-[#bfb8b2] px-7 py-8 text-center shadow-[0_16px_35px_rgba(34,25,22,0.05)] sm:px-8 sm:py-10">
          <div className="mx-auto mb-5 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#45b34a] text-white">
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

          <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#17110f]">
            Your Shop is Ready!
          </h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[1rem] leading-7 text-[#6c645d]">
            Your BeautyBarn store is now live and ready for customers. Start
            adding your products and grow your business.
          </p>

          <div className="mt-7 flex justify-center">
            <Button
              href="/welcome"
              className="h-[45px] w-full px-0 py-0 text-[14px] leading-[18px] sm:w-[180px]"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </ShopSetupLayout>
  );
}
