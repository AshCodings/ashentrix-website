"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Send, MapPin, Globe, Phone, Clock, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

// Static link arrays component ke bahar
const aboutLinks = [
  { name: "About Ashentrix", href: "/about" },
  { name: "Vision & Mission", href: "/about/vision-mission" },
  { name: "Leadership", href: "/leadership" },
  { name: "Awards & Recognition", href: "/about/awards" },
  { name: "News & Media", href: "/about/news-media" },
  { name: "Investors & Partners", href: "/about/investors-partners" },
];

const careerLinks = [
  { name: "Life at Ashentrix", href: "/careers/life-at-ashentrix" },
  { name: "Current Openings", href: "/careers/current-openings" },
  { name: "Internship Programs", href: "/careers/internship" },
  { name: "Apply Now", href: "/careers/apply" },
];

const contactLinks = [
  { name: "Contact Form", href: "/contact" },
  { name: "Office Locations", href: "/contact/locations" },
  { name: "Partner With Us", href: "/contact/partner" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Data Security & Compliance", href: "/data_security_compliance" },
  { name: "Terms of Service", href: "/legal" },
  { name: "Disclaimer", href: "/disclaimer" },
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

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0F1C] text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 border-t border-gray-800">
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#280b57]/30 blur-[120px] rounded-full pointer-events-none will-change-transform hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none will-change-transform hidden md:block" />

      {/* Main Footer Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 will-change-opacity"
      >
        {/* Top Section - Brand and Newsletter */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 lg:mb-16 pb-12 lg:pb-16 border-b border-white/10 will-change-transform will-change-opacity">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-white italic mb-4 tracking-tighter">
              Ashentrix
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              Leading the future of business process outsourcing with
              innovation, excellence, and transformative solutions.
            </p>
          </div>

          <div className="text-center lg:text-left flex flex-col justify-center">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-5 text-sm sm:text-base font-medium">
              Subscribe to our newsletter for the latest insights, case studies,
              and industry trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0 w-full relative">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/10 text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#280b57] to-purple-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap will-change-transform"
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Links Section - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* About */}
          <motion.div variants={itemVariants} className="will-change-transform will-change-opacity">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">About Us</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} prefetch={false} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Careers */}
          <motion.div variants={itemVariants} className="will-change-transform will-change-opacity">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Careers</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              {careerLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} prefetch={false} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="will-change-transform will-change-opacity">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              {contactLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} prefetch={false} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="will-change-transform will-change-opacity">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} prefetch={false} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Premium Information Card (Glassmorphism Layout) */}
        <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 mb-10 shadow-2xl relative overflow-hidden will-change-transform will-change-opacity">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {/* Headquarters */}
            <div className="flex gap-4 items-start">
              <a
                href="https://maps.app.goo.gl/dUGQXaC57fm5eXQi9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3.5 rounded-xl text-purple-300 shrink-0 hover:bg-purple-500 hover:text-white transition-all hover:scale-110 hover:-rotate-3 group will-change-transform"
                aria-label="View Ashentrix Solutions on Google Maps"
              >
                <MapPin className="w-6 h-6 group-hover:animate-bounce" />
              </a>
              <div>
                <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-sm">Headquarters</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  <a
                    href="https://maps.app.goo.gl/dUGQXaC57fm5eXQi9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors"
                  >
                    A-22, 1st Floor, Sector 4, Noida,<br />
                    Gautam Buddha Nagar, U.P.,<br />
                    India - 201301
                  </a>
                </p>
                <a
                  href="https://www.ashentrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-purple-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  www.ashentrix.com
                </a>
              </div>
            </div>

            {/* Reach Us */}
            <div className="flex gap-4 items-start">
              <div className="bg-white/10 p-3.5 rounded-xl text-purple-300 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-sm">Reach Us</h4>
                <div className="space-y-3 text-sm font-medium text-gray-400">
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href="mailto:service@ashentrix.com" className="text-white hover:text-purple-400 transition-colors">
                      service@ashentrix.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href="tel:+919711179821" className="text-white hover:text-purple-400 transition-colors">
                      +91-971 117 9821
                    </a>
                  </p>
                   <p className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-gray-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                    </svg>
                    <a
                      href="https://wa.me/919711179821"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#9b87f5] transition-colors"
                    >
                      +91-971 117 9821
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="bg-white/10 p-3.5 rounded-xl text-purple-300 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-sm">Business Hours</h4>
                <div className="space-y-2 text-sm font-medium text-gray-400">
                  <p>Mon to Sat: <span className="text-white ml-1">10 AM to 8 PM</span></p>
                  <p>Sunday: <span className="text-white ml-1">Closed</span></p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    24/7 Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 text-sm font-medium text-gray-500 pt-8 mt-4 border-t border-white/10 will-change-transform will-change-opacity">
          
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} Ashentrix Solutions. All rights reserved worldwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-end">
            <a
              href="https://www.linkedin.com/company/ashentrix/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 will-change-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/AshentrixS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 will-change-transform"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1G9RXYRy3V/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:-translate-y-1 transition-all duration-300 will-change-transform"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ashentrixsolutions?stkn=MTBuMzZvc2UwaWo0cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 will-change-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
