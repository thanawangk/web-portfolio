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
      className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-accent px-9 py-4 text-[19px] font-bold text-on-accent [transition:translate_0.25s_cubic-bezier(0.34,1.56,0.64,1),rotate_0.25s_cubic-bezier(0.34,1.56,0.64,1),scale_0.25s_cubic-bezier(0.34,1.56,0.64,1),background_0.25s_ease] hover:-translate-y-[3px] hover:-rotate-[1.5deg] hover:bg-accent-hover hover:text-on-accent active:translate-y-0 active:scale-[0.97] ${className}`}
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
