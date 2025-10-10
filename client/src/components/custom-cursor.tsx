import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Outer ring with crosshair design */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.05,
        }}
      >
        <div className="relative w-10 h-10">
          {/* Outer cyan ring */}
          <div className="absolute inset-0 border-2 border-cyan-400/70 rounded-full"></div>
          
          {/* Crosshair lines */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400/50 -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-400/50 -translate-x-1/2"></div>
          
          {/* Corner brackets for cyber aesthetic */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400"></div>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.02,
        }}
      />
    </>
  );
}
