import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative snap-start min-h-screen flex items-center bg-contain bg-right bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.45), rgba(128, 128, 128, 0.45)), url(${siteConfig.media.aboutImageUrl})`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Us
            </span>
          </div>
          <div className="glass-card p-10 text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Realhand, we believe the human hand is the original instrument of innovation — the
              bridge between thought and creation. Every movement transforms intention into reality.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              Now, we’re giving machines that same capability.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              By uniting advanced robotics, intelligent sensing, and cloud-based AI, Realhand brings
              human-level dexterity into automation. Our robotic hands don’t just move — they sense,
              adapt, and perform with precision and purpose, enabling a new class of intelligent
              interaction between machines and the world around them.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              From industrial automation and logistics to academic research, Realhand empowers
              innovators to build smarter, faster, and more intuitively than ever before.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="glass-card p-10 text-left">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Start with Dexterity
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Schedule a consultation with our technology specialists to explore how Realhand fits
              your application.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We partner with you to understand your workflows, challenges, and goals — then
              provide clear guidance on integration, customization, and long-term scalability across
              manufacturing, healthcare, logistics, and research.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With Realhand®, you’re not just adopting advanced hardware — you’re gaining a trusted
              partner and a complete ecosystem designed to keep you ahead.
            </p>
            <Button asChild variant="hero" size="lg">
              <a href="#contact">Schedule a consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
