"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { COUNTRIES, CURRENCIES } from "@/lib/constants/currencies-countries";
import { ShopSetupLayout } from "./ShopSetupLayout";

const currencyLabels: Record<(typeof CURRENCIES)[number], string> = {
  USD: "$ US Dollar",
  EUR: "€ Euro",
  GBP: "£ British Pound",
  INR: "₹ Indian Rupee",
};

export function ShopPreferencesStep() {
  const router = useRouter();
  const [country, setCountry] = useState<(typeof COUNTRIES)[number] | "">("");
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number] | "">("");

  return (
    <ShopSetupLayout activeStep="preferences" stepCaption="Shop Setup">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col gap-5 lg:h-full lg:justify-center">
        <div className="space-y-1.5 text-center">
          <h1 className="text-[23px] font-semibold tracking-[-0.03em] text-[#17110f] sm:text-[25px]">
            Shop preferences
          </h1>
          <p className="mx-auto max-w-[520px] text-[0.98rem] leading-6 text-[#352f2b] sm:text-[1.05rem]">
            Let&apos;s get started! Tell us about you and your beauty store.
          </p>
        </div>

        <div className="rounded-[18px] border border-[#d8d1cc] px-4 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.95fr] lg:gap-7">
            <div className="space-y-5 sm:space-y-6">
              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-4">
                <label
                  htmlFor="shop-country"
                  className="text-base font-medium text-[#17110f] sm:text-lg"
                >
                  Shop country*
                </label>
                <Select
                  id="shop-country"
                  value={country}
                  onChange={(event) =>
                    setCountry(event.target.value as (typeof COUNTRIES)[number] | "")
                  }
                  className={country ? "" : "text-[#928a83]"}
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {COUNTRIES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-4">
                <label
                  htmlFor="shop-currency"
                  className="text-base font-medium text-[#17110f] sm:text-lg"
                >
                  Shop currency*
                </label>
                <Select
                  id="shop-currency"
                  value={currency}
                  onChange={(event) =>
                    setCurrency(event.target.value as (typeof CURRENCIES)[number] | "")
                  }
                  className={currency ? "" : "text-[#928a83]"}
                >
                  <option value="" disabled>
                    Select currency
                  </option>
                  {CURRENCIES.map((option) => (
                    <option key={option} value={option}>
                      {currencyLabels[option]}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-3 text-[0.9rem] leading-6 text-[#7d746d] sm:text-[0.95rem]">
              <p>
                This is the default language you&apos;ll use to describe your
                products. Choose carefully - you can update it later if needed.
              </p>
              <p>
                Tell us where your store is based. This helps us provide the
                right experience for your region.
              </p>
              <p>
                Your store currency is used for pricing your products.
                Customers will see prices in their local currency where
                applicable.
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-center">
          <Button
            className="h-[46px] w-full px-0 py-0 text-[15px] leading-[18px] sm:w-[338px]"
            disabled={!country || !currency}
            onClick={() => {
              if (country && currency) {
                router.push("/shop-setup/name-your-shop");
              }
            }}
          >
            Save &amp; Continue
          </Button>
        </div>
      </div>
    </ShopSetupLayout>
  );
}
