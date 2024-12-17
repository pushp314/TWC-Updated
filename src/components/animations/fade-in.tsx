import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function FadeIn({ children, direction = 'up', delay = 0, className = '' }: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction],
      }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : directions[direction].x,
        y: inView ? 0 : directions[direction].y,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 1.02, 0.73, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}