// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from 'react';
import '/src/Styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const speed = 0.001;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check for interactive elements
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
      currentX.current += (mouseX.current - currentX.current) * speed;
      currentY.current += (mouseY.current - currentY.current) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX.current}px`;
        cursorRef.current.style.top = `${currentY.current}px`;
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
