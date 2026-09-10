// components/SEO/LocalBusinessSchema.tsx
export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ashentrix.com/#business",
    name: "Ashentrix Solutions",
    alternateName: "Ashentrix",
    description:
      "Leading BPO company providing customer support, technical support, back office operations for global businesses",
    url: "https://www.ashentrix.com",
    telephone: "+91-971-117-9821",
    email: "service@ashentrix.com",
   address: {
      "@type": "PostalAddress",
      streetAddress: "A-22, 1st Floor, Sector 4, Gautam Buddha Nagar",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5355",
      longitude: "77.3910",
    },
    openingHours: ["Mo-Fr 10:00-18:00"],
    priceRange: "$$",
    currenciesAccepted: "INR, USD, EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    logo: "https://www.ashentrix.com/images/logo.png",
    image: "https://www.ashentrix.com/images/ashentrix-office.jpg",
    sameAs: [
      "https://www.linkedin.com/company/ashentrix",
      "https://twitter.com/ashentrix",
      "https://www.facebook.com/ashentrix",
    ],
    hasMap: "https://maps.google.com/maps?q=Delhi+NCR,+India",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "28.5355",
        longitude: "77.3910",
      },
      geoRadius: "50000",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
