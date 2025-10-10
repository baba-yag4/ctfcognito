import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Apply custom cursor globally with maximum specificity
    const style = document.createElement('style');
    style.textContent = `
      html, body, * {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
      
      *, *::before, *::after,
      *:hover, *:active, *:focus,
      button, button:hover, button:active,
      a, a:hover, a:active,
      input, select, textarea,
      div, span, section, article,
      iframe, canvas, svg {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
      
      /* Force on leaflet/map elements */
      .leaflet-container,
      .leaflet-grab,
      .leaflet-interactive {
        cursor: url(/cursors/custom-cursor.cur), auto !important;
      }
    `;
    document.head.appendChild(style);
    
    // Also set directly on body
    document.body.style.cursor = 'url(/cursors/custom-cursor.cur), auto';

    return () => {
      document.head.removeChild(style);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return null;
}
