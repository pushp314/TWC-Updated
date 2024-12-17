import React from 'react';
import { PageTransition } from '../components/layout/page-transition';
import { FadeIn } from '../components/animations/fade-in';
import { Award, Target, Users, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every event we create, paying attention to the smallest details.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to create unique and memorable experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to bring their vision to life.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'Bringing fresh ideas and creative solutions to every project.',
  },
];

export function About() {
  return (
    <PageTransition>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                About EventHub
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Creating extraordinary events and unforgettable experiences since 2010
              </p>
            </div>
          </FadeIn>

          <div className="mt-20">
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt="Event planning team"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <FadeIn delay={0.3}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                  <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                    Founded in 2010, EventHub has grown from a small team of passionate event planners
                    to a full-service event management company. Our journey has been marked by countless
                    successful events, happy clients, and unforgettable moments.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                  <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                    We're dedicated to transforming ordinary occasions into extraordinary experiences.
                    Through creativity, precision, and passion, we create events that leave lasting
                    impressions and exceed expectations.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="mt-24">
              <FadeIn delay={0.5}>
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                  Our Values
                </h2>
              </FadeIn>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => (
                  <FadeIn key={value.title} delay={0.2 * (index + 1)}>
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <value.icon className="h-8 w-8 text-purple-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}