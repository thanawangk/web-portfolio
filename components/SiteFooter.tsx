import Image from "next/image";
import heroIcon from "@/public/hero-icon.png";
import { site } from "@/lib/content";

export function SiteFooter({ peek = false }: { peek?: boolean }) {
  return (
    <footer className="relative">
      {peek && (
        <div className="relative mx-auto h-[92px] w-[240px] overflow-hidden">
          <Image
            src={heroIcon}
            alt=""
            aria-hidden="true"
            sizes="240px"
            className="pointer-events-none absolute top-[-55px] left-0 h-auto w-[240px]"
          />
        </div>
      )}
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-t border-surface-alt px-(--page-pad-x) py-[22px] font-mono text-[13px] text-text-faint">
        <span>
          © {site.year} {site.owner}
        </span>
        <span>{site.colophon}</span>
      </div>
    </footer>
  );
}
