import React, { useState, useMemo } from "react";
import { FadeIn } from "../animations/fade-in";
import { TestimonialScroll } from "../testimonials/testimonial-scroll";
import { TestimonialFilters } from "../testimonials/testimonial-filters";
import { testimonials } from "../../data/testimonials-data";

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract categories dynamically
  const categories = useMemo(() => {
    const eventTypes = new Set(testimonials.map((t) => t.eventType));
    return ["All", ...Array.from(eventTypes)].filter(Boolean);
  }, []);

  // Filter testimonials based on category
  const filteredTestimonials = useMemo(() => {
    if (activeCategory === "All") return testimonials;
    return testimonials.filter((t) => t.eventType === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
              Trusted by Event Professionals
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
              See what our customers have to say about their experience with EventHub
            </p>
          </div>
        </FadeIn>

        {/* Testimonial Filters */}
        <div className="mt-8 sm:mt-10">
          <TestimonialFilters
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Testimonials Scroll */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <TestimonialScroll testimonials={filteredTestimonials} speed={40} />
        </div>
      </div>
    </section>
  );
}
