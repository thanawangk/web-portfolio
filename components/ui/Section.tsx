import { cn } from "@/lib/cn";
import type { SectionHeadingProps, SectionProps } from "@/types/ui.types";

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-(--page-max-width) px-5 py-11 pb-8 md:px-8 md:py-14 lg:px-12 lg:py-16",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2.5 font-mono text-label text-accent">{children}</p>;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-h2 font-bold tracking-heading md:text-h2-md lg:text-h2-lg",
        className,
      )}
    >
      {children}
    </h2>
  );
}
