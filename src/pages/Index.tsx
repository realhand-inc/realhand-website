import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sponsorship from "@/components/Sponsorship";
import BlogSection from "@/components/BlogSection";
import DemoSection from "@/components/DemoSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

type SectionKey = "o6" | "l6" | "demo";

interface IndexProps {
  forcedSection?: SectionKey | null;
}

const sectionRoutes: Record<SectionKey, string> = {
  o6: "/o6",
  l6: "/l6",
  demo: "/demo",
};

const Index = ({ forcedSection = null }: IndexProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isAnnouncementExpanded, setIsAnnouncementExpanded] = useState(false);
  const [isAnnouncementDismissed, setIsAnnouncementDismissed] = useState(false);

  const closeAnnouncementExpanded = () => {
    setIsAnnouncementExpanded(false);
    if (!isAnnouncementDismissed) {
      setIsAnnouncementVisible(true);
    }
  };

  useEffect(() => {
    if (isAnnouncementExpanded) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => {
      unlockBodyScroll();
    };
  }, [isAnnouncementExpanded]);
  const activeHash = location.hash.replace("#", "").trim();
  const activeKey = forcedSection ?? activeHash;
  const activeProductId = activeKey === "o6" || activeKey === "l6" ? activeKey : null;
  const isDemoOpen = activeKey === "demo";

  const navigateToSection = (section: SectionKey) => {
    navigate(sectionRoutes[section], { replace: false });
  };

  const clearSection = () => {
    if (forcedSection) {
      navigate("/", { replace: true });
      return;
    }

    if (!location.hash) return;

    navigate(
      {
        pathname: location.pathname,
        search: location.search,
        hash: "",
      },
      { replace: true }
    );
  };

  useEffect(() => {
    if (forcedSection) return;

    // Handle hash navigation (e.g., /#about, /#o6, /#demo)
    if (!location.hash) return;

    if (activeHash === "demo" || activeHash === "o6" || activeHash === "l6") {
      return;
    }

    const element = document.getElementById(activeHash);
    if (element) {
      // Use setTimeout to ensure the page has rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [activeHash, forcedSection, location.hash]);

  const handleShowDemo = () => {
    navigateToSection("demo");
  };

  const SectionDivider = () => (
    <div className="container mx-auto px-6">
      <div className="my-8 h-px w-full bg-border/60" aria-hidden="true" />
    </div>
  );

  return (
    <>
      <SEO />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero onShowDemo={handleShowDemo} />
        <DemoSection isOpen={isDemoOpen} onClose={clearSection} />
        <SectionDivider />
        <Products
          activeProductId={activeProductId}
          onProductOpen={(id) => navigateToSection(id)}
          onProductClose={clearSection}
        />
        <SectionDivider />
        <Sponsorship />
        <SectionDivider />
        <BlogSection />
        <About />
        <Footer />
        {isAnnouncementVisible && !isAnnouncementExpanded && (
          <div
            className="fixed bottom-6 right-6 z-40 max-w-[320px] rounded-lg border border-border/60 bg-background/95 p-3 shadow-lg backdrop-blur"
            role="status"
            aria-live="polite"
          >
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-muted/70 p-1 text-foreground transition hover:bg-muted"
              onClick={(event) => {
                event.stopPropagation();
                setIsAnnouncementDismissed(true);
                setIsAnnouncementVisible(false);
                setIsAnnouncementExpanded(false);
              }}
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="block w-full"
              onClick={() => {
                setIsAnnouncementExpanded(true);
                setIsAnnouncementVisible(false);
              }}
              aria-label="Open announcement details"
            >
              <img
                src="https://images.squarespace-cdn.com/content/68d1d70b0893e90df94a3d16/1abc0009-2397-4b84-a2ce-b88b27b05d9d/CES_2026.png?content-type=image%2Fpng"
                alt="CES 2026 announcement"
                className="h-auto w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            </button>
          </div>
        )}
        {isAnnouncementExpanded && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Announcement"
            onClick={closeAnnouncementExpanded}
          >
            <div
              className="relative w-full max-w-3xl rounded-xl border border-border/60 bg-background p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-muted/70 p-2 text-foreground transition hover:bg-muted"
                onClick={closeAnnouncementExpanded}
                aria-label="Close announcement"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src="https://images.squarespace-cdn.com/content/68d1d70b0893e90df94a3d16/1abc0009-2397-4b84-a2ce-b88b27b05d9d/CES_2026.png?content-type=image%2Fpng"
                alt="CES 2026 announcement"
                className="h-auto w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Index;
