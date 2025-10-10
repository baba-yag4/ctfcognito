import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(0, 0)',
      }}
    >
      {/* Dark green shadow - offset */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(2px, 2px)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L5 17L9 13L12 13L15 21L17 20L14 12L19 12L5 3Z" fill="#00ff00" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Bright green glitch - left offset */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(-2px, -1px)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L5 17L9 13L12 13L15 21L17 20L14 12L19 12L5 3Z" fill="#00ff41" opacity="0.8"/>
        </svg>
      </div>
      
      {/* Lime green glitch - slight offset */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(1px, 1px)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L5 17L9 13L12 13L15 21L17 20L14 12L19 12L5 3Z" fill="#39ff14" opacity="0.7"/>
        </svg>
      </div>
      
      {/* Main white cursor with green tint */}
      <div className="absolute">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L5 17L9 13L12 13L15 21L17 20L14 12L19 12L5 3Z" fill="white" stroke="#00ff41" strokeWidth="0.5"/>
        </svg>
      </div>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute"
        style={{
          filter: 'blur(3px)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L5 17L9 13L12 13L15 21L17 20L14 12L19 12L5 3Z" fill="#00ff41" opacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}
