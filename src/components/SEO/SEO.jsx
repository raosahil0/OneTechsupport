import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../seo/siteConfig";

/**
 * Enterprise SEO Head Component powered by react-helmet-async
 */
export default function SEO({
  title,
  description,
  canonical,
  keywords,
  image = siteConfig.defaultImage,
  type = "website",
  noIndex = false,
  children
}) {
  const finalTitle = title
    ? title.includes(siteConfig.name) || title.includes("SKONE")
      ? title
      : `${title} | ${siteConfig.name}`
    : siteConfig.name;

  const finalDescription = description || siteConfig.description;
  const finalCanonical = canonical || siteConfig.url;
  const finalImage = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Social */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      <meta name="theme-color" content="#2563eb" />
      {children}
    </Helmet>
  );
}
