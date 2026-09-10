import { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";

export const metadata: Metadata = {
  title: "BPO Services - Customer Support & Technical Solutions | Ashentrix",
  description: "Comprehensive BPO services including 24/7 customer support, technical support, back office operations, and data processing for global businesses.",
  openGraph: {
    title: "BPO Services - Customer Support & Technical Solutions | Ashentrix",
    description: "Comprehensive BPO services including 24/7 customer support, technical support, back office operations, and data processing for global businesses.",
    url: "https://www.ashentrix.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ServiceHero />
      <ServiceOverview />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceBenefits />
    </div>
  );
}
