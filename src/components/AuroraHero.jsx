
import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


const AuroraHero = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 , px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Developer   
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-blue-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent 
        sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Collins Chimbganda
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Full Stack developer dedicated to bringing high end solution to clients from around the globe
        </p>
        <motion.button
          whileHover={{
            scale: 1.015
          }}
          whileTap={{
            scale: 0.985
          }}
          style={{
            border,
            boxShadow,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Developer With Me
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
     {/* <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div> */}

    </motion.section>
  );
}

export default AuroraHero
