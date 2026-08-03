import { ProjectCard } from "@/components/ProjectCard";
import { Section, SectionHeading, SectionLabel } from "@/components/Section";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" className="pt-22">
      <SectionLabel>{"// selected work"}</SectionLabel>
      <SectionHeading className="mb-[26px]">
        Things I've shipped
      </SectionHeading>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-[clamp(18px,2.5vw,26px)]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            tilt={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
}
