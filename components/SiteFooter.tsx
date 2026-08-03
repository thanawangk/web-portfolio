import { site, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-surface-alt px-(--page-pad-x) py-[22px] font-mono text-[13px] text-text-faint">
      <span>
        © {site.year} {site.owner}
      </span>
      <div className="-my-2.5 -mr-2.5 flex items-center gap-1">
        {socialLinks.map(({ label, link, icon: Icon }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex p-2.5 text-text-faint transition-colors duration-(--duration-fast) ease-(--ease-out-smooth) hover:text-text focus-visible:text-text"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
}
