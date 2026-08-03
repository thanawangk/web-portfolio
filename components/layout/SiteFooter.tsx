import { site, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-surface-alt px-5 py-[22px] md:px-8 lg:px-12 font-mono text-[13px] text-text-faint">
      <span>
        © {site.year} {site.owner}
      </span>
      <div className="-my-2.5 -mr-2.5 flex items-center gap-1">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
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
