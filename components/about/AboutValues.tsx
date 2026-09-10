export default function AboutValues() {
  const values = [
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in everything we do, from service delivery to client relationships.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, ethical practices, and consistent delivery on our commitments.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Partnership",
      description:
        "We work as true partners with our clients, understanding their goals and sharing in their success.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
    },
    {
      title: "Agility",
      description:
        "We adapt quickly to changing market conditions and client needs with flexible, scalable solutions.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Impact",
      description:
        "We measure our success by the positive impact we create for our clients and their stakeholders.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and shape
            the way we serve our clients, develop our people, and contribute to
            our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 group hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#280b57] text-white flex items-center justify-center mb-4 group-hover:bg-[#280b57]/90 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Values in Action
            </h3>
            <p className="text-gray-600 mb-6">
              Our values are more than words on a wall - they are lived
              experiences that define our culture and drive our success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  100%
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Ethical Business Practices
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  95%
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Employee Satisfaction
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  50+
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Community Initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
