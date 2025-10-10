import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "", ...props }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      {...props}
    >
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 #06b6d4, -2px 0 0 #d946ef",
            "0 0 0 transparent",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 z-0 text-secondary"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 z-0 text-primary"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
