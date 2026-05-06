import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={`h-12 w-full rounded-[14px] border border-[#d8d1cc] bg-white px-4 text-base text-[#17110f] outline-none transition focus:border-[#a33441] ${className ?? ""}`}
      {...props}
    >
      {children}
    </select>
  );
}
