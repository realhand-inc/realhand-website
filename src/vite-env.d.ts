/// <reference types="vite/client" />

declare global {
  interface Window {
    __SITE_CONFIG__?: {
      brand?: {
        companyName?: string;
        logoUrl?: string;
        logoAlt?: string;
      };
      media?: {
        heroProductImageUrl?: string;
        o6ImageUrl?: string;
        l6ImageUrl?: string;
        demoPosterImageUrl?: string;
      };
    };
  }
}

export {};

