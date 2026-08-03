import type { Project } from "@/types/content.types";
import type { IconSource } from "@/types/icon.types";

export type IconButtonColor = "accent" | "light" | "outline";
export type IconButtonSize = "sm" | "md";

export interface IconButtonVariant {
  className: string;
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
  label: string;
  color?: IconButtonColor;
  size?: IconButtonSize;
  eager?: boolean;
  onClick?: () => void;
  className?: string;
}

export type ChipSize = "sm" | "md" | "skill";
export type ChipTone = "secondary" | "bright";
export type Tilt = "left" | "right";

export interface ChipProps {
  label: string;
  size?: ChipSize;
  tone?: ChipTone;
  tilt?: Tilt;
}

export interface ProjectCardProps {
  project: Project;
  tilt?: Tilt;
}

export interface MailButtonProps {
  email: string;
  className?: string;
}

export interface PanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface PanelListProps {
  items: string[];
}

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export interface ScreenshotSlotProps {
  caption: string;
  className?: string;
}
