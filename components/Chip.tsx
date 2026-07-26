type ChipSize = "sm" | "md" | "skill";

const sizes: Record<ChipSize, string> = {
  // Project card tags
  sm: "text-chip px-3 py-[5px] border-[1px]",
  // Project detail stack list
  md: "text-[13px] px-3.5 py-1.5 border-[1px]",
  // Skills section — interactive tilt on hover
  skill:
    "text-label px-4 py-[9px] border-[1.5px] cursor-default transition-[rotate,border-color] duration-200 hover:border-accent",
};

export function Chip({
  children,
  size = "sm",
  tone = "secondary",
  tilt,
}: {
  children: React.ReactNode;
  size?: ChipSize;
  tone?: "secondary" | "bright";
  tilt?: "left" | "right";
}) {
  return (
    <span
      className={[
        "inline-block rounded-pill border-border-strong font-mono",
        sizes[size],
        tone === "bright" ? "text-text" : "text-text-secondary",
        tilt === "left" ? "hover:-rotate-2" : "",
        tilt === "right" ? "hover:rotate-2" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
