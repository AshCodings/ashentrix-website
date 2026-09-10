import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Custom web development solutions that combine cutting-edge
              technology with exceptional user experience to drive your business
              forward.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Modern Web Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Our web development team creates responsive, scalable, and
                secure web applications using the latest technologies and
                frameworks. From concept to deployment, we deliver solutions
                that exceed expectations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Custom Web Application Development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  E-commerce Platform Development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  API Development & Integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Progressive Web Applications
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Web Development Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latest frameworks and technologies for robust web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-600 mb-4">
                React, Angular, Vue.js, Next.js for dynamic user interfaces
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-100 px-3 py-1 text-sm">React</span>
                <span className="bg-gray-100 px-3 py-1 text-sm">Next.js</span>
                <span className="bg-gray-100 px-3 py-1 text-sm">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🖥️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>
              <p className="text-gray-600 mb-4">
                Node.js, Python, Java, .NET for robust server-side solutions
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-100 px-3 py-1 text-sm">Node.js</span>
                <span className="bg-gray-100 px-3 py-1 text-sm">Python</span>
                <span className="bg-gray-100 px-3 py-1 text-sm">Express</span>
              </div>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Database Solutions</h3>
              <p className="text-gray-600 mb-4">
                MongoDB, PostgreSQL, MySQL for efficient data management
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-100 px-3 py-1 text-sm">MongoDB</span>
                <span className="bg-gray-100 px-3 py-1 text-sm">
                  PostgreSQL
                </span>
                <span className="bg-gray-100 px-3 py-1 text-sm">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development solutions for all your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Custom Web Apps</h3>
              <p className="text-gray-600 text-sm">
                Tailored web applications built to your specifications
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Complete online stores with payment integration
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Content Management</h3>
              <p className="text-gray-600 text-sm">
                CMS solutions for easy content updates
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">API Development</h3>
              <p className="text-gray-600 text-sm">
                RESTful and GraphQL APIs for data integration
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Progressive Web Apps
              </h3>
              <p className="text-gray-600 text-sm">
                Mobile-first PWAs for enhanced user experience
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Web Portals</h3>
              <p className="text-gray-600 text-sm">
                Employee and customer portals for businesses
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Legacy Modernization
              </h3>
              <p className="text-gray-600 text-sm">
                Upgrading existing web applications
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Maintenance & Support
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and feature enhancements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agile methodology ensuring quality and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">
                Requirements analysis and project planning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">
                UI/UX design and architecture planning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600">
                Agile development with regular updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">
                Comprehensive quality assurance testing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">
                Secure deployment and go-live support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                6
              </div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                Ongoing maintenance and enhancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600">
                    Mobile-first approach ensuring optimal experience across all
                    devices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🚀
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Performance Optimized
                  </h3>
                  <p className="text-gray-600">
                    Fast loading times and optimized performance for better user
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔒
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security First</h3>
                  <p className="text-gray-600">
                    Built-in security measures to protect against common
                    vulnerabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔄
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Scalable Architecture
                  </h3>
                  <p className="text-gray-600">
                    Future-proof solutions that grow with your business needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔧
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Easy Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Clean, well-documented code for easy updates and
                    modifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Analytics Integration
                  </h3>
                  <p className="text-gray-600">
                    Built-in analytics and tracking for data-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-gray-600 mb-8">
            Transform your ideas into powerful web applications with our expert
            development team.
          </p>
          <Link
            href="/contact"
            className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#280b57]/90 transition-colors text-lg"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
