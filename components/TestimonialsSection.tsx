"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  industry: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Ready to transform operations with intelligent automation solutions. Target: 40% efficiency improvement in the first quarter.",
      author: "Your Company",
      position: "Future Partnership",
      company: "Next Success Story",
      industry: "Any Industry",
    },
    {
      quote:
        "Seeking strategic approach to process optimization with goals of 35% cost reduction while improving service quality.",
      author: "Your Team",
      position: "Partnership Opportunity",
      company: "Growth-Focused Organization",
      industry: "All Sectors",
    },
    {
      quote:
        "Looking for expertise in business automation. Committed to delivering complex solutions on time and under budget.",
      author: "Your Organization",
      position: "Potential Partnership",
      company: "Forward-Thinking Business",
      industry: "Any Field",
    },
    {
      quote:
        "Ready to provide outsourcing solutions that allow you to focus on core business growth while maintaining operational excellence.",
      author: "Ashentrix Team",
      position: "Our Promise",
      company: "Ashentrix Solutions",
      industry: "Partnership Ready",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality with useEffect
  useEffect(() => {
    
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Har 5 second mein slide change hogi

    // Cleanup function: component unmount ya hover state change hone par timer clear karein
    return () => clearInterval(timer);
  }, [isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Partnership Vision
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to build the success stories of tomorrow with forward-thinking
            organizations
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div 
          className="relative bg-[#F8FAFC] p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-gray-200 rounded-3xl overflow-hidden shadow-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-center relative min-h-[300px] flex flex-col justify-center">
            
            {/* Quote Icon */}
            <div className="mb-8">
              <svg
                className="w-12 h-12 mx-auto text-[#280b57]/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Animated Content using AnimatePresence */}
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium italic">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="mb-4">
                    <p className="text-lg font-bold text-gray-900">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-[#280b57] font-semibold mt-1">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {testimonials[currentIndex].company} •{" "}
                      {testimonials[currentIndex].industry}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation and Dots */}
            <div className="flex justify-center items-center gap-6 mt-8 pt-8 border-t border-gray-200/60">
              
              {/* Prev Button */}
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#280b57] hover:text-white hover:border-[#280b57] transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "w-8 bg-[#280b57]" 
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#280b57] hover:text-white hover:border-[#280b57] transition-all duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
