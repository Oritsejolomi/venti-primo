type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`font-[family-name:var(--font-data)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-aso-oke)] mb-4 ${className}`}
    >
      {children}
    </p>
  );
}
