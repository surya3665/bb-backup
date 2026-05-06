type RadioIndicatorProps = {
  selected: boolean;
};

export function RadioIndicator({ selected }: RadioIndicatorProps) {
  return (
    <span
      aria-hidden="true"
      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
        selected ? "border-[#a33441]" : "border-[#c7c3bf]"
      }`}
    >
      <span
        className={`h-3 w-3 rounded-full bg-[#a33441] transition ${
          selected ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
    </span>
  );
}
