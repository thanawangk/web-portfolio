import { Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MailButtonProps } from "@/types/ui.types";

const iconSize = 21;
const iconStroke = 2.2;

function MailIcon() {
  return <Mail size={iconSize} strokeWidth={iconStroke} className="shrink-0" />;
}

export function MailButton({ email, className }: MailButtonProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={cn(
        "group relative inline-flex max-w-full items-center justify-center gap-1.5 overflow-hidden rounded-3xl border-[3px] border-on-accent bg-accent px-3 py-[11px] text-xs font-bold whitespace-nowrap text-on-accent sm:px-5 sm:text-lg md:px-6 md:py-[13px] lg:px-8 shadow-(--shadow-offset-button) transition-[translate,box-shadow,background-color] duration-300 ease-[var(--ease-spring),ease,ease] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-accent-hover hover:text-on-accent hover:shadow-(--shadow-offset-button-hover)",
        className,
      )}
    >
      <span className="absolute top-0 -left-8 flex h-full items-center opacity-0 transition-[left,opacity] duration-[0.35s,0.3s] ease-[var(--ease-icon),ease] group-hover:left-6 group-hover:opacity-100">
        <MailIcon />
      </span>
      <span className="transition-[translate] duration-[0.35s] ease-icon group-hover:translate-x-[18px]">
        Send me a message
      </span>
      <span className="inline-flex items-center transition-[translate,opacity] duration-[0.35s,0.3s] ease-[var(--ease-icon),ease] group-hover:translate-x-[30px] group-hover:opacity-0">
        <MailIcon />
      </span>
    </a>
  );
}
