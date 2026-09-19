"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";


const steps = [
  {
    number: 1,
    title: "Discovery & Assessment",
    subtitle: "Strategic Alignment",
    description:
      "Comprehensive analysis of your business objectives, current processes, and operational challenges to identify optimization opportunities.",
    details: [
      "Business process mapping",
      "Requirements gathering",
      "Stakeholder interviews",
      "Performance baseline establishment",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Solution Design",
    subtitle: "Tailored Strategy",
    description:
      "Development of customized solutions aligned with your specific business needs, incorporating industry best practices and proven methodologies.",
    details: [
      "Custom workflow design",
      "Technology stack selection",
      "Resource allocation planning",
      "KPI framework development",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Implementation",
    subtitle: "Seamless Execution",
    description:
      "Structured deployment with dedicated project management, ensuring minimal disruption to your existing operations while maximizing efficiency gains.",
    details: [
      "Phased rollout approach",
      "Team training & onboarding",
      "System integration",
      "Quality assurance testing",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Optimization & Support",
    subtitle: "Continuous Excellence",
    description:
      "Ongoing monitoring, performance analysis, and continuous improvement to ensure sustained value delivery and operational excellence.",
    details: [
      "24/7 operational support",
      "Performance monitoring",
      "Regular optimization reviews",
      "Scalability planning",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];


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

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } 
  }
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      {/* [OPTIMIZATION 3]: will-change-transform aur hidden md:block add kiya gaya hai mobile lag rokne ke liye */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/40 blur-[100px] rounded-full pointer-events-none will-change-transform hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none will-change-transform hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} // Margin -100px se -50px kiya taaki thoda jaldi load ho
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24 will-change-transform will-change-opacity"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-white border border-purple-100 rounded-full px-5 py-2 shadow-sm">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            How We Drive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven, systematic approach to transforming your operations and
            delivering measurable results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative items-start will-change-opacity"
        >
          {/* Animated Connection Line - Desktop */}
          <motion.div
            variants={lineVariants}
            className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-[#280b57]/40 to-purple-200 origin-left will-change-transform"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => (
            <motion.div
              variants={itemVariants}
              key={step.number}
              className="relative w-full will-change-transform will-change-opacity"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              layout
            >
              <motion.div
                layout
                whileHover={{ y: -8 }}
                className={`bg-white p-6 lg:p-8 rounded-[2rem] cursor-pointer flex flex-col relative overflow-hidden transition-colors duration-300 will-change-transform ${
                  activeStep === index
                    ? "border border-purple-300 shadow-[0_20px_50px_rgba(40,11,87,0.12)]"
                    : "border border-purple-100 shadow-md"
                }`}
              >
                {/* Background Accent for default state */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full pointer-events-none opacity-60"></div>

                {/* Step Number/Icon Badge */}
                <motion.div layout className="relative mb-8 z-10 will-change-transform">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                      activeStep === index
                        ? "bg-gradient-to-br from-[#280b57] to-purple-600 text-white shadow-lg shadow-purple-900/30 scale-110"
                        : "bg-white border-2 border-purple-100 text-purple-300 shadow-sm"
                    }`}
                  >
                    {activeStep === index ? (
                      <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}>
                        {step.icon}
                      </motion.div>
                    ) : (
                      <span className="text-2xl font-black">{`0${step.number}`}</span>
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div layout className="mb-4 z-10 will-change-transform">
                  <span className={`text-xs font-extrabold uppercase tracking-widest transition-colors duration-300 ${activeStep === index ? "text-purple-600" : "text-purple-400"}`}>
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F172A] mt-2 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>

                {/* Details - Show on Hover with Framer Motion AnimatePresence */}
                {/* [OPTIMIZATION 4]: hardware acceleration for accordion layout */}
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden z-10 will-change-transform will-change-opacity"
                    >
                      <div className="pt-4 border-t border-purple-100/50">
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                          Key Activities
                        </p>
                        <ul className="space-y-2.5">
                          {step.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm text-gray-700 font-semibold"
                            >
                              <svg
                                className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Animated Bottom Line for visual weight */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-300 z-10 ${activeStep === index ? "bg-purple-500 opacity-100" : "bg-transparent opacity-0"}`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center will-change-transform will-change-opacity"
        >
          <p className="text-gray-600 mb-8 text-lg font-medium">
            Ready to transform your operations with our proven methodology?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#280b57] text-white px-8 py-4 rounded-full font-bold hover:bg-purple-900 transition-all duration-300 shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1"
          >
            Start Your Journey
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
