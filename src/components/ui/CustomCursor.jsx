import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    const checkIsTouch = () => {
      setIsDesktop(!window.matchMedia("(pointer: coarse)").matches);
    };
    
    checkIsTouch();
    window.addEventListener('resize', checkIsTouch);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovering(true);
        setHoverText(target.getAttribute('data-cursor') || '');
      } else if (e.target.closest('a, button, input, [role="button"]')) {
         setIsHovering(true);
         setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkIsTouch);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering && !hoverText ? 1.5 : isHovering && hoverText ? 0 : 1,
          opacity: isHovering && hoverText ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      
      {/* Expanded state with text */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center bg-accent text-white text-xs font-bold tracking-widest pointer-events-none z-[100] rounded-full px-4 py-4 min-w-20 min-h-20 text-center uppercase"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering && hoverText ? 1 : 0,
          opacity: isHovering && hoverText ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {hoverText}
      </motion.div>
    </>
  );
}
