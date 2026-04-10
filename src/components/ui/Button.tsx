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
  "inline-flex items-center justify-center font-[family-name:var(--font-body)] font-medium rounded-full transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cobalt)] cursor-pointer tracking-[0.04em] whitespace-nowrap";

const variants = {
  primary:
    "bg-[var(--color-cobalt)] text-[var(--color-parchment)] hover:bg-[var(--color-cobalt-dark)] active:scale-[0.98]",
  secondary:
    "bg-transparent text-[var(--color-parchment)] border border-[rgba(240,235,227,0.35)] hover:border-[var(--color-parchment)] hover:bg-[rgba(240,235,227,0.06)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--color-haze)] hover:text-[var(--color-parchment)] active:scale-[0.98]",
};

const sizes = {
  sm:  "px-5 py-2.5 text-[13px]",
  md:  "px-7 py-3.5 text-[15px]",
  lg:  "px-10 py-4 text-[16px]",
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
