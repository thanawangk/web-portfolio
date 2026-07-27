import { Mail } from "lucide-react";

const ICON_SIZE = 17;
const ICON_STROKE = 2.2;

function MailIcon() {
  return (
    <Mail size={ICON_SIZE} strokeWidth={ICON_STROKE} className="shrink-0" />
  );
}

export function MailButton({
  email,
  onClick,
  className = "",
}: {
  email: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-accent px-[22px] py-[9px] text-nav font-medium text-on-accent [transition:translate_0.25s_cubic-bezier(0.34,1.56,0.64,1),scale_0.25s_cubic-bezier(0.34,1.56,0.64,1),background_0.25s_ease] hover:bg-accent-hover hover:text-on-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] ${className}`}
    >
      <span className="absolute top-0 -left-6 flex h-full items-center opacity-0 [transition:left_0.35s_cubic-bezier(0.65,0,0.35,1),opacity_0.3s_ease] group-hover:left-4 group-hover:opacity-100">
        <MailIcon />
      </span>
      <span className="[transition:translate_0.35s_cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[9px]">
        Say hi
      </span>
      <span className="inline-flex items-center [transition:translate_0.35s_cubic-bezier(0.65,0,0.35,1),opacity_0.3s_ease] group-hover:translate-x-[22px] group-hover:opacity-0">
        <MailIcon />
      </span>
    </a>
  );
}
