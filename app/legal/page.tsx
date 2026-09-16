"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function TermsConditions() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden py-20 lg:py-32">
      
     
      {/* Main Container - Centered and optimized for reading */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block bg-purple-100 text-[#280b57] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Ashentrix Solutions Pvt. Ltd.
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-6 leading-[1.1]">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-600">Conditions</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            Website Terms of Use <br className="sm:hidden" />
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
          These Terms & Conditions (“Terms”) govern access to and use of the Ashentrix Solutions Pvt. Ltd. website at www.ashentrix.com, including its webpages, content, resources, forms and digital features (collectively, the “Website”). By accessing or using the Website, you acknowledge that you have read, understood and agreed to these Terms. If you do not agree, please discontinue use of the Website.
        </motion.div>

        {/* Section 1 */}
        <SectionCard id="sec-1" title="About Ashentrix">
          <p>
            Ashentrix Solutions Pvt. Ltd. (“Ashentrix”, “Company”, “we”, “us” or “our”) is a business process management and outsourcing company providing business support and technology-enabled operational solutions.
          </p>
          <p>
            Our services may include Customer Support (Voice/Chat/Email), Technical Support, Technical Helpdesk Services, Back Office Operations, Data Processing & Data Services, Analytics & Reporting, Collections, Ticketing Management, Operations Management, Recruitment & Talent Support, Graphic Design & Printing Solutions, Web & App Development and related business process services.
          </p>
          <p>
            Specific services provided to a client are governed by the applicable Master Service Agreement (MSA), Statement of Work (SOW), Service Level Agreement (SLA), purchase order or other written agreement.
          </p>
        </SectionCard>

        {/* Section 2 */}
        <SectionCard id="sec-2" title="Acceptance of Terms">
          <p>
            By accessing or using the Website, you agree to comply with these Terms and applicable laws and regulations. If you access the Website on behalf of an organization, you represent that you have authority to do so.
          </p>
          <p>
            Certain pages, resources or services may have additional terms. Those additional terms will apply to the relevant service to the extent of any conflict.
          </p>
        </SectionCard>

        {/* Section 3 */}
        <SectionCard id="sec-3" title="Permitted Use">
          <p>
            The Website may be used for legitimate informational, business, professional, recruitment, partnership and service-related purposes. You must not use the Website to:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              "Violate applicable law",
              "Misrepresent your identity or authority",
              "Obtain unauthorized access to systems or information",
              "Introduce malware, viruses or harmful code",
              "Interfere with Website availability or security",
              "Scrape or systematically extract content without authorization",
              "Infringe intellectual-property or privacy rights",
              "Transmit fraudulent, defamatory, abusive or unlawful material",
              "Engage in conduct that could reasonably harm Ashentrix, its clients, employees, partners or users"
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <svg className="w-5 h-5 text-[#280b57] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 pt-4 border-t border-gray-100">
            Ashentrix may restrict or terminate access where reasonably necessary to protect its Website, systems, users or business interests.
          </p>
        </SectionCard>

        {/* Section 4 */}
        <SectionCard id="sec-4" title="Website Content and Information">
          <p>
            Ashentrix makes reasonable efforts to provide useful and accurate information. Website content may change and may not always reflect the latest operational or commercial information.
          </p>
          <p>
            Website information is for general informational purposes and is not a binding commercial offer, guarantee or professional advice unless expressly incorporated into a written agreement signed by an authorized Ashentrix representative.
          </p>
        </SectionCard>

        {/* Section 5 */}
        <SectionCard id="sec-5" title="Services, Proposals and Commercial Engagements">
          <p>
            Submitting an enquiry, requesting a quotation, contacting our sales team or receiving preliminary information does not create a contractual relationship.
          </p>
          <p>
            A client engagement becomes binding only through an applicable written agreement, including an MSA, SOW, purchase order, accepted proposal or other written contractual document. Where such an agreement exists, its provisions govern the engagement and prevail over these Website Terms to the extent of any inconsistency.
          </p>
        </SectionCard>

        {/* Section 6 */}
        <SectionCard id="sec-6" title="Pricing, Quotations and Service Scope">
          <p>
            Pricing, estimates, staffing requirements, timelines, service descriptions, projected savings and performance expectations published or communicated before formal contracting are indicative unless expressly confirmed in writing.
          </p>
          <p>
            Commercial terms may depend on transaction volumes, staffing, geography, languages, technology, infrastructure, security requirements, service levels, implementation requirements and applicable taxes. Ashentrix may revise proposals before formal acceptance.
          </p>
        </SectionCard>

        {/* Section 7 */}
        <SectionCard id="sec-7" title="Client Responsibilities">
          <p>
            Clients are responsible for providing accurate, complete and timely information reasonably required for service delivery, including process documentation, training materials, authorized access, data, approvals, contacts and applicable regulatory requirements.
          </p>
          <p>
            Ashentrix is not responsible for delays or service impacts primarily caused by inaccurate information, unavailable systems, delayed approvals or other client-side dependencies outside Ashentrix’s reasonable control. Specific responsibilities are governed by the applicable client agreement.
          </p>
        </SectionCard>

        {/* Section 8 */}
        <SectionCard id="sec-8" title="Service Levels and Performance">
          <p>
            Where applicable, service levels, KPIs, turnaround times, quality standards, staffing commitments and performance measures will be defined in the relevant MSA, SOW or SLA.
          </p>
          <p>
            Descriptions of capabilities on the Website do not constitute a guarantee of a specific performance level unless expressly incorporated into a signed agreement.
          </p>
        </SectionCard>

        {/* Section 9 */}
        <SectionCard id="sec-9" title="Service Continuity and Operational Dependencies">
          <p>
            Ashentrix seeks to maintain continuity of its operations through appropriate planning and controls. Service delivery may depend on client systems, telecommunications, internet connectivity, software platforms, cloud infrastructure, utilities, third-party providers and regulatory requirements.
          </p>
          <p>
            Ashentrix will use reasonable efforts to manage disruptions but is not responsible for circumstances beyond its reasonable control except as otherwise provided in an applicable agreement.
          </p>
        </SectionCard>

        {/* Section 10 */}
        <SectionCard id="sec-10" title="Confidentiality">
          <p>
            During business discussions or service engagements, parties may exchange confidential information relating to operations, customers, processes, pricing, technology, systems, data, financial information, commercial strategies and intellectual property.
          </p>
          <p>
            Confidential information will be handled in accordance with applicable contractual obligations. Where required, the parties may execute a separate NDA or confidentiality agreement.
          </p>
          <p>
            General Website enquiries should not contain confidential or proprietary information unless specifically requested or protected by an applicable agreement.
          </p>
        </SectionCard>

        {/* Section 11 */}
        <SectionCard id="sec-11" title="Data Protection and Information Security">
          <p>
            Ashentrix recognizes the importance of protecting personal and business information. Personal information submitted through the Website is handled in accordance with the Ashentrix Privacy Policy and applicable law.
          </p>
          <p>
            Where Ashentrix processes personal data on behalf of a client, the applicable contract will define responsibilities, permitted processing, security, retention and other data-processing obligations.
          </p>
          <p>
            Ashentrix will apply reasonable organizational, technical and operational measures appropriate to the nature of the information and services involved. Applicable Indian data-protection requirements, including the Digital Personal Data Protection Act, 2023 and applicable rules and notifications, will be considered where relevant.
          </p>
          <p>
            Clients remain responsible for ensuring that they have the necessary rights, permissions and lawful basis to provide information to Ashentrix for processing.
          </p>
        </SectionCard>

        {/* Section 12 */}
        <SectionCard id="sec-12" title="Website Security">
          <p>
            Users must not attempt to compromise or circumvent Website security, including by obtaining unauthorized access, bypassing authentication, introducing malicious software, conducting unauthorized scans, interfering with availability or accessing another user’s information.
          </p>
          <p>
            Ashentrix may investigate suspected security incidents and cooperate with competent authorities where legally required.
          </p>
        </SectionCard>

        {/* Section 13 */}
        <SectionCard id="sec-13" title="Intellectual Property">
          <p>
            Unless otherwise stated, the Website and its contents are owned by, controlled by or licensed to Ashentrix. This includes the Ashentrix name and branding, logos, trademarks, website design and layout, text, graphics, photographs, videos, documents, downloads, visual assets and original content.
          </p>
          <p>
            You may use Website content for legitimate personal or internal business purposes. You may not reproduce substantial content, create derivative works, republish, commercially exploit, remove proprietary notices, misuse Ashentrix trademarks or frame the Website without prior written permission.
          </p>
          <p>
            Nothing on the Website grants ownership of or an unrestricted license to Ashentrix intellectual property.
          </p>
        </SectionCard>

        {/* Section 14 */}
        <SectionCard id="sec-14" title="Client and Third-Party Materials">
          <p>
            Clients and users are responsible for ensuring that data, documents, images, software, trademarks, recordings and other materials supplied to Ashentrix may lawfully be used and processed.
          </p>
          <p>
            You represent that you have the necessary rights and permissions to provide such materials. Ownership and permitted use of client materials are governed by the applicable agreement.
          </p>
        </SectionCard>

        {/* Section 15 */}
        <SectionCard id="sec-15" title="User Submissions and Enquiries">
          <p>
            When you submit contact enquiries, feedback, proposals or other communications, Ashentrix may use the information to respond to your request and conduct the relevant business communication.
          </p>
          <p>
            Where an NDA or other written agreement applies, that agreement governs the handling of the relevant information.
          </p>
        </SectionCard>

        {/* Section 16 */}
        <SectionCard id="sec-16" title="Recruitment and Employment Applications">
          <p>
            Career and internship information on the Website does not constitute an offer of employment. Applicants must provide accurate information and genuine supporting documentation. Ashentrix may verify information provided during recruitment.
          </p>
          <p>
            Any employment relationship is governed by applicable employment documentation, Company policies and applicable law.
          </p>
        </SectionCard>

        {/* Section 17 */}
        <SectionCard id="sec-17" title="Third-Party Websites and Services">
          <p>
            The Website may contain links to third-party websites, applications or services. Such links are provided for convenience or information. Ashentrix does not control and is not responsible for third-party content, availability, security, privacy practices or terms. A link does not necessarily constitute an endorsement.
          </p>
        </SectionCard>

        {/* Section 18 */}
        <SectionCard id="sec-18" title="Website Availability">
          <p>
            Ashentrix aims to maintain reliable Website availability but does not guarantee uninterrupted or error-free access. The Website may be unavailable because of maintenance, updates, hosting or network issues, telecommunications failures, cyber incidents, infrastructure failures or circumstances beyond Ashentrix’s reasonable control.
          </p>
        </SectionCard>

        {/* Section 19 */}
        <SectionCard id="sec-19" title="Disclaimer">
          <p>
            To the maximum extent permitted by applicable law, the Website and its content are provided on an “as is” and “as available” basis.
          </p>
          <p>
            Ashentrix does not warrant that the Website will always be available, complete, accurate, current, error-free, free of harmful components or suitable for every particular purpose. Website information should be independently evaluated before being relied upon for significant commercial, legal, financial or operational decisions.
          </p>
        </SectionCard>

        {/* Section 20 */}
        <SectionCard id="sec-20" title="Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Ashentrix Solutions Pvt. Ltd., its directors, officers, employees, representatives and affiliates shall not be liable for indirect, incidental, special, consequential or punitive damages arising from or related to access to or use of the Website, including loss of revenue, profits, business opportunities, goodwill, data or anticipated savings.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited. For contracted client services, the liability provisions in the applicable MSA, SOW or other agreement apply.
          </p>
        </SectionCard>

        {/* Section 21 */}
        <SectionCard id="sec-21" title="Indemnification">
          <p>
            To the extent permitted by applicable law, you agree to indemnify and hold harmless Ashentrix, its directors, officers, employees and representatives from claims, losses, liabilities, damages and reasonable expenses arising from your unlawful use of the Website, violation of these Terms, infringement of third-party rights, unauthorized materials or fraudulent or wrongful conduct.
          </p>
          <p>
            This does not apply to the extent that the relevant loss results from Ashentrix’s own liability that cannot legally be excluded.
          </p>
        </SectionCard>

        {/* Section 22 */}
        <SectionCard id="sec-22" title="Complaints, Service Requests and Escalations">
          <p>
            Ashentrix is committed to professional, transparent and accountable service delivery. Existing clients may raise operational concerns, service requests or escalations through channels designated under their applicable service agreement.
          </p>
          <p>
            Where a client agreement establishes a specific escalation matrix, grievance mechanism, SLA or dispute-resolution process, that process will prevail.
          </p>
        </SectionCard>

        {/* Section 23 */}
        <SectionCard id="sec-23" title="Business Communications">
          <p>
            By submitting contact information through the Website, you authorize Ashentrix to contact you regarding your enquiry, service request, partnership request, recruitment application or stated purpose.
          </p>
          <p>
            Where permitted by law and subject to applicable consent requirements, Ashentrix may send relevant business communications or corporate updates. You may request cessation of non-essential marketing communications.
          </p>
        </SectionCard>

        {/* Section 24 */}
        <SectionCard id="sec-24" title="Changes to the Website and Terms">
          <p>
            Ashentrix may change, modify, suspend or discontinue Website content, services, features or functionality. Ashentrix may also update these Terms to reflect changes in services, business operations, Website functionality, legal requirements or security practices.
          </p>
          <p>
            Updated Terms will be published with a revised “Last Updated” date. Continued use of the Website after publication constitutes acceptance of the revised Terms to the extent permitted by law.
          </p>
        </SectionCard>

        {/* Section 25 */}
        <SectionCard id="sec-25" title="Suspension or Termination of Website Access">
          <p>
            Ashentrix may suspend or terminate Website access where it reasonably believes that these Terms have been violated, the Website is being misused, security has been compromised, unlawful activity is suspected or restriction is necessary to protect Ashentrix, its clients, users or systems.
          </p>
          <p>
            Termination does not affect rights or obligations accrued before termination or provisions intended to survive termination.
          </p>
        </SectionCard>

        {/* Section 26 */}
        <SectionCard id="sec-26" title="Force Majeure">
          <p>
            Ashentrix is not liable for failure or delay caused by circumstances beyond its reasonable control, including natural disasters, fire, flood, epidemic, pandemic, war, civil unrest, governmental action, telecommunications or power failures, cyber incidents, infrastructure failure or labor disruptions.
          </p>
          <p>
            Client-specific force-majeure provisions are governed by the applicable service agreement.
          </p>
        </SectionCard>

        {/* Section 27 */}
        <SectionCard id="sec-27" title="Governing Law and Jurisdiction">
          <p>
            These Terms are governed by the laws of India.
          </p>
          <p>
            Subject to mandatory statutory rights and any dispute-resolution provisions in a separate written agreement, disputes specifically arising from use of the Website shall be subject to the jurisdiction of competent courts in Noida, Uttar Pradesh, India.
          </p>
          <p>
            For services provided under a separate client agreement, that agreement’s governing-law, jurisdiction and dispute-resolution provisions apply.
          </p>
        </SectionCard>

        {/* Section 28 */}
        <SectionCard id="sec-28" title="Dispute Resolution">
          <p>
            Ashentrix encourages parties to first attempt to resolve disputes through good-faith business discussions. Where a separate agreement contains an arbitration, mediation or other dispute-resolution mechanism, that mechanism applies to the relevant contractual relationship.
          </p>
        </SectionCard>

        {/* Section 29 */}
        <SectionCard id="sec-29" title="Severability and No Waiver">
          <p>
            If any provision of these Terms is found invalid, unlawful or unenforceable, the remaining provisions remain effective to the extent permitted by law.
          </p>
          <p>
            Failure by Ashentrix to enforce any provision does not constitute a waiver of its right to enforce that provision or any other provision later.
          </p>
        </SectionCard>

        {/* Section 30 */}
        <SectionCard id="sec-30" title="No Partnership or Agency">
          <p>
            Use of the Website or communication with Ashentrix does not create a partnership, joint venture, employment, agency or other legal relationship unless expressly established through a separate written agreement.
          </p>
        </SectionCard>

        {/* Section 31 */}
        <SectionCard id="sec-31" title="Entire Website Terms">
          <p>
            These Terms constitute the general terms governing access to and use of the Ashentrix Website. They do not replace agreements governing client engagements, employment, suppliers, partnerships or other contractual relationships.
          </p>
          <p>
            Where these Terms conflict with a separately executed agreement, that agreement prevails for the relevant contractual relationship.
          </p>
        </SectionCard>

        {/* Section 32 - Contact Info */}
        <SectionCard id="sec-32" title="Contact Information">
          <div className="bg-[#0F172A] rounded-2xl p-8 text-white relative overflow-hidden mt-2">
            {/* Decorative background shape */}
            <svg className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </span>
              Ashentrix Solutions Pvt. Ltd.
            </h3>
            
            <div className="space-y-4 text-gray-300 relative z-10">
              <div className="flex items-center gap-3">
                
                <Link href="https://www.ashentrix.com" className="hover:text-white transition-colors underline decoration-purple-500/50 underline-offset-4">www.ashentrix.com</Link>
              </div>
              <p className="text-sm mt-4 pt-4 border-t border-gray-700/50">
                For business enquiries, service requirements, partnership opportunities, client support or other matters, please use the relevant contact channel available on the Ashentrix Website.
              </p>
            </div>
          </div>
        </SectionCard>

        

        {/* Footer Disclaimer */}
        <div className="text-center pb-10 mt-16">
          <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 mb-8 text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed text-left">
            <p className="font-semibold text-[#0F172A] mb-2">Legal Disclaimer:</p>
            This Website Terms &amp; Conditions document is intended to establish general terms for use of the company website “www.ashentrix.com”. It is not a substitute for a client-specific MSA, SOW, SLA, Data Processing Agreement, NDA, employment agreement or other contractual document. Ashentrix should obtain legal review of this document before publication, particularly for data protection, liability, indemnity, jurisdiction and dispute-resolution provisions.
          </div>
          <p className="text-sm font-bold text-[#0F172A]">
            © 2026 Ashentrix Solutions Pvt. Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
