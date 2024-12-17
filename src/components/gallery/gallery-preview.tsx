import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/fade-in';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../../data/gallery-data';

export function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Event Gallery
            </h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              Take a glimpse at our recent successful events
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {previewImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-xl"
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

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              <span className="text-lg font-medium">View All Gallery</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}