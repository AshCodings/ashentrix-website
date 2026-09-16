"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const punchline = "Powered by People. Driven by Technology. Built for Global Scale.";

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      {/* Subtle Background Glow Elements for Premium Feel */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />

      {/* Changed padding here: pt-8 pb-20 moves it up on mobile */}
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
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 max-w-lg">
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
                    delayChildren: 0.8, // Header load hone ke thodi der baad typing shuru hogi
                    staggerChildren: 5 / punchline.length, // Poora sentence exact 5 second mein type hoga
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
                className="bg-[#280b57] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a063b] transition-colors duration-300 shadow-lg shadow-purple-900/20 text-center"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-200 text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:border-[#280b57] hover:bg-gray-50 transition-colors duration-300 shadow-sm text-center"
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
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 md:-translate-y-8 lg:-translate-y-12 group"
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
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
