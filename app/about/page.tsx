import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutHistory from "@/components/about/AboutHistory";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About Ashentrix Solutions - Leading BPO Company",
  description: "Learn about Ashentrix Solutions - a premier outsourcing company in Delhi NCR. Our mission, values, leadership team, and commitment to exceptional BPO services.",
  openGraph: {
    title: "About Ashentrix Solutions - Leading BPO Company",
    description: "Learn about Ashentrix Solutions - a premier outsourcing company in Delhi NCR. Our mission, values, leadership team, and commitment to exceptional BPO services.",
    url: "https://www.ashentrix.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutHistory />
      <AboutTeam />
    </div>
  );
}
