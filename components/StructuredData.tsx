export default function StructuredData() {
  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    "name": "Downtown Apartment By The Lindens",
    "description": "Modern 2-bedroom apartment in Yambol city center, newly renovated in 2024 with smart amenities and city views",
    "numberOfRooms": "2",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-speed WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Smart TV",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking Available",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "City View",
        "value": true
      }
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yambol",
        "addressCountry": "Bulgaria",
        "streetAddress": "Targovska street"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What amenities are included in the apartment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The apartment features high-speed WiFi, smart TV, fully equipped kitchen, air conditioning, and convenient parking options. All amenities have been updated in 2024 for your comfort."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the apartment located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The apartment is located in the heart of Yambol's walking zone on Targovska street, offering easy access to restaurants, cafes, and local attractions."
        }
      },
      {
        "@type": "Question",
        "name": "Is parking available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, there are two parking areas available behind the apartment. Please note that during working hours, city center parking regulations apply."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book the apartment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the best rates, especially for weekly or monthly stays, we recommend filling out our availability form. We'll get back to you with customized pricing. You can also book through our trusted partners Booking.com and Airbnb for shorter stays."
        }
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(apartmentSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
} 