import { motion } from "framer-motion";

const slashes = [
  { id: 1, rotation: -15, delay: 0 },
  { id: 2, rotation: 5, delay: 0.3 },
  { id: 3, rotation: 20, delay: 0.6 },
];

export default function TigerClawAnimation() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {slashes.map((slash) => (
        <motion.div
          key={slash.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: slash.delay,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 w-40 h-1 border-t-4 border-red-600 origin-left"
          style={{
            transform: `translate(-50%, -50%) rotate(${slash.rotation}deg)`,
            boxShadow: "0 0 20px red",
          }}
        />
      ))}

      <motion.div
        className="absolute bottom-10 left-1/2 text-white text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        🐅 Tiger Claw!
      </motion.div>
    </div>
  );
}