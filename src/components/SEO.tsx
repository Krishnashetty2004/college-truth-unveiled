import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  // For college pages
  college?: {
    name: string;
    city: string;
    state: string;
    rating?: number;
    reviewCount?: number;
    type?: string;
  };
  // For story pages
  story?: {
    title: string;
    category: string;
    createdAt: string;
  };
  noindex?: boolean;
}

const BASE_URL = "https://ratemycollege.vertexhq.in";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.jpeg`;
const SITE_NAME = "RateMyCollege";

export function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  publishedTime,
  author,
  college,
  story,
  noindex = false,
}: SEOProps) {
  // Generate dynamic title
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - Anonymous College Reviews & Jobs for Freshers`;

  // Generate dynamic description
  const fullDescription =
    description ||
    "India's first anonymous college review platform. 200+ colleges, 2,700+ jobs & internships for freshers. Proof-based reviews by real students.";

  // Generate canonical URL
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  // Generate JSON-LD schema
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RateMyCollege",
      url: BASE_URL,
      logo: DEFAULT_IMAGE,
      description: "India's first anonymous college review platform",
      sameAs: [],
    },
  ];

  // Add College schema if college data provided
  if (college) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: college.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: college.city,
        addressRegion: college.state,
        addressCountry: "IN",
      },
      ...(college.rating && college.reviewCount
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: college.rating.toFixed(1),
              bestRating: "10",
              worstRating: "1",
              ratingCount: college.reviewCount,
            },
          }
        : {}),
    });
  }

  // Add Article schema if story data provided
  if (story) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: story.title,
      datePublished: story.createdAt,
      author: {
        "@type": "Person",
        name: "Anonymous Student",
      },
      publisher: {
        "@type": "Organization",
        name: "RateMyCollege",
        logo: {
          "@type": "ImageObject",
          url: DEFAULT_IMAGE,
        },
      },
      articleSection: story.category,
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Article specific OG tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;
