import { motion } from "framer-motion";

interface ModernTextProps {
  text: string;
  className?: string;
}

export default function ModernText({ text, className = "", ...props }: ModernTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      {...props}
    >
      <motion.h1
        className="relative z-10 font-orbitron font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1,
        }}
        whileInView={{
          textShadow: [
            "0 0 0px rgba(6, 182, 212, 0)",
            "0 0 20px rgba(6, 182, 212, 0.4)",
            "0 0 40px rgba(6, 182, 212, 0.6)",
            "0 0 20px rgba(6, 182, 212, 0.4)",
            "0 0 0px rgba(6, 182, 212, 0)",
          ],
        }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          y: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          textShadow: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }
        }}
      >
        {text}
      </motion.h1>
      
      {/* Modern accent lines */}
      <motion.div
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        <motion.div
          className="h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}