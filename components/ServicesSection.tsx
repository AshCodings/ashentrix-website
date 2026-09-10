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
