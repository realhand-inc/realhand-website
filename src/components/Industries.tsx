import { Building2, Car, Cog, Factory, HeartPulse, ShieldCheck } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Smart automation and predictive maintenance for Industry 4.0",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Medical-grade devices with AI-assisted diagnostics",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Advanced driver assistance and autonomous systems",
  },
  {
    icon: Building2,
    name: "Smart Buildings",
    description: "Intelligent building management and security",
  },
  {
    icon: ShieldCheck,
    name: "Defense",
    description: "Mission-critical systems with hardened security",
  },
  {
    icon: Cog,
    name: "Robotics",
    description: "Precision control systems for advanced robotics",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-primary/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Industries
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Transforming Industries
            <br />
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our technology powers innovation across sectors, enabling teams to ship smarter hardware at
            scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group relative p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/60 hover:border-primary/25 transition-all duration-500 overflow-hidden hover:shadow-soft"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gradient-glow)" }} />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 p-0.5 mb-6">
                  <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
