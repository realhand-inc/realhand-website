import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const { seo, seoSections } = siteConfig;
    const hashKey = location.hash.replace("#", "").trim();
    const sectionOverrides = (hashKey && seoSections ? seoSections[hashKey] : undefined) ?? {};
    const mergedSeo = { ...seo, ...sectionOverrides };
    const baseCanonical = mergedSeo.canonicalUrl || seo.canonicalUrl;
    const canonicalUrl = hashKey ? `${baseCanonical.replace(/\/$/, "")}/#${hashKey}` : baseCanonical;

    // Update document title
    document.title = mergedSeo.title;

    // Helper function to update or create meta tags by name
    const updateMetaByName = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to update or create meta tags by property
    const updateMetaByProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update basic meta tags
    updateMetaByName("description", mergedSeo.description);
    updateMetaByName("keywords", mergedSeo.keywords);
    updateMetaByName("author", mergedSeo.author);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Update Open Graph tags
    updateMetaByProperty("og:title", mergedSeo.ogTitle);
    updateMetaByProperty("og:description", mergedSeo.ogDescription);
    updateMetaByProperty("og:image", mergedSeo.ogImage);
    updateMetaByProperty("og:type", mergedSeo.ogType);
    updateMetaByProperty("og:url", canonicalUrl);

    // Update Twitter tags
    updateMetaByName("twitter:card", mergedSeo.twitterCard);
    updateMetaByName("twitter:site", mergedSeo.twitterSite);
    updateMetaByName("twitter:image", mergedSeo.twitterImage);
    updateMetaByName("twitter:title", mergedSeo.ogTitle);
    updateMetaByName("twitter:description", mergedSeo.ogDescription);

    // Update schema.org JSON-LD
    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (scriptTag) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.brand.companyName,
        url: canonicalUrl,
        description: mergedSeo.description,
        sameAs: [
          siteConfig.brand.social.youtubeUrl,
          siteConfig.brand.social.instagramUrl,
          siteConfig.brand.social.tiktokUrl,
        ].filter(Boolean),
      };
      scriptTag.textContent = JSON.stringify(schema, null, 2);
    }
  }, [location.hash]);

  return null; // This component doesn't render anything
};

export default SEO;
