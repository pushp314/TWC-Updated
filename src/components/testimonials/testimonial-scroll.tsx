import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { TestimonialCard } from './testimonial-card';
import type { Testimonial } from '../../data/testimonials-data';

interface TestimonialScrollProps {
  testimonials: Testimonial[];
  speed?: number; // Duration in seconds
  pauseOnHover?: boolean;
}

export function TestimonialScroll({
  testimonials,
  speed = 40, // Default scroll speed
  pauseOnHover = true,
}: TestimonialScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: '-100%', // Scroll full width
        transition: {
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, speed, controls]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-4"
    >
      {/* Left and Right Overlays */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 pointer-events-none z-10" />

      {/* Motion Container */}
      <motion.div
        className="flex gap-6"
        animate={controls}
        initial={{ x: 0 }}
        onMouseEnter={() => pauseOnHover && controls.stop()}
        onMouseLeave={() => pauseOnHover && controls.start()}
        style={{ cursor: pauseOnHover ? 'pointer' : 'default' }}
      >
        {/* Duplicating Testimonials for Infinite Scroll */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[90%] sm:w-[350px] lg:w-[400px]"
          >
            <TestimonialCard
              testimonial={testimonial}
              variant={index % 3 === 0 ? 'featured' : 'default'}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
