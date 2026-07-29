import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";
import type { Project } from "@/types/content";

/**
 * Union and derived types stay as `type` — an interface cannot express a
 * union, and object shapes stay as `interface` because TypeScript caches
 * interfaces as a single flat type.
 */

export type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

/** A raster in /public, a static import, or an SVG icon component. */
export type IconSource = string | StaticImageData | IconComponent;

export type IconButtonColor = "accent" | "light" | "outline";
export type IconButtonSize = "sm" | "md";

/** Shape of one entry in the IconButton size table. */
export interface IconButtonVariant {
  shell: string;
  icon: number;
}

export interface ButtonIconProps {
  icon: IconSource;
  size: number;
  eager: boolean;
}

export interface IconButtonProps {
  href: string;
  icon: IconSource;
  message: string;
  color?: IconButtonColor;
  size?: IconButtonSize;
  /** Set on above-the-fold buttons so the raster isn't lazy-loaded. */
  eager?: boolean;
  onClick?: () => void;
  className?: string;
}

export type ChipSize = "sm" | "md" | "skill";
export type ChipTone = "secondary" | "bright";
export type Tilt = "left" | "right";

export interface ChipProps {
  message: string;
  size?: ChipSize;
  tone?: ChipTone;
  tilt?: Tilt;
}

export interface ProjectCardProps {
  project: Project;
  tilt?: Tilt;
}
