import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Box, Sparkles } from "lucide-react";
import SponsorshipForm from "@/components/SponsorshipForm";
import { Link } from "react-router-dom";

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

      <section id="sponsorship" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Sponsorship
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Scholar Sponsorship Program
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The RealHand™ Scholar Sponsorship Program is a prestigious initiative designed to
                empower groundbreaking research in AI, robotics, machine learning, and computer
                vision. Through this program, leading researchers, labs, and academic institutions
                can gain complimentary access to our flagship dexterous robotic hand, enabling them
                to push the boundaries of embodied intelligence and accelerate technological
                breakthroughs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                By partnering with top innovators and providing cutting-edge tools, RealHand® is
                committed to advancing the future of human-robot collaboration and shaping the next
                generation of intelligent systems.{" "}
                <Link to="/demo" className="text-primary hover:underline font-medium">
                  Watch Demo here
                </Link>
                .
              </p>
              <p className="text-muted-foreground text-base">
                Please complete the following details to apply for the Realhand™ Scholar Sponsorship
                Program. This information helps us evaluate your eligibility and deliver equipment if
                selected.
              </p>
            </div>

            {/* Form */}
            <div className="glass-card p-8 md:p-10">
              <SponsorshipForm />
            </div>

            {/* Privacy Notice */}
            <div className="mt-12 glass-card p-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Privacy Notice
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                In compliance with the California Consumer Privacy Act (CCPA), your personal
                information will be used exclusively to assess your eligibility and, if selected,
                facilitate communication and delivery of the sponsored equipment. We do not share or
                sell your data to third parties. For details, please review our company's Privacy
                Policy or e-mail us at{" "}
                <a href="mailto:privacy@realhand.com" className="text-primary hover:underline">
                  privacy@realhand.com
                </a>
                .
              </p>

              <h4 className="text-lg font-display font-bold text-foreground mb-4">Disclaimer</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This Privacy Policy is provided for informational purposes only and does not create
                any contractual rights or legal obligations beyond those required by applicable law.
                In the event of a conflict between this Policy and applicable privacy laws, the
                latter shall prevail.
              </p>
            </div>
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
