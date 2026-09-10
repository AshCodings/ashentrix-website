import Link from "next/link";

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Financial Services Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Secure, compliant BPO services for financial institutions, from
              customer service to back-office processing, helping you deliver
              exceptional financial services while maintaining regulatory
              compliance.
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
                Financial Services Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Our financial services team understands the complexities of
                banking, investment, and insurance operations. We provide
                secure, compliant solutions that help financial institutions
                improve efficiency while maintaining the highest standards of
                data security and regulatory compliance.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Loan Processing & Underwriting Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customer Service & Account Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Compliance & Risk Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Data Processing & Analytics
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Financial Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Financial BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services for financial institutions and
              services providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Banking Operations</h3>
              <p className="text-gray-600">
                Account opening, transaction processing, and customer service
                support
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Credit Card Services
              </h3>
              <p className="text-gray-600">
                Application processing, fraud monitoring, and cardholder
                services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Mortgage Processing
              </h3>
              <p className="text-gray-600">
                Loan origination, underwriting support, and closing assistance
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Investment Services
              </h3>
              <p className="text-gray-600">
                Portfolio management support, trade processing, and client
                services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Compliance Support</h3>
              <p className="text-gray-600">
                Regulatory reporting, audit assistance, and compliance
                monitoring
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Fraud detection, risk assessment, and security monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Sectors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Financial Sectors We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across all major financial service sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Commercial Banking</h3>
              <p className="text-gray-600 text-sm">
                Business banking, lending, and corporate services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Retail Banking</h3>
              <p className="text-gray-600 text-sm">
                Personal banking, savings, and consumer loans
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Credit Unions</h3>
              <p className="text-gray-600 text-sm">
                Member services and cooperative banking support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Investment Firms</h3>
              <p className="text-gray-600 text-sm">
                Portfolio management and investment advisory services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Fintech Companies</h3>
              <p className="text-gray-600 text-sm">
                Digital payment solutions and financial technology
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Wealth Management</h3>
              <p className="text-gray-600 text-sm">
                Private banking and high-net-worth client services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Accounting Firms</h3>
              <p className="text-gray-600 text-sm">
                Tax preparation, audit support, and financial consulting
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Payment Processors</h3>
              <p className="text-gray-600 text-sm">
                Transaction processing and merchant services
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
              Regulatory Compliance & Security
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meeting the highest standards of financial data security and
              regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">SOX Compliance</h3>
                  <p className="text-gray-600">
                    Sarbanes-Oxley Act compliance for financial reporting and
                    controls.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔒
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">PCI DSS</h3>
                  <p className="text-gray-600">
                    Payment Card Industry Data Security Standard compliance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📋
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    GDPR Compliance
                  </h3>
                  <p className="text-gray-600">
                    General Data Protection Regulation for data privacy and
                    protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🏛️
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Banking Regulations
                  </h3>
                  <p className="text-gray-600">
                    Compliance with federal and state banking regulations and
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔐
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Data Encryption
                  </h3>
                  <p className="text-gray-600">
                    Advanced encryption protocols for sensitive financial data
                    protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Audit Support</h3>
                  <p className="text-gray-600">
                    Comprehensive audit trail management and regulatory
                    reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Financial Services Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                99.9%
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Uptime</h3>
              <p className="text-gray-600">
                Secure systems with minimal downtime for critical operations
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                48hrs
              </div>
              <h3 className="text-lg font-semibold mb-2">Loan Processing</h3>
              <p className="text-gray-600">
                Average time for loan application processing and approval
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">100%</div>
              <h3 className="text-lg font-semibold mb-2">Compliance Rate</h3>
              <p className="text-gray-600">
                Full adherence to financial regulations and standards
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">35%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Average operational cost reduction through outsourcing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Optimize Your Financial Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance efficiency, ensure compliance, and
            deliver exceptional financial services.
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
