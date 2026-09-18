"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
  description: string;
  image: string;
}

const StatCard = ({
  value,
  suffix,
  label,
  description,
  image,
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion's clean hook to replace IntersectionObserver
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const targetValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (isInView && targetValue) {
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(40,11,87,0.25)] transition-all duration-500 flex flex-col border border-gray-100"
    >
      {/* Background Image with Overlay */}
      <div className="relative h-64 w-full overflow-hidden shrink-0">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Premium Deep Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#280b57]/95 via-black/50 to-transparent" />

        {/* Animated Number Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
            <div className="text-6xl font-black text-white mb-2 drop-shadow-2xl tracking-tight">
              {suffix === "+" ? `${count.toLocaleString()}+` : `${count}%`}
            </div>
            <div className="text-purple-200 font-bold text-xs uppercase tracking-widest">
              {label}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 bg-white flex-grow flex flex-col justify-between relative">
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-[#280b57] transition-colors duration-500">
              <svg
                className="w-6 h-6 text-[#280b57] group-hover:text-white transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[#475569] text-sm leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom Badge with pulsing dot */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#280b57] uppercase tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#280b57]"></span>
            </span>
            Verified Result
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function ResultsSection() {
  const stats = [
    {
      value: "45",
      suffix: "%",
      label: "Faster Response Time",
      description:
        "Ready to achieve significant improvements in response times through process optimization and AI-powered automation for your business.",
      image: "/images/pro3.jpg",
    },
    {
      value: "1200",
      suffix: "+",
      label: "Hours Saved Monthly",
      description:
        "Equipped to deliver substantial operational savings through intelligent automation and workflow optimization for enterprise clients.",
      image: "/images/pro1.jpg",
    },
    {
      value: "30",
      suffix: "%",
      label: "Cost Reduction",
      description:
        "Enabled 30% operational cost reduction for global manufacturing operations through strategic process redesign and resource optimization.",
      image: "/images/pro2.jpg",
    },
  ];

  // Framer Motion Variants (Typescript fixed)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="results"
      className="bg-[#0A0F1C] py-24 relative overflow-hidden"
    >
      {/* Deep Space Background Enhancements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#280b57]/40 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-bold text-purple-200 uppercase tracking-widest bg-white/5 backdrop-blur-md px-5 sm:px-6 py-2 border border-white/10 rounded-full shadow-lg">
              Impact That Matters
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Proven Results, Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#8b5cf6]">Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real transformations delivered to industry leaders across the
            globe. Our data-driven approach consistently delivers exceptional
            outcomes.
          </p>
        </motion.div>

        {/* Staggered Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Bar (Glassmorphism + Premium Rounded) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Internal Glow for Bar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#280b57]/40 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">2025</div>
              <div className="text-purple-300 font-semibold text-xs sm:text-sm uppercase tracking-widest">
                Launch Year
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">100%</div>
              <div className="text-purple-300 font-semibold text-xs sm:text-sm uppercase tracking-widest">
                Commitment
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">Fresh</div>
              <div className="text-purple-300 font-semibold text-xs sm:text-sm uppercase tracking-widest">
                Perspective
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">24/7</div>
              <div className="text-purple-300 font-semibold text-xs sm:text-sm uppercase tracking-widest">
                Dedication
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
