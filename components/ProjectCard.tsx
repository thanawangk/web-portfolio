import Link from "next/link";
import { Chip } from "@/components/Chip";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";
import type { ProjectCardProps, Tilt } from "@/types/ui";

const tilts: Record<Tilt, string> = {
  left: "hover:-rotate-[0.6deg]",
  right: "hover:rotate-[0.6deg]",
};

export function ProjectCard({ project, tilt = "left" }: ProjectCardProps) {
  return (
    <Link
      href="/" // href={`/projects/${project.slug}`}
      className={`block overflow-hidden rounded-card border-[1.5px] border-border bg-surface text-text transition-[translate,rotate,border-color] duration-200 hover:-translate-y-[5px] hover:border-accent hover:text-text ${tilts[tilt]}`}
    >
      {/* caption={project.shot} */}
      <ScreenshotSlot caption={"Maintenance"} className="h-[168px]" />
      <div className="p-5">
        <div className="mb-2 flex items-baseline gap-3">
          <span className="font-mono text-[13px] text-accent">
            {project.num}
          </span>
          <h3 className="text-h3 font-bold">{project.name}</h3>
        </div>
        <p className="mb-4 text-card leading-[1.55] text-text-muted">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Chip key={tech} message={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}
