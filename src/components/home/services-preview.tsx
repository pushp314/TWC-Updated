import React from 'react';
import { PartyPopper, Gift, Camera, Music, Utensils, Users } from 'lucide-react';
import { FadeIn } from '../animations/fade-in';
import { Button } from '../ui/button';

const services = [
  {
    icon: PartyPopper,
    title: 'Event Planning',
    description: 'Full-service event planning and coordination for any occasion',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Gift,
    title: 'Wedding Services',
    description: 'Creating magical moments for your special day',
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography and videography services',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Live music, DJs, and performance artists',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Utensils,
    title: 'Catering',
    description: 'Exquisite dining experiences and beverage services',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Professional corporate event management solutions',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive event solutions tailored to your needs
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-white p-8 rounded-xl border border-gray-200 group-hover:border-transparent transition-colors duration-300">
                  <div className={`${service.color} rounded-lg p-3 inline-block`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
            >
              View All Services
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}