export default function IndustryHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1625] to-[#280b57] text-white py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 sm:mb-8">
          <span className="inline-block px-3 sm:px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-xs sm:text-sm font-semibold rounded-full border border-[#280b57]/30 mb-4 sm:mb-6 uppercase tracking-wider">
            Industries We Serve
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
          Transforming
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-400 block">
            Every Industry
          </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
          Ashentrix Solutions partners with a wide range of industries including
          Insurance, Telecom, Healthcare, E-commerce, Banking, IT, Travel,
          Automobiles, and more - helping streamline operations and enhance
          customer experience through customized outsourcing solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button className="bg-[#280b57] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
            Explore Solutions
          </button>
          <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 uppercase tracking-wider">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
