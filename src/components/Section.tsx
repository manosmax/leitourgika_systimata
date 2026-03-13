interface SectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ label, title, children }: SectionProps) {
  return (
    <section className="mb-14 border-b border-(--border) pb-12 last:border-none">
      <div className="mb-2 font-mono text-[0.66rem] uppercase tracking-widest text-(--faint)">
        {label}
      </div>
      <h2 className="mb-4 text-2xl font-light">{title}</h2>
      {children}
    </section>
  );
}