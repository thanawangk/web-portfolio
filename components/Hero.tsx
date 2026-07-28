"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "@/components/IconButton";
import heroImg from "@/public/hero.png";
import githubIcon from "@/public/images/github.png";
import linkedinIcon from "@/public/images/linkedin.png";
import { bubbles, socialLinks } from "@/lib/content";

export function Hero() {
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
      className="relative mx-auto flex min-h-[68vh] max-w-(--page-max-width) flex-wrap-reverse items-center gap-5 px-(--page-pad-x) pt-[clamp(84px,9vw,104px)]"
    >
      <div className="relative z-2 min-w-[280px] flex-[1_1_380px] pt-4 pb-10">
        <div className="mb-[18px] font-mono text-label text-accent">
          {"// frontend · software engineer"}
        </div>
        <h1 className="mb-4 text-h1 leading-tight font-bold tracking-heading">
          Hi, my name is
          <br />
          Bank Thanawat
          <br />
          <span className="font-hand text-[clamp(32px,6.8vw,74px)] text-accent">
            less, but better.
          </span>
        </h1>
        <p className="mb-6 max-w-[440px] text-body-lg leading-body text-text-muted">
          Developer from Thailand, who does a bit of web development with a
          passion for great design.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton
            href={socialLinks.linkedin}
            icon={linkedinIcon}
            color="light"
            eager
          >
            LinkedIn
          </IconButton>
          <IconButton
            href={socialLinks.github}
            icon={githubIcon}
            color="outline"
            eager
          >
            GitHub
          </IconButton>
        </div>
        <div className="mt-[30px] -rotate-2 font-hand text-[23px] text-text-faint">
          ↓ scroll
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
            <div ref={charRef} className="@container relative w-[72%]">
              <Image
                src={heroImg}
                alt="Cartoon Bank, permanently astonished"
                priority
                sizes="(max-width: 900px) 52vw, 490px"
                className="block h-auto w-full"
              />
              {bubble && (
                <div className="absolute top-[-14%] left-[26%] animate-pop-in -rotate-3 border-border-accent bg-surface font-hand whitespace-nowrap text-accent [border-radius:3.76cqw] [border-width:0.42cqw] [font-size:5.64cqw] [padding:2.09cqw_4.17cqw]">
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
