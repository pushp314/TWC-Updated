import React from 'react';
import { Calendar, Users, BarChart, Shield } from 'lucide-react';
import { FadeIn } from '../animations/fade-in';

const features = [
  {
    icon: Calendar,
    title: 'Easy Event Creation',
    description: 'Create and manage events in minutes with our intuitive interface.',
  },
  {
    icon: Users,
    title: 'Attendee Management',
    description: 'Track registrations, send updates, and manage your audience effortlessly.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with comprehensive event analytics.',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security for your events and attendee data.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose EventHub?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to create successful events
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white p-8 rounded-lg border border-gray-200 group-hover:border-transparent transition-colors duration-300">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg text-blue-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}