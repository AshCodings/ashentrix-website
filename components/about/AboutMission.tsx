export default function AboutMission() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Driven by integrity and performance, our mission is to build
              long-term partnerships that help our clients achieve sustainable
              growth and operational excellence. We combine human expertise and
              smart technology to deliver reliable, flexible support — ensuring
              seamless service for both domestic and international clients.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our comprehensive service portfolio covers customer support
              (voice/chat/email), back-office operations, data processing,
              analytics, collections, and technical support. With a focus on
              quality, innovation, and scalability, we empower organizations to
              streamline workflows and focus on their core business goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#280b57] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Deliver measurable operational improvements
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#280b57] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Enable sustainable cost optimization
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#280b57] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Foster innovation and digital transformation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Ashentrix, we envision redefining the outsourcing landscape by
              blending human potential, intelligent systems, and process
              excellence into a seamless global advantage. We aim to create a
              world where people and technology work in perfect harmony —
              delivering support experiences that inspire trust, innovation, and
              meaningful connections across industries and continents.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  98%
                </div>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  45%
                </div>
                <p className="text-sm text-gray-600">Avg Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-600">Global Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  99.9%
                </div>
                <p className="text-sm text-gray-600">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
