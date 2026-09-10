import Link from "next/link";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Healthcare Industry Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8">
              HIPAA-compliant healthcare BPO services that improve patient care,
              reduce administrative burden, and enhance operational efficiency
              across healthcare organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#280b57] px-6 sm:px-8 py-3 font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                href="/industries"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors text-center"
              >
                All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Healthcare Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our healthcare-focused BPO services combine clinical knowledge
                with operational expertise to deliver solutions that improve
                patient outcomes, ensure regulatory compliance, and optimize
                healthcare delivery processes.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Medical Coding & Billing Services
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Patient Registration & Scheduling
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Medical Records Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Prior Authorization Services
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Healthcare Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare support services designed to improve
              patient care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Medical Coding</h3>
              <p className="text-gray-600">
                ICD-10, CPT, and HCPCS coding by certified medical coders
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Medical Billing</h3>
              <p className="text-gray-600">
                Claims processing, denial management, and revenue cycle
                optimization
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Patient Services</h3>
              <p className="text-gray-600">
                Registration, appointment scheduling, and patient communication
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Prior Authorization
              </h3>
              <p className="text-gray-600">
                Insurance pre-authorization and benefits verification services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📁</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Medical Records</h3>
              <p className="text-gray-600">
                Electronic health records management and data entry services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Healthcare Call Center
              </h3>
              <p className="text-gray-600">
                24/7 patient support, nurse helplines, and appointment services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Specialties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare Specialties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across various healthcare sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Hospitals</h3>
              <p className="text-gray-600 text-sm">
                Acute care, emergency services, and inpatient management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Clinics</h3>
              <p className="text-gray-600 text-sm">
                Outpatient services, specialty clinics, and urgent care
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Mental Health</h3>
              <p className="text-gray-600 text-sm">
                Behavioral health services and psychiatric care support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Dental Practices</h3>
              <p className="text-gray-600 text-sm">
                Dental billing, scheduling, and patient management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Pharmaceutical</h3>
              <p className="text-gray-600 text-sm">
                Drug safety, regulatory affairs, and clinical trials
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Telemedicine</h3>
              <p className="text-gray-600 text-sm">
                Virtual care platforms and remote patient monitoring
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Medical Devices</h3>
              <p className="text-gray-600 text-sm">
                Device support, training, and regulatory compliance
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Home Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Home health services and patient care coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              HIPAA Compliance & Security
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ensuring the highest standards of patient data protection and
              regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔒
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    HIPAA Compliance
                  </h3>
                  <p className="text-gray-600">
                    Full compliance with HIPAA regulations for patient data
                    protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                  <p className="text-gray-600">
                    Advanced encryption and security measures for sensitive
                    healthcare data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📋
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Audit Trails</h3>
                  <p className="text-gray-600">
                    Comprehensive audit trails and compliance reporting
                    capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Staff Training</h3>
                  <p className="text-gray-600">
                    Regular HIPAA training and certification for all healthcare
                    staff.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔐
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Access Control</h3>
                  <p className="text-gray-600">
                    Role-based access controls and multi-factor authentication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Compliance Monitoring
                  </h3>
                  <p className="text-gray-600">
                    Continuous monitoring and reporting for regulatory
                    compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare Industry Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">50%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Average reduction in administrative costs
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">98%</div>
              <h3 className="text-lg font-semibold mb-2">Coding Accuracy</h3>
              <p className="text-gray-600">
                Medical coding accuracy rate by certified professionals
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">30%</div>
              <h3 className="text-lg font-semibold mb-2">Faster Processing</h3>
              <p className="text-gray-600">
                Improvement in claims processing turnaround time
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">100%</div>
              <h3 className="text-lg font-semibold mb-2">HIPAA Compliance</h3>
              <p className="text-gray-600">
                Full compliance with healthcare data protection regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enhance Your Healthcare Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to improve patient care while reducing
            administrative burden and costs.
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
