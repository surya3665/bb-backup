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
      <div className="font-serif text-[3rem] tracking-[-0.08em]">Beauty</div>
      <div className="-mt-2 font-serif text-[3rem] tracking-[-0.08em]">Barn</div>
    </div>
  );
}

export function ShopSetupLayout({
  children,
  activeStep,
  stepCaption,
}: ShopSetupLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-[#ded8d3] px-8 py-8 sm:px-12 lg:px-16">
        <BrandMark />
      </header>

      <div className="px-6 py-8 sm:px-10 lg:px-16 lg:py-10">
        <p className="mb-6 text-sm text-[#6e645c]">{stepCaption}</p>
        <div className="mx-auto max-w-[1380px]">
          <ShopSetupStepper activeStep={activeStep} />
        </div>
        <div className="pt-12 sm:pt-16">{children}</div>
      </div>
    </main>
  );
}
