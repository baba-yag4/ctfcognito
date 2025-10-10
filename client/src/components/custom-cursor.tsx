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
      {/* Compact crosshair ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.05,
        }}
      >
        <div className="relative w-5 h-5">
          {/* Outer ring */}
          <div className="absolute inset-0 border border-cyan-400/80 rounded-full"></div>
          
          {/* Small corner brackets */}
          <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-l border-t border-cyan-400"></div>
          <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-r border-t border-cyan-400"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-l border-b border-cyan-400"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-r border-b border-cyan-400"></div>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_rgba(34,211,238,0.6)]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
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
