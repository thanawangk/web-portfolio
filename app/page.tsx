import Image from "next/image";
import heroImg from "@/public/hero.png";
import { Hero } from "@/components/Hero";
import { MailButton } from "@/components/MailButton";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectCard } from "@/components/ProjectCard";
import { Chip } from "@/components/Chip";
import { Panel, PanelList } from "@/components/Panel";
import { Section, SectionHeading, SectionLabel } from "@/components/Section";
import { projects } from "@/lib/projects";
import {
  currently,
  experience,
  site,
  skillGroups,
  socialLinks,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />

        <Section id="projects" className="pt-22">
          <SectionLabel>{"// selected work"}</SectionLabel>
          <SectionHeading className="mb-[26px]">
            Things I've shipped
          </SectionHeading>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-[clamp(18px,2.5vw,26px)]">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                tilt={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </Section>

        <Section id="experience">
          <SectionLabel>{"// career journey"}</SectionLabel>
          <SectionHeading className="mb-5">Experience</SectionHeading>
          <div className="flex flex-col border-t border-surface-alt pt-5">
            {experience.map((job, i) => (
              <div
                key={job.role}
                className={`flex flex-wrap gap-x-[30px] gap-y-1.5 ${
                  i < experience.length - 1
                    ? "mb-3 border-b border-surface-alt pb-[18px]"
                    : ""
                }`}
              >
                <div className="flex-[0_0_140px] pt-[3px] font-mono text-label text-text-faint">
                  {job.period}
                </div>
                <div className="min-w-[240px] flex-[1_1_320px]">
                  <h3 className="mb-1.5 text-xl font-bold">{job.role}</h3>
                  <p className="max-w-[640px] text-[15.5px] leading-body text-text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionLabel>{"// toolbox"}</SectionLabel>
          <SectionHeading className="mb-6">Skills</SectionHeading>
          <div className="flex flex-col gap-[18px]">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-wrap items-baseline gap-6"
              >
                <h3 className="w-[170px] font-hand text-hand font-normal text-accent">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item, i) => (
                    <Chip
                      key={item}
                      message={item}
                      size="skill"
                      tone={group.emphasis ? "bright" : "secondary"}
                      tilt={i % 2 === 0 ? "left" : "right"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about">
          <div className="mb-2.5 flex items-center gap-4">
            {/* Hide eyebrow icon */}
            {/* <div
              aria-hidden="true"
              className="h-[46px] w-[46px] rounded-full border-2 border-border-strong bg-accent bg-no-repeat"
              style={{
                backgroundImage: "url('/hero.png')",
                backgroundSize: "230% auto",
                backgroundPosition: "40% 20%",
              }}
            /> */}
            <p className="font-mono text-label text-accent">
              {"// human.exe is still running"}
            </p>
          </div>
          <SectionHeading className="mb-[22px]">About me</SectionHeading>
          <div className="flex flex-wrap items-start gap-7">
            <div className="min-w-[280px] flex-[2_1_420px]">
              <p className="mb-3.5 max-w-[600px] text-body leading-relaxed text-text-secondary">
                I'm a frontend-leaning software engineer from Thailand, with 4
                years of experience in design and development. I turn ideas into
                code from thoughtful interactions to scalable systems.
              </p>
              <p className="max-w-[600px] text-body leading-relaxed text-text-secondary">
                In life as in code, I keep exploring new things, learning from
                what I discover while becoming a little better along the way
                (still learning).
              </p>
            </div>
            <Panel
              title="currently…"
              className="min-w-[240px] flex-[1_1_260px]"
            >
              <PanelList items={currently} />
            </Panel>
          </div>
        </Section>

        <section
          id="contact"
          className="mx-auto max-w-(--page-max-width) px-(--page-pad-x) pt-[clamp(48px,7vw,68px)] pb-[clamp(44px,6.5vw,64px)]"
        >
          <div className="relative mx-auto max-w-[920px] rounded-[36px] border-[3px] border-border-strong bg-surface px-[clamp(24px,5vw,48px)] pt-[clamp(44px,6.5vw,72px)] pb-[2px] text-center [box-shadow:12px_12px_0_var(--color-accent)] [transition:translate_0.3s_cubic-bezier(0.34,1.56,0.64,1),scale_0.3s_cubic-bezier(0.34,1.56,0.64,1),box-shadow_0.3s_cubic-bezier(0.34,1.56,0.64,1),border-color_0.3s_ease] hover:translate-x-[-6px] hover:translate-y-[-10px] hover:scale-[1.015] hover:border-accent hover:[box-shadow:22px_26px_0_var(--color-accent)]">
            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 rounded-full border-[3px] border-on-accent bg-accent px-4 py-[7px] font-mono text-[12.5px] font-bold tracking-[0.1em] whitespace-nowrap text-on-accent">
              GET IN TOUCH ✦
            </div>

            <div className="relative ">
              <p className="mb-6 font-mono text-[clamp(12px,1.6vw,15px)] font-bold tracking-[0.08em] text-accent">
                Hiring? Have a weird idea? My inbox is open.
              </p>

              <h2 className="mb-[26px] text-[clamp(40px,8.5vw,88px)] leading-[0.95] font-bold tracking-[-0.03em] text-text">
                Let&rsquo;s build
                <br />
                something.
              </h2>

              <MailButton email={site.email} className="mb-7" />

              <div className="flex flex-wrap justify-center gap-3 font-mono text-[14px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border-2 border-dashed border-border-strong px-4 py-[7px] text-text-secondary  hover:border-accent hover:text-accent`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="relative mx-auto mt-24 h-[68px] w-[180px] max-w-full overflow-hidden">
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
      </main>
      <SiteFooter />
    </>
  );
}
