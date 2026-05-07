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
  const [country, setCountry] = useState<(typeof COUNTRIES)[number]>("India");
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>("INR");

  return (
    <ShopSetupLayout activeStep="preferences" stepCaption="Shop Setup">
      <div className="mx-auto max-w-[1060px] space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-[25px] font-semibold tracking-[-0.03em] text-[#17110f]">
            Shop preferences
          </h1>
          <p className="text-[1.1rem] text-[#352f2b]">
            Let&apos;s get started! Tell us about you and your beauty store.
          </p>
        </div>

        <div className="rounded-[18px] border border-[#d8d1cc] px-6 py-7 sm:px-10 sm:py-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.95fr]">
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
                <label
                  htmlFor="shop-country"
                  className="text-lg font-medium text-[#17110f]"
                >
                  Shop country*
                </label>
                <Select
                  id="shop-country"
                  value={country}
                  onChange={(event) =>
                    setCountry(event.target.value as (typeof COUNTRIES)[number])
                  }
                >
                  {COUNTRIES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
                <label
                  htmlFor="shop-currency"
                  className="text-lg font-medium text-[#17110f]"
                >
                  Shop currency*
                </label>
                <Select
                  id="shop-currency"
                  value={currency}
                  onChange={(event) =>
                    setCurrency(event.target.value as (typeof CURRENCIES)[number])
                  }
                >
                  {CURRENCIES.map((option) => (
                    <option key={option} value={option}>
                      {currencyLabels[option]}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-4 text-[0.95rem] leading-7 text-[#7d746d]">
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

        <div className="flex justify-center">
          <Button
            className="h-[46px] w-full px-0 py-0 text-[15px] leading-[18px] sm:w-[338px]"
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
