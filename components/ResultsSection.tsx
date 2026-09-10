"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
  description: string;
  image: string;
  index: number;
}

const StatCard = ({
  value,
  suffix,
  label,
  description,
  image,
  index,
}: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && targetValue) {
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetValue]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{
        animation: isVisible
          ? `fadeInUp 0.6s ease-out ${index * 0.15}s both`
          : "none",
      }}
    >
      {/* Background Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Animated Number Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-black text-white mb-2 drop-shadow-2xl">
              {suffix === "+" ? `${count.toLocaleString()}+` : `${count}%`}
            </div>
            <div className="text-white/90 font-semibold text-lg uppercase tracking-wider">
              {label}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-br from-white to-gray-50">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12  bg-gradient-to-br from-[#280b57] to-[#1f0944] flex items-center justify-center">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#280b57] uppercase tracking-wider">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Verified Result
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ResultsSection() {
  const stats = [
    {
      value: "45",
      suffix: "%",
      label: "Faster Response Time",
      description:
        "Ready to achieve significant improvements in response times through process optimization and AI-powered automation for your business.",
      image: "/images/pro3.jpg",
    },
    {
      value: "1200",
      suffix: "+",
      label: "Hours Saved Monthly",
      description:
        "Equipped to deliver substantial operational savings through intelligent automation and workflow optimization for enterprise clients.",
      image: "/images/pro1.jpg",
    },
    {
      value: "30",
      suffix: "%",
      label: "Cost Reduction",
      description:
        "Enabled 30% operational cost reduction for global manufacturing operations through strategic process redesign and resource optimization.",
      image: "/images/pro2.jpg",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        id="results"
        className="bg-gradient-to-br from-gray-900 via-[#280b57] to-gray-900 py-24 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-[#280b57] uppercase tracking-wider bg-[#280b57]/20 px-3 sm:px-4 py-2 border border-[#280b57]/30">
                Impact That Matters
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Proven Results, Measurable Impact
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real transformations delivered to industry leaders across the
              globe. Our data-driven approach consistently delivers exceptional
              outcomes.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className="bg-white/5 backdrop-blur-md  border border-white/10 p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2">2025</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Launch Year
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Commitment Level
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">Fresh</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Perspective
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Dedication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
