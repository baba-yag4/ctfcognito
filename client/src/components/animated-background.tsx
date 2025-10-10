import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="matrix-bg">
      <div className="matrix-rain circuit-pattern">
        {/* Animated circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M0 20h40M20 0v40" 
                stroke="url(#circuitGradient)" 
                strokeWidth="0.5" 
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="url(#circuitGradient)" />
            </pattern>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(292, 76%, 58%)" />
              <stop offset="50%" stopColor="hsl(187, 85%, 53%)" />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Matrix rain effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </div>
  );
}
