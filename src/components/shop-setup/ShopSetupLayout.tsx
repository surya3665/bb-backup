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
      <div className="font-serif text-[1.4rem] tracking-[-0.08em] sm:text-[1.55rem]">
        Beauty
      </div>
      <div className="-mt-1.5 font-serif text-[1.4rem] tracking-[-0.08em] sm:text-[1.55rem]">
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
    <main className="flex min-h-dvh flex-col overflow-y-auto bg-white lg:h-dvh lg:overflow-hidden">
      <header className="shrink-0 border-b border-[#ded8d3] px-6 py-2 sm:px-10 lg:px-14">
        <BrandMark />
      </header>

      <div className="flex min-h-0 flex-1 flex-col px-5 py-5 sm:px-8 sm:py-6 lg:px-14">
        <p className="sr-only">{stepCaption}</p>
        <div className="w-full shrink-0">
          <ShopSetupStepper activeStep={activeStep} />
        </div>
        <div className="min-h-0 flex-1 pt-8 pb-8 sm:pt-9 sm:pb-10 lg:pt-10 lg:pb-0">
          {children}
        </div>
      </div>
    </main>
  );
}
