export default function CaseStudyDetails() {
  return (
    <section className="bg-linear-to-br from-[#1a1625] to-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-5xl font-bold mb-6">How We Deliver Results</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every successful transformation follows our proven methodology,
            adapted to your unique business context and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mx-auto mb-6 rounded-full">
              <span className="text-2xl font-bold text-[#280b57]">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Discovery & Analysis</h3>
            <p className="text-gray-300 text-sm">
              Deep dive into your current processes, pain points, and objectives
              to understand the full scope of transformation needed.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mx-auto mb-6 rounded-full">
              <span className="text-2xl font-bold text-[#280b57]">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Strategic Planning</h3>
            <p className="text-gray-300 text-sm">
              Develop a comprehensive roadmap with clear milestones, timelines,
              and success metrics tailored to your goals.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mx-auto mb-6 rounded-full">
              <span className="text-2xl font-bold text-[#280b57]">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Implementation</h3>
            <p className="text-gray-300 text-sm">
              Execute the transformation with minimal disruption using proven
              methodologies and continuous monitoring.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mx-auto mb-6 rounded-full">
              <span className="text-2xl font-bold text-[#280b57]">4</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Optimization</h3>
            <p className="text-gray-300 text-sm">
              Continuous improvement and optimization to ensure sustained
              performance and maximum ROI from your investment.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-[#0a0a0a]/50 p-12 border border-[#280b57]/20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing list of organizations that have transformed their
            operations and achieved extraordinary results with our partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              Start Your Transformation
            </button>
            <button className="border-2 border-[#280b57] text-[#280b57] px-8 py-4 text-lg font-semibold hover:bg-[#280b57] hover:text-white transition-all duration-300 uppercase tracking-wider">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
