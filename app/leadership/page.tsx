import LeadershipHero from "@/components/leadership/LeadershipHero";
import ExecutiveTeam from "@/components/leadership/ExecutiveTeam";
import TeamValues from "@/components/leadership/TeamValues";
import GlobalPresence from "@/components/leadership/GlobalPresence";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <LeadershipHero />
      <ExecutiveTeam />
      <TeamValues />
      <GlobalPresence />
    </div>
  );
}
