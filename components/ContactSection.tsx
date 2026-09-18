"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Framer Motion Variants for Smooth Staggered Animations
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

  return (
    <section id="contact" className="relative bg-[#F8FAFC] text-gray-900 py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

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
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#280b57]">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your operations? Connect with our experts today and discover how we can drive your business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="bg-white border border-gray-100 p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(40,11,87,0.08)] hover:border-purple-200 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-[#280b57] transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-[#280b57] group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                    Email Us
                  </h3>
                  <a
                    href="mailto:service@ashentrix.com"
                    className="text-[#280b57] hover:text-purple-600 font-semibold transition-colors block mb-2"
                  >
                    service@ashentrix.com
                  </a>
                  <p className="text-gray-500 text-sm font-medium">
                    Our team typically responds within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white border border-gray-100 p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(40,11,87,0.08)] hover:border-purple-200 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-[#280b57] transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-[#280b57] group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919711179821"
                    className="text-[#280b57] hover:text-purple-600 font-semibold transition-colors block mb-2"
                  >
                    +91-971 117 9821
                  </a>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    Mon to Fri: 10 AM to 8 PM
                    <br />
                    Sat & Sun: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white border border-gray-100 p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(40,11,87,0.08)] hover:border-purple-200 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-[#280b57] transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-[#280b57] group-hover:text-white transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                    Visit Us
                  </h3>
                  <p className="text-gray-700 text-sm font-medium leading-relaxed mb-3">
                    A-22, 1st Floor, Sector 4, Noida,
                    <br />
                    Gautam Buddha Nagar, Uttar Pradesh,
                    <br />
                    India - 201301
                  </p>
                  <p className="text-[#280b57] text-sm font-bold uppercase tracking-wide">
                    Come say hello at our office
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Image */}
            <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden h-56 hidden lg:block group shadow-md border border-gray-100">
              <Image
                src="/images/pro2.jpg"
                alt="Contact Us"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#280b57]/90 via-[#280b57]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-bold leading-relaxed">
                  Join 150+ companies already transforming their operations with Ashentrix.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-gray-100 p-6 sm:p-8 lg:p-12 rounded-[2rem] shadow-xl relative overflow-hidden">
              {/* Form Corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10" />
              
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border ${
                        focusedField === "name"
                          ? "border-purple-400 bg-white ring-4 ring-purple-50"
                          : "border-gray-200"
                      } outline-none text-gray-900 placeholder-gray-400 transition-all duration-300 font-medium`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border ${
                        focusedField === "email"
                          ? "border-purple-400 bg-white ring-4 ring-purple-50"
                          : "border-gray-200"
                      } outline-none text-gray-900 placeholder-gray-400 transition-all duration-300 font-medium`}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border ${
                        focusedField === "company"
                          ? "border-purple-400 bg-white ring-4 ring-purple-50"
                          : "border-gray-200"
                      } outline-none text-gray-900 placeholder-gray-400 transition-all duration-300 font-medium`}
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border ${
                        focusedField === "phone"
                          ? "border-purple-400 bg-white ring-4 ring-purple-50"
                          : "border-gray-200"
                      } outline-none text-gray-900 placeholder-gray-400 transition-all duration-300 font-medium`}
                      placeholder="+91-971 117 9821"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border ${
                      focusedField === "service"
                        ? "border-purple-400 bg-white ring-4 ring-purple-50"
                        : "border-gray-200"
                    } outline-none text-gray-900 transition-all duration-300 font-medium cursor-pointer appearance-none`}
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                  >
                    <option value="">Select a service...</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="back-office">Back Office Operations</option>
                    <option value="data-services">Data Services</option>
                    <option value="finance">Finance & Accounting</option>
                    <option value="it-support">IT Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Tell Us About Your Needs *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border ${
                      focusedField === "message"
                        ? "border-purple-400 bg-white ring-4 ring-purple-50"
                        : "border-gray-200"
                    } outline-none text-gray-900 placeholder-gray-400 resize-none transition-all duration-300 font-medium`}
                    placeholder="Tell us about your project, timeline, and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#280b57] text-white py-4 rounded-xl font-bold text-base hover:bg-purple-900 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-purple-900/20 mt-4"
                >
                  Send Message
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <p className="text-center text-xs font-medium text-gray-500 mt-4 flex items-center justify-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  We respect your privacy. Your information is 100% secure.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
