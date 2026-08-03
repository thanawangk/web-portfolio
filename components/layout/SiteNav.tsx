"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { IconMark } from "@/components/icons/IconMark";
import { cvUrl, navLinks, site } from "@/lib/content";

/** Width burger collapses into an inline row (the `nav:` variant). */
const navBreakpoint = 720;

const morphedProperties =
  "top, width, padding, border-radius, background, backdrop-filter, border-color, box-shadow";

type NavState = "top" | "scrolled";

interface NavStateStyles {
  /** Classes rather than inline style so the breakpoint steps stay readable;
      `padding` is still morphed, so it animates either way. */
  bar: string;
  /** Menu drops flush against the bar once it has shrunk into its pill. */
  menu: string;
}

const navStyles: Record<NavState, NavStateStyles> = {
  top: {
    bar: "px-4 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4.5",
    menu: "right-4 md:right-8 lg:right-12",
  },
  scrolled: {
    bar: "px-4 py-3 md:px-6 lg:px-[30px]",
    menu: "right-0",
  },
};

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Turn nav into "scrolled" state when the user scroll down a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sync = () => {
      if (window.innerWidth >= navBreakpoint) setMenuOpen(false);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const state: NavState = scrolled ? "scrolled" : "top";
  const styles = navStyles[state];

  return (
    <nav
      className={`fixed inset-x-0 z-50 mx-auto box-border flex flex-wrap items-center justify-between gap-y-2 border border-solid ${styles.bar}`}
      style={{
        top: scrolled ? "18px" : "0",
        width: scrolled ? "min(1220px, calc(100% - 32px))" : "100%",
        borderRadius: scrolled ? "var(--radius-nav)" : "0",
        background: scrolled ? "var(--glass-bg)" : "rgba(24, 22, 26, 0)",
        backdropFilter: scrolled ? "var(--glass-blur)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "var(--glass-blur)" : "blur(0px)",
        borderColor: scrolled ? "var(--glass-border)" : "rgba(38, 35, 42, 0)",
        boxShadow: scrolled ? "var(--glass-shadow)" : "none",
        transitionProperty: morphedProperties,
        transitionDuration: "var(--duration-nav)",
        transitionTimingFunction: "var(--ease-out-smooth)",
      }}
    >
      <Link
        href="/"
        aria-label={`${site.wordmark} — home`}
        className="inline-flex items-center transition-transform duration-(--duration-fast) hover:-translate-y-px"
        onClick={closeMenu}
      >
        <IconMark className="h-10 w-auto" />
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1.5 nav:hidden"
      >
        <Bar
          className={
            menuOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"
          }
        />
        <Bar className={menuOpen ? "opacity-0" : "opacity-100"} />
        <Bar
          className={
            menuOpen
              ? "-translate-y-[7px] -rotate-45"
              : "translate-y-0 rotate-0"
          }
        />
      </button>

      <div
        className={[
          // Mobile: glass dropdown anchored under the bar.
          menuOpen ? "flex" : "hidden",
          styles.menu,
          "absolute top-[calc(100%+10px)] min-w-[200px] flex-col items-stretch gap-4 rounded-panel border border-[var(--glass-border)] bg-[var(--glass-bg-menu)] px-[22px] py-5 shadow-(--glass-shadow-menu) backdrop-blur-[18px] backdrop-saturate-[180%]",
          // Desktop: inline row, no chrome.
          "nav:static nav:flex nav:min-w-0 nav:flex-row nav:items-center nav:gap-3.5 nav:rounded-none nav:border-0 nav:bg-transparent nav:p-0 nav:shadow-none nav:backdrop-filter-none lg:gap-5 xl:gap-[30px]",
        ].join(" ")}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="rounded-2xl px-3.5 py-2 -mx-3.5 -my-2 text-nav text-text-secondary transition-all duration-(--duration-fast) hover:-translate-y-px hover:bg-accent-tint hover:text-accent active:translate-y-0 active:scale-[0.96]"
          >
            {link.label}
          </Link>
        ))}
        <IconButton
          href={cvUrl}
          icon={Download}
          color="accent"
          size="sm"
          message="Download CV"
        />
      </div>
    </nav>
  );
}

function Bar({ className }: { className: string }) {
  return (
    <span
      className={`block h-0.5 w-[22px] rounded-sm bg-text-secondary transition-[transform,opacity] duration-300 ${className}`}
    />
  );
}
