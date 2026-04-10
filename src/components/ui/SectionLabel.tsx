type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`font-[family-name:var(--font-data)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-cobalt)] font-medium mb-8 ${className}`}
    >
      {children}
    </p>
  );
}
