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
          transform: 'translate(1.5px, 1.5px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 2L3 13L6.5 9.5L9 9.5L11 15L12.5 14.5L10.5 9L14 9L3 2Z" fill="#00ff00" opacity="0.5"/>
        </svg>
      </div>
      
      {/* Bright green glitch - left offset */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(-1.5px, -0.5px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 2L3 13L6.5 9.5L9 9.5L11 15L12.5 14.5L10.5 9L14 9L3 2Z" fill="#00ff41" opacity="0.85"/>
        </svg>
      </div>
      
      {/* Lime green glitch - right offset */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(1px, 0.5px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 2L3 13L6.5 9.5L9 9.5L11 15L12.5 14.5L10.5 9L14 9L3 2Z" fill="#39ff14" opacity="0.75"/>
        </svg>
      </div>
      
      {/* Main cursor */}
      <div className="absolute">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 2L3 13L6.5 9.5L9 9.5L11 15L12.5 14.5L10.5 9L14 9L3 2Z" fill="white" stroke="#00ff41" strokeWidth="0.4"/>
        </svg>
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute"
        style={{
          filter: 'blur(2px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 2L3 13L6.5 9.5L9 9.5L11 15L12.5 14.5L10.5 9L14 9L3 2Z" fill="#00ff41" opacity="0.35"/>
        </svg>
      </div>
    </div>
  );
}
