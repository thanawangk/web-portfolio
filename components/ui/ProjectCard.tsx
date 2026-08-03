import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";
import { cn } from "@/lib/cn";
import type { ProjectCardProps, Tilt } from "@/types/ui.types";

const tilts: Record<Tilt, string> = {
  left: "hover:-rotate-[0.6deg]",
  right: "hover:rotate-[0.6deg]",
};

export function ProjectCard({ project, tilt = "left" }: ProjectCardProps) {
  return (
    <Link
      // Restore href={`/projects/${project.slug}`} and caption={project.shot}
      href="/#projects"
      className={cn(
        "block overflow-hidden rounded-card border-[1.5px] border-border bg-surface text-text transition-[translate,rotate,border-color] duration-200 hover:-translate-y-[5px] hover:border-accent hover:text-text",
        tilts[tilt],
      )}
    >
      <ScreenshotSlot caption="Maintenance" className="h-[168px]" />
      <div className="p-5">
        <div className="mb-2 flex items-baseline gap-3">
          <span className="font-mono text-[13px] text-accent">
            {project.number}
          </span>
          <h3 className="text-h3 font-bold">{project.name}</h3>
        </div>
        <p className="mb-4 text-card leading-[1.55] text-text-muted">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}
