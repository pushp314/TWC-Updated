import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PartyPopper, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 1.02, 0.73, 0.99],
    },
  },
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

export function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 dark:opacity-10"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
            animate={{
              scale: [1, 2, 1],
              x: [0, Math.random() * 400 - 200, 0],
              y: [0, Math.random() * 400 - 200, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              backgroundColor: i % 2 === 0 ? '#c084fc' : '#f472b6',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-12"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white mb-4">
                  Creating Magical
                </span>
                <motion.span
                  className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                  Event Experiences
                </motion.span>
              </h1>
              <motion.p
                variants={itemVariants}
                className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
              >
                Transform your special moments into extraordinary memories with our expert event planning services
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r p-3 from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto text-lg rounded"
              >
                Start Planning
                <motion.span animate={floatingAnimation} className="inline-block ml-2">
                  <PartyPopper className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </motion.span>
              </Link>
              <Link
                to="/services"
                className="group border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 w-full sm:w-auto text-lg p-3 rounded"
              >
                Explore Services
                <motion.span animate={floatingAnimation} className="inline-block ml-2">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}