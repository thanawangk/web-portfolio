import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" className="pt-22">
      <SectionLabel>{"// selected work"}</SectionLabel>
      <SectionHeading className="mb-[26px]">
        Things I’ve shipped
      </SectionHeading>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-4.5 md:gap-5 lg:gap-6.5">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            tilt={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
}
