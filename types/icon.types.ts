import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";

/**
 * Icon types live apart from `ui` and `content` because both need them —
 * keeping them here stops those two files importing each other in a cycle.
 */

export type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

/** A raster in /public, a static import, or an SVG icon component. */
export type IconSource = string | StaticImageData | IconComponent;
