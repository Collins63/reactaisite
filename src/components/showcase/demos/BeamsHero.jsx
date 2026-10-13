// BeamsHero: a hero with a gradient headline and animated light beams behind it.
// Needs React, Tailwind CSS and framer-motion.
import { useId } from "react";
import { motion } from "framer-motion";

// 24 curves from the same family, each shifted a little from the last.
const paths = Array.from({ length: 24 }, (_, i) => {
  const x = i * 7;
  const y = i * -8;
  return `M${-380 + x} ${-189 + y}C${-380 + x} ${-189 + y} ${-312 + x} ${216 + y} ${152 + x} ${343 + y}C${616 + x} ${470 + y} ${684 + x} ${875 + y} ${684 + x} ${875 + y}`;
});

function Beams() {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={`url(#${uid}-${i})`} strokeOpacity="0.4" strokeWidth="0.5" />
      ))}
      <defs>
        {paths.map((_, i) => (
          <motion.linearGradient
            key={i}
            id={`${uid}-${i}`}
            initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
            animate={{ x1: ["0%", "100%"], x2: ["0%", "95%"], y1: ["0%", "100%"], y2: ["0%", `${93 + (i % 8)}%`] }}
            transition={{ duration: 10 + ((i * 7) % 10), ease: "easeInOut", repeat: Infinity, delay: (i * 3) % 10 }}
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="32.5%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  );
}

export default function BeamsHero({ title, text, children }) {
  return (
    <div className="relative flex h-[26rem] w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 antialiased">
      <div className="relative z-10 mx-auto max-w-2xl p-4 text-center">
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm text-neutral-500">{text}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
      <Beams />
    </div>
  );
}
