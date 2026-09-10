export default function IndustryOverview() {
  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Industry-Specific
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400">
              {" "}
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We understand that each industry has unique challenges, regulations,
            and opportunities. Our specialized approach delivers solutions
            tailored to your sector's specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mb-6 rounded-lg">
              <svg
                className="w-8 h-8 text-[#280b57]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Deep Expertise</h3>
            <p className="text-gray-300">
              Our teams possess extensive knowledge of industry regulations,
              compliance requirements, and market dynamics.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mb-6 rounded-lg">
              <svg
                className="w-8 h-8 text-[#280b57]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
            <p className="text-gray-300">
              Cutting-edge technology and methodologies designed specifically
              for your industry's unique challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300">
            <div className="w-16 h-16 bg-[#280b57]/20 flex items-center justify-center mb-6 rounded-lg">
              <svg
                className="w-8 h-8 text-[#280b57]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
            <p className="text-gray-300">
              Track record of successful transformations across multiple sectors
              with measurable ROI and performance improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
