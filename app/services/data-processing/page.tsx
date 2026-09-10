import Link from "next/link";
import Image from "next/image";

export default function DataProcessingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Data Processing & Data Services
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Secure data management and transformation for business
                intelligence. Comprehensive solutions to convert raw data into
                valuable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors text-center rounded-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors text-center rounded-lg"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/data.jpg"
                  alt="Data Processing & Analytics"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
                Advanced Data Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Our data processing expertise transforms complex data sets into
                actionable insights. From data cleansing to advanced analytics,
                we ensure your data drives informed business decisions with
                accuracy and speed.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Data Entry & Digitization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Data Cleansing & Validation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Data Migration & Integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Real-Time Data Processing
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Data Processing Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data Processing Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive data solutions covering the entire data lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-600">
                Advanced statistical analysis and business intelligence
                solutions
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
              <p className="text-gray-600">
                Seamless integration of data from multiple sources and systems
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧹</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Cleansing</h3>
              <p className="text-gray-600">
                Comprehensive data quality improvement and standardization
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Real-Time Processing
              </h3>
              <p className="text-gray-600">
                Live data processing for immediate insights and decision making
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance for sensitive data
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600">
                Automated data workflows to reduce manual effort and errors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data Types We Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various data formats and sources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Structured Data</h3>
              <p className="text-gray-600 text-sm">
                Databases, spreadsheets, CRM systems
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Unstructured Data</h3>
              <p className="text-gray-600 text-sm">
                Documents, emails, social media content
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Financial Data</h3>
              <p className="text-gray-600 text-sm">
                Transactions, invoices, financial reports
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Customer Data</h3>
              <p className="text-gray-600 text-sm">
                Customer profiles, behavior analytics
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Inventory Data</h3>
              <p className="text-gray-600 text-sm">
                Stock levels, product catalogs
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Survey Data</h3>
              <p className="text-gray-600 text-sm">
                Research data, feedback forms
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Medical Data</h3>
              <p className="text-gray-600 text-sm">
                Healthcare records, clinical data
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Image Data</h3>
              <p className="text-gray-600 text-sm">
                Document scanning, OCR processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data Processing Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your data into a competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Improved Accuracy
                  </h3>
                  <p className="text-gray-600">
                    Eliminate data errors through automated validation and
                    quality checks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Faster Processing
                  </h3>
                  <p className="text-gray-600">
                    Reduce processing time by up to 80% with automated
                    workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                  <p className="text-gray-600">
                    Lower operational costs through efficient data processing
                    methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Better Insights
                  </h3>
                  <p className="text-gray-600">
                    Unlock valuable business insights through advanced
                    analytics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                  <p className="text-gray-600">
                    Scale processing capacity up or down based on business
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Compliance Ready
                  </h3>
                  <p className="text-gray-600">
                    Ensure data processing meets industry compliance standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Data Into Insights
          </h2>
          <p className="text-gray-600 mb-8">
            Unlock the full potential of your data with our comprehensive
            processing solutions.
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
