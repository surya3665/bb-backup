import type { ReactNode } from "react";

import { SplitImagePanel } from "./SplitImagePanel";

type OnboardingLayoutProps = {
  imageSrc: string;
  imageAlt: string;
  imagePriority?: boolean;
  imageClassName?: string;
  children: ReactNode;
};

export function OnboardingLayout({
  imageSrc,
  imageAlt,
  imagePriority = false,
  imageClassName,
  children,
}: OnboardingLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-white lg:grid lg:grid-cols-2">
        <SplitImagePanel
          src={imageSrc}
          alt={imageAlt}
          priority={imagePriority}
          className={imageClassName}
        />

        <section className="flex items-center justify-center bg-white p-8 sm:p-10 lg:p-16 xl:p-[72px]">
          <div className="w-full max-w-[520px]">{children}</div>
        </section>
      </div>
    </main>
  );
}
