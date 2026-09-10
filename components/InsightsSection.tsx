"use client";

import React, { useState } from "react";
import { ArrowRight, FileText, Briefcase } from "lucide-react";
import Image from "next/image";

interface ContentCardProps {
  type: "research" | "case";
  title: string;
  image?: string;
  gradient: string;
}

const ContentCard = ({ type, title, image, gradient }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden  cursor-pointer group h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image/Gradient */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
        ) : (
          <div className="absolute inset-0" style={{ background: gradient }} />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Label */}
        <div className="flex items-center gap-2">
          {type === "research" ? (
            <FileText className="w-4 h-4 text-white" />
          ) : (
            <Briefcase className="w-4 h-4 text-white" />
          )}
          <span className="text-xs font-bold tracking-wider text-white uppercase">
            {type === "research" ? "Research Report" : "Case Study"}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white leading-tight">
            {title}
          </h3>

          {/* Hover Arrow */}
          <div
            className="flex items-center gap-2 text-white transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateX(0)" : "translateX(-10px)",
            }}
          >
            <span className="text-sm font-semibold">Read more</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-300 " />
    </div>
  );
};

export default function InsightsSection() {
  const cards: ContentCardProps[] = [
    {
      type: "research",
      title: "AI and your operating model: Radically new ways of working",
      gradient:
        "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "case",
      title: "Better, faster, stronger: Reinventing sales at Accenture",
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
      title:
        "Trying to scale AI? You&apos;re going to need to think big. And act bigger.",
      gradient:
        "linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #d299c2 100%)",
      image: "/images/pro5.jpg",
    },
    {
      type: "case",
      title: "Uber hails a new era for advertising",
      gradient: "linear-gradient(135deg, #2e1437 0%, #4a1942 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "research",
      title: "Learning, reinvented: Who&apos;s teaching who?",
      gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      image: "/images/pro5.jpg",
    },
    {
      type: "case",
      title:
        "Noli uses AI to beat the beauty jungle and find your perfect match",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      image: "/images/pro4.jpg",
    },
    {
      type: "research",
      title: "AI Reckoning: What&apos;s next for Europe?",
      gradient: "linear-gradient(135deg, #c7a17a 0%, #8b7355 100%)",
      image: "/images/pro5.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Insights & Innovation
          </h2>
          <p className="text-lg text-gray-400">
            Explore our latest research reports and case studies
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <ContentCard
              key={index}
              type={card.type}
              title={card.title}
              gradient={card.gradient}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
