import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";
import CaseStudyDetails from "@/components/case-studies/CaseStudyDetails";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <CaseStudyHero />
      <CaseStudyGrid />
      <CaseStudyDetails />
    </div>
  );
}
