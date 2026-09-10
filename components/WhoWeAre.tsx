import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
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
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6">
              We combine human expertise and smart technology to deliver
              reliable, flexible support for both domestic and international
              clients. With a focus on quality, innovation, and scalability, we
              help organizations streamline workflows and achieve operational
              excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  New
                </div>
                <p className="text-sm text-[#475569] uppercase tracking-wide">
                  Company Launch
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  2025
                </div>
                <p className="text-sm text-[#475569] uppercase tracking-wide">
                  Starting Fresh
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  100%
                </div>
                <p className="text-sm text-[#475569] uppercase tracking-wide">
                  Commitment Level
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/whoweare.jpg"
              alt="Ashentrix Team"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
