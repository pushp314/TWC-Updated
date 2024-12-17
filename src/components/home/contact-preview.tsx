import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FadeIn } from '../animations/fade-in';
import { Button } from '../ui/button';

export function ContactPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Let's discuss how we can make your event extraordinary
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <Phone className="mx-auto h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Call Us</h3>
              <a href='tel:9713000063' target='_blank' className="mt-2 text-gray-500">+91 97130 00063</a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center p-8 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
              <Mail className="mx-auto h-8 w-8 text-pink-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Email Us</h3>
              <a href='mailto:eventtwc@gmail.com' target='_blank' className="mt-2 text-gray-500">eventtwc@gmail.com</a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center p-8 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors duration-300">
              <MapPin className="mx-auto h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Visit Us</h3>
              <a href='#' target='_blank' className="mt-2 text-gray-500">Shop No. 2 Shri Laxminarayan Complex, 1st Floor, Smriti Nagar, Junwani, Bhilai, 490020</a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/+919301863003?text=I%20Need%20More%20Information%20on%20Your%20Services"
              className="bg-gradient-to-r px-5 py-3 rounded from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}