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
      className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-screen"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(0, 0)',
      }}
    >
      {/* Cyan glitch layer - offset left */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(-2px, -2px)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L8 3L8 8L11 8L11 11L8 11L8 16L3 16L3 3Z" fill="#00ffff" opacity="0.8"/>
        </svg>
      </div>
      
      {/* Magenta glitch layer - offset right */}
      <div 
        className="absolute"
        style={{
          transform: 'translate(2px, 2px)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L8 3L8 8L11 8L11 11L8 11L8 16L3 16L3 3Z" fill="#ff00ff" opacity="0.8"/>
        </svg>
      </div>
      
      {/* White center layer */}
      <div className="absolute">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L8 3L8 8L11 8L11 11L8 11L8 16L3 16L3 3Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
