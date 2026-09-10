export default function ServiceHero() {
  return (
    <section className="bg-gradient-to-r from-[#1a1625] to-[#280b57] text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Transform Your Operations
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
            At Ashentrix Solutions, we combine advanced technology with human
            expertise to deliver scalable, multilingual, and industry-ready
            outsourcing solutions. Our services are designed to adapt to your
            business goals, enhance customer engagement, and create measurable
            long-term value.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <div className="bg-white/10 px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <span className="text-sm sm:text-base font-semibold">Process Optimization</span>
            </div>
            <div className="bg-white/10 px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <span className="text-sm sm:text-base font-semibold">AI Automation</span>
            </div>
            <div className="bg-white/10 px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <span className="text-sm sm:text-base font-semibold">Digital Transformation</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
              Explore Services
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
