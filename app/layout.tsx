import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ashentrix.com"),
  title: {
    default: "Ashentrix Solutions - Professional BPO & Outsourcing Services",
    template: "%s | Ashentrix Solutions",
  },
  description:
    "Leading BPO company in Delhi NCR offering customer support, technical support, back office operations & data processing services for global businesses.",
  icons: {
    icon: [
      { url: "/ashentrix.jpeg", type: "image/jpeg" },
      { url: "/ashentrix.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/ashentrix.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/ashentrix.jpeg",
    apple: "/ashentrix.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ashentrix Solutions",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Ashentrix Solutions - Professional Outsourcing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ashentrix",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ashentrix Solutions",
              url: "https://www.ashentrix.com",
              logo: "https://www.ashentrix.com/images/logo.png",
              description:
                "Leading BPO company providing outsourcing services for global businesses.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-971-117-9821",
                contactType: "customer service",
              },
              sameAs: ["https://www.linkedin.com/company/ashentrix"],
            }),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
