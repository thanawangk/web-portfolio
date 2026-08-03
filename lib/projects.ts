import type { Project } from "@/types/content.types";

export const projects: Project[] = [
  {
    slug: "pixelpad",
    num: "01",
    name: "Pixelpad",
    tagline: "Realtime collaborative whiteboard. 40 cursors, zero fistfights.",
    stack: ["React", "Yjs", "Canvas"],
    shot: "pixelpad canvas",
    role: "solo build",
    year: "2025",
    status: "live",
    what: "A shared infinite canvas where teams sketch, wire-frame, and argue with arrows in realtime. CRDT-backed so nobody’s strokes ever get eaten, even on flaky hotel wifi.",
    fun: "Rendering 40 live cursors at 60fps meant ditching the DOM for a single canvas layer with interpolated positions — and giving every cursor a tiny name tag that dodges collisions.",
    links: [
      { label: "live demo ↗", href: "#" },
      { label: "source on github ↗", href: "#" },
    ],
  },
  {
    slug: "shipshape",
    num: "02",
    name: "Shipshape",
    tagline: "CI dashboard that tells you the build broke, gently.",
    stack: ["Next.js", "tRPC", "Postgres"],
    shot: "shipshape dashboard",
    role: "design + frontend",
    year: "2024",
    status: "live",
    what: "One screen that answers “can we deploy?” — pipelines, flaky-test trends, and who broke main, presented calmly instead of as a wall of red.",
    fun: "The status stream is server-sent events over tRPC subscriptions; failures animate in with a soft wobble instead of a klaxon. Morale measurably improved.",
    links: [
      { label: "live demo ↗", href: "#" },
      { label: "source on github ↗", href: "#" },
    ],
  },
  {
    slug: "notely",
    num: "03",
    name: "Notely",
    tagline:
      "Offline-first markdown notes PWA. Works on planes. Tested on planes.",
    stack: ["TypeScript", "IndexedDB", "PWA"],
    shot: "notely editor",
    role: "solo build",
    year: "2023",
    status: "live",
    what: "A local-first notes app: everything lives in IndexedDB, syncs opportunistically, and the editor stays instant whether you’re online, offline, or somewhere over the Pacific.",
    fun: "Conflict resolution uses a three-way merge on markdown blocks — so two edits to the same note usually just… both land. The airplane test suite is a real seat 23A.",
    links: [
      { label: "live demo ↗", href: "#" },
      { label: "source on github ↗", href: "#" },
    ],
  },
  {
    slug: "queueless",
    num: "04",
    name: "Queueless",
    tagline: "Restaurant waitlist app. Saved thousands of humans from standing.",
    stack: ["React Native", "WebSockets"],
    shot: "queueless mobile app",
    role: "frontend lead",
    year: "2022",
    status: "acquired",
    what: "Diners join a virtual line from their phone and get a nudge when their table’s ready; hosts get a drag-to-reorder queue that survives the Friday rush.",
    fun: "Wait-time estimates blend rolling averages with the host’s gut feel (a slider labelled “vibes”). It out-predicted the pure model every weekend.",
    links: [
      { label: "live demo ↗", href: "#" },
      { label: "source on github ↗", href: "#" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Neighbours wrap around, matching the design's prev/next footer. */
export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return {
    prev: projects[(i + projects.length - 1) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
