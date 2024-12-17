import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TestimonialCard } from './testimonial-card';
import type { Testimonial } from '../../data/testimonials-data';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const controls = useAnimation();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    controls.start({
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />
      
      <motion.div
        className="flex gap-6 py-4"
        animate={controls}
        style={{ cursor: 'grab' }}
        whileHover={{ animationPlayState: 'paused' }}
        drag="x"
        dragConstraints={containerRef}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`} 
            className="flex-shrink-0 w-[400px]"
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