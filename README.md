# RealHand Website

A modern, single-page portfolio website for RealHand's AI-powered robotic hand technology.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **Deployment**: GitHub Pages

## Homepage Sections

| # | Section | Section ID | File | Description | Always Visible |
|---|---------|------------|------|-------------|----------------|
| 1 | Navbar | - | `src/components/Navbar.tsx` | Fixed floating navigation bar with shadow | ✅ Yes (fixed) |
| 2 | Hero | - | `src/components/Hero.tsx` | Main landing section with headline, description, video, and CTA buttons | ✅ Yes |
| 3 | Interactive Demo | `#demo` | `src/components/DemoSection.tsx` | Embedded robot hand simulation with camera control (lazy-loaded iframe) | ⚠️ Conditional* |
| 4 | Products | `#products` | `src/components/Products.tsx` | Two-column product cards (O6 & L6) with images on top, names and descriptions below | ✅ Yes |
| 5 | Sponsorship | `#sponsorship` | `src/components/PrimaryNavSections.tsx` + `src/components/SponsorshipForm.tsx` | Scholar Sponsorship Program with application form | ✅ Yes |
| 6 | Blog | `#blog` | `src/components/PrimaryNavSections.tsx` | Engineering notes blog (placeholder) | ✅ Yes |
| 7 | Technology | `#technology` | `src/components/Technology.tsx` | 6 feature cards showcasing AI hardware capabilities | ✅ Yes |
| 8 | Industries | `#industries` | `src/components/Industries.tsx` | 6 industry sectors (Healthcare, Manufacturing, Robotics, etc.) | ✅ Yes |
| 9 | About | `#about` | `src/components/About.tsx` | Company mission statement and leadership team cards | ✅ Yes |
| 10 | Footer | `#contact` | `src/components/Footer.tsx` | Contact info, location, social links, and legal | ✅ Yes |

**\*Interactive Demo**: Only appears when:
- User clicks "Interactive Demo" button in Hero section, OR
- User navigates to `/#demo` via URL/link

The demo section slides down with animation and pushes content below it.

## Key Files

### Pages
- `src/pages/Index.tsx` - Main homepage that assembles all sections

### Components
- `src/components/Navbar.tsx` - Navigation bar
- `src/components/Hero.tsx` - Hero section
- `src/components/DemoSection.tsx` - Interactive demo (conditional)
- `src/components/Products.tsx` - Products section (O6 & L6 cards)
- `src/components/PrimaryNavSections.tsx` - Sponsorship and Blog sections
- `src/components/SponsorshipForm.tsx` - Sponsorship application form
- `src/components/Technology.tsx` - Technology features
- `src/components/Industries.tsx` - Industries served
- `src/components/About.tsx` - About section
- `src/components/Footer.tsx` - Footer

### Configuration
- `src/config/site.ts` - Site configuration (brand, social links, media)

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

The site is configured for GitHub Pages deployment at `/handcrafted-ai-futures/`.

Build settings:
- Base path: `/handcrafted-ai-futures/`
- Router basename: `/handcrafted-ai-futures`

## Features

- ✅ Single-page application with smooth scrolling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Lazy-loaded iframe for interactive demo
- ✅ Floating navigation with shadow effect
- ✅ Slide-down animation for demo section
- ✅ Form handling (ready for email integration)
- ✅ Glass morphism UI effects
- ✅ Custom animations (slide, fade, float, pulse-glow)
- ✅ Dark mode ready (infrastructure in place)

## Navigation Flow

```
Products → Interactive Demo → Sponsorship → Blog → About → Contact
```

## Customization

### Update Content
Edit the component files directly to change text, images, or structure.

### Update Branding/Media
Edit `src/config/site.ts`:
- Company name and logo
- Social links (YouTube, Instagram, TikTok)
- Hero video URL
- Product images (O6, L6)

### Add Email Integration
Update `src/components/SponsorshipForm.tsx` `handleSubmit` function to integrate with:
- EmailJS
- Formspree
- Web3Forms
- Custom backend

## License

All rights reserved © 2025 RealHand Inc.
