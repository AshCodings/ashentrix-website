"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add the Web3Forms access key
    formData.append("access_key", "8d5a9af8-325d-4da9-9ccb-5bb326b436d6");

    // Add additional metadata for Web3Forms
    formData.append(
      "subject",
      "New Contact Form Submission - Ashentrix Solutions",
    );
    formData.append("cc", "service@ashentrix.com");

    console.log("FormData contents:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response from Web3Forms:", data);

      if (data.success) {
        setResult(
          "✅ Message sent successfully! We'll get back to you within 24 hours.",
        );
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        setResult(
          `❌ Error: ${
            data.message ||
            "Something went wrong. Please try again or contact us directly."
          }`,
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult(
        "❌ Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell us about your business challenges and goals. Our team will
              get back to you with tailored solutions and next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="customer-support">
                    Customer Support (Voice/Chat/Email)
                  </option>
                  <option value="technical-support">Technical Support</option>
                  <option value="back-office">Back Office Operations</option>
                  <option value="data-processing">
                    Data Processing & Data Services
                  </option>
                  <option value="analytics">Analytics & Reporting</option>
                  <option value="collections">Collections Process</option>
                  <option value="recruitment">
                    Recruitment & Talent Support
                  </option>
                  <option value="operations">Operations Management</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your business challenges and objectives..."
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#280b57] transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 font-semibold transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-[#280b57] text-white hover:bg-[#280b57]/90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Display result message */}
              {result && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    result.includes("✅")
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Other Ways to Connect
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+919711179821"
                      className="hover:text-[#280b57] transition-colors"
                    >
                      +91-971 117 9821
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="https://wa.me/919711179821"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#280b57] transition-colors"
                    >
                      WhatsApp: +91-971 117 9821
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:service@ashentrix.com"
                      className="hover:text-[#280b57] transition-colors"
                    >
                      service@ashentrix.com
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Our team typically responds within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Headquarters
                  </h4>
                  <p className="text-gray-600">
                    A-22, 1st Floor, Sector 4, Noida,
                  </p>
                  <p className="text-gray-600">
                    Gautam Buddha Nagar, Uttar Pradesh,
                  </p>
                  <p className="text-gray-600">India - 201301</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#F8FAFC] border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mon to Sat:</span>
                  <span className="text-gray-900 font-medium">
                    10 AM to 6 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sun:</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">24/7 Support:</span>
                  <span className="text-[#280b57] font-medium">
                    Available for clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
