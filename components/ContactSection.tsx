import Image from "next/image";
import { MailButton } from "@/components/MailButton";
import { site } from "@/lib/content";
import heroImg from "@/public/hero.png";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-(--page-max-width) px-(--page-pad-x) pt-[clamp(48px,7vw,64px)] pb-[clamp(44px,6.5vw,60px)]"
    >
      <div className="relative mx-auto max-w-[920px] rounded-[36px] border-[3px] border-border-strong bg-surface px-[clamp(24px,5vw,48px)] pt-[clamp(44px,6.5vw,72px)] pb-[2px] text-center [box-shadow:12px_12px_0_var(--color-accent)] [transition:translate_0.3s_cubic-bezier(0.34,1.56,0.64,1),scale_0.3s_cubic-bezier(0.34,1.56,0.64,1),box-shadow_0.3s_cubic-bezier(0.34,1.56,0.64,1),border-color_0.3s_ease] hover:translate-x-[-6px] hover:translate-y-[-10px] hover:scale-[1.015] hover:border-accent hover:[box-shadow:22px_26px_0_var(--color-accent)]">
        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 rounded-full border-[3px] border-on-accent bg-accent px-4 py-[7px] font-mono text-[12.5px] font-bold tracking-[0.1em] whitespace-nowrap text-on-accent">
          GET IN TOUCH ✦
        </div>

        <div className="relative">
          <p className="mb-6 font-mono text-[clamp(12px,1.6vw,15px)] font-bold tracking-[0.08em] text-accent">
            Hiring? Contact me? My inbox is open.
          </p>

          <h2 className="mb-[36px] text-contact-card leading-[0.95] font-bold tracking-[-0.03em] text-text">
            Let&apos;s build
            <br />
            with purpose.
          </h2>

          <MailButton email={site.email} className="mb-8" />

          <div className="relative mx-auto mt-8 h-[68px] w-[180px] max-w-full overflow-hidden md:mt-12">
            <Image
              src={heroImg}
              alt=""
              aria-hidden="true"
              sizes="180px"
              className="pointer-events-none absolute top-[-20px] left-0 h-auto w-[180px] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
