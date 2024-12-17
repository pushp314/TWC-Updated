import React from 'react';
import { PageTransition } from '../components/layout/page-transition';
import { FadeIn } from '../components/animations/fade-in';
import { Camera, Music, Palette, MapPin, Sparkles, Wine, Users, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional photo and video coverage to capture every magical moment of your event.',
    features: [
      'Professional photographers & videographers',
      'High-quality equipment',
      'Same-day photo previews',
      'Cinematic video editing',
      'Drone photography available'
    ],
    color: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Palette,
    title: 'Decoration & Design',
    description: 'Transform your venue into a stunning space with our creative decoration services.',
    features: [
      'Custom theme design',
      'Floral arrangements',
      'Lighting design',
      'Props and furniture',
      'Stage and backdrop setup'
    ],
    color: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Entertainment & Performances',
    description: 'Elevate your event with live music, DJs, performers, and interactive entertainment.',
    features: [
      'Professional musicians & DJs',
      'Dance performances',
      'Magic shows',
      'Interactive games',
      'Themed entertainment'
    ],
    color: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: MapPin,
    title: 'Venue & Location',
    description: 'Find the perfect venue for your event with our selection of indoor and outdoor locations.',
    features: [
      'Indoor & outdoor venues',
      'Scenic locations',
      'City center venues',
      'Rooftop spaces',
      'Waterfront views'
    ],
    color: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Wine,
    title: 'Catering & Bar Services',
    description: 'Delight your guests with a selection of gourmet dishes and premium beverage options.',
    features: [
      'Custom menu creation',
      'Buffet & plated meals',
      'Cocktail bar services',
      'Professional waitstaff',
      'Dessert & cake options'
    ],
    color: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: Users,
    title: 'Event Planning & Coordination',
    description: 'Comprehensive event planning and coordination services to bring your vision to life.',
    features: [
      'Event design & concept',
      'Vendor coordination',
      'Timeline & schedule',
      'Budget management',
      'On-site event management'
    ],
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
  },

  {
    icon: PartyPopper,
    title: 'Event Planning',
    description: 'Full-service event planning and coordination for any occasion',
    features:[
      'Full-service event planning',
      'Custom event design',
      'Vendor coordination',
      'Budget management',
      'On-site event management'
    ],
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Live music, DJs, and performance artists',
    features:[
      'Professional musicians & DJs',
      'Dance performances',
      'Magic shows',
      'Interactive games',
      'Themed entertainment'
    ],
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  
  }


];

export function Services() {
  return (
    <PageTransition>
      <div className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                Comprehensive event solutions tailored to create unforgettable experiences
              </p>
            </div>
          </FadeIn>

          <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur dark:group-hover:opacity-70" />
                  <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-lg dark:shadow-purple-900/20">
                    <div className={`${service.color} rounded-lg p-3 inline-block ring-1 ring-black/5 dark:ring-white/10`}>
                      <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.features && service.features.map((feature) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-center text-gray-500 dark:text-gray-400"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sparkles className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}