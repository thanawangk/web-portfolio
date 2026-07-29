import { Mail } from "lucide-react";

const ICON_SIZE = 21;
const ICON_STROKE = 2.2;

function MailIcon() {
  return (
    <Mail size={ICON_SIZE} strokeWidth={ICON_STROKE} className="shrink-0" />
  );
}

export function MailButton({
  email,
  className = "",
}: {
  email: string;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className={`group relative inline-flex max-w-full items-center justify-center gap-1.5 overflow-hidden rounded-2xl border-[3px] border-on-accent bg-accent px-[clamp(10px,3.2vw,34px)] py-[clamp(11px,2.2vw,13px)] text-[clamp(11px,3.4vw,17px)] font-bold whitespace-nowrap text-on-accent [box-shadow:5px_5px_0_var(--color-on-accent)] [transition:translate_0.3s_cubic-bezier(0.34,1.56,0.64,1),box-shadow_0.3s_ease,background-color_0.3s_ease] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-accent-hover hover:text-on-accent hover:[box-shadow:2px_2px_0_var(--color-on-accent)] ${className}`}
    >
      <span className="absolute top-0 -left-8 flex h-full items-center opacity-0 [transition:left_0.35s_cubic-bezier(0.65,0,0.35,1),opacity_0.3s_ease] group-hover:left-6 group-hover:opacity-100">
        <MailIcon />
      </span>
      <span className="[transition:translate_0.35s_cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[13px]">
        {email}
      </span>
      <span className="inline-flex items-center [transition:translate_0.35s_cubic-bezier(0.65,0,0.35,1),opacity_0.3s_ease] group-hover:translate-x-[30px] group-hover:opacity-0">
        <MailIcon />
      </span>
    </a>
  );
}
