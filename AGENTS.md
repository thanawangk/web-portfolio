<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Coding style

## Naming & files
- camelCase for variables, functions, and non-component filenames; PascalCase for components and their files (`ProjectCard.tsx`).
- No underscores in class names or file names.
- One component per file, named the same as the file.

## Project structure
- `app/` — routes only (pages, layout, globals). Page components stay thin: compose sections, no logic.
- `components/` — split by role: `ui/` (reusable primitives), `sections/` (page sections), `layout/` (nav, footer), `icons/`.
- `lib/` — content and data (`content.ts`, `projects.ts`). All copy, links, and site config live here, never hardcoded in components.
- `types/` — all shared types, grouped in `*.types.ts` files (`ui.types.ts`, `content.types.ts`). Components import types; they don't declare shared ones inline.

## TypeScript
- `type` for unions and derived types; `interface` for object shapes.
- Always `import type` for type-only imports.
- Props types live in `types/*.types.ts`, named `<Component>Props`.

## Components
- Named exports (`export function Chip()`), not default — except Next.js route files which require default exports.
- Server components by default; add `"use client"` only when the component needs state, refs, or effects.
- Variant styling via lookup tables: `const sizes: Record<ChipSize, string> = { ... }` keyed by a union type, not conditional string building.
- Compose conditional classes with an array + `.filter(Boolean).join(" ")`.

## Styling
- Tailwind only, using the design tokens defined in `globals.css` (`text-chip`, `rounded-pill`, `border-border-strong`, `text-text-secondary`, `bg-accent`, etc.). Reach for arbitrary values (`px-[5px]`) only when no token fits.
- No inline `style` attributes except for imperative animation control.
- No clamp() CSS.

## Comments
- Comment only to explain *why* or a non-obvious constraint (e.g. why `interface` over `type`), never to narrate what the code does.

## Tooling
- pnpm, not npm or yarn.
