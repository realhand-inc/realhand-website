export type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  twitterSite: string;
  twitterImage: string;
};

export type SiteConfig = {
  brand: {
    companyName: string;
    logoUrl: string;
    logoAlt: string;
    social: {
      youtubeUrl: string;
      instagramUrl: string;
      tiktokUrl: string;
    };
  };
  media: {
    heroProductImageUrl: string;
    heroVideoUrl: string;
    o6ImageUrl: string;
    l6ImageUrl: string;
    demoPosterImageUrl: string;
    aboutImageUrl: string;
  };
  seo: SeoConfig;
  seoSections?: Record<string, Partial<SeoConfig>>;
};

const defaultConfig: SiteConfig = {
  brand: {
    companyName: "RealHand",
    logoUrl: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/6982410d-ce14-41c0-b7d1-319b66597546/REALHAND+CMYK+MAIN+COLOR+BOLD+AND+THIN+WITHOUT+LINE.png?format=1500w",
    logoAlt: "RealHand logo",
    social: {
      youtubeUrl: "https://www.youtube.com/@RealhandInc",
      instagramUrl: "https://www.instagram.com/realhandinc/",
      tiktokUrl: "https://www.tiktok.com/@realhandinc",
    },
  },
  media: {
    heroProductImageUrl: "",
    heroVideoUrl: "https://www.youtube.com/watch?v=9zcSRfR8ZQg",
    o6ImageUrl: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/4123c426-def1-45c0-bf02-dd8acf323558/O6+Cover+Photo.png?format=1500w",
    l6ImageUrl: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/2287c229-4fde-4e65-aad4-0b51dc79c948/L6+Cover+Image.png?format=1500w",
    demoPosterImageUrl: "",
    aboutImageUrl:
      "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/19d2497e-958c-4fb2-b45e-f8a3bd920bde/WechatIMG986.jpg?format=2500w",
  },
  seo: {
    title: "RealHand | Dexterous Robotic Hand",
    description: "RealHand designs cutting-edge AI-powered dexterous robotic hands for research, automation, and human-robot collaboration. Experience human-like dexterity in robotics.",
    keywords: "dexterous robotic hand, AI robotics, robotic manipulation, humanoid robot hand, teleoperation, research robotics, AI hardware, embodied intelligence",
    author: "RealHand Inc.",
    canonicalUrl: "https://realhand.com",
    ogTitle: "RealHand | Dexterous Robotic Hand",
    ogDescription: "Pioneering the future of dexterity through AI-powered robotic hands for research and automation.",
    ogImage: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/4123c426-def1-45c0-bf02-dd8acf323558/O6+Cover+Photo.png?format=1500w",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterSite: "@RealhandInc",
    twitterImage: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/4123c426-def1-45c0-bf02-dd8acf323558/O6+Cover+Photo.png?format=1500w",
  },
  seoSections: {
    o6: {
      title: "Realhand O6 | Dexterous Robotic Hand",
      description: "Realhand O6 is a high-precision bionic hand with 6 active and 5 passive joints, built for logistics, assembly, and handling irregular objects.",
      ogTitle: "Realhand O6 | Dexterous Robotic Hand",
      ogDescription: "Explore Realhand O6 specs, videos, and performance details.",
      ogImage: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/4123c426-def1-45c0-bf02-dd8acf323558/O6+Cover+Photo.png?format=1500w",
      twitterImage: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/4123c426-def1-45c0-bf02-dd8acf323558/O6+Cover+Photo.png?format=1500w",
    },
    l6: {
      title: "Realhand L6 | Dexterous Robotic Hand",
      description: "Realhand L6 is a compact, power-efficient dexterous hand designed for embedded and scaled deployments.",
      ogTitle: "Realhand L6 | Dexterous Robotic Hand",
      ogDescription: "View the Realhand L6 manual, dimensions, and performance details.",
      ogImage: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/2287c229-4fde-4e65-aad4-0b51dc79c948/L6+Cover+Image.png?format=1500w",
      twitterImage: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/2287c229-4fde-4e65-aad4-0b51dc79c948/L6+Cover+Image.png?format=1500w",
    },
    demo: {
      title: "Interactive Demo | RealHand",
      description: "Try the RealHand interactive demo to control a robot hand model with your webcam.",
      ogTitle: "Interactive Demo | RealHand",
      ogDescription: "Use your webcam to capture hand pose and control the RealHand simulation.",
    },
    products: {
      title: "Products | RealHand",
      description: "Explore RealHand products including O6 and L6 dexterous robotic hands.",
      ogTitle: "Products | RealHand",
      ogDescription: "Explore RealHand products including O6 and L6 dexterous robotic hands.",
    },
    about: {
      title: "About RealHand",
      description: "Learn about RealHand and our mission to bring human-like dexterity to robotics.",
      ogTitle: "About RealHand",
      ogDescription: "Learn about RealHand and our mission to bring human-like dexterity to robotics.",
    },
    blog: {
      title: "Blog | RealHand",
      description: "Read updates and insights from the RealHand team.",
      ogTitle: "Blog | RealHand",
      ogDescription: "Read updates and insights from the RealHand team.",
    },
    sponsorship: {
      title: "Sponsorship | RealHand",
      description: "Partner with RealHand to support the future of dexterous robotics.",
      ogTitle: "Sponsorship | RealHand",
      ogDescription: "Partner with RealHand to support the future of dexterous robotics.",
    },
    contact: {
      title: "Contact | RealHand",
      description: "Get in touch with RealHand.",
      ogTitle: "Contact | RealHand",
      ogDescription: "Get in touch with RealHand.",
    },
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
  seo: {
    ...defaultConfig.seo,
    ...(runtime?.seo ?? {}),
  },
  seoSections: {
    ...defaultConfig.seoSections,
    ...(runtime?.seoSections ?? {}),
  },
};
