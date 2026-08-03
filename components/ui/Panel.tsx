import { cn } from "@/lib/cn";
import type { PanelListProps, PanelProps } from "@/types/ui.types";

// Bordered side panel ("currently…")
export function Panel({ title, children, className }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-panel border-[1.5px] border-surface-alt px-6 py-[22px]",
        className,
      )}
    >
      <h3 className="mb-3 -rotate-[1.5deg] font-hand text-2xl font-normal text-accent">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function PanelList({ items }: PanelListProps) {
  return (
    <ul className="flex list-none flex-col gap-2.5 p-0 font-mono text-[13.5px] leading-[1.5] text-text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
