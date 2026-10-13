import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import TagLine from "./Tagline";
import { grid } from "../assets";
import PlusSvg from "../assets/svg/PlusSvg";

import GlassButton from "./showcase/demos/GlassButton.jsx";
import ToggleSwitch from "./showcase/demos/ToggleSwitch.jsx";
import TiltCard from "./showcase/demos/TiltCard.jsx";
import Accordion from "./showcase/demos/Accordion.jsx";
import FloatingDock from "./showcase/demos/FloatingDock.jsx";
import CrossCard from "./showcase/demos/CrossCard.jsx";
import OrbitRing from "./showcase/demos/OrbitRing.jsx";
import BeamsHero from "./showcase/demos/BeamsHero.jsx";
import {
  IconBrandDocker,
  IconBrandFlutter,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconCode,
  IconDatabase,
  IconHome,
  IconNewSection,
  IconBrandGithub,
  IconTerminal2,
} from "@tabler/icons-react";

// The code shown to viewers is the real source of each demo file (?raw),
// so the preview and the snippet can never drift apart.
import glassButtonJs from "./showcase/demos/GlassButton.jsx?raw";
import glassButtonTs from "./showcase/demos/GlassButton.tsx?raw";
import toggleSwitchJs from "./showcase/demos/ToggleSwitch.jsx?raw";
import toggleSwitchTs from "./showcase/demos/ToggleSwitch.tsx?raw";
import tiltCardJs from "./showcase/demos/TiltCard.jsx?raw";
import tiltCardTs from "./showcase/demos/TiltCard.tsx?raw";
import accordionJs from "./showcase/demos/Accordion.jsx?raw";
import accordionTs from "./showcase/demos/Accordion.tsx?raw";
import floatingDockJs from "./showcase/demos/FloatingDock.jsx?raw";
import floatingDockTs from "./showcase/demos/FloatingDock.tsx?raw";
import crossCardJs from "./showcase/demos/CrossCard.jsx?raw";
import crossCardTs from "./showcase/demos/CrossCard.tsx?raw";
import orbitRingJs from "./showcase/demos/OrbitRing.jsx?raw";
import orbitRingTs from "./showcase/demos/OrbitRing.tsx?raw";
import beamsHeroJs from "./showcase/demos/BeamsHero.jsx?raw";
import beamsHeroTs from "./showcase/demos/BeamsHero.tsx?raw";

const components = [
  {
    id: "glass-button",
    name: "Glass Button",
    text: "A blurred, translucent button that lifts on hover.",
    tags: ["Tailwind", "Button"],
    preview: <GlassButton>Hover me</GlassButton>,
    code: { javascript: glassButtonJs, typescript: glassButtonTs },
  },
  {
    id: "toggle-switch",
    name: "Toggle Switch",
    text: "An accessible on/off switch with a smooth sliding thumb.",
    tags: ["Tailwind", "Form"],
    preview: <ToggleSwitch label="Notifications" />,
    code: { javascript: toggleSwitchJs, typescript: toggleSwitchTs },
  },
  {
    id: "tilt-card",
    name: "Tilt Card",
    text: "A card that follows your cursor with a subtle 3D tilt.",
    tags: ["Tailwind", "Card"],
    preview: <TiltCard title="Tilt me" text="Move your cursor over this card." />,
    code: { javascript: tiltCardJs, typescript: tiltCardTs },
  },
  {
    id: "accordion",
    name: "Accordion",
    text: "A collapsible list that keeps one panel open at a time.",
    tags: ["Tailwind", "Layout"],
    preview: (
      <Accordion
        items={[
          { title: "What is this?", content: "A small, copy-paste accordion with no dependencies." },
          { title: "Can I use it?", content: "Yes, copy the code and drop it into any React project." },
          { title: "Does it need Tailwind?", content: "Yes, the styling is done with Tailwind utility classes." },
        ]}
      />
    ),
    code: { javascript: accordionJs, typescript: accordionTs },
  },
  {
    id: "floating-dock",
    name: "Floating Dock",
    text: "A glass dock whose icons magnify as the cursor moves over them.",
    tags: ["Framer Motion", "Navigation"],
    preview: (
      <FloatingDock
        items={[
          { title: "Home", icon: <IconHome className="h-full w-full" /> },
          { title: "Projects", icon: <IconTerminal2 className="h-full w-full" /> },
          { title: "Components", icon: <IconNewSection className="h-full w-full" /> },
          { title: "GitHub", icon: <IconBrandGithub className="h-full w-full" /> },
        ]}
      />
    ),
    code: { javascript: floatingDockJs, typescript: floatingDockTs },
  },
  {
    id: "cross-card",
    name: "Cross Card",
    text: "A square, flat card with a cross marker on each corner.",
    tags: ["Tailwind", "Card"],
    preview: (
      <CrossCard
        title="Full Stack Development"
        text="Responsive web apps with clean, maintainable code."
        tags={["React", "Node.js", "MongoDB"]}
      />
    ),
    code: { javascript: crossCardJs, typescript: crossCardTs },
  },
  {
    id: "orbit-ring",
    name: "Orbit Ring",
    text: "Icons spaced around concentric rings with a glowing core.",
    tags: ["Tailwind", "Layout"],
    preview: (
      <OrbitRing
        center={<IconCode className="h-10 w-10" stroke={1.5} />}
        items={[
          { title: "React", icon: <IconBrandReact className="h-7 w-7" /> },
          { title: "Node.js", icon: <IconBrandNodejs className="h-7 w-7" /> },
          { title: "Python", icon: <IconBrandPython className="h-7 w-7" /> },
          { title: "Flutter", icon: <IconBrandFlutter className="h-7 w-7" /> },
          { title: "JavaScript", icon: <IconBrandJavascript className="h-7 w-7" /> },
          { title: "Docker", icon: <IconBrandDocker className="h-7 w-7" /> },
          { title: "Git", icon: <IconBrandGit className="h-7 w-7" /> },
          { title: "Databases", icon: <IconDatabase className="h-7 w-7" /> },
        ]}
      />
    ),
    code: { javascript: orbitRingJs, typescript: orbitRingTs },
  },
  {
    id: "beams-hero",
    name: "Beams Hero",
    text: "A hero with a gradient headline over animated light beams.",
    tags: ["Framer Motion", "Hero"],
    preview: (
      <BeamsHero
        title="Your Name"
        text="A short line about who you are and what you build, sitting over softly animated beams."
      />
    ),
    code: { javascript: beamsHeroJs, typescript: beamsHeroTs },
  },
];

const languages = [
  { key: "javascript", label: "JavaScript", file: "jsx" },
  { key: "typescript", label: "TypeScript", file: "tsx" },
];

const pill = (active) =>
  `px-4 py-1.5 text-xs font-code uppercase tracking-wider transition-colors ${
    active ? "bg-color-1 text-n-8" : "bg-white/10 text-gray-400"
  }`;

export function ComponentsShowcase() {
  const [activeId, setActiveId] = useState(components[0].id);
  const [view, setView] = useState("preview");
  const [lang, setLang] = useState("javascript");
  const [copied, setCopied] = useState(false);

  const active = components.find((c) => c.id === activeId);
  const code = active.code[lang];
  const ext = languages.find((l) => l.key === lang).file;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section className="overflow-hidden" id="components">
      <div className="container md:pb-10">
        <Heading
          tag="Free to use"
          title="Components"
          text="Small reusable UI pieces I've built. Preview them live, then copy the code in JavaScript or TypeScript."
        />

        <div className="grid gap-6 grid-cols-[minmax(0,1fr)] lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {components.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative shrink-0 w-56 lg:w-auto text-left p-0.25 ${
                  item.id === activeId
                    ? "bg-gradient-to-b from-color-1 to-color-5"
                    : "border border-gray-800"
                }`}
              >
                <div className="relative p-5 bg-neutral-900 overflow-hidden">
                  <div className="absolute top-0 left-0 max-w-full opacity-20 pointer-events-none">
                    <img className="w-full" src={grid} width={550} height={550} alt="" />
                  </div>
                  <div className="relative z-1">
                    <h4 className="h5 mb-1 text-white">{item.name}</h4>
                    <p className="body-2 text-gray-400 line-clamp-2">{item.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative min-w-0 p-0.25 border border-gray-800">
            <PlusSvg className="absolute -top-[5.5px] -left-[5.5px] z-2 pointer-events-none" />
            <PlusSvg className="absolute -top-[5.5px] -right-[5.5px] z-2 pointer-events-none" />
            <PlusSvg className="absolute -bottom-[5.5px] -left-[5.5px] z-2 pointer-events-none" />
            <PlusSvg className="absolute -bottom-[5.5px] -right-[5.5px] z-2 pointer-events-none" />
            <div className="relative flex flex-col bg-neutral-900 overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 p-5 border-b border-stroke-1">
                <div>
                  <TagLine className="text-white mb-1">{active.tags.join(" · ")}</TagLine>
                  <h3 className="h4 text-white">{active.name}</h3>
                </div>
                <div className="flex gap-2">
                  <button className={pill(view === "preview")} onClick={() => setView("preview")}>
                    Preview
                  </button>
                  <button className={pill(view === "code")} onClick={() => setView("code")}>
                    Code
                  </button>
                </div>
              </div>

              {view === "preview" ? (
                <div
                  key={active.id}
                  className="flex min-h-[22rem] items-center justify-center p-8 bg-[radial-gradient(circle_at_30%_20%,rgba(172,106,255,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,119,230,0.25),transparent_55%)]"
                >
                  {active.preview}
                </div>
              ) : (
                <div className="min-h-[22rem]">
                  <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-stroke-1">
                    <div className="flex gap-2">
                      {languages.map((l) => (
                        <button key={l.key} className={pill(lang === l.key)} onClick={() => setLang(l.key)}>
                          {l.label}
                        </button>
                      ))}
                    </div>
                    <button className={pill(copied)} onClick={copy}>
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <p className="px-5 pt-4 font-code text-xs text-gray-500">
                    {active.name.replace(/\s/g, "")}.{ext}
                  </p>
                  <pre className="max-h-[26rem] overflow-y-auto whitespace-pre-wrap break-words p-5 text-xs leading-relaxed text-gray-300 font-code">
                    <code>{code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ComponentsShowcase;
