// GlassButton: a blurred, translucent button. Needs React + Tailwind CSS.
import type { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function GlassButton({ children, onClick, className = "" }: GlassButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0 ${className}`}
    >
      {children}
    </button>
  );
}
