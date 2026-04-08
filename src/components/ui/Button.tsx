"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const base =
  "inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold rounded-[4px] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-laterite)] cursor-pointer";

const variants = {
  primary:
    "bg-[var(--color-laterite)] text-[var(--color-parchment)] hover:opacity-90 active:scale-[0.98]",
  secondary:
    "bg-transparent text-[var(--color-laterite)] border border-[var(--color-laterite)] hover:bg-[rgba(196,97,60,0.1)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--color-haze)] hover:text-[var(--color-parchment)] active:scale-[0.98]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as LinkProps;
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
