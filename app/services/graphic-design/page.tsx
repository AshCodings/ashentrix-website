import Link from "next/link";

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Graphic Design Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Creative design solutions that bring your brand to life through
              compelling visuals, innovative concepts, and professional
              execution across all media.
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
                Creative Visual Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Our creative team combines artistic vision with strategic
                thinking to deliver designs that not only look stunning but also
                communicate effectively and drive business results across all
                touchpoints.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Brand Identity & Logo Design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Marketing Materials & Collateral
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Digital Design & UI/UX
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Print Design & Publication
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Graphic Design Portfolio Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Design Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive graphic design solutions for all your visual
              communication needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Brand Identity</h3>
              <p className="text-gray-600">
                Logo design, brand guidelines, and visual identity systems
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Design</h3>
              <p className="text-gray-600">
                Web graphics, social media assets, and digital marketing
                materials
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🖨️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Print Design</h3>
              <p className="text-gray-600">
                Business cards, brochures, flyers, and promotional materials
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Presentation Design
              </h3>
              <p className="text-gray-600">
                Professional presentations, pitch decks, and corporate templates
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Packaging Design</h3>
              <p className="text-gray-600">
                Product packaging, labels, and retail-ready designs
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🖼️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Illustration</h3>
              <p className="text-gray-600">
                Custom illustrations, icons, and infographic design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Design Specializations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert design services across various categories and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Corporate Branding</h3>
              <p className="text-gray-600 text-sm">
                Professional identity systems for businesses
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Marketing Design</h3>
              <p className="text-gray-600 text-sm">
                Campaign materials and promotional graphics
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Social Media Graphics
              </h3>
              <p className="text-gray-600 text-sm">
                Platform-specific content and campaigns
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Event Design</h3>
              <p className="text-gray-600 text-sm">
                Conference materials and event branding
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Publication Design</h3>
              <p className="text-gray-600 text-sm">
                Magazines, reports, and document layouts
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Signage Design</h3>
              <p className="text-gray-600 text-sm">
                Wayfinding and environmental graphics
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Product Design</h3>
              <p className="text-gray-600 text-sm">
                Product visualization and concept design
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Infographics</h3>
              <p className="text-gray-600 text-sm">
                Data visualization and information design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborative approach ensuring designs that meet your objectives
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Brief & Research</h3>
              <p className="text-gray-600">
                Understanding your needs and target audience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Concept Development
              </h3>
              <p className="text-gray-600">
                Creative ideation and initial concept exploration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Design Creation</h3>
              <p className="text-gray-600">
                Detailed design development and refinement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Review & Feedback</h3>
              <p className="text-gray-600">
                Client review and iterative improvements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Delivery</h3>
              <p className="text-gray-600">
                Production-ready files and brand guidelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Design Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-standard software and tools for professional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  AI
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Adobe Creative Suite
                  </h3>
                  <p className="text-gray-600">
                    Photoshop, Illustrator, InDesign for comprehensive design
                    solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  3D
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    3D Design Tools
                  </h3>
                  <p className="text-gray-600">
                    Blender, Cinema 4D for three-dimensional visualization and
                    modeling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  UI
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-gray-600">
                    Figma, Sketch, Adobe XD for user interface and experience
                    design.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Presentation Tools
                  </h3>
                  <p className="text-gray-600">
                    PowerPoint, Keynote, Prezi for engaging presentation design.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📝
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Typography Tools
                  </h3>
                  <p className="text-gray-600">
                    Advanced typography and layout tools for professional
                    results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🖼️
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Digital Art Tools
                  </h3>
                  <p className="text-gray-600">
                    Wacom tablets and digital painting software for
                    illustrations.
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
            Bring Your Vision to Life
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with our creative team to develop compelling visual
            solutions that elevate your brand.
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
