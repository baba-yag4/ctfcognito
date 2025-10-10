import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Apply custom cursor globally
    document.body.style.cursor = 'url(/cursors/custom-cursor.cur), auto';
    
    // Apply to all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
