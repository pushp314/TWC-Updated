import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/fade-in';
import { ImageModal } from './image-modal';
import { GalleryCategories } from './gallery-categories';
import { galleryImages } from '../../data/gallery-data';
import type { GalleryImage } from '../../data/gallery-data';

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [filter, setFilter] = React.useState<string>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === filter.toLowerCase());

  const categories = ['all', ...new Set(galleryImages.map(img => img.category.toLowerCase()))];

  const handleImageSelect = (image: GalleryImage) => {
    setSelectedImage(image);
    setSelectedIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedImage(filteredImages[selectedIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedImage(filteredImages[selectedIndex - 1]);
    }
  };

  return (
    <div className="py-12">
      <GalleryCategories
        categories={categories}
        activeFilter={filter}
        onFilterChange={setFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <FadeIn key={image.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => handleImageSelect(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                  alt={image.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedIndex < filteredImages.length - 1}
          hasPrevious={selectedIndex > 0}
        />
      )}
    </div>
  );
}