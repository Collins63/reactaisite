// OrbitRing: icons evenly spaced around two concentric rings with a glowing core.
// Needs React + Tailwind CSS.
import type { ReactNode } from "react";

interface OrbitItem {
  title: string;
  icon: ReactNode;
}

interface OrbitRingProps {
  items: OrbitItem[];
  center?: ReactNode;
}

export default function OrbitRing({ items, center }: OrbitRingProps) {
  const step = 360 / items.length;

  return (
    <div className="relative flex aspect-square w-[22rem] scale-75 rounded-full border border-gray-700 sm:scale-100">
      <div className="m-auto flex aspect-square w-60 rounded-full border border-gray-700">
        <div className="m-auto aspect-square w-24 rounded-full bg-[conic-gradient(from_0deg,#AC6AFF,#FF77E6,#FFC876,#AC6AFF)] p-[0.2rem]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 text-white">
            {center}
          </div>
        </div>
      </div>

      <ul>
        {items.map((item, index) => (
          <li
            key={item.title}
            title={item.title}
            className="absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom"
            style={{ transform: `rotate(${index * step}deg)` }}
          >
            {/* Counter-rotate so every icon stays upright. */}
            <div
              className="relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-xl border border-gray-300 bg-neutral-800 text-white"
              style={{ transform: `rotate(-${index * step}deg)` }}
            >
              {item.icon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
