import type { ReactNode } from "react";

type PageIntroProps = {
  title: string;
  description: ReactNode;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <div className="space-y-4">
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,3.15rem)] font-semibold leading-tight tracking-[-0.03em] text-[#120c0a]">
        {title}
      </h1>
      <p className="max-w-[34rem] text-[1rem] leading-7 text-[#4b3f38]">
        {description}
      </p>
    </div>
  );
}
