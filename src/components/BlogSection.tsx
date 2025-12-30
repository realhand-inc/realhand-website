import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const blogPosts = [
  {
    id: "open-house",
    title: "Open House",
    date: "Nov 1",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/1761972796552-4VEMF6LME2SCMSH7OMOQ/WechatIMG770.jpg?format=2500w",
    show: true,
    description: `Thank you to everyone who joined us at the Realhand Open House on October 28!

Your presence and enthusiasm made the evening unforgettable. Seeing the room filled with innovators, founders, researchers, and friends who share our vision for the future of dexterous robotics was truly inspiring for our entire team.

The live demos were a highlight — it’s one thing to discuss human-level dexterity, but another to witness Realhand™ in action. We appreciated the insightful questions, ideas, and conversations about how this technology can advance humanoids, automation, and tele-operations.

A heartfelt thank-you to our partners and team members who made this night a seamless blend of innovation, collaboration, and community.

We’re just getting started — and we’re excited to be building this future together.`,
  },
  {
    id: "post-2",
    title: "Post title placeholder 2",
    date: "Coming soon",
    imageUrl: "/placeholder.svg",
    show: false,
    description: "Replace this description with your next post content.",
  },
  {
    id: "post-3",
    title: "Post title placeholder 3",
    date: "Coming soon",
    imageUrl: "/placeholder.svg",
    show: false,
    description: "Replace this description with your next post content.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Blog"
          title="News, Blog and Technical Updates"
          subtitle="Short, technical updates on hardware design, AI performance, and deployment lessons."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts
            .filter((post) => post.show)
            .map((post) => (
            <Dialog key={post.id}>
              <DialogTrigger asChild>
                <article className="glass-card overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {post.title}
                    </h3>
                  </div>
                </article>
              </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <DialogTitle className="text-2xl font-display font-bold">
                  {post.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border/50">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-4 text-muted-foreground text-base leading-relaxed">
                {post.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
