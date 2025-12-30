import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroImage = siteConfig.media.heroProductImageUrl;
  const heroVideo = siteConfig.media.heroVideoUrl;

  const getYoutubeEmbedUrl = (url: string) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11
        ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}&controls=0`
        : null;
    } catch (e) {
      return null;
    }
  };

  const videoEmbedUrl = heroVideo ? getYoutubeEmbedUrl(heroVideo) : null;

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="hero-glow top-1/4 left-1/4 animate-pulse-glow" />
      <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-glow animation-delay-200" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[130px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-foreground">The Future of </span>
            <span className="text-gradient">Dexterity</span>
            <span className="text-foreground"> is now</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 leading-relaxed animate-fade-in-up animation-delay-400">
            Step into a world where robotics adapt to you. Our AI-powered hands bring human-like dexterity to your team and workflow, making every task smoother, safer, and more collaborative.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-6 leading-relaxed animate-fade-in-up animation-delay-500">
            Dexterous manipulation is the next frontier in robotics. As automation and tele-operation expand globally, human-like hands will unlock massive productivity gains in manufacturing, logistics, and service robotics. Realhand™ is positioned to lead this transformation with proprietary technology and scalable integration pathways.
          </p>
          <p className="text-base md:text-lg font-semibold text-primary max-w-2xl mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
            Let's build the future of dexterity together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Link to="/demo">
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in-up animation-delay-600">
            {[
              { value: "50+", label: "Patents" },
              { value: "10M+", label: "Devices Shipped" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Showcase */}
        <section className="mt-20 relative" aria-label="Product preview">
          <div className="glass-card p-1 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-card/70 border border-border/60 flex items-center justify-center relative overflow-hidden shadow-soft">
              <div className="absolute inset-0 grid-pattern opacity-15" />

              {videoEmbedUrl ? (
                <iframe
                  src={videoEmbedUrl}
                  title="Hero Video"
                  className="absolute inset-0 h-full w-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : heroImage ? (
                <img
                  src={heroImage}
                  alt="AI-powered hardware product preview"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-medium">
                    Set <span className="font-semibold text-foreground">media.heroVideoUrl</span> or{" "}
                    <span className="font-semibold text-foreground">media.heroProductImageUrl</span> in
                    public/site-config.js
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
