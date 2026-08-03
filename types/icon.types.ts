import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";

export type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

export type IconSource = string | StaticImageData | IconComponent;
