import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import SimpleContactTest from "@/components/contact/SimpleContactTest";
import OfficeLocations from "@/components/contact/OfficeLocations";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us - Get BPO Quote & Outsourcing Solutions | Ashentrix",
  description:
    "Contact Ashentrix Solutions for professional BPO services. Get quotes for customer support, technical support & back office operations. Delhi NCR office. Call +91-971-117-9821",
  keywords:
    "contact ashentrix, BPO quote, outsourcing quote, customer support quote, technical support services contact, Delhi NCR BPO company contact",
  openGraph: {
    title: "Contact Us - Get BPO Quote & Outsourcing Solutions | Ashentrix",
    description:
      "Contact Ashentrix Solutions for professional BPO services. Get quotes for outsourcing solutions. Delhi NCR office.",
    url: "https://www.ashentrix.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ContactHero />
      <div className="py-10">
        <SimpleContactTest />
      </div>
      <ContactForm />
      <OfficeLocations />
      <ContactInfo />
    </div>
  );
}
