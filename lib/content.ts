import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import type { SocialLink } from "@/types/content";

export const site = {
  wordmark: "bankthanawat.dev",
  email: "thanawat.wangk@outlook.com",
  owner: "Thanawat Wangkhem",
  year: 2026,
  colophon: "made with too many divs",
};

export const cvUrl =
  "https://drive.google.com/file/d/1U3JUudqlVuSCopY2BBirLqe4xj7nuHjw/view";

export const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  // { href: "/#contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/thanawangk/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    link: "https://github.com/thanawangk",
    icon: GitHubIcon,
  },
];

export const experience = [
  {
    period: "2025 — now",
    role: "Software Engineer · PwC Thailand",
    description:
      "Built complex banking workflows, working across teams to deliver scalable and reliable web solutions.",
  },
  {
    period: "2023 — 2025",
    role: "Associate Transformational Consultant · NTT DATA (Thailand)",
    description:
      "Designed and developed a web application for contact center data management and reporting support multiple business units.",
  },
  {
    period: "2022 — 2023",
    role: "Associate Software Application Development Engineer · NTT (Thailand)",
    description:
      "Delivered new features for evolving business needs, optimizing frontend performance with large datasets.",
  },
  {
    period: "2021 — 2021",
    role: "Frontend Developer · Faculty of Engineering at Sriracha",
    description:
      "Web development for document reservation with responsive design and role-based access control.",
  },
];

export const skillGroups = [
  {
    label: "core expertise",
    emphasis: true,
    items: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    label: "proficient in",
    emphasis: false,
    items: ["Figma", "Tailwind", "Jest", "Vue.js", "SQL"],
  },
  {
    label: "familiar with",
    emphasis: false,
    items: ["Python", "AWS", "Nest.js", "Claude"],
  },
];

export const currently = [
  "obsessed_with: passion projects",
  "exploring: “Assistive AI”, indeed",
  "thaitea_count: 1 (it is 10am)",
  "open_to: full-time roles",
];

/** Speech-bubble lines the mascot fires off when poked. */
export const bubbles = [
  "100 on Lighthouse?!",
  "He centered the div?!",
  "Zero layout shift?!",
  "No console.logs in prod?!",
  "Ship it. SHIP IT!!",
  "It works in Safari?!",
];
