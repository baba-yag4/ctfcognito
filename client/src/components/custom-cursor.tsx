import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Apply custom cursor globally with higher specificity
    const style = document.createElement('style');
    style.textContent = `
      *, *:hover, *:active, *:focus {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
      
      button, button:hover, a, a:hover, input, select, textarea {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
