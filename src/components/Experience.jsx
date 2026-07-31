import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import TagLine from "./Tagline";
import { grid } from "../assets";
import { fdms, landingPage, TallyTaphome, tigerwebHome, touristaHome } from "../assets";

const experience = [
  {
    id: "0",
    year: "2025",
    title: "TigerWeb",
    text: "Add a short description of what this project was and your role in it.",
    imageUrl: tigerwebHome,
  },
  {
    id: "1",
    year: "2025",
    title: "Landing Page",
    text: "Add a short description of what this project was and your role in it.",
    imageUrl: landingPage,
  },
  {
    id: "2",
    year: "2025",
    title: "TallyTap",
    text: "A point of sale system made for mobile users, complete with all the benefits of a point of sale plus optional fiscalization.",
    imageUrl: TallyTaphome,
  },
  {
    id: "3",
    year: "2024",
    title: "FDMS Gateway",
    text: "Add a short description of what this project was and your role in it.",
    imageUrl: fdms,
  },
  {
    id: "4",
    year: "2024",
    title: "Tourista",
    text: "Add a short description of what this project was and your role in it.",
    imageUrl: touristaHome,
  },
  {
    id: "5",
    year: "Mid 2023",
    title: "Internship",
    text: "Started my internship as a junior, primarily focusing on IT support, troubleshooting and system installations.",
    imageUrl: null,
  },
];

const groupByYear = (items) => {
  return items.reduce((groups, item) => {
    if (!groups[item.year]) groups[item.year] = [];
    groups[item.year].push(item);
    return groups;
  }, {});
};

export function Experience() {
  const [activeItem, setActiveItem] = useState(null);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      setHeight(listRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  const grouped = groupByYear(experience);
  const years = Object.keys(grouped);

  return (
    <Section className="overflow-hidden" id="experience">
      <div className="container md:pb-10">
        <Heading tag="My journey so far" title="Experience" />

        <div className="relative" ref={containerRef}>
          <div className="relative" ref={listRef}>
            {years.map((year) => (
              <div key={year} className="relative pl-16 md:pl-20 mb-16 last:mb-0">
                <div className="absolute left-3 top-0 h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-stroke-1" />
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <span className="h3 text-white">{year}</span>
                  <div className="flex-1 h-0.25 bg-stroke-1" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {grouped[year].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      className="group relative text-left p-0.25 rounded-[2rem] bg-gray-300 transition-colors hover:bg-gradient-to-b hover:from-color-1 hover:to-color-5"
                    >
                      <div className="relative flex h-full flex-col p-6 bg-neutral-900 rounded-[1.95rem] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="absolute top-0 left-0 max-w-full opacity-20 pointer-events-none">
                          <img className="w-full" src={grid} width={550} height={550} alt="" />
                        </div>

                        <div className="relative z-1 flex h-full flex-col">
                          <TagLine className="text-white mb-6">{item.year}</TagLine>

                          <h4 className="h5 mb-2 text-white">{item.title}</h4>
                          <p className="body-2 text-gray-400 line-clamp-3">{item.text}</p>

                          <span className="font-code text-xs text-color-1 uppercase tracking-wider mt-auto pt-6">
                            View journey →
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div
              style={{ height: height + "px" }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{ height: lineHeight, opacity: lineOpacity }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-color-1 via-color-5 to-transparent rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70"
              onClick={() => setActiveItem(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-neutral-900 rounded-[2rem] border border-stroke-1"
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center bg-neutral-800 rounded-full text-white transition-colors hover:bg-neutral-700"
                  aria-label="Close"
                >
                  ✕
                </button>

                {activeItem.imageUrl && (
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-56 object-cover rounded-t-[2rem]"
                  />
                )}

                <div className="p-8">
                  <TagLine className="text-white mb-4">{activeItem.year}</TagLine>
                  <h3 className="h3 mb-4 text-white">{activeItem.title}</h3>
                  <p className="body-2 text-gray-400">{activeItem.text}</p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}
