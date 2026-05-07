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
    <main className="min-h-screen w-full bg-white lg:h-screen lg:overflow-hidden">
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-white lg:h-screen lg:grid lg:grid-cols-2">
        <SplitImagePanel
          src={imageSrc}
          alt={imageAlt}
          priority={imagePriority}
          className={imageClassName}
        />

        <section className="flex items-center justify-center bg-white px-8 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-8 xl:px-14 xl:py-10">
          <div className="w-full max-w-[520px]">{children}</div>
        </section>
      </div>
    </main>
  );
}
