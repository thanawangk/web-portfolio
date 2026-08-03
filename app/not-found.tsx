import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-(--page-max-width) flex-1 flex-col items-center justify-center px-5 py-24 text-center md:px-8 lg:px-12">
        <div className="mb-2.5 font-mono text-label text-accent">
          {"// 404"}
        </div>
        <h1 className="m-0 mb-3.5 text-h1 leading-tight font-bold tracking-heading md:text-h1-md lg:text-h1-lg">
          Nothing here.
        </h1>
        <p className="m-0 mb-7 max-w-[420px] text-lead leading-body text-text-muted md:text-lead-md lg:text-lead-lg">
          That page got refactored out of existence. Happens to the best of
          them.
        </p>
        <Link
          href="/"
          className="rounded-2xl bg-accent px-[26px] py-[13px] text-base font-medium text-on-accent transition-transform duration-(--duration-fast) ease-spring hover:-translate-y-0.5 hover:-rotate-1 hover:bg-accent-hover hover:text-on-accent"
        >
          Back home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
