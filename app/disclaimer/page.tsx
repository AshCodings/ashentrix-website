"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertCircle, FileText } from "lucide-react";

// Reusable Card Component for each Legal Section
const SectionCard = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
  >
    <h2 className="text-2xl font-bold text-[#0F172A] mb-5 group-hover:text-[#280b57] transition-colors flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-purple-100 text-[#280b57] flex items-center justify-center text-sm font-black flex-shrink-0">
        {id.replace('sec-', '')}
      </span>
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden py-20 lg:py-32">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />

      {/* Main Container - Centered and optimized for reading */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-[#280b57] mb-6 shadow-sm">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-6 leading-[1.1]">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-600">Disclaimer</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            Ashentrix Solutions Pvt. Ltd. <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span> 
            Effective Date: September 2026 | Last Updated: September 2026
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 leading-relaxed mb-12 font-medium bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-2xl border-l-4 border-[#280b57]"
        >
          Ashentrix Solutions Pvt. Ltd. (&ldquo;Ashentrix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides business process management, outsourcing, customer support, back-office, technology-enabled and related professional services to businesses and other organizations. This Disclaimer applies to information and materials available through www.ashentrix.com and should be read together with our Terms &amp; Conditions, Privacy Policy, and Data Security &amp; Compliance provisions.
        </motion.div>

        {/* Section 1 */}
        <SectionCard id="sec-1" title="General Information">
          <p>
            The information published on this website is provided for general informational and business communication purposes only. While Ashentrix makes reasonable efforts to keep information accurate, relevant and current, we do not warrant or represent that all website content will always be complete, accurate, current, error-free or suitable for every particular purpose. Website information should not be treated as a substitute for professional advice, contractual documentation, or a formal service commitment.
          </p>
        </SectionCard>

        {/* Section 2 */}
        <SectionCard id="sec-2" title="No Professional or Legal Advice">
          <p>
            Nothing contained on this website constitutes legal, financial, tax, accounting, medical, regulatory, investment or other professional advice. Where services involve regulated industries or sensitive business functions, information provided is general in nature. Users should obtain appropriate professional or regulatory advice based on their specific circumstances and applicable requirements.
          </p>
        </SectionCard>

        {/* Section 3 */}
        <SectionCard id="sec-3" title="Services and Service Descriptions">
          <p>
            Descriptions of Ashentrix services, capabilities, industries, processes, technologies and solutions are intended to provide an overview of potential service offerings. A description on this website does not constitute a binding commitment to provide that service to every prospective client.
          </p>
          <p>
            Actual services, deliverables, staffing, operating hours, service levels, technology requirements, security controls, pricing, compliance obligations and other conditions will be determined through applicable contractual documentation, including, where applicable, a Master Services Agreement (MSA), Statement of Work (SOW), Service Level Agreement (SLA), Data Processing Agreement (DPA), Non-Disclosure Agreement (NDA), or other mutually executed agreement.
          </p>
          <p className="font-semibold text-gray-900">
            In the event of any inconsistency between this website and a duly executed agreement, the applicable executed agreement will govern.
          </p>
        </SectionCard>

        {/* Section 4 */}
        <SectionCard id="sec-4" title="No Guarantee of Business Results">
          <p>
            Ashentrix does not guarantee any particular commercial, operational, financial, productivity, cost-saving, revenue, customer satisfaction, conversion, collection, turnaround-time or other business outcome unless expressly agreed in writing in a binding contract. Examples, case studies, illustrations, performance references or descriptions of potential benefits should not be interpreted as guarantees of future results.
          </p>
        </SectionCard>

        {/* Section 5 */}
        <SectionCard id="sec-5" title="Accuracy and Completeness">
          <p>
            Ashentrix endeavors to ensure that information presented on the website is accurate and appropriately maintained. However, we do not warrant that the website will always be complete or up to date, free from errors, suitable for a particular business purpose, continuously available, or that technical and operational information will remain unchanged. Ashentrix may modify, update, correct, remove or supplement website content at any time without prior notice.
          </p>
        </SectionCard>

        {/* Section 6 */}
        <SectionCard id="sec-6" title="Third-Party Information and References">
          <p>
            The website may contain references to third-party companies, technologies, platforms, standards, regulations, organizations, products or services. Such references are provided for informational or contextual purposes and do not necessarily constitute an endorsement, sponsorship, partnership or recommendation unless expressly stated. Third-party names, trademarks and logos remain the property of their respective owners. Ashentrix is not responsible for the accuracy, availability, security, privacy practices, content or services of third-party websites or platforms.
          </p>
        </SectionCard>

        {/* Section 7 */}
        <SectionCard id="sec-7" title="External Links">
          <p>
            The Ashentrix website may contain links to external websites or resources operated by third parties. These links are provided for convenience and informational purposes. Ashentrix does not control and is not responsible for the content, availability, security, privacy practices or terms of external websites. Accessing third-party websites is at the user&apos;s own discretion and risk.
          </p>
        </SectionCard>

        {/* Section 8 */}
        <SectionCard id="sec-8" title="Technology and Website Availability">
          <p>
            Although Ashentrix takes reasonable measures to maintain the website and protect its systems, we do not guarantee that the website will be uninterrupted, continuously available, secure or free from errors, defects, malicious code or other harmful components. Availability may be affected by maintenance, upgrades, telecommunications failures, hosting issues, cybersecurity events, third-party dependencies, force majeure events or other circumstances beyond our reasonable control.
          </p>
        </SectionCard>

        {/* Section 9 */}
        <SectionCard id="sec-9" title="Cybersecurity and Security Information">
          <p>
            Information presented on the website concerning information security, privacy, compliance, technology controls or operational safeguards is intended to provide a general overview. Specific security and compliance requirements may vary depending on the engagement, client requirements, applicable law, data classification, geography and contractual obligations. Where applicable, detailed security controls, certifications, audit reports, assessments, policies or supporting documentation may be provided to qualified clients or prospective clients through appropriate due-diligence and contractual processes.
          </p>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic mt-4">
            Nothing on the public website should be interpreted as a representation that every Ashentrix service, facility, process or client engagement is subject to every security or compliance control referenced on the website.
          </div>
        </SectionCard>

        {/* Section 10 */}
        <SectionCard id="sec-10" title="Regulatory and Industry Information">
          <p>
            Ashentrix may provide information relating to industries such as insurance, healthcare, banking and financial services, telecommunications, education, technology, e-commerce and other sectors. Regulatory requirements differ by jurisdiction, industry, service and client engagement. References to laws, regulations, frameworks, standards or industry practices are provided for general information and may change over time. Clients remain responsible for determining the regulatory requirements applicable to their specific operations, except to the extent expressly assumed by Ashentrix under a written agreement.
          </p>
        </SectionCard>

        {/* Section 11 */}
        <SectionCard id="sec-11" title="Recruitment and Employment Information">
          <p>
            Employment opportunities, job descriptions, salary information, benefits, qualifications or recruitment-related information published on the website are subject to change. Publication of a vacancy does not constitute an offer of employment. Any employment relationship will be subject to applicable law and the terms of the relevant employment documentation.
          </p>
        </SectionCard>

        {/* Section 12 */}
        <SectionCard id="sec-12" title="Testimonials, Case Studies and Examples">
          <p>
            Testimonials, case studies, examples and other business illustrations published on the website may describe specific experiences, scenarios or potential applications. Such material is provided for illustrative purposes and should not be interpreted as a guarantee that the same results or experience will be achieved in another engagement. Where appropriate, client identities or engagement details may be withheld or anonymized for confidentiality reasons.
          </p>
        </SectionCard>

        {/* Section 13 */}
        <SectionCard id="sec-13" title="Intellectual Property">
          <p>
            Unless otherwise stated, website content including text, graphics, designs, logos, layouts, documents and other materials is owned by or licensed to Ashentrix Solutions Pvt. Ltd. and may be protected by applicable intellectual property laws. Nothing in this Disclaimer grants any person a license or right to use Ashentrix intellectual property except as expressly permitted by applicable law or written authorization.
          </p>
        </SectionCard>

        {/* Section 14 */}
        <SectionCard id="sec-14" title="Limitation of Reliance">
          <p>
            Users should exercise appropriate judgment before relying on information obtained from this website. To the maximum extent permitted by applicable law, Ashentrix shall not be responsible for losses or damages arising solely from reliance on general website information where such information was not intended to constitute a contractual representation, professional advice or service commitment. Nothing in this Disclaimer excludes or limits liability that cannot lawfully be excluded or limited under applicable law.
          </p>
        </SectionCard>

        {/* Section 15 */}
        <SectionCard id="sec-15" title="Client-Specific Information">
          <p>
            Information supplied directly to a client through proposals, commercial communications, demonstrations, presentations, due-diligence responses, security questionnaires or other engagement-specific materials may contain information that is different from or more detailed than information available on the public website. Where a written agreement exists, the applicable contractual terms will govern the relevant engagement.
          </p>
        </SectionCard>

        {/* Section 16 */}
        <SectionCard id="sec-16" title="Changes to This Disclaimer">
          <p>
            Ashentrix may revise this Disclaimer from time to time to reflect changes in our services, website, business practices, legal requirements or operational environment. The updated version will be published on this page with an updated &ldquo;Last Updated&rdquo; date. Users are encouraged to review this page periodically.
          </p>
        </SectionCard>

        {/* Section 17 */}
        <SectionCard id="sec-17" title="Governing Law">
          <p>
            This Disclaimer shall be interpreted in accordance with the applicable laws of India, subject to the governing-law and dispute-resolution provisions contained in any applicable written agreement between Ashentrix and a client or other contracting party.
          </p>
        </SectionCard>

        {/* Section 18 - Contact Info */}
        {/* Contact Info (Section 20) */}
        <SectionCard id="sec-20" title="Contact Us">
          <div className="bg-[#0F172A] rounded-2xl p-8 text-white relative overflow-hidden mt-2">
            <svg className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                <FileText className="w-6 h-6" />
              </span>
              Ashentrix Solutions Pvt. Ltd. {/*[cite: 6] */}
            </h3>
            
            <div className="space-y-4 text-gray-300 relative z-10">
              <p><span className="font-semibold text-white">Address:</span> A-22, 1st Floor, Sector 4, Noida, Gautam Buddha Nagar, Uttar Pradesh, India &ndash; 201301 {/*[cite: 6] */}</p>
              <p><span className="font-semibold text-white">Email:</span> <a href="mailto:service@ashentrix.com" className="hover:text-purple-300 transition-colors">service@ashentrix.com</a> {/*[cite: 6] */}</p>
              <p><span className="font-semibold text-white">Phone / WhatsApp:</span> <a href="tel:+919711179821" className="hover:text-purple-300 transition-colors">+91-971 117 9821</a> {/*[cite: 6] */}</p>
              <div className="flex items-center gap-3 pt-2"> <span className="font-semibold text-white">Website:</span>
                <Link href="https://www.ashentrix.com" className="hover:text-white transition-colors underline decoration-purple-500/50 underline-offset-4">www.ashentrix.com</Link> {/*[cite: 6] */}
              </div>
              <p className="text-sm mt-4 pt-4 border-t border-gray-700/50">
                For business or service enquiries, please use the Contact Us section of our Website. {/*[cite: 6] */}
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Section 19 - Legal Notice Callout */}
        <SectionCard id="sec-19" title="Legal Notice">
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 shadow-sm mt-2">
            <p className="text-gray-700 text-sm leading-relaxed mb-0">
              This Disclaimer is intended as a general public-facing website document. It does not replace or supersede any applicable Master Services Agreement, Statement of Work, Service Level Agreement, Data Processing Agreement, Non-Disclosure Agreement, employment agreement or other legally binding contract. Where a specific contractual obligation applies, the relevant executed agreement will govern to the extent permitted by applicable law.
            </p>
          </div>
        </SectionCard>

        {/* Footer Copyright */}
        <div className="text-center pb-10 mt-16">
          <p className="text-sm font-bold text-[#0F172A]">
            © 2026 Ashentrix Solutions Pvt. Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
