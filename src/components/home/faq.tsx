import React from 'react';
import { FadeIn } from '../animations/fade-in';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What types of events do you specialize in?',
    answer: 'We specialize in a wide range of events including weddings, corporate events, birthday parties, anniversaries, and cultural celebrations. Our team has extensive experience in managing both intimate gatherings and large-scale events.',
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking our services at least 3-6 months in advance for smaller events and 6-12 months for larger events like weddings. However, we also accommodate last-minute bookings based on availability.',
  },
  {
    question: 'Do you offer customizable packages?',
    answer: 'Yes, we offer fully customizable packages tailored to your specific needs and budget. Our team will work closely with you to create the perfect package that aligns with your vision and requirements.',
  },
  {
    question: 'What areas do you serve?',
    answer: "We primarily serve the greater metropolitan area and surrounding regions. For destination events, we're happy to travel nationally or internationally upon request.",
  },
  {
    question: 'Can you help with vendor selection?',
    answer: "Absolutely! We have an extensive network of trusted vendors including photographers, caterers, decorators, and entertainers. We'll help you select the perfect vendors that match your style and budget.",
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              Everything you need to know about our event planning services
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="mt-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-4 rounded-lg bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-purple-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-purple-600" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}