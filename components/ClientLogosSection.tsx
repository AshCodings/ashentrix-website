"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  Heart,
  Radio,
  ShoppingCart,
  DollarSign,
  Truck,
  Plane,
  Film,
  Computer,
  Building,
  GraduationCap,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

// [OPTIMIZATION 1]: Static data aur Variants ko component se bahar rakha hai.
// Isse har baar scroll/render hone par ye dubara memory me create nahi honge (Saves RAM/CPU).
const industries = [
  { name: "Insurance Partnership", icon: Shield, industry: "Insurance", href: "/industries/insurance" },
  { name: "Healthcare Solutions", icon: Heart, industry: "Healthcare", href: "/industries/healthcare" },
  { name: "Telecom Services", icon: Radio, industry: "Telecom", href: "/industries/telecom" },
  { name: "E-commerce Growth", icon: ShoppingCart, industry: "E-commerce", href: "/industries/ecommerce" },
  { name: "Finance & Accounting", icon: DollarSign, industry: "Finance & Accounting", href: "/industries/finance" },
  { name: "Logistics & Supply Chain", icon: Truck, industry: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
  { name: "Travel & Hospitality", icon: Plane, industry: "Travel, Hospitality & Cargo", href: "/industries/travel" },
  { name: "Entertainment & Social", icon: Film, industry: "Entertainment & Social Platforms", href: "/industries/social-platforms" },
  { name: "IT, Hardware & IoT", icon: Computer, industry: "IT, Hardware & IoT", href: "/industries/hardware-iot" },
  { name: "Real Estate & Property", icon: Building, industry: "Real Estate", href: "/industries/real-estate" },
  { name: "Education & EdTech", icon: GraduationCap, industry: "Education & EdTech", href: "/industries/education" },
  { name: "Govt. & Public Sector", icon: Landmark, industry: "Govt. & Public Sector", href: "/industries/govt-public-sector" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ClientLogosSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#F8FAFC]">
      {/* Subtle Background Glows & Image Overlay */}
      {/* [OPTIMIZATION 2]: 'will-change-transform' add kiya taaki scroll pe repaints kam hon */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none will-change-transform"
        style={{ backgroundImage: "url('/growing-image.webp')" }}
      />
      {/* [OPTIMIZATION 3]: Heavy blurs ko mobile (hidden md:block) se hata diya ya optimize kar diya hai taaki mobile devices hang na hon */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/50 blur-[120px] rounded-full pointer-events-none will-change-transform hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none will-change-transform hidden md:block" />
      
      {/* Light Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20 will-change-transform will-change-opacity"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-white/80 backdrop-blur-md border border-purple-100 rounded-full px-5 py-2 shadow-sm">
              Global Scale
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Ready for New <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Partnerships</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium bg-white/30 backdrop-blur-sm p-2 rounded-xl inline-block">
            We&apos;re excited to partner with forward-thinking organizations
            across industries to drive operational excellence and sustainable
            growth.
          </p>
        </motion.div>

        {/* Animated Staggered Grid for Industries */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-start will-change-opacity"
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full will-change-transform will-change-opacity">
              {/* [OPTIMIZATION 4]: prefetch={false} add kiya gaya hai. Isse Next.js in 12 links ka data background me ek sath download nahi karega. */}
              <Link 
                href={industry.href} 
                prefetch={false}
                className="flex flex-col items-center group cursor-pointer h-full"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-md shadow-sm border border-purple-50 flex items-center justify-center mb-4 group-hover:bg-[#280b57] group-hover:border-[#280b57] group-hover:shadow-[0_15px_30px_rgba(40,11,87,0.2)] transition-all duration-300 rounded-[1.25rem] transform group-hover:-translate-y-2">
                  <industry.icon
                    strokeWidth={1.5}
                    className="w-8 h-8 text-[#280b57] group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] text-center font-bold leading-snug px-2 group-hover:text-[#280b57] transition-colors duration-300">
                  {industry.industry}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Bottom Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 pt-10 border-t border-purple-200/40 will-change-transform will-change-opacity"
        >
          <p className="text-[#280b57] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
            Building Our Client Base With Trust
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-semibold text-gray-800">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-purple-50">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Compliance Ready</span>
            </div>
            <div className="hidden sm:block text-[#280b57]/30 font-bold">•</div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-purple-50">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Security Focused</span>
            </div>
            <div className="hidden sm:block text-[#280b57]/30 font-bold">•</div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-purple-50">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Growth Oriented</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
