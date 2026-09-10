import { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import JobOpenings from "@/components/careers/JobOpenings";
import CultureSection from "@/components/careers/CultureSection";

export const metadata: Metadata = {
  title: "Careers & Jobs at Ashentrix - BPO Company Delhi NCR | Apply Now",
  description:
    "Join Ashentrix Solutions - Leading BPO company in Delhi NCR. Explore career opportunities in customer support, technical support, operations & more. Apply for jobs today!",
  keywords:
    "ashentrix careers, BPO jobs Delhi NCR, customer support jobs, technical support careers, call center jobs India, outsourcing company jobs, BPO careers Noida",
  openGraph: {
    title: "Careers & Jobs at Ashentrix - BPO Company Delhi NCR | Apply Now",
    description:
      "Join Ashentrix Solutions. Explore career opportunities in BPO services. Customer support, technical support & operations jobs.",
    url: "https://www.ashentrix.com/careers",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <CareersHero />
      <JobOpenings />
      <CultureSection />
    </div>
  );
}
