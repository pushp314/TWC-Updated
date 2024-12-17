import React from 'react';
import { Music, Briefcase, Utensils, Palette, Ticket, Users } from 'lucide-react';
import { FadeIn } from '../animations/fade-in';

const categories = [
  {
    title: 'Music & Concerts',
    icon: Music,
    description: 'Live performances, concerts, and musical events',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Business',
    icon: Briefcase,
    description: 'Conferences, networking, and professional events',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Food & Drink',
    icon: Utensils,
    description: 'Food festivals, wine tasting, and culinary experiences',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Arts & Culture',
    icon: Palette,
    description: 'Exhibitions, theater shows, and cultural festivals',
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Sports & Fitness',
    icon: Users,
    description: 'Sports events, tournaments, and fitness activities',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Entertainment',
    icon: Ticket,
    description: 'Movies, comedy shows, and entertainment events',
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Event Categories
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find the perfect event that matches your interests
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1}>
              <div className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${category.color} rounded-lg p-3 inline-block`}>
                  <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}