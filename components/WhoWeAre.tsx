"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WhoWeAre() {
  // Framer Motion Variants for Smooth Staggered Animations (Error-Free)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="who-we-are" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
              Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">We Are</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8">
              Ashentrix Solutions is a professional business
              process management company based in Delhi NCR, India. We
              specialize in providing end-to-end outsourcing services across
              Insurance, Telecom, Healthcare, Ecommerce, Hardware & IoT,
              Entertainment, Social Platforms, Finance, Accounting, Recruitment,
              Logistics, Banking, Travel, and Hospitality.
            </motion.p>
            
            {/* Vertical Cards Section */}
            <div className="flex flex-col gap-5 pt-8 border-t border-gray-100">
              
              {/* Card 1 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300 group cursor-default"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#280b57] to-purple-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4">
                  <h3 className="text-sm font-bold text-[#280b57] mb-2 uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                    CUSTOMER EXPERIENCE
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Voice, chat and email support designed around customer satisfaction, responsiveness and service quality.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300 group cursor-default"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#280b57] to-purple-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4">
                  <h3 className="text-sm font-bold text-[#280b57] mb-2 uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                    PROCESS EXCELLENCE
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Structured workflows, training, quality monitoring, reporting and continuous process improvement.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300 group cursor-default"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#280b57] to-purple-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="pl-4">
                  <h3 className="text-sm font-bold text-[#280b57] mb-2 uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                    SCALABLE DELIVERY
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Flexible manpower and operating models that can scale with business volumes and service requirements.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageVariants}
            className="relative h-96 lg:h-full lg:min-h-[600px] w-full mt-8 lg:mt-0 group"
          >
            {/* Image Decorative Background Blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-[#280b57]/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
              <Image
                src="/images/whoweare.jpg"
                alt="Ashentrix Team"
                width={600}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-[#280b57]/0 group-hover:bg-[#280b57]/10 transition-colors duration-500 pointer-events-none" />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -left-6 sm:-left-10 bg-white p-5 rounded-2xl shadow-xl border border-purple-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#280b57] font-black text-xl">
                ★
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Committed to</p>
                <p className="text-[#0F172A] font-extrabold text-lg">Excellence</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
