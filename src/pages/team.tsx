import React from 'react';
import { PageTransition } from '../components/layout/page-transition';
import { FadeIn } from '../components/animations/fade-in';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Saif Siddiqui',
    role: 'Event Director',
    bio: 'With over 15 years of experience in event management, Emma leads our team with creativity and precision.',
    image: 'https://res.cloudinary.com/dzrlzi4fh/image/upload/v1734100203/WhatsApp_Image_2024-12-13_at_18.34.17_c7bab8df_hjr49t.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    name: 'Manish soni',
    role: 'Event Director',
    bio: 'With over 15 years of experience in event management, Emma leads our team with creativity and precision.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    name: 'Suraj gajbhiye',
    role: 'Event Director',
    bio: 'With over 15 years of experience in event management, Emma leads our team with creativity and precision.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    name: 'Bhawani',
    role: 'Event Director',
    bio: 'With over 15 years of experience in event management, Emma leads our team with creativity and precision.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    name: 'Aditya',
    role: 'Event Director',
    bio: 'With over 15 years of experience in event management, Emma leads our team with creativity and precision.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    name: 'Michal',
    role: 'Event Director',
    bio: 'With over 15 years of experience in event management, Emma leads our team with creativity and precision.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },


];

export function Team() {
  return (
    <PageTransition>
      <div className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Meet Our Team
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                Passionate professionals dedicated to creating perfect events
              </p>
            </div>
          </FadeIn>

          <div className="mt-20 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg dark:shadow-purple-900/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-purple-200">{member.role}</p>
                      <p className="mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.bio}
                      </p>
                      <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <motion.a
                            key={platform}
                            href={url}
                            className="text-white hover:text-purple-400 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                            {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                            {platform === 'facebook' && <Facebook className="h-5 w-5" />}
                          </motion.a>
                        ))}
                      </div>
                    </div>
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