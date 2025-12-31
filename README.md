# RealHand Website

A modern, single-page portfolio website for RealHand's AI-powered robotic hand technology.

## Homepage Sections

| # | Section | Section ID | File | Description | Always Visible |
|---|---------|------------|------|-------------|----------------|
| 1 | Navbar | - | `src/components/Navbar.tsx` | Fixed floating navigation bar with shadow | ✅ Yes (fixed) |
| 2 | Hero | - | `src/components/Hero.tsx` | Main landing section with headline, description, video, and CTA buttons | ✅ Yes |
| 3 | Interactive Demo | `#demo` | `src/components/DemoSection.tsx` | Full-screen popup modal with robot hand simulation and camera control | 🔲 Modal* |
| 4 | Products | `#products` | `src/components/Products.tsx` | Two-column product cards (O6 & L6) with images, names, descriptions, and Learn More button | ✅ Yes |
| 5 | Sponsorship | `#sponsorship` | `src/components/Sponsorship.tsx` + `src/components/SponsorshipForm.tsx` | Scholar Sponsorship Program with application form and video demo modal | ✅ Yes |
| 6 | Blog | `#blog` | `src/components/BlogSection.tsx` | Engineering notes blog (placeholder) | ✅ Yes |
| 7 | About | `#about` | `src/components/About.tsx` | Company mission statement and leadership team cards | ✅ Yes |
| 8 | Footer | `#contact` | `src/components/Footer.tsx` | Contact info, location, social links, and legal | ✅ Yes |

**\*Interactive Demo Modal**: Opens as a full-screen popup when:
- User clicks "Interactive Demo" button in Hero section, OR
- User navigates to `/#demo` via URL/link

The modal features smooth animations, themed frame, and lazy-loaded iframe that only loads when opened.

## Key Files

### Pages
- `src/pages/Index.tsx` - Main homepage that assembles all sections

### Components
- `src/components/Navbar.tsx` - Navigation bar
- `src/components/Hero.tsx` - Hero section
- `src/components/DemoSection.tsx` - Interactive demo (popup modal)
- `src/components/Products.tsx` - Products section (O6 & L6 cards)
- `src/components/Sponsorship.tsx` - Sponsorship section with video modal
- `src/components/SponsorshipForm.tsx` - Sponsorship application form
- `src/components/BlogSection.tsx` - Blog section (placeholder)
- `src/components/About.tsx` - About section
- `src/components/Footer.tsx` - Footer
- `src/components/SEO.tsx` - SEO metadata manager (updates meta tags dynamically)

### Configuration
- `src/config/site.ts` - Site configuration (brand, social links, media, SEO)
- `public/site-config.js` - Runtime configuration (overrides defaults, no rebuild needed)

### Styling
- `src/index.css` - Global styles, custom animations, design tokens
- `tailwind.config.ts` - Tailwind theme customization

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured for GitHub Pages deployment at `/realhand-website/`.

Build settings:
- Base path: `/realhand-website/`
- Router basename: `/realhand-website`

## Features

- ✅ Single-page application with smooth scrolling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Full-screen popup modals for interactive demo and video
- ✅ Lazy-loaded iframes (only load when modal opens)
- ✅ Floating navigation with shadow effect
- ✅ Smooth modal animations (fade + scale transitions)
- ✅ Form handling (ready for email integration)
- ✅ Glass morphism UI effects
- ✅ Custom animations (slide, fade, float, pulse-glow)
- ✅ YouTube videos with hidden UI controls
- ✅ Body scroll lock for modals
- ✅ **SEO optimized** - Dynamic meta tags, Open Graph, Twitter Cards, Schema.org
- ✅ Runtime configuration (update SEO/media without rebuilding)
- ✅ Dark mode ready (infrastructure in place)

## Navigation Flow

```
Hero → Products → Sponsorship → Blog → About → Contact
        ↓
  Interactive Demo (Modal)
```

## Customization

### Update Content
Edit the component files directly to change text, images, or structure.

### Update Branding/Media/SEO
You can update site configuration in two ways:

**Option 1: Edit `public/site-config.js` (Recommended for quick updates)**
- No rebuild required - just refresh the page
- Update brand info, social links, media URLs, and SEO metadata
- Perfect for content updates without code changes

**Option 2: Edit `src/config/site.ts` (For permanent defaults)**
- Requires rebuild (`npm run build`)
- Sets default values that can be overridden by `public/site-config.js`

### SEO Configuration
Update SEO metadata in `public/site-config.js` under the `seo` section:

```javascript
seo: {
  // Page title (shown in browser tab and search results)
  title: "RealHand | AI-Powered Dexterous Robotic Hand",

  // Meta description (shown in search results)
  description: "RealHand designs cutting-edge AI-powered dexterous robotic hands...",

  // Keywords for search engines
  keywords: "dexterous robotic hand, AI robotics, robotic manipulation...",

  // Author/company name
  author: "RealHand Inc.",

  // Canonical URL (your main domain)
  canonicalUrl: "https://realhand.com",

  // Open Graph (for Facebook, LinkedIn sharing)
  ogTitle: "RealHand | AI-Powered Dexterous Robotic Hand",
  ogDescription: "Pioneering the future of dexterity...",
  ogImage: "https://your-image-url.com/preview.png", // 1200x630px recommended
  ogType: "website",

  // Twitter Card (for Twitter sharing)
  twitterCard: "summary_large_image",
  twitterSite: "@RealhandInc",
  twitterImage: "https://your-image-url.com/preview.png", // 1200x628px recommended
}
```

**When to update SEO:**
- Before launching the site
- When changing company branding
- When updating product offerings
- To improve search engine rankings
- Before sharing on social media

**SEO Best Practices:**
- Title: 50-60 characters
- Description: 150-160 characters
- Use relevant keywords naturally
- Use high-quality images (1200x630px for OG, 1200x628px for Twitter)
- Update canonical URL to match your actual domain

### Add Email Integration
Update `src/components/SponsorshipForm.tsx` `handleSubmit` function to integrate with:
- EmailJS
- Formspree
- Web3Forms
- Custom backend

## License

All rights reserved © 2025 RealHand Inc.
