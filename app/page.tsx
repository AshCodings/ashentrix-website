import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
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
