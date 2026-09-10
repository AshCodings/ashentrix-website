export default function GlobalPresence() {
  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "125 Park Avenue, Suite 2500",
      phone: "+1 (555) 123-4567",
      email: "ny@ashentrix.com",
      timezone: "EST",
      employees: 250,
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "1 Canary Wharf, Level 42",
      phone: "+44 20 7946 0958",
      email: "london@ashentrix.com",
      timezone: "GMT",
      employees: 180,
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "Marina Bay Financial Centre, Tower 2",
      phone: "+65 6534 4720",
      email: "singapore@ashentrix.com",
      timezone: "SGT",
      employees: 120,
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "Bay Adelaide Centre, 333 Bay Street",
      phone: "+1 (416) 555-0123",
      email: "toronto@ashentrix.com",
      timezone: "EST",
      employees: 95,
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "Governor Phillip Tower, Level 25",
      phone: "+61 2 9876 5432",
      email: "sydney@ashentrix.com",
      timezone: "AEDT",
      employees: 75,
    },
    {
      city: "Mumbai",
      country: "India",
      address: "Bandra Kurla Complex, Tower A",
      phone: "+91 22 6789 0123",
      email: "mumbai@ashentrix.com",
      timezone: "IST",
      employees: 300,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
            Global Presence
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Worldwide Reach,
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400 block">
              Local Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Starting from our Delhi NCR base, we&apos;re ready to serve global
            clients with consistent excellence and understanding of diverse
            market dynamics.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#280b57] mb-2">New</h3>
              <p className="text-gray-400">Team Formation</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#280b57] mb-2">1</h3>
              <p className="text-gray-400">Primary Location</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#280b57] mb-2">24/7</h3>
              <p className="text-gray-400">Follow-the-Sun Support</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#280b57] mb-2">50+</h3>
              <p className="text-gray-400">Countries Served</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#1a1625] to-[#280b57]/10 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{office.city}</h3>
                <span className="px-3 py-1 bg-[#280b57]/20 text-[#280b57] text-xs font-semibold rounded-full">
                  {office.timezone}
                </span>
              </div>

              <p className="text-gray-400 mb-4">{office.country}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#280b57] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm text-gray-300">{office.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#280b57]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-sm text-gray-300">{office.phone}</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#280b57]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-300">{office.email}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#280b57]/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Team Size:</span>
                  <span className="font-semibold text-[#280b57]">
                    {office.employees} professionals
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
            Contact Your Local Office
          </button>
        </div>
      </div>
    </section>
  );
}
