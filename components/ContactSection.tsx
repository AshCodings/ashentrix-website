"use client";

import { useState } from "react";
import Image from "next/image";

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

  return (
    <section id="contact" className="bg-white text-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your operations? Connect with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Cards */}
            <div className="bg-gray-50 border border-gray-300 p-4 sm:p-6 lg:p-8 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Email Us
                  </h3>
                     <a
                    href="mailto:service@ashentrix.com"
                    className="text-gray-900 hover:text-gray-600 font-semibold transition-colors"
                  >
                    service@ashentrix.com
                  </a>
                  <p className="text-gray-600 text-sm mb-2">
                    Our team typically responds within 24 hours
                  </p>
               
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-4 sm:p-6 lg:p-8 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Call Us
                  </h3>
                 
                  <a
                    href="tel:+919711179821"
                    className="text-gray-900 hover:text-gray-600 font-semibold transition-colors"
                  >
                    +91-971 117 9821
                  </a>
                   <p className="text-gray-600 text-sm mb-2">
                    Mon to Fri: 10 AM to 6 PM
                    <br />
                    Sat & Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-4 sm:p-6 lg:p-8 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Visit Us
                  </h3>
                  
                  <p className="text-gray-900 text-sm">
                    A-22, 1st Floor, Sector 4, Noida,
                    <br />
                    Gautam Buddha Nagar, Uttar Pradesh,
                    <br />
                    India - 201301
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Come say hello at our office
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative  overflow-hidden h-48 hidden lg:block">
              <Image
                src="/images/pro2.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-semibold">
                  Join 150+ companies already transforming with Ashentrix
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 border border-gray-300 p-4 sm:p-6 lg:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
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
                    className={`w-full px-4 py-2.5 bg-white border ${
                      focusedField === "name"
                        ? "border-gray-900"
                        : "border-gray-300"
                    }  focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
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
                    className={`w-full px-4 py-2.5 bg-white border ${
                      focusedField === "email"
                        ? "border-gray-900"
                        : "border-gray-300"
                    }  focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
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
                    className={`w-full px-4 py-2.5 bg-white border ${
                      focusedField === "company"
                        ? "border-gray-900"
                        : "border-gray-300"
                    }  focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="Your Company Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-2.5 bg-white border ${
                      focusedField === "phone"
                        ? "border-gray-900"
                        : "border-gray-300"
                    }  focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="+91-971 117 9821"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  Service Interested In *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2.5 bg-white border ${
                    focusedField === "service"
                      ? "border-gray-900"
                      : "border-gray-300"
                  }  focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 transition-all duration-300`}
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
                <label className="block text-sm font-semibold text-gray-900 mb-1">
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
                  className={`w-full px-4 py-2.5 bg-white border ${
                    focusedField === "message"
                      ? "border-gray-900"
                      : "border-gray-300"
                  }  focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 resize-none transition-all duration-300`}
                  placeholder="Tell us about your project, timeline, and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3  font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group"
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

              <p className="text-center text-xs text-gray-500 mt-3">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
