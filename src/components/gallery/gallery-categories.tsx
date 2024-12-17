import React from 'react';
import { motion } from 'framer-motion';

interface GalleryCategoriesProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export function GalleryCategories({ categories, activeFilter, onFilterChange }: GalleryCategoriesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-purple-100 dark:bg-gray-800 dark:text-gray-300'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.button>
      ))}
    </div>
  );
}