import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";
import { Box } from "lucide-react";

const products = [
  {
    id: "o6",
    name: "Realhand O6",
    description:
      "A high-performance intelligent hardware platform designed for real-time perception, secure control, and edge inference - built for demanding deployments.",
    imageUrl: siteConfig.media.o6ImageUrl,
  },
  {
    id: "l6",
    name: "Realhand L6",
    description:
      "A compact, power-efficient AI hardware unit optimized for seamless integration - ideal for scaled rollouts and embedded environments.",
    imageUrl: siteConfig.media.l6ImageUrl,
  },
];

const newProducts = [
  {
    id: "l20",
    name: "Realhand L20",
    description:
      "Compact, power-efficient platform designed for scalable deployments and embedded automation.",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/9254a520-10e9-4c6d-b6a0-90df548578b5/Photoroom_20250930_205853.JPG?format=2500w",
  },
  {
    id: "l30",
    name: "Realhand L30",
    description:
      "Higher-performance dexterous hardware built for demanding manipulation tasks and advanced control.",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/7304e205-68b7-4377-b038-60f1c33c8526/Photoroom_20250930_210107.JPG?format=2500w",
  },
];

const L6Details = () => (
  <div className="bg-card/80 text-foreground">
    <div className="px-6 py-10 md:px-10">
      <div className="text-center space-y-3">
        <img
          src="https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/6982410d-ce14-41c0-b7d1-319b66597546/REALHAND+CMYK+MAIN+COLOR+BOLD+AND+THIN+WITHOUT+LINE.png?format=1500w"
          alt="Realhand Logo"
          className="mx-auto h-16 w-auto"
        />
        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Product Manual
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold">Realhand L6</h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Compact, power-efficient dexterous hardware designed for embedded, scaled deployments.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <div className="glass-card p-4 md:p-6">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-muted/40">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/JQ9siUdS5uw"
              title="Realhand L6 Product Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="glass-card p-4 md:p-6">
          <img
            src="https://images.squarespace-cdn.com/content/68d1d70b0893e90df94a3d16/2287c229-4fde-4e65-aad4-0b51dc79c948/L6+Cover+Image.png?content-type=image%2Fpng"
            alt="Realhand L6 Main Product Image"
            className="w-full rounded-xl bg-muted/30 object-contain"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">Realhand Inc.</p>
        </div>

        <div className="glass-card p-5 md:p-6">
          <h3 className="text-xl font-display font-semibold">Physical Dimensions</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-2">
              <span>Length from middle finger tip to palm base</span>
              <span className="font-medium text-foreground">183 mm</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-2">
              <span>Maximum palm width</span>
              <span className="font-medium text-foreground">106 mm</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-2">
              <span>Length from thumb tip to palm base</span>
              <span className="font-medium text-foreground">105 mm</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-2">
              <span>Wrist height</span>
              <span className="font-medium text-foreground">76 mm</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Wrist diameter</span>
              <span className="font-medium text-foreground">64 mm</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 md:p-6">
          <h3 className="text-xl font-display font-semibold">Motion Performance</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {[
              ["Thumb Side-sway", "0-90 deg", "180 deg/s"],
              ["Thumb First Joint (MCP)", "0-60 deg", "180 deg/s"],
              ["Thumb Second Joint (IP)", "0-90 deg", "180 deg/s"],
              ["Index Finger First Joint (MCP)", "0-90 deg", "180 deg/s"],
              ["Middle Finger First Joint (MCP)", "0-90 deg", "180 deg/s"],
              ["Ring Finger First Joint (MCP)", "0-90 deg", "180 deg/s"],
              ["Pinky Finger First Joint (MCP)", "0-90 deg", "180 deg/s"],
              ["Four-Finger Second Joint (PIP)", "0-90 deg", "Passive"],
            ].map(([part, range, speed]) => (
              <div
                key={part}
                className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-3 border-b border-border/40 pb-2 last:border-b-0 last:pb-0"
              >
                <span className="text-foreground">{part}</span>
                <span>{range}</span>
                <span>{speed}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs text-primary">
            Note: Passive joints automatically follow the movement of their corresponding active joints through
            mechanical coupling, enabling natural grasping motions.
          </p>
        </div>

        <div className="glass-card p-5 md:p-6">
          <h3 className="text-xl font-display font-semibold">Product Parameters</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              ["Model", "Realhand L6"],
              ["Weight", "618.5 g"],
              ["Total Degrees of Freedom", "11 (6 active + 5 passive)"],
              ["Active Joints", "6"],
              ["Passive Joints", "5"],
              ["Repeat Positioning Accuracy", "+/-0.2 mm"],
              ["Opening/Closing Response Time", "0.35 seconds"],
              ["Joint Movement Speed", "180 deg/s (active joints)"],
              ["Maximum Grip Force", "TBD (contact for specifications)"],
              ["Power Supply", "24V DC"],
              ["Communication Protocol", "CAN 2.0"],
              ["Operating Temperature", "0 C ~ 40 C"],
              ["Storage Temperature", "-20 C ~ 60 C"],
              ["Wrist Flange", "ISO 9409-1-50-4-M6 standard"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-border/50 pb-2 last:border-b-0 last:pb-0"
              >
                <span>{label}</span>
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
);

const O6Details = () => (
  <div className="bg-card/80 text-foreground">
    <div className="px-6 py-10 md:px-10">
      <div className="text-center space-y-3">
        <img
          src="https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/6982410d-ce14-41c0-b7d1-319b66597546/REALHAND+CMYK+MAIN+COLOR+BOLD+AND+THIN+WITHOUT+LINE.png?format=1500w"
          alt="Realhand Logo"
          className="mx-auto h-16 w-auto"
        />
        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Product Information
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold">Realhand O6</h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          6 Active + 5 Passive DOF | Linkage Transmission
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <div className="glass-card p-4 md:p-6">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-muted/40">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/qM1FnE222Vs"
              title="Realhand O6 Product Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-5 space-y-3 text-muted-foreground text-sm md:text-base">
            <h2 className="text-xl font-display font-semibold text-foreground">High-Precision Bionic Hand</h2>
            <p>
              A high-precision bionic hand with 6 active and 5 passive joints, offering strong grip, precise control,
              and a compact, lightweight build.
            </p>
            <p>Ideal for logistics, assembly, and handling irregular objects.</p>
          </div>
        </div>

        <div className="glass-card p-4 md:p-6">
          <h3 className="text-xl font-display font-semibold">Feature Gallery</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/0a83f7ea-de78-4b56-af14-87b3a189996e/image5.jpg?content-type=image%2Fjpeg"
              alt="O6 Feature 1"
              className="h-80 w-full rounded-xl bg-white object-contain"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/16deb681-32e8-4cd1-8a84-e38291f222bc/image8.jpg?content-type=image%2Fjpeg"
              alt="O6 Feature 2"
              className="h-80 w-full rounded-xl bg-white object-contain"
            />
          </div>
        </div>

        <div className="glass-card p-5 md:p-6">
          <h3 className="text-xl font-display font-semibold">Main Features</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              ["Strong Gripping Force", "High-torque servo and worm gear drive deliver efficient, rigid, powerful gripping."],
              [
                "High-Precision Control",
                "Rigid-linkage transmission with hybrid force-position algorithm achieves +/-0.2 mm repeat accuracy.",
              ],
              [
                "Compact Size and Lightweight Design",
                "Weighs only 370 g; integrated drive-control module matches human hand dimensions.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card/60 p-4">
                <p className="font-semibold text-foreground">{title}</p>
                <p className="mt-2">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <img
              src="https://images.squarespace-cdn.com/content/68d1d70b0893e90df94a3d16/9f41ea3e-fc5c-4d37-9191-ed084d19094c/9.png?content-type=image%2Fpng"
              alt="O6 Gripping Demo"
              className="mx-auto w-2/3 rounded-xl bg-muted/30 object-contain"
            />
          </div>
        </div>

        <div className="glass-card p-5 md:p-6">
          <h3 className="text-xl font-display font-semibold">Technical Specifications</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              ["Degrees of Freedom", "11 (6 Active + 5 Passive DoF)"],
              ["Transmission Method", "Linkage Drive"],
              ["Drive Method", "Self-Developed Joint Module"],
              ["Control Interface", "CAN/RS485"],
              ["Weight", "370 g"],
              ["Max Payload", "50 kg"],
              ["Working Voltage", "DC24V +/-10%"],
              ["Static Current", "0.1 A"],
              ["Average No-load Operating Current", "0.4 A"],
              ["Max Current", "3 A"],
              ["Repeatability", "<= 0.20 mm"],
              ["Max Thumb Force", "28 N"],
              ["Max Four Finger Tip Force", "33 N"],
              ["Four Finger Flex Angle", "1.61 rad (92.59 deg)"],
              ["Thumb Lateral Swing Speed", "1.36 rad/s (78.10 deg/s)"],
              ["Four Finger Flex Speed", "1.30 rad (74.75 deg)"],
              ["Thumb Flex Speed", "2.60 rad/s (149.22 deg/s)"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-border/50 pb-2 last:border-b-0 last:pb-0"
              >
                <span>{label}</span>
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
);

type ProductId = "o6" | "l6";

interface ProductsProps {
  activeProductId: ProductId | null;
  onProductOpen: (id: ProductId) => void;
  onProductClose: () => void;
}

const Products = ({ activeProductId, onProductOpen, onProductClose }: ProductsProps) => {
  return (
    <section id="products" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Products
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Available Products
          </h2>
          <p className="text-muted-foreground text-lg">
           
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            const cardContent = (
              <>
                <div className="glass-card p-1 mb-6">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={`${product.name} hardware product`}
                        className="absolute inset-0 h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                            <Box className="h-8 w-8 text-primary" />
                          </div>
                          <p className="text-muted-foreground text-sm">
                          Set <span className="font-semibold text-foreground">media.{product.id}ImageUrl</span> in
                          src/config/site.ts
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {product.name}
                  </h3>
                  <p className="text-left text-muted-foreground text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
              </>
            );

            if (product.id === "l6" || product.id === "o6") {
              const details = product.id === "l6" ? <L6Details /> : <O6Details />;
              const isOpen = activeProductId === product.id;
              return (
                <Dialog
                  key={product.id}
                  open={isOpen}
                  onOpenChange={(open) => {
                    if (open) {
                      onProductOpen(product.id);
                      return;
                    }

                    if (isOpen) {
                      onProductClose();
                    }
                  }}
                >
                  <DialogTrigger asChild>
                    <button
                      id={product.id}
                      type="button"
                      className="glass-card p-6 scroll-mt-24 text-left w-full transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`Open ${product.name} details`}
                    >
                      {cardContent}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
                    {details}
                  </DialogContent>
                </Dialog>
              );
            }

            return (
              <div key={product.id} id={product.id} className="glass-card p-6 scroll-mt-24">
                {cardContent}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Coming Soon
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Upcoming Products
          </h3>
          <p className="text-muted-foreground text-lg">
            Stay tuned for the next generation.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {newProducts.map((product) => (
            <div key={product.id} id={product.id} className="glass-card p-6 scroll-mt-24">
              <div className="glass-card p-1 mb-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} hardware product`}
                      className="absolute inset-0 h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                          <Box className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {product.name}
                </h3>
                <p className="text-left text-muted-foreground text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
