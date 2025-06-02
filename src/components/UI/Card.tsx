import { ReactNode, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);



  // Track global mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuously update hover circle while hovering
  const startTracking = () => {
    const updatePosition = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCoords({
        x: mouseRef.current.x - rect.left,
        y: mouseRef.current.y - rect.top,
      });
      animationFrame.current = requestAnimationFrame(updatePosition);
    };
    updatePosition();
  };

  const stopTracking = () => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={startTracking}
      onMouseLeave={stopTracking}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute w-60 h-60 rounded-full bg-gradient-to-br from-purple-600 via-cyan-400 to-blue-500 opacity-20 blur-[100px] mix-blend-screen z-0 transition-transform duration-200 ease-out"
          style={{
            top: coords.y - 120,
            left: coords.x - 120,
          }}
        />
      )}

      <motion.div
        whileHover={
          hoverEffect
            ? {
                y: -5,
                boxShadow:
                  '0 10px 25px -5px rgba(255, 100, 120, 0.1), 0 8px 10px -6px rgba(255, 100, 120, 0.1)',
              }
            : {}
        }
        className={`
          glass rounded-xl overflow-hidden relative z-10
          hover-glow transition-all duration-300
          p-6 md:p-8
          ${className}
        `}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Card;
