"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export default function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Manufacturing Digital Transformation",
      client: "Manufacturing Industry Focus",
      industry: "Manufacturing",
      challenge: "Legacy systems creating operational inefficiencies",
      solution: "AI-driven automation and process optimization framework",
      results: [
        "Target: 40% efficiency increase",
        "Goal: 60% cost reduction",
        "Aim: 99% accuracy improvement",
      ],
      image: "/images/pro1.jpg",
    },
    {
      title: "Financial Services Modernization",
      client: "Banking & Finance Sector",
      industry: "Banking & Finance",
      challenge: "Manual processes slowing customer operations",
      solution:
        "Automated workflow systems and intelligent document processing",
      results: [
        "Target: 5x faster processing",
        "Goal: 85% error reduction",
        "Aim: 90% customer satisfaction",
      ],
      image: "/images/pro2.jpg",
    },
    {
      title: "Supply Chain Optimization Blueprint",
      client: "Retail & E-commerce Sector",
      industry: "Retail & E-commerce",
      challenge: "Inventory management inefficiencies",
      solution: "Predictive analytics and real-time tracking systems",
      results: [
        "Target: 95% inventory accuracy",
        "Goal: Significant cost savings",
        "Aim: 30% faster delivery",
      ],
      image: "/images/pro3.jpg",
    },
  ];

  // Framer Motion Variants for Staggered Grid Animations (TypeScript Error Free)
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

  return (
    <section className="relative bg-[#F8FAFC] py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />

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
              Proven Methodologies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Blueprints</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our strategic approach to operational excellence. Explore the
            transformation methodologies we&apos;re ready to implement for your success.
          </p>
        </motion.div>

        {/* Animated Staggered Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(40,11,87,0.12)] hover:border-purple-200 transition-all duration-500 cursor-pointer"
            >
              {/* Premium Image Area with Zoom & Gradient Overlay */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Deep Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#280b57]/90 via-[#280b57]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glassmorphism Industry Badge */}
                <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                  <p className="text-[10px] sm:text-xs font-bold text-white tracking-widest uppercase">
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col bg-white relative">
                <div className="mb-6">
                  <span className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-2 block">
                    Case Study
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F172A] leading-tight mb-2 group-hover:text-[#280b57] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500">{study.client}</p>
                </div>

                <div className="space-y-5 flex-grow">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Challenge
                    </h4>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5">
                      Solution
                    </h4>
                    <p className="text-sm text-[#280b57] font-semibold leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      Key Results
                    </h4>
                    <div className="space-y-2.5">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-gray-600 leading-snug">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Footer Link */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[#280b57] font-bold text-sm group-hover:text-purple-600 transition-colors">
                    Read Full Case Study
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-[#280b57] group-hover:text-white text-[#280b57] transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-[#280b57] text-white px-10 py-4 rounded-full font-bold hover:bg-purple-900 shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1 transition-all duration-300">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
