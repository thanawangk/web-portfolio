const MARK_PATH =
  "M171 120 H764 A88 88 0 0 1 852 208 V448 C852 472 828 488 804 508 C828 524 852 538 852 574 V736 A88 88 0 0 1 764 824 H171 Z" +
  "M390 308 H748 V452 H390 Z" +
  "M390 556 H748 V723 H390 Z";

const SHADOW_OFFSET = 57;

export function IconMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="171 120 681 761"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={MARK_PATH}
        fillRule="evenodd"
        transform={`translate(0 ${SHADOW_OFFSET})`}
        fill="var(--color-accent-hover)"
      />
      <path
        d={MARK_PATH}
        fillRule="evenodd"
        fill="var(--color-accent-strong)"
      />
    </svg>
  );
}
