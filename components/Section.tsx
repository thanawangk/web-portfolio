/** Page-width section wrapper matching max-width + fluid padding. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-(--page-max-width) px-(--page-pad-x) pt-(--section-pad-y) pb-5 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2.5 font-mono text-label text-accent">{children}</p>;
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-h2 font-bold tracking-heading ${className}`}>
      {children}
    </h2>
  );
}
