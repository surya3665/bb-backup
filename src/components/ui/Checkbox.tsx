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
      className="flex cursor-pointer items-center gap-4 rounded-[18px] border border-transparent px-4 py-4 transition hover:border-[#ead9da] hover:bg-[#fdfafa]"
    >
      <span className="relative flex items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-[#c7c3bf] bg-white transition checked:border-[#a33441] checked:bg-[#a33441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a33441]"
        />
        <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-white opacity-0 transition peer-checked:opacity-100" />
      </span>
      <span className="text-[1.02rem] leading-7 text-[#221916]">{label}</span>
    </label>
  );
}
