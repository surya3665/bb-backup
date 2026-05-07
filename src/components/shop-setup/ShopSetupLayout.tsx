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
    <main className="flex h-dvh flex-col overflow-hidden bg-white">
      <header className="shrink-0 border-b border-[#ded8d3] px-6 py-4 sm:px-10 sm:py-5 lg:px-14 lg:py-4">
        <BrandMark />
      </header>

      <div className="flex min-h-0 flex-1 flex-col px-5 py-4 sm:px-8 sm:py-5 lg:px-14 lg:py-4">
        <p className="mb-3 shrink-0 text-sm text-[#6e645c]">{stepCaption}</p>
        <div className="mx-auto max-w-[1380px]">
          <ShopSetupStepper activeStep={activeStep} />
        </div>
        <div className="min-h-0 flex-1 pt-5 sm:pt-6 lg:pt-6">{children}</div>
      </div>
    </main>
  );
}
