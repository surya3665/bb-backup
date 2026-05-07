"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useShopNameCheck } from "@/lib/hooks/useShopNameCheck";

import { ShopSetupLayout } from "./ShopSetupLayout";

export function NameYourShopStep() {
  const router = useRouter();
  const [shopName, setShopName] = useState("");
  const { isLengthValid, isFormatValid, isAvailable, isValid } =
    useShopNameCheck(shopName);

  return (
    <ShopSetupLayout activeStep="name" stepCaption="Shop Setup">
      <div className="mx-auto flex max-w-[880px] flex-col items-center space-y-10 text-center">
        <div className="space-y-3">
          <h1 className="text-[25px] font-semibold tracking-[-0.03em] text-[#17110f]">
            Name your Shop
          </h1>
          <p className="max-w-[720px] text-[1.1rem] leading-8 text-[#352f2b]">
            Don&apos;t worry - you can always change your store name later.
            Choose a name that reflects your beauty brand and style.
          </p>
        </div>

        <div className="w-full max-w-[560px] space-y-4">
          <Input
            value={shopName}
            onChange={(event) => setShopName(event.target.value)}
            placeholder="Name Of Your Shop"
            className="h-[52px] text-lg"
          />

          <div className="space-y-2 text-left text-[0.95rem] text-[#928a83]">
            <p className="flex items-center gap-2">
              <CheckMark />
              <span
                className={isLengthValid ? "text-[#4a4a4a]" : undefined}
              >
                Between 4-20 characters
              </span>
            </p>
            <p className="flex items-center gap-2">
              <CheckMark />
              <span
                className={isFormatValid ? "text-[#4a4a4a]" : undefined}
              >
                No special characters, spaces, or accented letters
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`text-base leading-none ${
                  isAvailable ? "text-[#4a4a4a]" : "text-[#bfb8b2]"
                }`}
              >
                ♥
              </span>
              <span className={isAvailable ? "text-[#4a4a4a]" : undefined}>
                Great choice! This name is available
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="h-[46px] w-full px-0 py-0 text-[15px] leading-[18px] sm:w-[338px]"
            disabled={!isValid}
            onClick={() => {
              if (isValid) {
                router.push("/shop-setup/add-bank-account");
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

function CheckMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4 text-[#4a4a4a]"
      fill="none"
    >
      <path
        d="M3 8.5 6.2 11.5 13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
