import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You - Contact Form Submitted | Ashentrix Solutions",
  description:
    "Thank you for contacting Ashentrix Solutions. We have received your message and will get back to you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Contacting Us!
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            We have received your message and our team will get back to you
            within 24 hours during business days.
          </p>

          <div className="bg-[#280b57]/5 rounded-lg p-6 mb-6">
            <h2 className="font-semibold text-gray-900 mb-3">
              What happens next?
            </h2>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#280b57] font-bold">1.</span>
                <span>Our team will review your requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#280b57] font-bold">2.</span>
                <span>We&apos;ll schedule a consultation call if needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#280b57] font-bold">3.</span>
                <span>Receive a customized proposal for your business</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-[#280b57] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#280b57]/90 transition-colors"
            >
              Return to Homepage
            </Link>

            <div className="text-sm text-gray-500">
              <p>Need immediate assistance?</p>
              <p>
                Call us at{" "}
                <a
                  href="tel:+919711179821"
                  className="text-[#280b57] hover:underline font-medium"
                >
                  +91-971 117 9821
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:service@ashentrix.com"
                  className="text-[#280b57] hover:underline font-medium"
                >
                  service@ashentrix.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
