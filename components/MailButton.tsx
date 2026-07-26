function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}

/**
 * Timings are written as literal curves rather than var(--ease-icon)/
 * var(--ease-spring): with no `ease-icon` utility class left in the source,
 * Tailwind would tree-shake those theme variables out of the emitted CSS.
 * Values mirror --ease-icon and --ease-spring in design-tokens.css.
 *
 * The transitions target `translate`/`scale` (not `transform`) because
 * Tailwind v4's translate-x/-translate-y/scale utilities set those standalone
 * CSS properties — transitioning `transform` would leave them snapping.
 */
export function MailButton({
  email,
  onClick,
  className = "",
}: {
  email: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-pill bg-accent px-[22px] py-[9px] text-nav font-medium text-on-accent [transition:translate_0.25s_cubic-bezier(0.34,1.56,0.64,1),scale_0.25s_cubic-bezier(0.34,1.56,0.64,1),background_0.25s_ease] hover:bg-accent-hover hover:text-on-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] ${className}`}
    >
      <span className="absolute top-0 -left-6 flex h-full items-center opacity-0 [transition:left_0.35s_cubic-bezier(0.65,0,0.35,1),opacity_0.3s_ease] group-hover:left-4 group-hover:opacity-100">
        <MailIcon />
      </span>
      <span className="[transition:translate_0.35s_cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[9px]">
        Say hi
      </span>
      <span className="inline-flex items-center [transition:translate_0.35s_cubic-bezier(0.65,0,0.35,1),opacity_0.3s_ease] group-hover:translate-x-[22px] group-hover:opacity-0">
        <MailIcon />
      </span>
    </a>
  );
}
