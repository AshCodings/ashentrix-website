"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IndustryCardProps {
  title: string;
  image: string;
  href: string;
}

const IndustryCard = ({ title, image, href }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className="block">
      <div
        className="relative overflow-hidden  cursor-pointer group h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight text-center">
            {title}
          </h3>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 " />
      </div>
    </Link>
  );
};

export default function IndustriesSection() {
  const industries: IndustryCardProps[] = [
    {
      title: "Insurance",
      image: "/images/industries/insurance.jpg",
      href: "/industries/insurance",
    },
    {
      title: "Telecom",
      image: "/images/industries/telecom.jpg",
      href: "/industries/telecom",
    },
    {
      title: "Healthcare",
      image: "/images/industries/healthcare.jpg",
      href: "/industries/healthcare",
    },
    {
      title: "E-commerce & Retail",
      image: "/images/industries/ecommerce.jpg",
      href: "/industries/ecommerce",
    },
    {
      title: "Banking & Finance",
      image: "/images/industries/bank.jpg",
      href: "/industries/finance",
    },
    {
      title: "IT & Software Development",
      image: "/images/industries/it.jpg",
      href: "/industries/it-hardware",
    },
    {
      title: "Travel & Hospitality",
      image: "/images/industries/hospitality.jpg",
      href: "/industries/travel",
    },
    {
      title: "Automobiles",
      image: "/images/industries/automobile.jpg",
      href: "/industries/logistics",
    },
  ];

  return (
    <section
      id="industries"
      className="bg-[#1E293B] text-white py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-300">
            Ashentrix Solutions partners with a wide range of industries,
            helping them streamline operations and enhance customer experience
            through customized outsourcing solutions.
          </p>
        </div>

        {/* Industry Cards Grid - Centered Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl">
            {industries.map((industry, index) => (
              <div key={index} className="w-full max-w-64 mx-auto">
                <IndustryCard
                  title={industry.title}
                  image={industry.image}
                  href={industry.href}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
