import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "Surface Pro Refinishing Atlanta | Bathtub, Cabinet & Countertop Resurfacing",
  description = "Expert bathtub refinishing, cabinet resurfacing, and countertop restoration in Atlanta. Affordable alternative to replacement. Transform your kitchen & bathroom with precision.",
  keywords = "bathtub refinishing, tub resurfacing, cabinet refinishing, countertop resurfacing, Atlanta, Georgia, bathroom renovation, kitchen refacing, bathtub reglazing",
  canonical,
  ogImage = "https://www.resurfacega.com/logo.png",
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://www.resurfacega.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  const canonicalUrl = canonical || fullUrl;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update description
    updateMetaTag("description", description);

    // Update keywords
    updateMetaTag("keywords", keywords);

    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Update Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "Surface Pro Refinishing", true);

    // Update Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Robots meta tag
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    // Add structured data
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Handle array of structured data or single object
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      dataArray.forEach((data) => {
        const scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        scriptTag.textContent = JSON.stringify(data);
        document.head.appendChild(scriptTag);
      });
    }
  }, [title, description, keywords, canonicalUrl, fullUrl, ogImage, ogType, noindex, structuredData]);

  return null;
};

export default SEO;

