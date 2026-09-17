"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, FileText, AlertCircle } from "lucide-react";

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

export default function SecurityCompliancePage() {
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
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.1]">
            Data Security &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-600">Compliance</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium mb-6">
            Enterprise Security &amp; Compliance Framework
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
            Ashentrix Solutions Pvt. Ltd. (&ldquo;Ashentrix&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) recognizes that security, confidentiality, privacy and operational resilience are fundamental to delivering business process management and outsourcing services. This Data Security &amp; Compliance statement describes the security and governance principles that guide our Website, business operations and client engagements.
          </p>
          <p className="text-base text-gray-500 italic">
            This page is intended to communicate Ashentrix&apos;s security approach at a high level. Specific controls, certifications, audit reports, technical architecture, service levels and contractual commitments may vary by client, service, system and engagement and should be confirmed through the applicable contract or security review.
          </p>
        </motion.div>

        {/* Sections */}
        <SectionCard id="sec-1" title="Our Security Commitment">
          <p>Ashentrix is committed to protecting client, customer, employee and business information against unauthorized access, use, disclosure, alteration, loss and disruption. Our security approach is based on risk management, least-privilege access, confidentiality, operational controls, secure technology practices and continuous improvement.</p>
        </SectionCard>

        <SectionCard id="sec-2" title="Information Security Governance">
          <p>We seek to maintain documented policies and procedures appropriate to the nature and scale of our operations. Security responsibilities are assigned to appropriate personnel, and security considerations are incorporated into operational processes, technology management and client engagements.</p>
          <p>Security requirements may include access management, asset management, incident management, vendor management, business continuity, data handling and employee awareness.</p>
        </SectionCard>

        <SectionCard id="sec-3" title="Access Control">
          <p>Ashentrix applies access controls designed to limit information and systems access to authorized personnel with a legitimate business need. Controls may include role-based access, unique user credentials, authentication mechanisms, privileged-access restrictions, periodic access review and timely removal of access when personnel change roles or leave the organization.</p>
        </SectionCard>

        <SectionCard id="sec-4" title="Data Protection">
          <p>Information is handled according to its nature, purpose, sensitivity and contractual requirements. Ashentrix seeks to minimize unnecessary access and use, maintain appropriate controls around data transfer and storage, and protect confidential information throughout its lifecycle.</p>
          <p>Where Ashentrix processes personal data for a client, the applicable MSA, SOW, Data Processing Agreement and client instructions govern the permitted processing and security requirements.</p>
        </SectionCard>

        <SectionCard id="sec-5" title="Encryption & Secure Transmission">
          <p>Where appropriate to the system and service, Ashentrix uses encryption and secure transmission mechanisms to protect information in transit and, where supported by the relevant environment, at rest.</p>
          <p>Specific encryption algorithms, key-management arrangements and technical configurations may vary by platform, client environment and contractual requirements.</p>
        </SectionCard>

        <SectionCard id="sec-6" title="Network, Endpoint & System Security">
          <p>Ashentrix uses reasonable technical controls to protect systems and endpoints against unauthorized access and malicious activity. Depending on the environment, controls may include endpoint protection, secure configurations, network controls, vulnerability management, logging, monitoring, patch management and controlled administrative access.</p>
        </SectionCard>

        <SectionCard id="sec-7" title="Security Monitoring & Logging">
          <p>Relevant systems may generate security, access, operational and audit logs. Monitoring and review practices are designed to help identify suspicious activity, investigate incidents, support operational accountability and meet applicable contractual or legal requirements.</p>
        </SectionCard>

        <SectionCard id="sec-8" title="Incident Response">
          <p>Ashentrix maintains processes for identifying, assessing, containing, investigating and responding to suspected security incidents.</p>
          <p>Where an incident affects client information or services, notification, escalation, investigation and remediation will be handled in accordance with applicable law and the relevant contractual commitments, including any agreed incident-notification timelines.</p>
        </SectionCard>

        <SectionCard id="sec-9" title="Business Continuity & Disaster Recovery">
          <p>Ashentrix recognizes the importance of maintaining continuity of critical business operations. Business continuity and recovery measures may include operational contingency planning, backup procedures, alternate working arrangements, technology recovery measures and defined escalation procedures.</p>
          <p>Specific Recovery Time Objectives (RTOs), Recovery Point Objectives (RPOs) and disaster-recovery commitments are service- and client-specific and should be established contractually where required.</p>
        </SectionCard>

        <SectionCard id="sec-10" title="Employee Security & Awareness">
          <p>Personnel with access to Company or client information are expected to follow applicable security, confidentiality and acceptable-use requirements. Security awareness may include confidentiality obligations, password and authentication practices, phishing awareness, data handling, incident reporting and role-specific training.</p>
        </SectionCard>

        <SectionCard id="sec-11" title="Confidentiality">
          <p>Ashentrix treats client and business information as confidential where required by contract, law or the nature of the information. Employees, contractors and relevant service providers may be subject to confidentiality obligations appropriate to their role.</p>
        </SectionCard>

        <SectionCard id="sec-12" title="Vendor & Third-Party Risk">
          <p>Where third-party providers support Ashentrix operations, relevant providers may be evaluated based on the nature of the service, information involved and associated risks. Contractual terms, confidentiality, security requirements and access restrictions may be applied as appropriate.</p>
        </SectionCard>

        <SectionCard id="sec-13" title="Privacy & Personal Data">
          <p>Ashentrix&apos;s handling of personal information is described in its Privacy Policy. Where applicable, personal data processing will be performed in accordance with relevant contractual requirements and applicable data-protection law.</p>
          <p>For India-related processing, Ashentrix will consider applicable requirements under the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 as they come into force and apply to the relevant processing. The notified Rules provide for phased commencement of provisions, so the applicable requirements may depend on the relevant date and processing context.</p>
        </SectionCard>

        <SectionCard id="sec-14" title="Client-Specific Compliance">
          <p>Ashentrix recognizes that clients in sectors such as Insurance, Banking, Finance, Healthcare, Telecom and other regulated industries may have specific security, privacy and regulatory requirements. Such requirements may be documented through the applicable contract, security questionnaire, SOW, DPA, SLA or client policy, subject to feasibility and mutual agreement.</p>
        </SectionCard>

        <SectionCard id="sec-15" title="Healthcare, Financial & Regulated Information">
          <p>For regulated or sensitive information, Ashentrix may implement additional contractual and operational controls appropriate to the engagement. Examples can include restricted access, enhanced monitoring, role-specific training, audit trails and documented handling procedures.</p>
          <p>Any representation that Ashentrix is certified, formally compliant or independently attested against a particular framework should be verified against the Company&apos;s current certification or audit documentation before being relied upon.</p>
        </SectionCard>

        <SectionCard id="sec-16" title="Secure Development & Technology Services">
          <p>Where Ashentrix provides web, application, analytics or technology services, security considerations may be incorporated into requirements, access controls, development practices, testing, deployment and maintenance as appropriate to the engagement.</p>
        </SectionCard>

        <SectionCard id="sec-17" title="Data Retention & Disposal">
          <p>Data retention is determined by business purpose, client instructions, contractual requirements and applicable law. When information is no longer required, Ashentrix may securely delete, return, anonymize or otherwise dispose of it in accordance with applicable requirements and contractual commitments.</p>
        </SectionCard>

        <SectionCard id="sec-18" title="Security Assessments & Client Due Diligence">
          <p>Enterprise clients may request security questionnaires, documentation, assessments or other due-diligence information. Ashentrix will seek to provide appropriate information subject to confidentiality, security, contractual and operational considerations. Detailed technical information may require an appropriate confidentiality arrangement.</p>
        </SectionCard>

        <SectionCard id="sec-19" title="Compliance & Audit Cooperation">
          <p>Where contractually agreed, Ashentrix may support reasonable client audits, assessments or compliance reviews relevant to the services provided. The scope, frequency, notice requirements, confidentiality and cost allocation for audits should be defined in the applicable agreement.</p>
        </SectionCard>

        <SectionCard id="sec-20" title="Certifications & Security Claims">
          <p>Ashentrix will represent certifications, attestations, regulatory approvals or formal compliance status only where such status is current and supported by appropriate documentation.</p>
          <p>Website statements should not be interpreted as a representation that every Ashentrix service, client environment or process is certified or compliant with every listed framework. Client-specific compliance should be confirmed during contracting and due diligence.</p>
        </SectionCard>

        <SectionCard id="sec-21" title="Shared Responsibility">
          <p>Security is a shared responsibility. Ashentrix is responsible for controls within its agreed service and technology environment. Clients remain responsible for controls within their own systems, user accounts, configurations, data permissions, instructions and third-party environments unless otherwise agreed in writing.</p>
        </SectionCard>

        <SectionCard id="sec-22" title="Reporting a Security Concern">
          <p>If you believe you have identified a security vulnerability, unauthorized access, data exposure or other security concern relating to an Ashentrix Website or service, please report it promptly through the Company&apos;s official contact channel.</p>
          <p>Do not publicly disclose suspected vulnerabilities before Ashentrix has had a reasonable opportunity to investigate and respond.</p>
        </SectionCard>

        <SectionCard id="sec-23" title="Continuous Improvement">
          <p>Ashentrix seeks to improve its security and compliance practices as its operations, technology, client requirements and applicable laws evolve. Security controls may be enhanced, replaced or updated based on risk assessments, incidents, audits, technology changes and business requirements.</p>
        </SectionCard>

        {/* Section 24 - Contact Info */}
        <SectionCard id="sec-24" title="Contact Information">
          <div className="bg-[#0F172A] rounded-2xl p-8 text-white relative overflow-hidden mt-2">
            <svg className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                <FileText className="w-6 h-6" />
              </span>
              Ashentrix Solutions Pvt. Ltd.
            </h3>
            
            <div className="space-y-4 text-gray-300 relative z-10">
              <p>A-22, 1st Floor, Sector 4, Noida,<br/>Gautam Buddha Nagar, Uttar Pradesh, India &ndash; 201301</p>
              <p><span className="font-semibold text-white">Email:</span> <a href="mailto:service@ashentrix.com" className="hover:text-purple-300 transition-colors">service@ashentrix.com</a></p>
              <p><span className="font-semibold text-white">Phone / WhatsApp:</span> <a href="tel:+919711179821" className="hover:text-purple-300 transition-colors">+91-971 117 9821</a></p>
              <div className="flex items-center gap-3 pt-2">
                <Link href="https://www.ashentrix.com" className="hover:text-white transition-colors underline decoration-purple-500/50 underline-offset-4">www.ashentrix.com</Link>
              </div>
              <p className="text-sm mt-4 pt-4 border-t border-gray-700/50">
                For client-specific security or compliance enquiries, please contact the Ashentrix team through the official business contact channel.
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
            Important Legal &amp; Compliance Notice
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-0">
            This page is a high-level public description of Ashentrix&apos;s security and compliance approach. It is not a security certification, independent audit report, contractual security commitment or guarantee of uninterrupted security. Specific controls and commitments must be evaluated against the actual service, client environment and executed contractual documents.
          </p>
        </motion.div>

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
