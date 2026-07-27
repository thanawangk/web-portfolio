const MARK_PATH =
  "M441 128 H1350 A250 250 0 0 1 1600 378 V1104 A65 65 0 0 0 1665 1169 A191 239 0 0 1 1857 1408 V1672 A250 250 0 0 1 1607 1922 H441 A250 250 0 0 1 191 1672 V378 A250 250 0 0 1 441 128 Z" +
  "M880 768 H1169 A48 48 0 0 1 1217 816 V1104 A48 48 0 0 1 1169 1152 H880 A48 48 0 0 1 832 1104 V816 A48 48 0 0 1 880 768 Z" +
  "M880 1281 H1425 A48 48 0 0 1 1473 1329 V1693 A48 48 0 0 1 1425 1741 H880 A48 48 0 0 1 832 1693 V1329 A48 48 0 0 1 880 1281 Z";

export function IconMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="191 128 1666 1794"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={MARK_PATH}
        fillRule="evenodd"
        fill="var(--color-accent-strong)"
      />
    </svg>
  );
}
