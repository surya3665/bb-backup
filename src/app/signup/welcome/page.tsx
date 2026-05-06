import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/common/page-intro";
import { WHAT_BRINGS_YOU_ROUTE } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Welcome",
};

const steps = [
  {
    title: "Personalize your beauty store",
    description:
      "We'll guide you through setting up your brand, from store details to product listings.",
  },
  {
    title: "Tell us about your brand",
    description:
      "Share a few details about your store and set up secure payments.",
  },
  {
    title: "Set up your store essentials",
    description:
      "Add your products, pricing, and delivery preferences to start selling with confidence.",
  },
  {
    title: "Start your journey",
    description:
      "Reach customers and grow your beauty business with BeautyBarn.",
  },
] as const;

export default function WelcomePage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-white lg:grid lg:grid-cols-2">
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/welcome.png"
            alt="Applying skincare product from a pump bottle."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <section className="flex items-center justify-center bg-white p-8 sm:p-10 lg:p-16 xl:p-[72px]">
          <div className="w-full max-w-[520px] space-y-10">
            <PageIntro
              title="Welcome to BeautyBarn !"
              description={
                <>
                  We&apos;re excited to have you here, your space to showcase
                  skincare and beauty products that customers will love.
                  Let&apos;s get your store ready to shine{" "}
                  <span role="img" aria-label="sparkles">
                    ✨
                  </span>
                </>
              }
            />

            <ol className="space-y-8">
              {steps.map((step, index) => {
                const isLastStep = index === steps.length - 1;

                return (
                  <li
                    key={step.title}
                    className="grid grid-cols-[3rem_1fr] gap-6"
                  >
                    <div className="relative flex justify-center">
                      {!isLastStep ? (
                        <span
                          aria-hidden="true"
                          className="absolute left-1/2 top-5 h-[calc(100%+2rem)] w-[2px] -translate-x-1/2 bg-[#b03a48]"
                        />
                      ) : null}

                      <span
                        aria-hidden="true"
                        className="relative z-10 mt-0.5 block h-10 w-10 rounded-full bg-[#a33441]"
                      />
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#17110f]">
                        {step.title}
                      </h2>
                      <p className="max-w-[30rem] text-[0.98rem] leading-7 text-[#4b3f38]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="space-y-4 pt-2">
              <Link
                href={WHAT_BRINGS_YOU_ROUTE}
                className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#a33441] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(163,52,65,0.24)] transition hover:bg-[#8e2c37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a33441] focus-visible:ring-offset-2"
              >
                Let&apos;s do this!
              </Link>
              <p className="text-[0.98rem] leading-6 text-[#4b3f38]">
                By clicking, you agree to our{" "}
                <span className="font-medium text-[#17110f]">
                  Terms and Policies
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
