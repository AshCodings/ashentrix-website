import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Left Content Area */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6">
              Ashentrix Solutions is a professional business
              process management company based in Delhi NCR, India. We
              specialize in providing end-to-end outsourcing services across
              Insurance, Telecom, Healthcare, Ecommerce, Hardware & IoT,
              Entertainment, Social Platforms, Finance, Accounting, Recruitment,
              Logistics, Banking, Travel, and Hospitality.
            </p>
            
            {/* New Vertical Cards Section */}
            <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
              {/* Card 1 */}
              <div className="bg-white border border-gray-100 rounded-lg p-5 relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#280b57]"></div>
                <div className="pl-3">
                  <h3 className="text-base font-bold text-[#280b57] mb-2 uppercase tracking-wide">
                    CUSTOMER EXPERIENCE
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Voice, chat and email support designed around customer satisfaction, responsiveness and service quality.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-100 rounded-lg p-5 relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#280b57]"></div>
                <div className="pl-3">
                  <h3 className="text-base font-bold text-[#280b57] mb-2 uppercase tracking-wide">
                    PROCESS EXCELLENCE
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Structured workflows, training, quality monitoring, reporting and continuous process improvement.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-100 rounded-lg p-5 relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#280b57]"></div>
                <div className="pl-3">
                  <h3 className="text-base font-bold text-[#280b57] mb-2 uppercase tracking-wide">
                    SCALABLE DELIVERY
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Flexible manpower and operating models that can scale with business volumes and service requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative h-96 lg:h-auto lg:min-h-[500px]">
            <Image
              src="/images/whoweare.jpg"
              alt="Ashentrix Team"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
