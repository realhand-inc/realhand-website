import { useEffect } from "react";
import { siteConfig } from "@/config/site";

const SEO = () => {
  useEffect(() => {
    const { seo } = siteConfig;

    // Update document title
    document.title = seo.title;

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
    updateMetaByName("description", seo.description);
    updateMetaByName("keywords", seo.keywords);
    updateMetaByName("author", seo.author);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.canonicalUrl);

    // Update Open Graph tags
    updateMetaByProperty("og:title", seo.ogTitle);
    updateMetaByProperty("og:description", seo.ogDescription);
    updateMetaByProperty("og:image", seo.ogImage);
    updateMetaByProperty("og:type", seo.ogType);

    // Update Twitter tags
    updateMetaByName("twitter:card", seo.twitterCard);
    updateMetaByName("twitter:site", seo.twitterSite);
    updateMetaByName("twitter:image", seo.twitterImage);

    // Update schema.org JSON-LD
    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (scriptTag) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.brand.companyName,
        url: seo.canonicalUrl,
        description: seo.description,
        sameAs: [
          siteConfig.brand.social.youtubeUrl,
          siteConfig.brand.social.instagramUrl,
          siteConfig.brand.social.tiktokUrl,
        ].filter(Boolean),
      };
      scriptTag.textContent = JSON.stringify(schema, null, 2);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default SEO;
