export default function OfficeLocations() {
  const offices = [
    {
      name: "Headquarters - India",
      address: "A-22, 1st Floor, Sector 4, Noida, Gautam Buddha Nagar, Uttar Pradesh, India - 201301",
      phone: "+91 120 456 7890",
      email: "india@ashentrix.com",
      hours: "Mon to Fri: 10 AM to 6 PM, Sat & Sun: Closed",
      timezone: "IST (GMT+5:30)",
      isHeadquarters: true,
    },
    {
      name: "North America Office",
      address: "1234 Business Ave, Suite 567, New York, NY 10001, USA",
      phone: "+1 (555) 123-4567",
      email: "americas@ashentrix.com",
      hours: "Mon to Fri: 10 AM to 6 PM, Sat & Sun: Closed",
      timezone: "EST (GMT-5:00)",
      isHeadquarters: false,
    },
    {
      name: "Europe Office",
      address: "123 Tech Street, London, UK SW1A 1AA",
      phone: "+44 20 7123 4567",
      email: "europe@ashentrix.com",
      hours: "Mon to Fri: 10 AM to 6 PM, Sat & Sun: Closed",
      timezone: "GMT (GMT+0:00)",
      isHeadquarters: false,
    },
    {
      name: "Asia Pacific Office",
      address: "456 Innovation Drive, Singapore 018956",
      phone: "+65 6123 4567",
      email: "apac@ashentrix.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM SGT",
      timezone: "SGT (GMT+8:00)",
      isHeadquarters: false,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Global Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With offices across four continents, we provide 24/7 support and
            local expertise to serve our global client base effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`bg-white p-8 border border-gray-200 group hover:shadow-lg transition-all duration-300 ${
                office.isHeadquarters ? "ring-2 ring-[#280b57]/20" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    {office.name}
                    {office.isHeadquarters && (
                      <span className="bg-[#280b57] text-white text-xs px-2 py-1 font-medium">
                        HQ
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#280b57]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#280b57]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Phone</p>
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#280b57]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#280b57]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Email</p>
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#280b57]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#280b57]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Business Hours
                    </p>
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#280b57]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#280b57]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-13a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414L9 10.414V5a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Timezone
                    </p>
                    <p className="text-gray-600">{office.timezone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-[#280b57] font-semibold text-sm hover:text-[#280b57]/80 transition-colors">
                  Get Directions →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              24/7 Global Support
            </h3>
            <p className="text-gray-600 mb-6">
              No matter where you are in the world, our dedicated support team
              is available around the clock to assist you with any questions or
              urgent matters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#280b57] mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-600">Support Availability</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#280b57] mb-2">
                  &lt;15min
                </div>
                <p className="text-sm text-gray-600">Average Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#280b57] mb-2">
                  15+
                </div>
                <p className="text-sm text-gray-600">Languages Supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
