"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText, Briefcase } from "lucide-react";
import Image from "next/image";

interface ContentCardProps {
  type: "research" | "case";
  title: string;
  image?: string;
  gradient: string;
}

const ContentCard = ({ type, title, image, gradient }: ContentCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative overflow-hidden cursor-pointer group h-[24rem] rounded-3xl shadow-lg border border-white/10 hover:border-purple-400/50 transition-all duration-500"
    >
      {/* Background Image/Gradient with Smooth Scale */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out transform group-hover:scale-110">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.6)" }}
          />
        ) : (
          <div className="absolute inset-0" style={{ background: gradient }} />
        )}
      </div>

      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:from-[#280b57]/95 transition-colors duration-500" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
        {/* Label Badge */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md self-start px-3 py-1.5 rounded-full border border-white/20">
          {type === "research" ? (
            <FileText className="w-3.5 h-3.5 text-purple-300" />
          ) : (
            <Briefcase className="w-3.5 h-3.5 text-blue-300" />
          )}
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase">
            {type === "research" ? "Research" : "Case Study"}
          </span>
        </div>

        {/* Title & Action */}
        <div className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-purple-100 transition-colors duration-300">
            {title}
          </h3>

          {/* Hover Arrow Effect */}
          <div className="flex items-center gap-2 text-purple-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
            <span className="text-sm font-semibold tracking-wide uppercase">Read more</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function InsightsSection() {
  const cards: ContentCardProps[] = [
    {
      type: "research",
      title: "AI and your operating model: Radically new ways of working",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "case",
      title: "Better, faster, stronger: Reinventing sales at Ashentrix",
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      image: "/images/pro5.jpg",
    },
    {
      type: "research",
      title: "4 critical actions to take now to strengthen your cyber defenses",
      gradient: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "research",
      title: "Trying to scale AI? You're going to need to think big. And act bigger.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #d299c2 100%)",
      image: "/images/pro5.jpg",
    },
    {
      type: "case",
      title: "Uber hails a new era for digital advertising & support",
      gradient: "linear-gradient(135deg, #2e1437 0%, #4a1942 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "research",
      title: "Learning, reinvented: Who's teaching who in 2026?",
      gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      image: "/images/pro5.jpg",
    },
    {
      type: "case",
      title: "Noli uses AI to beat the beauty jungle and find your perfect match",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "research",
      title: "The BPO Reckoning: What's next for global outsourcing?",
      gradient: "linear-gradient(135deg, #c7a17a 0%, #8b7355 100%)",
      image: "/images/pro5.jpg",
    },
  ];

  // Framer Motion Variants for Staggered Grid Entry (TypeScript fix applied)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative min-h-screen bg-[#0A0F1C] py-20 lg:py-28 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#280b57]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-purple-300 uppercase tracking-widest bg-purple-900/30 border border-purple-700/50 rounded-full px-5 py-2">
              Knowledge Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#8b5cf6]">Innovation</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our latest research reports, case studies, and thought leadership from the forefront of business operations.
          </p>
        </motion.div>

        {/* Animated Staggered Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={cardVariants} className="w-full">
              <ContentCard
                type={card.type}
                title={card.title}
                gradient={card.gradient}
                image={card.image}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
