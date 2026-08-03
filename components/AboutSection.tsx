import { Panel, PanelList } from "@/components/Panel";
import { Section, SectionHeading, SectionLabel } from "@/components/Section";
import { currently } from "@/lib/content";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionLabel>{"// human.exe is still running"}</SectionLabel>
      <SectionHeading className="mb-[22px]">About me</SectionHeading>
      <div className="flex flex-wrap items-start gap-7">
        <div className="min-w-[280px] flex-[2_1_420px]">
          <p className="mb-3.5 max-w-[600px] text-body leading-relaxed text-text-secondary">
            I'm a frontend-leaning software engineer from Thailand, with 4
            years of experience in design and development. I turn ideas into code
            from thoughtful interactions to scalable systems.
          </p>
          <p className="max-w-[600px] text-body leading-relaxed text-text-secondary">
            In life as in code, I keep exploring new things, learning from what I
            discover while becoming a little better along the way (still
            learning).
          </p>
        </div>
        <Panel title="currently…" className="min-w-[240px] flex-[1_1_260px]">
          <PanelList items={currently} />
        </Panel>
      </div>
    </Section>
  );
}
