/** Page-width section wrapper matching max-width + responsive gutters. */
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
      className={`mx-auto max-w-(--page-max-width) px-5 py-11 pb-8 md:px-8 md:py-14 lg:px-12 lg:py-16 ${className}`}
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
    <h2
      className={`text-h2 font-bold tracking-heading md:text-h2-md lg:text-h2-lg ${className}`}
    >
      {children}
    </h2>
  );
}
