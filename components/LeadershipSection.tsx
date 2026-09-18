"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface LeadershipMember {
  name: string;
  position: string;
  description: string;
  image: string;
  expertise: string[];
}

export default function LeadershipSection() {
  const leaders: LeadershipMember[] = [
    {
      name: "Ashish Kumar Jha",
      position: "Founder & Managing Director",
      description:
        "Visionary leader and founder of Ashentrix Solutions, dedicated to transforming business process outsourcing with innovative solutions and exceptional service delivery.",
      image: "/ashishjha.jpg",
      expertise: ["Business Strategy", "Market Leadership", "Innovation Focus"],
    },
    {
      name: "Priya Jha",
      position: "Co-Founder & Executive Director",
      description:
        "Co-founder and operational excellence expert focused on building scalable processes and ensuring seamless service delivery for global clients.",
      image: "/priyajha.jpg",
      expertise: [
        "Operations Excellence",
        "Process Optimization",
        "Client Relations",
      ],
    },
  ];

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-white border border-purple-100 rounded-full px-5 py-2 shadow-sm">
              Our Visionaries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4 sm:mb-6 tracking-tight">
            Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Meet the experienced leaders driving innovation and delivering
            exceptional results for our clients globally.
          </p>
        </motion.div>

        {/* Animated Leaders List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 sm:gap-10 max-w-4xl mx-auto"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2rem] overflow-hidden group hover:shadow-[0_20px_50px_rgba(40,11,87,0.1)] transition-all duration-500 border border-gray-100 relative"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#280b57] to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 items-center sm:items-stretch">
                
                {/* Image Container */}
                <div className="relative w-48 sm:w-56 lg:w-64 h-56 sm:h-auto shrink-0 mx-auto sm:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50/30 border border-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain sm:object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#280b57]/0 group-hover:bg-[#280b57]/5 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2 group-hover:text-[#280b57] transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-purple-600 font-bold mb-4 text-sm sm:text-base tracking-wide uppercase">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
                    {leader.description}
                  </p>

                  {/* Expertise Pills */}
                  <div className="space-y-3 mt-auto">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      Core Expertise
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-1.5 bg-purple-50/50 border border-purple-100 text-[#280b57] text-xs font-semibold rounded-full group-hover:bg-purple-50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0">
            Join our team of industry experts and shape the future of business
            operations.
          </p>
          <Link href="/career-opportunities">
            <button className="bg-[#280b57] text-white px-8 sm:px-10 py-4 text-sm sm:text-base font-bold hover:bg-purple-900 shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1 transition-all duration-300 rounded-full inline-flex items-center gap-2">
              View Career Opportunities
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
