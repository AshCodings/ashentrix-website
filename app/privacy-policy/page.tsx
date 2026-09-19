"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock, FileText, AlertCircle, CheckCircle2 } from "lucide-react";

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

export default function PrivacyPolicyPage() {
  
  const section2List = [
    "Name and contact details.",
    "Email address and telephone number.",
    "Company name, professional title and business information.",
    "Information included in enquiries, service requests, partnership requests and other communications.",
    "Recruitment and application information when you apply for a position.",
    "Information required to respond to your request or provide an agreed service."
  ];

  const section4List = [
    "Respond to enquiries and requests.",
    "Provide, administer and improve our services.",
    "Prepare proposals and communicate about potential or existing business engagements.",
    "Manage client, partner, supplier and business relationships.",
    "Process recruitment and internship applications.",
    "Send service notices and important administrative communications.",
    "Send marketing or promotional communications where permitted and, where required, with appropriate consent.",
    "Monitor Website performance and improve user experience.",
    "Maintain security, prevent fraud and investigate misuse.",
    "Comply with applicable legal, regulatory and contractual obligations.",
    "Establish, exercise or defend legal claims and enforce agreements."
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden py-20 lg:py-32">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-[#280b57] mb-6 shadow-sm">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.1]">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-600">Policy</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium mb-6">
            Website Privacy Notice
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 font-medium">
            <span className="bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
              Effective Date: September 2026
            </span>
            <span className="bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
              Last Updated: September 2026
            </span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 leading-relaxed mb-12 font-medium bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-2xl border-l-4 border-[#280b57]"
        >
          <p className="mb-4">
            This Privacy Policy explains how Ashentrix Solutions Pvt. Ltd. (&ldquo;Ashentrix&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, stores, discloses and protects personal information when you visit www.ashentrix.com, submit information through our Website, contact us, apply for a role, request services or otherwise interact with us through the Website. {/*[cite: 6] */}
          </p>
          <p className="text-base text-gray-500 italic">
            This Website Privacy Policy applies to Website and related online interactions. Client-specific data processing performed under an MSA, SOW, Data Processing Agreement or other written contract is governed by the applicable contractual terms. {/*[cite: 6] */}
          </p>
        </motion.div>

        {/* Sections */}
        <SectionCard id="sec-1" title="Who We Are">
          <p>Ashentrix Solutions Pvt. Ltd. is a Noida, India-based business process management and outsourcing company providing customer support, technical support, back-office operations, data services, analytics, collections, recruitment support, operations management and technology-enabled services. {/*[cite: 6] */}</p>
          <div className="bg-gray-50 p-4 rounded-xl mt-4 border border-gray-100 text-sm">
            <p className="font-semibold text-gray-900 mb-2">Operational address published on our Website:</p>
            <p><span className="font-medium text-gray-900">Address:</span> A-22, 1st Floor, Sector 4, Noida, Gautam Buddha Nagar, Uttar Pradesh, India &ndash; 201301. {/*[cite: 6] */}</p>
            <p className="mt-2"><span className="font-medium text-gray-900">Email:</span> <a href="mailto:service@ashentrix.com" className="text-purple-600 hover:underline">service@ashentrix.com</a> {/*[cite: 6] */}</p>
            <p><span className="font-medium text-gray-900">Website:</span> <Link href="https://www.ashentrix.com" className="text-purple-600 hover:underline">www.ashentrix.com</Link> {/*[cite: 6] */}</p>
          </div>
        </SectionCard>

        <SectionCard id="sec-2" title="Information We Collect">
          <p>We may collect information that you voluntarily provide, including: {/*[cite: 6] */}</p>
          <ul className="space-y-3 mt-4 mb-6">
            {section2List.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#280b57] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>We may also collect technical and usage information, such as IP address, browser, operating system, device information, pages visited, referring pages, timestamps, interaction information, Website performance and diagnostic information, and cookie information where used. {/*[cite: 6] */}</p>
          <p className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-purple-900 text-sm italic mt-4">
            Please do not submit sensitive, confidential or proprietary information through a general Website form unless specifically requested or an appropriate contractual arrangement is in place. {/*[cite: 6] */}
          </p>
        </SectionCard>

        <SectionCard id="sec-3" title="How We Collect Information">
          <p>We may collect information directly from you through contact forms, email, telephone, WhatsApp or other communications; when you request information, a proposal, consultation or partnership; when you submit a job or internship application; automatically through cookies, analytics and server logs; or from authorized business contacts in connection with a client, supplier or partnership relationship. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-4" title="How We Use Personal Information">
          <p>We may use personal information to: {/*[cite: 6] */}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {section4List.map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="w-1.5 h-1.5 rounded-full bg-[#280b57] mt-2 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard id="sec-5" title="Legal Basis and Applicable Law">
          <p>Ashentrix processes personal information on an appropriate legal basis depending on the purpose and applicable law. This may include consent, performance or preparation of a contract, compliance with legal obligations, protection of legitimate business interests, or another lawful basis recognized by applicable law. {/*[cite: 6] */}</p>
          <p>For processing subject to Indian data-protection requirements, Ashentrix will handle personal data in accordance with applicable provisions of the Digital Personal Data Protection Act, 2023 and applicable rules, notifications and regulations as they become applicable to the relevant processing. {/*[cite: 6] */}</p>
          <p>Where another jurisdiction applies to a particular processing activity, additional rights or requirements may apply. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-6" title="Cookies and Similar Technologies">
          <p>The Website may use cookies and similar technologies to support essential functionality, security, analytics and user experience. Where required by applicable law, non-essential cookies will be used only with appropriate consent. You may manage cookies through your browser settings; disabling certain cookies may affect Website functionality. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-7" title="Analytics and Website Usage">
          <p>We may use analytics and technical information to understand Website traffic, performance, navigation patterns and user interactions. This helps us improve content, functionality, security and user experience. Analytics information may be aggregated or otherwise used in a manner designed to reduce direct identification where appropriate. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-8" title="Sharing and Disclosure">
          <p>Ashentrix does not sell personal information as a business practice. We may disclose personal information where reasonably necessary to authorized personnel, service providers supporting hosting, IT, communications, analytics, recruitment, security or infrastructure, professional advisers, auditors, insurers and legal representatives, government or regulatory authorities where required or permitted by law, or transaction counterparties in connection with a merger, acquisition, restructuring, financing or sale of relevant business assets, subject to applicable law. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-9" title="Client and Business Data">
          <p>Ashentrix may process personal information on behalf of business clients as part of outsourced or managed services. The applicable MSA, SOW, Data Processing Agreement and client instructions will govern such processing, including security, confidentiality, retention, permitted uses and data-subject requests where applicable. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-10" title="International and Cross-Border Processing">
          <p>Ashentrix may use service providers or technologies that operate from locations outside India. Where personal information is transferred or accessed across borders, Ashentrix will apply requirements and safeguards required by applicable law and contractual obligations. Client-specific cross-border requirements will be addressed in the applicable agreement where relevant. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-11" title="Data Security">
          <p>Ashentrix uses reasonable administrative, technical and organizational safeguards appropriate to the nature of information processed. Measures may include access controls, authentication, security monitoring, secure system configurations, data protection procedures and personnel controls. {/*[cite: 6] */}</p>
          <p className="font-medium text-gray-900">No method of electronic transmission or storage can be guaranteed to be completely secure. Users should take reasonable precautions when communicating with us online and should not send passwords or unnecessary sensitive information through ordinary email or public forms. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-12" title="Data Retention">
          <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, to provide services, maintain business records, meet contractual requirements, resolve disputes, enforce agreements, comply with legal obligations and protect our legitimate interests. Retention periods may vary by information type, purpose and legal or contractual requirements. When information is no longer required, it may be securely deleted, anonymized or otherwise disposed of. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-13" title="Your Privacy Rights">
          <p>Depending on applicable law and your relationship with Ashentrix, you may have rights concerning your personal information, including access, correction, deletion where legally available, portability where applicable, withdrawal of consent where processing is based on consent, opting out of certain marketing communications, raising a privacy complaint or grievance, and other rights provided by applicable law. Rights may be subject to legal, contractual or legitimate-business limitations. We may need to verify your identity before responding. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-14" title="Marketing Communications">
          <p>Where permitted by applicable law, Ashentrix may send information about services, business updates, insights, events or partnership opportunities. You may unsubscribe from marketing communications using the available mechanism or by contacting us. Administrative or service-related communications may continue where necessary. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-15" title="Recruitment and Applicant Privacy">
          <p>If you apply for a position or internship, we may collect your name, contact details, CV/resume, qualifications, employment history, skills, interview information and other information reasonably required for recruitment. We use applicant information to evaluate applications, communicate with candidates, conduct appropriate verification and manage recruitment processes. Applicant information may be shared with authorized recruitment personnel and service providers where reasonably necessary. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-16" title="Third-Party Links">
          <p>Our Website may contain links to third-party websites, platforms or services. This Privacy Policy does not govern third-party privacy practices. We encourage you to review third-party privacy notices before submitting personal information to them. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-17" title="Children's Privacy">
          <p>The Website is intended for business and general audiences and is not directed specifically to children. If you believe a child has provided personal information to Ashentrix without appropriate authorization, please contact us so that we can assess and take appropriate action in accordance with applicable law. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-18" title="Changes to This Privacy Policy">
          <p>Ashentrix may update this Privacy Policy to reflect changes in our services, Website functionality, technology, legal requirements or privacy practices. The revised version will be published on this page with an updated &ldquo;Last Updated&rdquo; date. Material changes may be communicated through appropriate Website or communication channels where required by law. {/*[cite: 6] */}</p>
        </SectionCard>

        <SectionCard id="sec-19" title="Complaints and Privacy Grievances">
          <p>If you have a question, concern or complaint regarding our handling of personal information, please contact us first. We will review the matter and respond in accordance with applicable law and our internal procedures. Where applicable, you may also have the right to approach the relevant data-protection or regulatory authority. {/*[cite: 6] */}</p>
        </SectionCard>

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

     

        {/* Important Legal Notice Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-purple-50 p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-[#280b57]" />
            Important Legal Note
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-0">
            This Privacy Policy is drafted as a website privacy notice for Ashentrix Solutions Pvt. Ltd. and should be read together with the Company&apos;s contractual data-processing, confidentiality and security terms where applicable. It should be reviewed by qualified Indian privacy/corporate counsel before publication, particularly for the Company&apos;s actual data flows, cookies, vendors, international transfers, retention periods, consent mechanisms and obligations under applicable data-protection law. {/*[cite: 6] */}
          </p>
        </motion.div>

        {/* Footer Copyright */}
        <div className="text-center pb-10 mt-16">
          <p className="text-sm font-bold text-[#0F172A]">
            © 2026 Ashentrix Solutions Pvt. Ltd. All Rights Reserved. {/*[cite: 6] */}
          </p>
        </div>

      </div>
    </div>
  );
}
