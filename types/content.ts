export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  stack: string[];
  /** Placeholder caption for the screenshot slot. */
  shot: string;
  role: string;
  year: string;
  status: string;
  what: string;
  fun: string;
  links: ProjectLink[];
}
