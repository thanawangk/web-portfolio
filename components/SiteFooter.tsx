import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-t border-surface-alt px-(--page-pad-x) py-[22px] font-mono text-[13px] text-text-faint">
      <span>
        © {site.year} {site.owner}
      </span>
      <span>{site.colophon}</span>
    </footer>
  );
}
