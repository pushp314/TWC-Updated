import React from 'react';
import { Hero } from '../components/home/hero';
import { ServicesPreview } from '../components/home/services-preview';
import { TeamPreview } from '../components/home/team-preview';
import { Testimonials } from '../components/home/testimonials';
import { ContactPreview } from '../components/home/contact-preview';
import { GalleryPreview } from '../components/gallery/gallery-preview';
import { FAQ } from '../components/home/faq';

export function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <TeamPreview />
      <Testimonials />
      <FAQ />
      <ContactPreview />
    </>
  );
}