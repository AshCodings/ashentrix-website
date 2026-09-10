// components/SEO/FAQSchema.tsx
export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What outsourcing services does Ashentrix Solutions provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashentrix Solutions provides comprehensive BPO services including 24/7 customer support (voice, chat, email), technical support, back office operations, data processing & analytics, collections process, recruitment support, and operations management.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries does Ashentrix serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve multiple industries including Insurance, Banking & Finance, Healthcare, Telecom, E-commerce & Retail, IT & Software Development, Travel & Hospitality, and Automobiles with specialized BPO solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Ashentrix Solutions located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashentrix Solutions is headquartered in Delhi NCR, India. We provide outsourcing services to global clients from our state-of-the-art facility in Noida, Uttar Pradesh.",
        },
      },
      {
        "@type": "Question",
        name: "What are Ashentrix business hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our business hours are Monday to Friday: 10 AM to 6 PM. However, we provide 24/7 customer support services for our clients across different time zones.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Ashentrix Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact us at +91-971-117-9821, email us at service@ashentrix.com, or WhatsApp us for immediate assistance. We typically respond within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Does Ashentrix provide multilingual support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide multilingual customer support services in multiple languages to serve global clients effectively and enhance customer satisfaction across diverse markets.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
