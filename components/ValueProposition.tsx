"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function ValueProposition() {
  // Framer Motion Variants for Smooth Staggered Animations (Error-Free)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const values = [
    {
      title: "Efficiency at Scale",
      desc: "Enhance your workflow with scalable outsourcing solutions powered by smart automation.",
      image: "/images/pro2.jpg",
    },
    {
      title: "Quality Assured",
      desc: "Delivering efficiency, scalability, and excellence in every process we touch.",
      image: "/images/pro3.jpg",
    },
    {
      title: "Cost Optimization",
      desc: "Reduce operational costs while maintaining world-class service standards.",
      image: "/images/pro1.jpg",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-50/60 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-purple-50 border border-purple-100 rounded-full px-5 py-2 shadow-sm">
              Our Value Promise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Process outsourcing designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">performance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Powered by people, perfected by technology. We ensure your business operates at its absolute best.
          </p>
        </motion.div>

        {/* Animated Grid Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-purple-300 hover:shadow-[0_20px_50px_rgb(40,11,87,0.12)] transition-all duration-300 h-full flex flex-col group cursor-pointer"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle purple overlay on hover */}
                  <div className="absolute inset-0 bg-[#280b57]/0 group-hover:bg-[#280b57]/10 transition-colors duration-500 pointer-events-none" />
                </div>
                
                {/* Content Container */}
                <div className="p-8 lg:p-10 flex-grow flex flex-col relative bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4 leading-tight group-hover:text-[#280b57] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-base text-[#475569] leading-relaxed flex-grow">
                    {value.desc}
                  </p>
                  
                  {/* Animated Bottom Line */}
                  <span className="block h-1.5 w-0 bg-gradient-to-r from-[#280b57] to-purple-500 mt-6 group-hover:w-16 transition-all duration-500 ease-out rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
