import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import all images that need preloading
import ctfCognitoLogo from "@assets/Adobe Express - file_1759044466581.png";
import offensoLogo from "@assets/Offenso-Logo-White.png_1759068476216.webp";
import cognitoTechfestLogo from "@assets/Untitled design_1759044466581.png";

interface ImagePreloaderProps {
  onComplete: () => void;
  children: React.ReactNode;
}

const images = [
  ctfCognitoLogo,
  offensoLogo,
  cognitoTechfestLogo
];

export default function ImagePreloader({ onComplete, children }: ImagePreloaderProps) {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => {
              const newCount = prev + 1;
              setLoadingProgress((newCount / images.length) * 100);
              return newCount;
            });
            resolve(src);
          };
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
          onComplete();
        }, 300);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Still proceed if some images fail
        setIsLoading(false);
        onComplete();
      }
    };

    preloadImages();
  }, [onComplete]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* CTF Logo during loading */}
          <motion.div 
            className="mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              rotateY: [0, 5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center neon-border">
              <div className="text-4xl font-orbitron font-bold text-gradient">CTF</div>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.h2 
            className="text-2xl font-orbitron font-bold mb-6 text-gradient"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading CTF Cognito
          </motion.h2>

          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {/* Glowing effect */}
              <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Loading assets...</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
          </div>

          {/* Loading status */}
          <motion.p 
            className="mt-4 text-sm text-muted-foreground"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {loadedImages < images.length ? `Loading ${loadedImages + 1} of ${images.length} assets` : "Finalizing..."}
          </motion.p>

          {/* Cyber effect particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
