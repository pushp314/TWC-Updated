import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials-data';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured';
}

export function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`
        relative overflow-hidden rounded-2xl p-1
        ${isFeatured ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-gray-800 to-gray-700'}
      `}
    >
      <div className="relative bg-gray-900 p-6 rounded-xl">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 opacity-20 blur-2xl rounded-full" />
        
        <Quote className="h-8 w-8 text-purple-400 mb-4" />
        
        <div className="flex items-center space-x-1 text-yellow-400 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>

        <p className="text-gray-300 mb-6 line-clamp-4">
          {testimonial.content}
        </p>

        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-500"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-white">
              {testimonial.name}
            </h4>
            <div className="text-sm text-gray-400">
              {testimonial.role}
              {testimonial.company && (
                <span className="mx-1">•</span>
              )}
              <span className="text-purple-400">{testimonial.company}</span>
            </div>
            {testimonial.eventType && (
              <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-purple-900/50 text-purple-300 border border-purple-700/50">
                {testimonial.eventType}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}