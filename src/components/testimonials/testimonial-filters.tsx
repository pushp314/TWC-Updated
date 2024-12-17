import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface TestimonialFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function TestimonialFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: TestimonialFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="flex items-center gap-2 text-gray-400">
        <Filter className="h-4 w-4" />
        <span className="text-sm font-medium">Filter by:</span>
      </div>
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full text-sm transition-all duration-200
            ${activeCategory === category
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}