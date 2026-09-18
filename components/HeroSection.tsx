"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const punchline = "Powered by People. Driven by Technology. Built for Global Scale.";

  return (
    <section className="relative min-h-screen flex items-center bg-[#f8fafc] overflow-hidden">
      
      {/* 1. Animated Mesh Gradient Orbs (Smooth Floating Effect) */}
      <motion.div
        animate={{ 
          x: [0, 50, 0, -50, 0], 
          y: [0, -50, 50, 0, 0],
          scale: [1, 1.1, 1, 1.05, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-300/40 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          x: [0, -60, 0, 60, 0], 
          y: [0, 60, -60, 0, 0],
          scale: [1, 1.2, 1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-300/30 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          x: [0, 30, -30, 0], 
          y: [0, 30, -30, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#280b57]/10 blur-[150px] pointer-events-none"
      />

      {/* 2. Subtle Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Bottom fade out to blend with next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-20 lg:pt-13 lg:pb-28 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
                Transforming Operations.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-600">
                  Empowering Growth.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 max-w-lg bg-white/40 backdrop-blur-sm p-2 rounded-xl">
                Ashentrix Solutions Pvt. Ltd. delivers technology-enabled customer
                support, technical support, helpdesk, ticketing, back-office,
                data, analytics, and managed operations solutions to help
                businesses improve service, customer experience, efficiency, and
                scale globally.
              </p>
            </motion.div>

            {/* Typewriter Effect Punchline (5 seconds duration) */}
            <motion.p 
              className="text-[#280b57] font-bold text-lg sm:text-xl mb-10 tracking-wide"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.8,
                    staggerChildren: 5 / punchline.length, 
                  },
                },
              }}
            >
              {punchline.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/* Modern Pill-Shaped Buttons with Motion Hover */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#280b57] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a063b] transition-colors duration-300 shadow-lg shadow-purple-900/20 text-center relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-md border border-gray-200 text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:border-[#280b57] hover:bg-white transition-colors duration-300 shadow-sm text-center"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* Image Content with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 md:-translate-y-8 lg:-translate-y-12 group border border-white/50"
          >
            <Image
              src="/images/home.jpg"
              alt="Business Operations"
              width={800}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              priority
            />
            {/* Very light overlay to keep image looking sharp */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#280b57]/10 to-transparent pointer-events-none mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
