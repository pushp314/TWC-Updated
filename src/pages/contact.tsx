import React from 'react';
import { PageTransition } from '../components/layout/page-transition';
import { FadeIn } from '../components/animations/fade-in';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <PageTransition>
      <div className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                Let's discuss how we can make your event extraordinary
              </p>
            </div>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Have a question or want to discuss your event? Fill out the form and we'll get back to you shortly.
                </p>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Phone</p>
                      <a href='tel:+919713000063' className="text-gray-500 dark:text-gray-400">+91 97130 00063</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Email</p>
                      <a href='maito:eventtwc@gmail.com' className="text-gray-500 dark:text-gray-400">eventtwc@gmail.com</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Address</p>
                      <p className="text-gray-500 dark:text-gray-400">Shop No. 2 Shri Laxminarayan Complex, 1st Floor, Smriti Nagar, Junwani, Bhilai, 490020</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400 transition-colors duration-200"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}