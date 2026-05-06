import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  variant?: ButtonVariant;
};

type LinkButtonProps = ButtonBaseProps & {
  href: string;
};

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buttonVariants({
  variant = "primary",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-[14px] px-6 py-4 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    fullWidth && "w-full",
    variant === "primary" &&
      "bg-[#a33441] text-white shadow-[0_14px_30px_rgba(163,52,65,0.24)] hover:bg-[#8e2c37] focus-visible:ring-[#a33441]",
    variant === "secondary" &&
      "border border-[#d8d1cc] bg-white text-[#17110f] hover:bg-[#faf7f5] focus-visible:ring-[#a33441]",
    className
  );
}

export function Button(props: NativeButtonProps | LinkButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const { href, children, className, fullWidth, variant } = props;

    return (
      <Link
        href={href}
        className={buttonVariants({ variant, fullWidth, className })}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    fullWidth,
    variant,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={buttonVariants({ variant, fullWidth, className })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
