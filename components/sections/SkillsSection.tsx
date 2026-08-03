import { Chip } from "@/components/ui/Chip";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
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
              {group.items.map((item, index) => (
                <Chip
                  key={item}
                  label={item}
                  size="skill"
                  tone={group.emphasis ? "bright" : "secondary"}
                  tilt={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
