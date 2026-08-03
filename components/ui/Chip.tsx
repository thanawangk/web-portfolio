import { cn } from "@/lib/cn";
import type { ChipProps, ChipSize, ChipTone, Tilt } from "@/types/ui.types";

const sizes: Record<ChipSize, string> = {
  // Project card tags
  sm: "text-chip px-3 py-[5px] border-[1px]",
  // Project detail stack list
  md: "text-[13px] px-3.5 py-1.5 border-[1px]",
  // Skills section — interactive tilt on hover
  skill:
    "text-label px-4 py-[9px] border-[1.5px] cursor-default transition-[rotate,border-color] duration-200 hover:border-accent",
};

const tones: Record<ChipTone, string> = {
  secondary: "text-text-secondary",
  bright: "text-text",
};

const tilts: Record<Tilt, string> = {
  left: "hover:-rotate-2",
  right: "hover:rotate-2",
};

export function Chip({
  label,
  size = "sm",
  tone = "secondary",
  tilt,
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-pill border-border-strong font-mono",
        sizes[size],
        tones[tone],
        tilt && tilts[tilt],
      )}
    >
      {label}
    </span>
  );
}
