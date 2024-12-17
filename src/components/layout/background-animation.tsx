import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[100px] opacity-50 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
    </div>
  );
}