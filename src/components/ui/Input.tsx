import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`h-12 w-full rounded-[14px] border border-[#d8d1cc] bg-white px-4 text-base text-[#17110f] outline-none transition focus:border-[#a33441] ${className ?? ""}`}
      {...props}
    />
  );
}
