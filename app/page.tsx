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
  socials,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />

        <Section id="projects">
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
          <SectionLabel>{"// the résumé bit"}</SectionLabel>
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
            <div
              aria-hidden="true"
              className="h-[46px] w-[46px] rounded-full border-2 border-border-strong bg-surface bg-no-repeat"
              style={{
                backgroundImage: "url('/hero-icon.png')",
                backgroundSize: "315% auto",
                backgroundPosition: "65% 61%",
              }}
            />
            <p className="font-mono text-label text-accent">
              {"// the human behind the cartoon"}
            </p>
          </div>
          <SectionHeading className="mb-[22px]">About me</SectionHeading>
          <div className="flex flex-wrap items-start gap-7">
            <div className="min-w-[280px] flex-[2_1_420px]">
              <p className="mb-3.5 max-w-[600px] text-body leading-relaxed text-text-secondary">
                I'm Bank Thanawat, a frontend-leaning software engineer based in
                Bangkok. I care about the unglamorous stuff — loading states,
                keyboard nav, that 80ms where the button does nothing — because
                that's where "fine" becomes "wow".
              </p>
              <p className="max-w-[600px] text-body leading-relaxed text-text-secondary">
                When I'm not shipping, I'm redrawing this little guy's face,
                over-engineering my espresso, or explaining to relatives that
                no, I can't fix their printer. (I can.)
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
          className="mx-auto max-w-(--page-max-width) px-(--page-pad-x) pt-[clamp(48px,7vw,68px)] pb-(--section-pad-y) text-center"
        >
          <h2 className="mb-2.5 -rotate-2 font-hand text-hand-lg font-normal text-accent">
            Let's build something.
          </h2>
          <p className="mx-auto mb-6 max-w-[420px] text-[clamp(15px,2.2vw,18px)] leading-body text-text-muted">
            Hiring? Have a weird idea? Just want to poke the cartoon? My inbox
            is open.
          </p>
          <MailButton email={site.email} />
          <div className="mt-[22px] flex justify-center gap-7 font-mono text-label">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-text-secondary transition-colors duration-(--duration-fast) hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter peek />
    </>
  );
}
