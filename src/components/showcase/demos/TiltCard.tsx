// TiltCard: a card that tilts towards the cursor. Needs React + Tailwind CSS.
import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

interface TiltCardProps {
  title: string;
  text: string;
  max?: number;
}

export default function TiltCard({ title, text, max = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(700px) rotateX(${-y * max}deg) rotateY(${x * max}deg) scale(1.03)`,
    });
  };

  const reset = () => setStyle({ transform: "perspective(700px) rotateX(0) rotateY(0) scale(1)" });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className="w-64 rounded-3xl border border-white/10 bg-neutral-900 p-6 text-white shadow-xl transition-transform duration-200 ease-out"
    >
      <h4 className="mb-2 text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}
