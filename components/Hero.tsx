"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/public/hero.png";
import { quips } from "@/lib/content";

export function Hero() {
  const charRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [quip, setQuip] = useState<string | null>(null);

  useEffect(() => () => clearTimeout(timer.current ?? undefined), []);

  const poke = () => {
    const el = charRef.current;
    if (el) {
      // Restart the wobble even if it is already mid-flight.
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "wobble .55s ease";
    }
    setQuip((current) => {
      const others = quips.filter((q) => q !== current);
      return others[Math.floor(Math.random() * others.length)];
    });
    clearTimeout(timer.current ?? undefined);
    timer.current = setTimeout(() => setQuip(null), 2400);
  };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[68vh] max-w-(--page-max-width) flex-wrap-reverse items-center gap-5 px-(--page-pad-x) pt-[clamp(84px,9vw,104px)]"
    >
      <div className="relative z-2 min-w-[280px] flex-[1_1_380px] pt-4 pb-9">
        <div className="mb-[18px] font-mono text-label text-accent">
          {"// frontend · software engineer"}
        </div>
        <h1 className="m-0 mb-4 text-h1 leading-tight font-bold tracking-heading">
          Hi, I&rsquo;m Bank.
          <br />
          I make the web
          <br />
          <span className="font-hand text-[clamp(32px,6.8vw,74px)] text-accent">
            less boring.
          </span>
        </h1>
        <p className="m-0 mb-6 max-w-[440px] text-body-lg leading-body text-text-muted">
          Design-system nerd, animation enjoyer, professional div centerer. I
          build interfaces so smooth this guy can&rsquo;t handle it.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="rounded-pill bg-text px-[26px] py-[13px] text-base font-medium text-on-accent transition-transform duration-fast ease-spring hover:-translate-y-0.5 hover:-rotate-1 hover:bg-white hover:text-on-accent"
          >
            See projects
          </Link>
          <a
            href="#"
            className="rounded-pill border-[1.5px] border-border-strong px-[26px] py-3 text-base text-text-secondary transition-colors duration-fast hover:border-accent hover:text-accent"
          >
            Résumé ↓
          </a>
        </div>
        <div className="mt-[30px] -rotate-2 font-hand text-[23px] text-text-faint">
          psst — poke him →
        </div>
      </div>

      <div className="relative z-1 mx-auto aspect-[587/442] w-[clamp(340px,52vw,680px)] shrink-0">
        <div className="absolute inset-0 z-0 animate-bob">
          <svg
            viewBox="0 0 600 620"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M300,10 C400,0 500,50 545,150 C590,250 575,370 500,450 C425,530 300,560 190,530 C80,500 20,410 30,300 C40,190 100,90 200,40 C233,24 266,17 300,10 Z"
              fill="var(--color-accent-strong)"
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
            <div ref={charRef} className="relative w-[72%]">
              <Image
                src={heroImg}
                alt="Cartoon Bank, permanently astonished"
                priority
                sizes="(max-width: 900px) 52vw, 490px"
                className="block h-auto w-full"
              />
              {quip && (
                <div className="absolute top-[-14%] left-[26%] animate-pop-in -rotate-3 rounded-panel border-2 border-border-accent bg-surface px-5 py-2.5 font-hand text-[clamp(18px,2.4vw,27px)] whitespace-nowrap text-accent">
                  {quip}
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={poke}
          title="poke"
          aria-label="Poke the cartoon"
          className="absolute bottom-0 left-[17%] z-2 h-[88%] w-[66%] cursor-pointer border-none bg-transparent"
        />
      </div>
    </section>
  );
}
