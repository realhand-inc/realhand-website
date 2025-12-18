import { Brain, Cpu, Fingerprint, Shield, Zap, Wifi } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Processing",
    description: "On-device AI processing with custom neural engines for real-time decision making.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Integration",
    description: "Advanced biometric sensors that integrate cleanly with your security infrastructure.",
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description: "Sub-millisecond response paths for applications that require instant feedback.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Hardened security layers and secure boot patterns built into every device.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Powerful edge processing that reduces cloud dependency and improves privacy.",
  },
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    description: "Multi-protocol connectivity for modern deployments and environments.",
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-32 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            AI-Powered Hardware
            <br />
            <span className="text-gradient">Redefined</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proprietary technology stack combines precision hardware engineering with advanced AI to
            deliver performance you can feel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card p-8 group hover:border-primary/25 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
