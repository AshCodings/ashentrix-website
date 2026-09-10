export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Awards Hero */}
      <section className="bg-linear-to-br from-[#1a1625] to-[#280b57] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl font-black text-white mb-6">
              Awards & Recognition
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Celebrating excellence and industry leadership through prestigious
              awards and recognitions from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recent Awards
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading
              industry organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-[#280b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Best BPO Provider 2024
              </h3>
              <p className="text-gray-700 mb-4">
                Global Outsourcing Excellence Awards - Recognized for
                outstanding service delivery and client satisfaction.
              </p>
              <div className="text-sm text-[#280b57] font-semibold">2024</div>
            </div>

            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-[#280b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Innovation Leader
              </h3>
              <p className="text-gray-700 mb-4">
                Technology Innovation Awards - Leading digital transformation
                initiatives in business process automation.
              </p>
              <div className="text-sm text-[#280b57] font-semibold">2024</div>
            </div>

            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-[#280b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Great Place to Work
              </h3>
              <p className="text-gray-700 mb-4">
                Certified as a Great Place to Work for employee satisfaction,
                workplace culture, and career development.
              </p>
              <div className="text-sm text-[#280b57] font-semibold">2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry Certifications
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our commitment to quality and security is validated through
              industry-leading certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ISO 9001:2015
              </h3>
              <p className="text-gray-700 text-sm">
                Quality Management Systems
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ISO 27001:2013
              </h3>
              <p className="text-gray-700 text-sm">
                Information Security Management
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                SOC 2 Type II
              </h3>
              <p className="text-gray-700 text-sm">
                Security & Availability Controls
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                GDPR Compliant
              </h3>
              <p className="text-gray-700 text-sm">Data Protection & Privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recognition Timeline
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A journey of achievements and milestones that showcase our
              continuous growth and excellence.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-8 p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="text-center min-w-[100px]">
                <div className="text-2xl font-bold text-[#280b57]">2024</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Global Excellence Recognition
                </h3>
                <p className="text-gray-700">
                  Received multiple awards for service excellence, innovation
                  leadership, and workplace culture across international
                  markets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="text-center min-w-[100px]">
                <div className="text-2xl font-bold text-[#280b57]">2023</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Transformation Leader
                </h3>
                <p className="text-gray-700">
                  Recognized as a leader in digital transformation and
                  automation solutions, helping clients achieve operational
                  excellence.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="text-center min-w-[100px]">
                <div className="text-2xl font-bold text-[#280b57]">2022</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Customer Excellence Awards
                </h3>
                <p className="text-gray-700">
                  Multiple customer satisfaction awards for outstanding service
                  delivery and client relationship management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
