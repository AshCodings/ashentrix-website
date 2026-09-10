export default function InsightsHero() {
  return (
    <section className="relative bg-linear-to-br from-[#0a0a0a] via-[#1a1625] to-[#280b57] text-white py-32">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
            Our Thinking
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          Insights That
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400 block">
            Drive Progress
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stay ahead of industry trends with our expert analysis, research
          reports, and thought leadership on the future of business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
            Subscribe to Newsletter
          </button>
          <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 uppercase tracking-wider">
            Download Reports
          </button>
        </div>
      </div>
    </section>
  );
}
