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
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-pill bg-accent px-[22px] py-[9px] text-nav font-medium text-on-accent transition-[transform,background] duration-fast ease-spring hover:bg-accent-hover hover:text-on-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] ${className}`}
    >
      <span className="absolute top-0 -left-6 flex h-full items-center opacity-0 transition-[left,opacity] duration-[0.35s] ease-icon group-hover:left-4 group-hover:opacity-100">
        <MailIcon />
      </span>
      <span className="transition-transform duration-[0.35s] ease-icon group-hover:translate-x-[9px]">
        Say hi
      </span>
      <span className="inline-flex items-center transition-[transform,opacity] duration-[0.35s] ease-icon group-hover:translate-x-[22px] group-hover:opacity-0">
        <MailIcon />
      </span>
    </a>
  );
}
