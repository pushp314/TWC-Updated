import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCarousel } from './testimonial-carousel';
import { TestimonialFilters } from './testimonial-filters';
import { FadeIn } from '../animations/fade-in';
import { testimonials } from '../../data/testimonials-data';

export function TestimonialSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = React.useMemo(() => {
    const eventTypes = new Set(testimonials.map(t => t.eventType));
    return ['All', ...Array.from(eventTypes)].filter(Boolean);
  }, []);

  const filteredTestimonials = React.useMemo(() => {
    if (activeCategory === 'All') return testimonials;
    return testimonials.filter(t => t.eventType === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover why clients choose us for their special events
            </motion.p>
          </div>
        </FadeIn>

        <div className="mt-12">
          <TestimonialFilters
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="mt-8">
          <TestimonialCarousel testimonials={filteredTestimonials} />
        </div>
      </div>
    </section>
  );
}