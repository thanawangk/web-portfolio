"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import heroImg from "@/public/hero.png";
import { bubbles, socialLinks } from "@/lib/content";

export function HeroSection() {
  const charRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [bubble, setBubble] = useState<string | null>(null);

  useEffect(() => () => clearTimeout(timer.current ?? undefined), []);

  const poke = () => {
    const el = charRef.current;
    if (el) {
      // Restart the wobble even if it is already mid-flight.
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "wobble .55s ease";
    }
    setBubble((current) => {
      const others = bubbles.filter((bubble) => bubble !== current);
      return others[Math.floor(Math.random() * others.length)];
    });
    clearTimeout(timer.current ?? undefined);
    timer.current = setTimeout(() => setBubble(null), 2400);
  };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[68vh] max-w-(--page-max-width) flex-wrap-reverse items-center gap-5 px-5 pt-21 md:px-8 lg:px-12 lg:pt-26"
    >
      <div className="relative z-2 min-w-[280px] grow shrink basis-[380px] pt-4 pb-10">
        <div className="mb-[18px] font-mono text-label text-accent">
          {"// frontend · software engineer"}
        </div>
        <h1 className="mb-4 text-h1 leading-tight font-bold tracking-heading md:text-h1-md lg:text-h1-lg">
          Hi, my name is
          <br />
          Bank Thanawat
          <br />
          <span className="font-hand text-[32px] text-accent md:text-[52px] lg:text-[74px]">
            less, but better.
          </span>
        </h1>
        <p className="mb-6 max-w-[440px] text-lead leading-body text-text-muted md:text-lead-md lg:text-lead-lg">
          Software Engineer who does a bit of web development with a passion for
          great design.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton
            href={socialLinks[0].link}
            icon={socialLinks[0].icon}
            message={socialLinks[0].label}
            color="light"
          />
          <IconButton
            href={socialLinks[1].link}
            icon={socialLinks[1].icon}
            message={socialLinks[1].label}
            color="outline"
          />
        </div>
        <div className="mt-[30px] -rotate-2 font-hand text-[23px] text-text-faint">
          ↓ scroll
        </div>
      </div>

      <div className="relative z-1 mx-auto aspect-[587/442] w-[280px] shrink-0 sm:w-[340px] md:w-[400px] lg:w-[530px] xl:w-[680px]">
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
            <div ref={charRef} className="@container relative w-[72%]">
              <Image
                src={heroImg}
                alt="Cartoon Bank, permanently astonished"
                priority
                sizes="(min-width: 1280px) 490px, (min-width: 1024px) 384px, (min-width: 768px) 288px, 245px"
                className="block h-auto w-full"
              />
              {bubble && (
                <div className="absolute top-[-14%] left-[26%] animate-pop-in -rotate-3 border-border-accent bg-surface font-hand whitespace-nowrap text-accent [border-radius:3.76cqw] [border-width:0.42cqw] [font-size:5.64cqw] [padding-block:2.09cqw] [padding-inline:4.17cqw]">
                  {bubble}
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
