"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface IndustryCardProps {
  title: string;
  image: string;
  href: string;
}

const IndustryCard = ({ title, image, href }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className="block w-full h-full">
      <motion.div
        whileHover={{ y: -8 }}
        className="relative overflow-hidden cursor-pointer group h-[22rem] rounded-2xl shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image with Smooth Scale */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.6)" }}
          />
        </div>

        {/* Premium Dark Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#280b57]/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative h-full flex items-end justify-center p-6 lg:p-8 pb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {title}
            {/* Animated Underline */}
            <span className="block h-1 w-0 bg-purple-400 mt-3 mx-auto group-hover:w-12 transition-all duration-500 ease-out rounded-full" />
          </h3>
        </div>

        {/* Animated Glowing Border */}
        <div className="absolute inset-0 border-[3px] border-white/0 group-hover:border-purple-400/50 transition-all duration-500 rounded-2xl pointer-events-none" />
      </motion.div>
    </Link>
  );
};

export default function IndustriesSection() {
  const industries: IndustryCardProps[] = [
    { title: "Social Platforms", image: "/images/industries/social-platforms.webp", href: "/industries/social-platforms" },
    { title: "Real Estate", image: "/images/industries/real-estate.webp", href: "/industries/real-estate" },
    { title: "Media & Communications", image: "/images/industries/media-communications.webp", href: "/industries/media-communications" },
    { title: "Logistics & Supply Chain", image: "/images/industries/logistics-supply-chain.webp", href: "/industries/logistics-supply-chain" },
    { title: "Hardware & IoT", image: "/images/industries/hardware-iot.webp", href: "/industries/hardware-iot" },
    { title: "Govt. & Public Sector", image: "/images/industries/govt-public-sector.webp", href: "/industries/govt-public-sector" },
    { title: "Energy & Utility", image: "/images/industries/energy-utility.webp", href: "/industries/energy-utility" },
    { title: "Education", image: "/images/industries/education.webp", href: "/industries/education" },
    { title: "Insurance", image: "/images/industries/insurance.webp", href: "/industries/insurance" },
    { title: "Telecom", image: "/images/industries/telecom.webp", href: "/industries/telecom" },
    { title: "Healthcare", image: "/images/industries/healthcare.webp", href: "/industries/healthcare" },
    { title: "E-commerce & Retail", image: "/images/industries/ecommerce.webp", href: "/industries/ecommerce" },
    { title: "Banking & Finance", image: "/images/industries/bank.webp", href: "/industries/finance" },
    { title: "IT & Software Development", image: "/images/industries/it.webp", href: "/industries/it-hardware" },
    { title: "Travel & Hospitality", image: "/images/industries/hospitality.webp", href: "/industries/travel" },
    { title: "Automobiles", image: "/images/industries/automobile.webp", href: "/industries/logistics" },
  ];

  // Framer Motion Variants for Staggered Grid Entry (TypeScript fix applied here)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="industries" className="relative bg-[#0A0F1C] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#280b57]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#280b57]">Serve</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ashentrix Solutions partners with a wide range of industries,
            helping them streamline operations and enhance customer experience
            through customized outsourcing solutions.
          </p>
        </motion.div>

        {/* Animated Staggered Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={cardVariants} className="w-full">
              <IndustryCard
                title={industry.title}
                image={industry.image}
                href={industry.href}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
