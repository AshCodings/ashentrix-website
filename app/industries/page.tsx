import { Metadata } from "next";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryOverview from "@/components/industries/IndustryOverview";
import IndustryExpertise from "@/components/industries/IndustryExpertise";
import BankingFinance from "@/components/industries/BankingFinance";
import TechSaaS from "@/components/industries/TechSaaS";
import RetailEcommerce from "@/components/industries/RetailEcommerce";

export const metadata: Metadata = {
  title:
    "Industries We Serve - Banking, Healthcare, Insurance & More | Ashentrix",
  description:
    "Specialized BPO services for Banking, Insurance, Healthcare, Telecom, E-commerce, IT & Travel industries. Expert outsourcing solutions tailored for diverse business sectors.",
  keywords:
    "banking BPO services, insurance outsourcing, healthcare BPO, telecom outsourcing, ecommerce support services, IT outsourcing, travel hospitality BPO, industry specific outsourcing",
  openGraph: {
    title:
      "Industries We Serve - Banking, Healthcare, Insurance & More | Ashentrix",
    description:
      "Specialized BPO services for Banking, Insurance, Healthcare, Telecom, E-commerce & IT industries. Tailored outsourcing solutions.",
    url: "https://www.ashentrix.com/industries",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <IndustryHero />
      <IndustryOverview />
      <IndustryExpertise />
      <BankingFinance />
      <TechSaaS />
      <RetailEcommerce />
    </div>
  );
}
