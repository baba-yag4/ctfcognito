import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
}

export default function CyberCard({ children, className = "", ...props }: CyberCardProps) {
  return (
    <motion.div
      className={`cyber-border rounded-xl p-8 card-hover holographic ${className}`}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
