import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chip } from "@/components/Chip";
import { Panel, PanelList } from "@/components/Panel";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { getNeighbours, getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
    openGraph: { title: project.name, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  const neighbours = getNeighbours(slug);
  if (!project || !neighbours) notFound();

  return (
    <div className="min-h-screen">
      <nav className="mx-auto box-border flex max-w-[1140px] items-center justify-between px-5 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4.5">
        <Link href="/" className="font-mono text-nav font-medium text-accent">
          {site.wordmark}
        </Link>
        <Link
          href="/#projects"
          className="rounded-2xl px-3.5 py-2 text-nav text-text-secondary transition-colors duration-(--duration-fast) hover:bg-accent-tint hover:text-accent"
        >
          ← All projects
        </Link>
      </nav>

      <main className="mx-auto max-w-[900px] px-5 pt-7 pb-[60px] md:px-8 md:pt-10 lg:px-12 lg:pt-14">
        <p className="mb-3 font-mono text-label text-accent">
          {`// project ${project.num}`}
        </p>
        <h1 className="mb-3.5 text-[38px] font-bold tracking-heading md:text-[46px] lg:text-[60px]">
          {project.name}
        </h1>
        <p className="mb-[22px] max-w-[620px] text-[17px] leading-body text-text-muted md:text-lg lg:text-[21px]">
          {project.tagline}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Chip key={tech} size="md" message={tech} />
          ))}
        </div>

        <ScreenshotSlot
          caption={project.shot}
          className="mb-9 h-[220px] rounded-card border-[1.5px] border-border md:h-[290px] lg:h-[390px] xl:h-[420px]"
        />

        <div className="flex flex-wrap items-start gap-7">
          <div className="min-w-[260px] flex-[2_1_380px]">
            <h2 className="mb-3 text-2xl font-bold">What it is</h2>
            <p className="mb-[18px] text-body leading-relaxed text-text-secondary">
              {project.what}
            </p>
            <h2 className="mb-3 text-2xl font-bold">The fun part</h2>
            <p className="text-body leading-relaxed text-text-secondary">
              {project.fun}
            </p>
          </div>

          <Panel title="at a glance" className="min-w-[220px] flex-[1_1_240px]">
            <PanelList
              items={[
                `role: ${project.role}`,
                `year: ${project.year}`,
                `status: ${project.status}`,
              ]}
            />
            <div className="mt-[18px] flex flex-col gap-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-label text-accent hover:text-accent-hover"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Panel>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-surface-alt pt-6">
          <Link
            href={`/projects/${neighbours.prev.slug}`}
            className="text-nav text-text-secondary hover:text-accent"
          >
            ← {neighbours.prev.name}
          </Link>
          <Link
            href={`/projects/${neighbours.next.slug}`}
            className="text-nav text-text-secondary hover:text-accent"
          >
            {neighbours.next.name} →
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
