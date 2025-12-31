import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Instagram, Mail, MapPin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { label: "Realhand O6", href: "#o6" },
      { label: "Realhand L6", href: "#l6" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Sponsorship", href: "#sponsorship" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  };
  const socialLinks = [
    { label: "YouTube", href: siteConfig.brand.social.youtubeUrl, icon: Youtube },
    { label: "Instagram", href: siteConfig.brand.social.instagramUrl, icon: Instagram },
    { label: "TikTok", href: siteConfig.brand.social.tiktokUrl, icon: "tiktok" as const },
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-10 border-t border-border/60">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* <section aria-label="Contact call to action" className="mb-20">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto shadow-soft">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to build with Dexterous Hand?
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactDialog
                trigger={
                  <Button variant="hero" size="lg">
                    Contact Sales
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                }
              />
              
            </div>
          </div>
        </section> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6" aria-label="Home">
              {siteConfig.brand.logoUrl ? (
                <img
                  src={siteConfig.brand.logoUrl}
                  alt={siteConfig.brand.logoAlt || `${siteConfig.brand.companyName} logo`}
                  className="h-9 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow-sm">
                  <span className="text-primary-foreground font-display font-bold text-lg">R</span>
                </div>
              )}
              
            </a>
            <div className="flex items-center gap-4 mb-6 text-muted-foreground">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href || "#"}
                  className="hover:text-foreground transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon === "tiktok" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16.6 5.6c-.8-.9-1.3-2-1.3-3.2h-3.1v12.2a2.6 2.6 0 0 1-2.6 2.6 2.6 2.6 0 1 1 2.1-4.1V9.6a5.7 5.7 0 0 0-2.1-.4 5.7 5.7 0 1 0 5.7 5.7V9.2c1.3.9 2.8 1.4 4.4 1.4V7.6c-1.1 0-2.2-.4-3.1-1.3z" />
                    </svg>
                  ) : (
                    <link.icon className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>

            

            <div className="space-y-3">
              <a
                href="mailto:contact@realhand.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@realhand.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>325 Forest Ave, Palo Alto, CA</span>
              </div>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 flex justify-end">
            <div className="grid grid-cols-2 gap-20 text-right">
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </nav>
        </div>

        <div className="pt-8 border-t border-border/60 flex items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.brand.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
