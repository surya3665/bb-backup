type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

export function Checkbox({ id, label, checked, onChange }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-4 rounded-[18px] border px-4 py-3 transition ${
        checked
          ? "border-[#a33441] bg-[#fcf4f5] shadow-[0_14px_30px_rgba(163,52,65,0.08)]"
          : "border-transparent hover:border-[#ead9da] hover:bg-[#fdfafa]"
      }`}
    >
      <span className="relative mt-0.5 flex items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer h-[25px] w-[25px] cursor-pointer appearance-none rounded-full border border-[#c7c3bf] bg-white transition checked:border-[#a33441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a33441]"
        />
        <span className="pointer-events-none absolute h-[11px] w-[11px] scale-0 rounded-full bg-[#a33441] opacity-0 transition peer-checked:scale-100 peer-checked:opacity-100" />
      </span>
      <span className="text-[14px] leading-6 text-[#221916]">{label}</span>
    </label>
  );
}
