import React from 'react';
import { PageTransition } from '../components/layout/page-transition';
import { FadeIn } from '../components/animations/fade-in';
import { GalleryGrid } from '../components/gallery/gallery-grid';

export function Gallery() {
  return (
    <PageTransition>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Our Event Gallery
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Browse through our collection of memorable events and celebrations
              </p>
            </div>
          </FadeIn>

          <GalleryGrid />
        </div>
      </div>
    </PageTransition>
  );
}