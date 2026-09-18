"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function ServicesSection() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Ashentrix Solutions, we combine advanced technology with human
          expertise to deliver scalable, multilingual, and industry-ready
          outsourcing solutions designed to adapt to your business goals,
          enhance customer engagement, and create measurable long-term value.
        </p>
      </motion.div>

      {/* TOP 2 HIGHLIGHTED CARDS (With Entry Animation & 3D Flip) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 lg:mb-16 items-stretch"
      >
        {/* Card 01: UAE Banking */}
        <motion.div variants={itemVariants} className="group w-full h-[360px] [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.02)] z-10 shadow-lg hover:shadow-2xl rounded-3xl">
            {/* --- FRONT OF CARD --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
              <div className="bg-white border border-purple-100 rounded-3xl p-5 sm:p-6 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#280b57] to-purple-400 rounded-r-full"></div>
                <div className="pl-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-5 flex items-center gap-3 uppercase tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#280b57] to-purple-500 text-2xl">01</span> 
                    UAE BANKING SALES OPERATIONS
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "International UAE banking sales process",
                      "Credit Cards & Personal Loans",
                      "Working with banking / NBFC-led product portfolios",
                      "Lead qualification & customer conversations",
                      "Follow-up, documentation coordination & conversion support",
                      "Performance tracking and sales reporting",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                        <span className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --- BACK OF CARD (PPT Data) --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="bg-gradient-to-br from-[#280b57] to-purple-900 border border-purple-700 rounded-3xl p-5 sm:p-6 h-full flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-8 bottom-8 w-1.5 bg-purple-400 rounded-l-full"></div>
                <div className="pr-4 flex-grow flex flex-col">
                  <p className="text-[11px] sm:text-xs text-purple-100 mb-3 font-medium border-b border-purple-700/50 pb-3">
                    Customer acquisition and sales support for credit-card and
                    loan products.
                  </p>
                  <div className="grid grid-cols-2 gap-3 flex-grow overflow-y-auto pr-1">
                    {[
                      { step: "01", title: "Lead Intake", desc: "Receive & organize prospects" },
                      { step: "02", title: "Connect", desc: "Professional customer engagement" },
                      { step: "03", title: "Qualify", desc: "Need & eligibility, DBR & Profile" },
                      { step: "04", title: "Convert", desc: "Product presentation & follow-up" },
                      { step: "05", title: "Document", desc: "Application/document coordination" },
                      { step: "06", title: "Report", desc: "MIS, productivity & outcomes" },
                    ].map((box, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex flex-col justify-center hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-purple-300 font-black text-xs">{box.step}</span>
                          <h4 className="font-bold text-[10px] sm:text-xs uppercase text-white tracking-wider">{box.title}</h4>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-purple-200 leading-relaxed">{box.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-center mt-3 font-semibold text-purple-300 italic">
                    Objective: build predictable sales while maintaining experience & compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 02: Education */}
        <motion.div variants={itemVariants} className="group w-full h-[360px] [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.02)] z-10 shadow-lg hover:shadow-2xl rounded-3xl">
            {/* --- FRONT OF CARD --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
              <div className="bg-white border border-purple-100 rounded-3xl p-5 sm:p-6 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#280b57] to-purple-400 rounded-r-full"></div>
                <div className="pl-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-5 flex items-center gap-3 uppercase tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#280b57] to-purple-500 text-2xl">02</span> 
                    PAN-INDIA EDUCATION & ADMISSIONS
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Certification Courses",
                      "UG & PG Programs",
                      "Admission counselling and lead handling",
                      "Student / parent query resolution",
                      "Follow-up and application support",
                      "Coordination across tied-up universities",
                      "Conversion-focused calling and reporting",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                        <span className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --- BACK OF CARD (New PPT Data) --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="bg-gradient-to-br from-[#280b57] to-purple-900 border border-purple-700 rounded-3xl p-5 sm:p-6 h-full flex flex-col shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-8 bottom-8 w-1.5 bg-purple-400 rounded-l-full"></div>
                <div className="pr-4 flex-grow flex flex-col">
                  <p className="text-[11px] sm:text-xs text-purple-100 mb-4 font-medium border-b border-purple-700/50 pb-3">
                    Counselling-led customer engagement across certification, UG
                    and PG programs.
                  </p>
                  <div className="grid grid-cols-2 gap-3 flex-grow overflow-y-auto pr-1">
                    {[
                      { title: "Lead Mgt", desc: "Fresh enquiry, callbacks & priority.", borderColor: "border-l-purple-400" },
                      { title: "Counselling", desc: "Program, eligibility, fee guidance.", borderColor: "border-l-purple-400" },
                      { title: "Follow-Up", desc: "Structured follow-up journeys.", borderColor: "border-l-purple-400" },
                      { title: "App Support", desc: "Document verification & admission.", borderColor: "border-l-purple-400" },
                      { title: "Univ Co-ord", desc: "Support across tied-up portfolios.", borderColor: "border-l-purple-400" },
                      { title: "MIS & Quality", desc: "Daily reporting & quality feedback.", borderColor: "border-l-purple-400" },
                    ].map((box, idx) => (
                      <div key={idx} className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/5 border-l-4 ${box.borderColor} flex flex-col justify-center hover:bg-white/20 transition-colors`}>
                        <h4 className="font-bold text-[10px] sm:text-xs mb-1 text-white tracking-wider">
                          {box.title}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-purple-200 leading-relaxed">
                          {box.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ORIGINAL 8 GRID CARDS (Now with Premium Animations) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {[
          { title: "Customer Support (Voice/Chat/Email)", desc: "Personalized, multilingual assistance to enhance customer satisfaction and retention", img: "/images/services/customersupport.jpg", link: "/services/customer-support" },
          { title: "Technical Support", desc: "End-to-end troubleshooting and product support powered by skilled professionals", img: "/images/services/technicalsupport.jpg", link: "/services/technical-support" },
          { title: "Back Office Operations", desc: "Streamlined processing and documentation services for improved efficiency", img: "/images/services/backofficeoperations.jpg", link: "/services/back-office" },
          { title: "Data Processing & Data Services", desc: "Secure data management and transformation for business intelligence", img: "/images/services/data.jpg", link: "/services/data-processing" },
          { title: "Analytics & Reporting", desc: "Actionable insights through real-time data monitoring and performance analysis", img: "/images/services/reporting.jpg", link: "/services/analytics-reporting" },
          { title: "Collections Process", desc: "Efficient, compliant, and customer-friendly debt recovery solutions", img: "/images/services/process.jpg", link: "/services/collections" },
          { title: "Recruitment & Talent Support", desc: "Scalable hiring solutions to meet your workforce and project demands", img: "/images/services/talentsupport.jpg", link: "/services/recruitment" },
          { title: "Operations Management", desc: "Process optimization and workflow monitoring for consistent results", img: "/images/services/operations.jpg", link: "/services/operations-management" },
        ].map((service, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Link href={service.link} className="block h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-purple-300 hover:shadow-[0_15px_40px_rgb(40,11,87,0.12)] transition-all duration-300 h-full flex flex-col group cursor-pointer"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle purple overlay on hover */}
                  <div className="absolute inset-0 bg-[#280b57]/0 group-hover:bg-[#280b57]/10 transition-colors duration-500" />
                </div>
                <div className="p-6 flex-grow flex flex-col relative bg-white">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 leading-tight group-hover:text-[#280b57] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  {/* Animated bottom line */}
                  <span className="block h-1 w-0 bg-gradient-to-r from-[#280b57] to-purple-500 mt-5 group-hover:w-12 transition-all duration-500 ease-out rounded-full" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
