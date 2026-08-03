import type { IconComponent } from "@/types/icon.types";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  stack: string[];
  shot: string;
  role: string;
  year: string;
  status: string;
  what: string;
  fun: string;
  links: ProjectLink[];
}
