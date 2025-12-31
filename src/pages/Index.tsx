import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sponsorship from "@/components/Sponsorship";
import BlogSection from "@/components/BlogSection";
import DemoSection from "@/components/DemoSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeHash = location.hash.replace("#", "");
  const activeProductId = activeHash === "o6" || activeHash === "l6" ? activeHash : null;
  const isDemoOpen = activeHash === "demo";

  const setHashValue = (value: string) => {
    navigate(
      {
        pathname: location.pathname,
        search: location.search,
        hash: value ? `#${value}` : "",
      },
      { replace: false }
    );
  };

  const clearHash = () => {
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
  }, [activeHash, location.hash]);

  const handleShowDemo = () => {
    setHashValue("demo");
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
        <DemoSection isOpen={isDemoOpen} onClose={clearHash} />
        <SectionDivider />
        <Products
          activeProductId={activeProductId}
          onProductOpen={(id) => setHashValue(id)}
          onProductClose={clearHash}
        />
        <SectionDivider />
        <Sponsorship />
        <SectionDivider />
        <BlogSection />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default Index;
