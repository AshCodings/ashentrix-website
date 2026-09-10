import InsightsHero from "@/components/insights/InsightsHero";
import NewsGrid from "@/components/insights/NewsGrid";
import ThoughtLeadership from "@/components/insights/ThoughtLeadership";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <InsightsHero />
      <NewsGrid />
      <ThoughtLeadership />
    </div>
  );
}
