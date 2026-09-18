"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    }, 5000); // Slightly increased time for better readability

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

  // Framer Motion Variants (TypeScript Error Free)
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  return (
    <section className="relative bg-[#F8FAFC] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header Section */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-purple-50 border border-purple-100 rounded-full px-5 py-2 shadow-sm">
              Client Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to build the success stories of tomorrow with forward-thinking
            organizations around the globe.
          </p>
        </motion.div>

        {/* Premium Testimonial Card */}
        <div 
          className="relative bg-[#280b57] p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-900/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Inner Glow/Design Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Large Quote Watermark */}
          <div className="absolute top-8 left-8 text-white/5 pointer-events-none transform -scale-x-100">
            <Quote size={180} strokeWidth={1} />
          </div>

          <div className="text-center relative min-h-[320px] flex flex-col justify-center items-center z-10">
            
            {/* Animated Content using AnimatePresence */}
            <div className="flex-1 relative w-full flex items-center justify-center">
              <AnimatePresence mode="wait" custom={1}>
                <motion.div
                  key={currentIndex}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full max-w-4xl"
                >
                  <Quote className="w-10 h-10 mx-auto text-purple-400 mb-8" fill="currentColor" />
                  
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white mb-10 leading-snug font-medium tracking-tight">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="mb-4">
                    <p className="text-xl font-bold text-white mb-1">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-purple-300 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
                      {testimonials[currentIndex].position}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-purple-200/70 text-sm font-medium">
                      <span>{testimonials[currentIndex].company}</span>
                      <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                      <span>{testimonials[currentIndex].industry}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-8 mt-12 pt-8 border-t border-white/10">
              
              {/* Dots Indicator */}
              <div className="flex gap-3 order-2 sm:order-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      index === currentIndex 
                        ? "w-10 bg-purple-400" 
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-4 order-1 sm:order-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#280b57] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#280b57] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
