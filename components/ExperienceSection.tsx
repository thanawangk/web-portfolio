import { Section, SectionHeading, SectionLabel } from "@/components/Section";
import { experience } from "@/lib/content";

export function ExperienceSection() {
  return (
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
  );
}
