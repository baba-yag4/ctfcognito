import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Apply custom cursor globally with smaller size
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
      
      /* Scale down the cursor */
      html {
        cursor: url(/cursors/custom-cursor.cur) 8 8, auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
