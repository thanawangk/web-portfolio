/** Bordered side panel ("currently…" / "at a glance") */
export function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-panel border-[1.5px] border-surface-alt px-6 py-[22px] ${className}`}
    >
      <div className="mb-3 -rotate-[1.5deg] font-hand text-2xl text-accent">
        {title}
      </div>
      {children}
    </div>
  );
}

export function PanelList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-2.5 font-mono text-[13.5px] leading-[1.5] text-text-muted">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
