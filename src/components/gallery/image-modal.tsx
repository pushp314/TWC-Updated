import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import type { GalleryImage } from '../../data/gallery-data';

interface ImageModalProps {
  image: GalleryImage;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function ImageModal({ 
  image, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: ImageModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={`${image.url}?auto=format&fit=crop&w=1600&q=80`}
                alt={image.title}
                className="object-cover w-full h-full"
              />
            </div>

            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {image.title}
            </h3>
            <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{image.date}</span>
            </div>
            {image.description && (
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {image.description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}