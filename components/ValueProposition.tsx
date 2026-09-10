import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            Process outsourcing designed for performance
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Powered by people, perfected by technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/images/pro2.jpg"
                alt="Efficiency at Scale"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-4 tracking-tight">
                Efficiency at Scale
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Enhance your workflow with scalable outsourcing solutions
                powered by smart automation.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/images/pro3.jpg"
                alt="Quality Assured"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4 tracking-tight">
                Quality Assured
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Delivering efficiency, scalability, and excellence in every
                process we touch.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/images/pro1.jpg"
                alt="Cost Optimization"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4 tracking-tight">
                Cost Optimization
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Reduce operational costs while maintaining world-class service
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
