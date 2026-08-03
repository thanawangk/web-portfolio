/** Striped placeholder standing in for a project screenshot. */
export function ScreenshotSlot({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`stripes flex items-center justify-center ${className}`}
      role="img"
      aria-label={`Screenshot placeholder: ${caption}`}
    >
      <span className="font-mono text-[13px] text-text-faint">
        [ screenshot: {caption} ]
      </span>
    </div>
  );
}
