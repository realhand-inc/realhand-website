import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Box, Play, Sparkles } from "lucide-react";

const SectionHeader = ({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-14">
    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
    <p className="text-muted-foreground text-lg">{subtitle}</p>
  </div>
);

const ProductCard = ({
  id,
  name,
  description,
  imageUrl,
}: {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}) => (
  <section id={id} className="py-24 scroll-mt-24" aria-label={`${name} product line`}>
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            Product Line
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
            {name}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg">
              Learn more
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg">
              Request spec sheet
            </Button>
          </div>
        </div>

        <div className="glass-card p-1">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${name} hardware product image`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="absolute inset-0 grid-pattern opacity-20" />
            )}

            <div className="relative z-10 h-full w-full flex items-center justify-center p-8">
              {!imageUrl ? (
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Box className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Set <span className="font-semibold text-foreground">media.{id}ImageUrl</span> in
                    public/site-config.js
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PrimaryNavSections = () => {
  return (
    <>
      <ProductCard
        id="o6"
        name="O6"
        description="A high-performance intelligent hardware platform designed for real-time perception, secure control, and edge inference—built for demanding deployments."
        imageUrl={siteConfig.media.o6ImageUrl}
      />

      <ProductCard
        id="l6"
        name="L6"
        description="A compact, power-efficient AI hardware unit optimized for seamless integration—ideal for scaled rollouts and embedded environments."
        imageUrl={siteConfig.media.l6ImageUrl}
      />

      <section id="demo" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-10 md:p-14 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Play className="h-4 w-4" />
              Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              See it in action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Add a demo poster image URL in the config now, and we’ll replace this with your real video
              embed when you’re ready.
            </p>

            <div className="glass-card p-1 max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-card">
                {siteConfig.media.demoPosterImageUrl ? (
                  <img
                    src={siteConfig.media.demoPosterImageUrl}
                    alt="Product demo preview"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                )}
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <Button variant="hero" size="lg">
                    Play demo
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsorship" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Sponsorship"
            title="Partner with RealHand"
            subtitle="We collaborate with teams and communities building the future—hardware, robotics, and applied AI."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {["Events", "Research", "Builders"].map((item) => (
              <article key={item} className="glass-card p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">{item}</h3>
                <p className="text-muted-foreground">
                  Tell us what you’re building and we’ll tailor support—from equipment to engineering time.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Blog"
            title="Engineering notes"
            subtitle="Short, technical updates on hardware design, AI performance, and deployment lessons."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article key={i} className="glass-card p-8">
                <p className="text-sm text-muted-foreground mb-3">Coming soon</p>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Post title placeholder {i}
                </h3>
                <p className="text-muted-foreground">
                  Replace these cards with real posts, or connect a CMS later.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimaryNavSections;
