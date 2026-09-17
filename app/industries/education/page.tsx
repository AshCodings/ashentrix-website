import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Education & EdTech Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for educational institutions,
              universities, and EdTech platforms, helping you scale admissions
              and deliver exceptional student experiences.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/industries"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors"
              >
                All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Educational Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our education-focused services support every aspect of the student 
                lifecycle. From PAN-India admission counseling to technical support 
                for digital learning portals, we help you build meaningful relationships 
                and drive enrollment growth.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Admission Counselling & Lead Handling
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Student & Parent Query Resolution
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Follow-up & Application Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Coordination Across Tied-up Universities
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Education Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end support services for universities, schools, and EdTech platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Admission Counseling</h3>
              <p className="text-gray-600">
                Expert guidance for prospective students regarding courses, eligibility, and the enrollment process
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lead Management</h3>
              <p className="text-gray-600">
                Capturing, nurturing, and converting student inquiries into successful enrollments
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Student Support Services
              </h3>
              <p className="text-gray-600">
                Multichannel support for enrolled students regarding fees, schedules, and academics
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Application Processing</h3>
              <p className="text-gray-600">
                Streamlined document verification, follow-ups, and application status tracking
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Helpdesk
              </h3>
              <p className="text-gray-600">
                24/7 technical support for online learning portals, LMS, and EdTech platforms
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Outbound Campaigns</h3>
              <p className="text-gray-600">
                Proactive outreach for course updates, fee reminders, and alumni relations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various learning platforms and academic institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">EdTech Platforms</h3>
              <p className="text-gray-600 text-sm">
                Digital learning, upskilling, and certification platforms
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Universities</h3>
              <p className="text-gray-600 text-sm">
                Undergraduate and postgraduate program support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">K-12 Education</h3>
              <p className="text-gray-600 text-sm">
                School admissions and parent coordination
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Professional Courses</h3>
              <p className="text-gray-600 text-sm">
                Skill development and executive education programs
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">LMS Providers</h3>
              <p className="text-gray-600 text-sm">
                Learning Management System technical support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Overseas Education</h3>
              <p className="text-gray-600 text-sm">
                Study abroad counseling and documentation
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Coaching Institutes</h3>
              <p className="text-gray-600 text-sm">
                Competitive exam prep and query resolution
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Corporate Training</h3>
              <p className="text-gray-600 text-sm">
                B2B learning platform management and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Journey Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Student Journey Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting learners at every stage of their educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Inquiry</h3>
              <p className="text-gray-600">
                Handling initial queries from students and parents effectively
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Counseling</h3>
              <p className="text-gray-600">
                Detailed program guidance and career counseling sessions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Admission</h3>
              <p className="text-gray-600">
                Application support and thorough document verification
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Enrollment</h3>
              <p className="text-gray-600">
                Fee processing, portal access, and onboarding assistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Retention</h3>
              <p className="text-gray-600">
                Ongoing academic support, course upgrades, and alumni networking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">95%</div>
              <h3 className="text-lg font-semibold mb-2">Lead Contact Rate</h3>
              <p className="text-gray-600">
                Faster outreach to prospective students and inquiries
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">30%</div>
              <h3 className="text-lg font-semibold mb-2">Enrollment Boost</h3>
              <p className="text-gray-600">
                Improvement in conversion from inquiry to successful admission
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Query Resolution</h3>
              <p className="text-gray-600">
                Round-the-clock support for global students across time zones
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">98%</div>
              <h3 className="text-lg font-semibold mb-2">
                Student Satisfaction
              </h3>
              <p className="text-gray-600">
                High ratings in student support interactions and technical help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Scale Your Educational Institution
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to boost your enrollments, enhance student experience, 
            and accelerate your institution&apos;s growth.
          </p>
          <Link
            href="/contact"
            className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#280b57]/90 transition-colors text-lg inline-block"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
