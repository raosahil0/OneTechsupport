import { siteConfig } from "./siteConfig";

/**
 * Organization Schema.org Graph
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["SKONE Tech Support", "SK ONE", "SKONE"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo
    },
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "City",
      name: area
    })),
    sameAs: siteConfig.social,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: ["IN", "Worldwide"]
      }
    ]
  };
}

/**
 * LocalBusiness / ITService Schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.defaultImage,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    areaServed: siteConfig.areaServed
  };
}

/**
 * Specific Service Schema Builder
 */
export function getServiceSchema({ name, description, serviceType, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: url || siteConfig.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      "@id": `${siteConfig.url}/#organization`
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "City",
      name: area
    }))
  };
}

/**
 * FAQ Schema Builder for visible on-page FAQs
 */
export function getFaqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

/**
 * Breadcrumb Schema Builder
 */
export function getBreadcrumbsSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`
    }))
  };
}
