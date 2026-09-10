import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyPolicy from "@/components/privacy/PrivacyPolicy";
import TermsOfService from "@/components/privacy/TermsOfService";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PrivacyHero />
      <PrivacyPolicy />
      <TermsOfService />
    </div>
  );
}
