import { useState, useEffect } from "react";
import "../../styles/CustomCursor.css"; // Archivo CSS con los estilos para el cursor personalizado
function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setCursorPos({ x, y });
  };

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (event) => {
      const { clientX: x, clientY: y } = event;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPos.x, top: cursorPos.y }}></div>
  );
}

export default CustomCursor;