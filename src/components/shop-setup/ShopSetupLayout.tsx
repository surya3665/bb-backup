import type { ReactNode } from "react";

import { ShopSetupStepper } from "./ShopSetupStepper";
import type { ShopSetupStepId } from "@/lib/types/shop-setup.types";

type ShopSetupLayoutProps = {
  children: ReactNode;
  activeStep: ShopSetupStepId;
  stepCaption: string;
};

function BrandMark() {
  return (
    <div className="leading-none text-[#a33441]">
      <div className="font-serif text-[2.35rem] tracking-[-0.08em] sm:text-[2.7rem]">
        Beauty
      </div>
      <div className="-mt-2 font-serif text-[2.35rem] tracking-[-0.08em] sm:text-[2.7rem]">
        Barn
      </div>
    </div>
  );
}

export function ShopSetupLayout({
  children,
  activeStep,
  stepCaption,
}: ShopSetupLayoutProps) {
  return (
    <main className="min-h-screen bg-white lg:h-screen lg:overflow-hidden">
      <header className="border-b border-[#ded8d3] px-6 py-5 sm:px-10 sm:py-6 lg:px-14 lg:py-5">
        <BrandMark />
      </header>

      <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-14 lg:py-5">
        <p className="mb-4 text-sm text-[#6e645c]">{stepCaption}</p>
        <div className="mx-auto max-w-[1380px]">
          <ShopSetupStepper activeStep={activeStep} />
        </div>
        <div className="pt-8 sm:pt-10 lg:pt-9">{children}</div>
      </div>
    </main>
  );
}
