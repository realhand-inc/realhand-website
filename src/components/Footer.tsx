import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { label: "Smart Controllers", href: "#o6" },
      { label: "AI Sensors", href: "#l6" },
      { label: "Neural Interfaces", href: "#technology" },
      { label: "Development Kits", href: "#demo" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Sponsorship", href: "#sponsorship" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Support", href: "#" },
    ],
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 border-t border-border/60">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <section aria-label="Contact call to action" className="mb-20">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto shadow-soft">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to build with intelligent hardware?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Talk to our team about deployments, integrations, and next-gen hardware + AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </section>

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
              <span className="font-display font-semibold text-xl text-foreground">
                {siteConfig.brand.companyName}
              </span>
            </a>

            <p className="text-muted-foreground mb-6 max-w-sm">
              Pioneering the future of human-machine interaction through intelligent hardware and
              advanced AI.
            </p>

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
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <nav aria-label="Footer" className="contents">
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

            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
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
          </nav>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.brand.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
