import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] mb-4 tracking-tight">
          Our Services
        </h2>
        <p className="text-lg text-[#475569] max-w-3xl mx-auto">
          At Ashentrix Solutions, we combine advanced technology with human
          expertise to deliver scalable, multilingual, and industry-ready
          outsourcing solutions designed to adapt to your business goals,
          enhance customer engagement, and create measurable long-term value.
        </p>
      </div>

      {/* NEW: Top 2 Large Highlighted Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 lg:mb-14 items-stretch">
        {/* Card 01: UAE Banking (With 3D Flip Effect) */}
        <div className="group w-full h-[360px] [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.02)] z-10">
            {/* --- FRONT OF CARD --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
              <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 h-full relative overflow-hidden shadow-sm flex flex-col justify-center">
                <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-[#280b57]"></div>
                <div className="pl-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2 uppercase tracking-tight">
                    <span className="text-[#280b57]">01</span> UAE BANKING SALES
                    OPERATIONS
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "International UAE banking sales process",
                      "Credit Cards & Personal Loans",
                      "Working with banking / NBFC-led product portfolios",
                      "Lead qualification & customer conversations",
                      "Follow-up, documentation coordination & conversion support",
                      "Performance tracking and sales reporting",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#475569] mt-1.5 shrink-0"></span>
                        <span className="text-xs sm:text-sm text-[#475569] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --- BACK OF CARD (PPT Data) --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-5 h-full flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-8 bottom-8 w-1.5 bg-[#280b57]"></div>
                <div className="pr-3 flex-grow flex flex-col">
                  <p className="text-[11px] sm:text-xs text-[#475569] mb-2 font-medium border-b pb-2">
                    Customer acquisition and sales support for credit-card and
                    loan products.
                  </p>
                  <div className="grid grid-cols-2 gap-2 flex-grow overflow-y-auto pr-1">
                    {[
                      {
                        step: "01",
                        title: "Lead Intake",
                        desc: "Receive & organize prospects",
                      },
                      {
                        step: "02",
                        title: "Connect",
                        desc: "Professional customer engagement",
                      },
                      {
                        step: "03",
                        title: "Qualify",
                        desc: "Need & eligibility, DBR & Profile",
                      },
                      {
                        step: "04",
                        title: "Convert",
                        desc: "Product presentation & follow-up",
                      },
                      {
                        step: "05",
                        title: "Document",
                        desc: "Application/document coordination",
                      },
                      {
                        step: "06",
                        title: "Report",
                        desc: "MIS, productivity & outcomes",
                      },
                    ].map((box, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[#280b57] font-bold text-xs">
                            {box.step}
                          </span>
                          <h4 className="font-bold text-[10px] uppercase text-[#0F172A]">
                            {box.title}
                          </h4>
                        </div>
                        <p className="text-[9px] text-[#475569] leading-tight">
                          {box.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-center mt-2 font-semibold text-[#0F172A] italic">
                    Objective: build predictable sales while maintaining
                    experience & compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 02: Education (With 3D Flip Effect) */}
        <div className="group w-full h-[360px] [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.02)] z-10">
            {/* --- FRONT OF CARD --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
              <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 h-full relative overflow-hidden shadow-sm flex flex-col justify-center">
                <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-[#280b57]"></div>
                <div className="pl-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2 uppercase tracking-tight">
                    <span className="text-[#280b57]">02</span> PAN-INDIA
                    EDUCATION & ADMISSIONS
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Certification Courses",
                      "UG & PG Programs",
                      "Admission counselling and lead handling",
                      "Student / parent query resolution",
                      "Follow-up and application support",
                      "Coordination across tied-up universities",
                      "Conversion-focused calling and reporting",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#475569] mt-1.5 shrink-0"></span>
                        <span className="text-xs sm:text-sm text-[#475569] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --- BACK OF CARD (New PPT Data) --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-5 h-full flex flex-col shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-8 bottom-8 w-1.5 bg-[#280b57]"></div>

                <div className="pr-3 flex-grow flex flex-col">
                  <p className="text-[11px] sm:text-xs text-[#475569] mb-3 font-medium border-b pb-2">
                    Counselling-led customer engagement across certification, UG
                    and PG programs.
                  </p>

                  <div className="grid grid-cols-2 gap-2 flex-grow overflow-y-auto pr-1">
                    {[
                      {
                        title: "Lead Management",
                        desc: "Fresh enquiry, callbacks & lead priority.",
                        borderColor: "border-l-[#280b57]",
                      },
                      {
                        title: "Counselling",
                        desc: "Program, eligibility, fee guidance.",
                        borderColor: "border-l-[#0b809a]",
                      },
                      {
                        title: "Follow-Up",
                        desc: "Structured follow-up journeys.",
                        borderColor: "border-l-[#280b57]",
                      },
                      {
                        title: "Application Support",
                        desc: "Document verification & admission.",
                        borderColor: "border-l-[#0b809a]",
                      },
                      {
                        title: "University Co-ord",
                        desc: "Support across tied-up portfolios.",
                        borderColor: "border-l-[#280b57]",
                      },
                      {
                        title: "MIS & Quality",
                        desc: "Daily reporting & quality feedback.",
                        borderColor: "border-l-[#0b809a]",
                      },
                    ].map((box, idx) => (
                      <div
                        key={idx}
                        className={`bg-slate-50 p-2 rounded-lg border border-slate-100 border-l-4 ${box.borderColor} flex flex-col justify-center`}
                      >
                        <h4 className="font-bold text-[10px] my-0.5 text-[#0F172A]">
                          {box.title}
                        </h4>
                        <p className="text-[9px] text-[#475569] leading-tight">
                          {box.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ORIGINAL: 8 Grid Cards (4 columns on large screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Link href="/services/customer-support" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/customersupport.jpg"
                alt="Customer Support"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Customer Support (Voice / Chat / Email)
              </h3>
              <p className="text-sm text-[#475569]">
                Personalized, multilingual assistance to enhance customer
                satisfaction and retention
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/technical-support" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/technicalsupport.jpg"
                alt="Technical Support"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Technical Support
              </h3>
              <p className="text-sm text-[#475569]">
                End-to-end troubleshooting and product support powered by
                skilled professionals
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/back-office" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/backofficeoperations.jpg"
                alt="Back Office Operations"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Back Office Operations
              </h3>
              <p className="text-sm text-[#475569]">
                Streamlined processing and documentation services for improved
                efficiency
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/data-processing" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/data.jpg"
                alt="Data Processing"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Data Processing & Data Services
              </h3>
              <p className="text-sm text-[#475569]">
                Secure data management and transformation for business
                intelligence
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/analytics-reporting" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/reporting.jpg"
                alt="Analytics & Reporting"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Analytics & Reporting
              </h3>
              <p className="text-sm text-[#475569]">
                Actionable insights through real-time data monitoring and
                performance analysis
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/collections" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/process.jpg"
                alt="Collections Process"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Collections Process
              </h3>
              <p className="text-sm text-[#475569]">
                Efficient, compliant, and customer-friendly debt recovery
                solutions
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/recruitment" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/talentsupport.jpg"
                alt="Recruitment Support"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3 tracking-tight">
                Recruitment & Talent Support
              </h3>
              <p className="text-sm text-[#475569]">
                Scalable hiring solutions to meet your workforce and project
                demands
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/operations-management" className="block">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src="/images/services/operations.jpg"
                alt="Operations Management"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#280b57] mb-3 tracking-tight">
                Operations Management
              </h3>
              <p className="text-sm text-[#475569]">
                Process optimization and workflow monitoring for consistent
                results
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
