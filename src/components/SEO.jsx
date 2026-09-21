import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Enhanced SEO Component
 * Dynamically manages document title, meta tags, Open Graph, and Twitter cards per route.
 */
const SEO = ({
  title,
  description,
  keywords,
  image = "/og-image.png",
  type = "website",
  noIndex = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    const brandName = "SK ONE Tech Support | SKONE";
    const defaultTitle = `${brandName} - Fast, Reliable & Secure IT Solutions`;
    const fullTitle = title ? `${title} | SK ONE Tech Support` : defaultTitle;
    const defaultDescription =
      "SK ONE Tech Support (SKONE) delivers Enterprise Managed IT Services, Cloud Infrastructure Migration, Zero-Trust Cybersecurity, Custom Software Development & 24/7 Helpdesk Support.";
    const metaDesc = description || defaultDescription;
    const currentUrl = typeof window !== "undefined" ? window.location.href : `https://skonetechsupport.com${location.pathname}`;
    const fullImageUrl = image.startsWith("http")
      ? image
      : `https://skonetechsupport.com${image.startsWith("/") ? "" : "/"}${image}`;

    // 1. Update Title
    document.title = fullTitle;

    // Helper to safely set/update a meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Standard Search Meta Tags
    setMetaTag("name", "title", fullTitle);
    setMetaTag("name", "description", metaDesc);
    setMetaTag(
      "name",
      "keywords",
      keywords ||
        "SK ONE, SK ONE Tech Support, SKONE, SKONE Tech Support, SK One, Managed IT Services, Cloud Migration, Cybersecurity, Custom Software Development, Tech Support India, Gurugram, Jaipur, Delhi NCR"
    );
    setMetaTag("name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large");
    setMetaTag("name", "author", brandName);

    // 3. Open Graph Tags (Facebook, WhatsApp, LinkedIn)
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", metaDesc);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:site_name", brandName);

    // 4. Twitter Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", metaDesc);
    setMetaTag("name", "twitter:image", fullImageUrl);
    setMetaTag("name", "twitter:url", currentUrl);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl.split("?")[0]);
  }, [title, description, keywords, image, type, noIndex, location]);

  return null;
};

export default SEO;
