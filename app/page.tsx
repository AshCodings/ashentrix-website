import { Metadata } from "next";
import dynamic from 'next/dynamic';


import HeroSection from "@/components/HeroSection";


const ClientLogosSection = dynamic(() => import("@/components/ClientLogosSection"));
const WhoWeAre = dynamic(() => import("@/components/WhoWeAre"));
const ValueProposition = dynamic(() => import("@/components/ValueProposition"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const CaseStudiesSection = dynamic(() => import("@/components/CaseStudiesSection"));
const ResultsSection = dynamic(() => import("@/components/ResultsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const LeadershipSection = dynamic(() => import("@/components/LeadershipSection"));
const InsightsSection = dynamic(() => import("@/components/InsightsSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export const metadata: Metadata = {
  title: "Ashentrix Solutions - BPO & Outsourcing Services",
  description: "Leading BPO company in Delhi NCR providing customer support, technical support, and back office operations for Insurance, Banking, and Healthcare industries.",
  openGraph: {
    title: "Ashentrix Solutions - BPO & Outsourcing Services", 
    description: "Leading BPO company in Delhi NCR providing customer support, technical support, and back office operations for Insurance, Banking, and Healthcare industries.",
    url: "https://www.ashentrix.com",
    type: "website",
    images: [
      {
        url: "/images/ashentrix-homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ashentrix Solutions - Professional Outsourcing Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ashentrix.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <HeroSection />
      <ClientLogosSection />
      <WhoWeAre />
      <ValueProposition />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ResultsSection />
      <TestimonialsSection />
      <LeadershipSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}
