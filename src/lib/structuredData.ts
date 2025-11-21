// Structured Data (JSON-LD) helpers for SEO

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.resurfacega.com",
  "name": "Fairfield Kitchen Cabinets",
  "image": "https://www.resurfacega.com/logo.png",
  "logo": "https://www.resurfacega.com/logo.png",
  "url": "https://www.resurfacega.com",
  "telephone": "+17703102402",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fairfield",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.7490",
    "longitude": "-84.3880"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fairfield"
    },
    {
      "@type": "City",
      "name": "Marietta"
    },
    {
      "@type": "City",
      "name": "Roswell"
    },
    {
      "@type": "City",
      "name": "Alpharetta"
    },
    {
      "@type": "City",
      "name": "Sandy Springs"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "33.7490",
      "longitude": "-84.3880"
    },
    "geoRadius": {
      "@type": "Distance",
      "name": "Metro Fairfield Area"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Refinishing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathtub Resurfacing",
          "description": "Professional bathtub refinishing and resurfacing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cabinet Refinishing & Refacing",
          "description": "Kitchen cabinet refinishing and refacing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Countertop Resurfacing",
          "description": "Countertop restoration and resurfacing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shower Resurfacing",
          "description": "Shower stall and enclosure resurfacing services"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/surfaceprorefinishing",
    "https://www.instagram.com/surfaceprorefinishing"
  ]
});

export const getServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fairfield Kitchen Cabinets",
    "telephone": "+17703102402"
  },
  "areaServed": {
    "@type": "City",
    "name": "Fairfield"
  },
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  })
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fairfield Kitchen Cabinets",
  "url": "https://www.resurfacega.com",
  "logo": "https://www.resurfacega.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+17703102402",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/surfaceprorefinishing",
    "https://www.instagram.com/surfaceprorefinishing"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fairfield Kitchen Cabinets",
  "url": "https://www.resurfacega.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.resurfacega.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

