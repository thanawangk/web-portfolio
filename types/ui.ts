import type { StaticImageData } from "next/image";
import type { ComponentType, ReactNode } from "react";

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

export interface ButtonIconProps {
  icon: IconSource;
  size: number;
  eager: boolean;
}

export interface IconButtonProps {
  href: string;
  icon: IconSource;
  children: ReactNode;
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
  children: ReactNode;
  size?: ChipSize;
  tone?: ChipTone;
  tilt?: Tilt;
}
