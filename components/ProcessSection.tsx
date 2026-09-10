"use client";

import { useState } from "react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Discovery & Assessment",
      subtitle: "Strategic Alignment",
      description:
        "Comprehensive analysis of your business objectives, current processes, and operational challenges to identify optimization opportunities.",
      details: [
        "Business process mapping",
        "Requirements gathering",
        "Stakeholder interviews",
        "Performance baseline establishment",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Solution Design",
      subtitle: "Tailored Strategy",
      description:
        "Development of customized solutions aligned with your specific business needs, incorporating industry best practices and proven methodologies.",
      details: [
        "Custom workflow design",
        "Technology stack selection",
        "Resource allocation planning",
        "KPI framework development",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Implementation",
      subtitle: "Seamless Execution",
      description:
        "Structured deployment with dedicated project management, ensuring minimal disruption to your existing operations while maximizing efficiency gains.",
      details: [
        "Phased rollout approach",
        "Team training & onboarding",
        "System integration",
        "Quality assurance testing",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Optimization & Support",
      subtitle: "Continuous Excellence",
      description:
        "Ongoing monitoring, performance analysis, and continuous improvement to ensure sustained value delivery and operational excellence.",
      details: [
        "24/7 operational support",
        "Performance monitoring",
        "Regular optimization reviews",
        "Scalability planning",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-[#280b57]/10 px-3 sm:px-4 py-2">
              Our Process
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6">
            How We Drive Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven, systematic approach to transforming your operations and
            delivering measurable results
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          {/* Connection Lines - Desktop */}
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#280b57] via-[#280b57] to-[#280b57] opacity-20"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div
                className={`bg-white p-4 sm:p-6 lg:p-10 shadow-sm border-2 transition-all duration-300 h-full ${
                  activeStep === index
                    ? "border-[#280b57] shadow-md transform -translate-y-1"
                    : "border-gray-200 hover:border-[#280b57]/50"
                }`}
              >
                {/* Step Number Badge */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 flex items-center justify-center text-white text-2xl font-bold transition-all duration-300 ${
                      activeStep === index
                        ? "bg-[#280b57] shadow-sm"
                        : step.number % 2 === 0
                        ? "bg-[#280b57]"
                        : "bg-[#1f0944]"
                    }`}
                  >
                    {activeStep === index ? step.icon : step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#280b57] uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Details - Show on Hover */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeStep === index
                      ? "max-h-96 opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Key Activities
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-[#280b57] mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to transform your operations with our proven methodology?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#280b57] text-white px-10 py-4 font-semibold hover:bg-[#1f0944] transition-all shadow-sm hover:shadow-md tracking-tight"
          >
            Start Your Journey
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
