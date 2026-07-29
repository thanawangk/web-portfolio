import Image, { type StaticImageData } from "next/image";
import type {
  ButtonIconProps,
  IconButtonColor,
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
  IconSource,
} from "@/types/ui";

/**
 * Annotated with Record so a colour added to IconButtonColor without an entry
 * here is an error on this object, not further down at the lookup.
 *
 * Every variant carries a 1.5px border — transparent on the filled ones — so
 * all three keep an identical box height regardless of colour.
 */
const COLORS: Record<IconButtonColor, string> = {
  accent:
    "border-transparent bg-accent text-on-accent hover:bg-accent-hover hover:text-on-accent",
  light:
    "border-transparent bg-text text-on-accent hover:bg-white hover:text-on-accent",
  outline:
    "border-border-strong bg-transparent text-text-secondary hover:border-accent hover:text-accent",
};

const SIZES: Record<IconButtonSize, IconButtonVariant> = {
  sm: { shell: "gap-2 px-[22px] py-[9px] text-nav", icon: 18 },
  md: { shell: "gap-2 px-[26px] py-[13px] text-base", icon: 20 },
};

/**
 * Shared lift-and-tilt. Written as an arbitrary property with literal curves:
 * Tailwind drops `cqw`-style units and tree-shakes var(--ease-spring) when no
 * utility references it, so neither survives inside arbitrary *values*.
 */
const TRANSITION =
  "[transition:translate_0.25s_cubic-bezier(0.34,1.56,0.64,1),rotate_0.25s_cubic-bezier(0.34,1.56,0.64,1),background-color_0.25s_ease,border-color_0.25s_ease,color_0.25s_ease]";

const HOVER =
  "hover:-translate-y-0.5 hover:-rotate-1 active:translate-y-0 active:scale-[0.97]";

function isImage(icon: IconSource): icon is string | StaticImageData {
  return (
    typeof icon === "string" ||
    (typeof icon === "object" && icon !== null && "src" in icon)
  );
}

function ButtonIcon({ icon, size, eager }: ButtonIconProps) {
  if (!isImage(icon)) {
    const Icon = icon;
    return <Icon size={size} strokeWidth={2.2} className="shrink-0" />;
  }

  return (
    <Image
      src={icon}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading={eager ? "eager" : "lazy"}
      className="shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  );
}

export function IconButton({
  href,
  icon,
  message,
  color = "accent",
  size = "md",
  eager = false,
  onClick,
  className = "",
}: IconButtonProps) {
  const variant = SIZES[size];
  const classes = `inline-flex items-center justify-center rounded-2xl border-[1.5px] font-medium ${variant.shell} ${COLORS[color]} ${TRANSITION} ${HOVER} ${className}`;

  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      <ButtonIcon icon={icon} size={variant.icon} eager={eager} />
      {message}
    </a>
  );
}
