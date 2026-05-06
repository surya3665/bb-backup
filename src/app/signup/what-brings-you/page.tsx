import type { Metadata } from "next";
import Image from "next/image";

import { PageIntro } from "@/components/common/page-intro";
import { WhatBringsYouForm } from "@/components/form/what-brings-you-form";

export const metadata: Metadata = {
  title: "What Brings You Here",
};

export default function WhatBringsYouPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-white lg:grid lg:grid-cols-2">
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/what bring you here.jpg"
            alt="A makeup brush creating a dramatic cloud of powder."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[33%_center]"
          />
        </div>

        <section className="flex items-center justify-center bg-white p-8 sm:p-10 lg:p-16 xl:p-[72px]">
          <div className="w-full max-w-[520px] space-y-10">
            <PageIntro
              title="What brings you to BeautyBarn?"
              description="We'll guide you every step of the way, whether you're just starting or already selling beauty products."
            />

            <WhatBringsYouForm />
          </div>
        </section>
      </div>
    </main>
  );
}
