"use client";

import { RadioIndicator } from "@/components/ui/radio-indicator";
import { useOptionSelection } from "@/hooks/use-option-selection";
import { WHAT_BRINGS_YOU_OPTIONS } from "@/lib/constants/signup";

export function WhatBringsYouForm() {
  const { selectedOption, setSelectedOption } = useOptionSelection();

  return (
    <div className="space-y-10">
      <fieldset className="space-y-4">
        <legend className="sr-only">Choose what brings you to BeautyBarn</legend>

        {WHAT_BRINGS_YOU_OPTIONS.map((option) => {
          const isSelected = selectedOption === option.id;

          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-start gap-4 rounded-[18px] border px-4 py-4 transition ${
                isSelected
                  ? "border-[#a33441] bg-[#fcf4f5] shadow-[0_14px_30px_rgba(163,52,65,0.08)]"
                  : "border-transparent hover:border-[#ead9da] hover:bg-[#fdfafa]"
              }`}
            >
              <input
                type="radio"
                name="journey"
                value={option.id}
                checked={isSelected}
                onChange={() => setSelectedOption(option.id)}
                className="sr-only"
              />

              <RadioIndicator selected={isSelected} />

              <span className="text-[1.02rem] leading-7 text-[#221916]">
                {option.label}
              </span>
            </label>
          );
        })}
      </fieldset>

      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex min-w-[104px] items-center justify-center rounded-[14px] bg-[#a33441] px-8 py-3 text-base font-semibold text-white shadow-[0_14px_30px_rgba(163,52,65,0.24)] transition hover:bg-[#8e2c37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a33441] focus-visible:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
