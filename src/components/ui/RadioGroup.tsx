import type { OnboardingOption } from "@/lib/types/onboarding.types";

type RadioGroupProps = {
  name: string;
  value: string | null;
  options: OnboardingOption[];
  onChange: (value: OnboardingOption["id"]) => void;
};

export function RadioGroup({
  name,
  value,
  options,
  onChange,
}: RadioGroupProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="sr-only">{name}</legend>

      {options.map((option) => {
        const isSelected = value === option.id;

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
              name={name}
              value={option.id}
              checked={isSelected}
              onChange={() => onChange(option.id)}
              className="sr-only"
            />

            <span
              aria-hidden="true"
              className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                isSelected ? "border-[#a33441]" : "border-[#c7c3bf]"
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full bg-[#a33441] transition ${
                  isSelected ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
            </span>

            <span className="text-[1.02rem] leading-7 text-[#221916]">
              {option.label}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}
