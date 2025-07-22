// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from 'react';
import '/src/Styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const speed = 0.2; // SPEED HERE (try 0.2 to 0.5 for fast and smooth)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * speed;
      position.current.y += (mouse.current.y - position.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
      ref={cursorRef}
    />
  );
};

export default CustomCursor;