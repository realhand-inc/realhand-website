export type SiteConfig = {
  brand: {
    companyName: string;
    logoUrl: string;
    logoAlt: string;
  };
  media: {
    heroProductImageUrl: string;
    heroVideoUrl: string;
    o6ImageUrl: string;
    l6ImageUrl: string;
    demoPosterImageUrl: string;
  };
};

const defaultConfig: SiteConfig = {
  brand: {
    companyName: "RealHand",
    logoUrl: "",
    logoAlt: "RealHand logo",
  },
  media: {
    heroProductImageUrl: "",
    heroVideoUrl: "",
    o6ImageUrl: "",
    l6ImageUrl: "",
    demoPosterImageUrl: "",
  },
};

const runtime =
  typeof window !== "undefined" && (window as any).__SITE_CONFIG__
    ? ((window as any).__SITE_CONFIG__ as Partial<SiteConfig>)
    : undefined;

export const siteConfig: SiteConfig = {
  brand: {
    ...defaultConfig.brand,
    ...(runtime?.brand ?? {}),
  },
  media: {
    ...defaultConfig.media,
    ...(runtime?.media ?? {}),
  },
};
