import React from "react";
import { BackgroundBeamsdesign } from "./design/BackgroundBeamsDesign"; 
import { PlaceholdersAndVanishInputDemo } from "./TextVanish";

export default function BackgroundBeamsDemo() {
  return (
    <div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold"
        >
        Chimbganda Collins
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto mt-5 my-2 text-sm text-center relative z-10"
        >
          Hi, I’m Collins — a Full Stack Developer crafting seamless digital experiences from pixel to production.
          I design intuitive interfaces, build robust backends, and connect ideas to reality through clean, scalable code. Whether it’s modern web apps, mobile solutions, or complex system integrations, I turn challenges into elegant, functional software that works as beautifully as it looks.
        </p>
        <PlaceholdersAndVanishInputDemo />
      </div>
      <BackgroundBeamsdesign />
    </div>
  );
}
