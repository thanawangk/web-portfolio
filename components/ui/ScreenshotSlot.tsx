import { cn } from "@/lib/cn";
import type { ScreenshotSlotProps } from "@/types/ui.types";

// Striped placeholder standing in for a project screenshot
export function ScreenshotSlot({ caption, className }: ScreenshotSlotProps) {
  return (
    <div
      className={cn("stripes flex items-center justify-center", className)}
      role="img"
      aria-label={`Screenshot placeholder: ${caption}`}
    >
      <span className="font-mono text-[13px] text-text-faint">
        [ screenshot: {caption} ]
      </span>
    </div>
  );
}
