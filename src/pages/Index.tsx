import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sponsorship from "@/components/Sponsorship";
import BlogSection from "@/components/BlogSection";
import DemoSection from "@/components/DemoSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // Handle hash navigation (e.g., /#about, /#o6, /#demo)
    if (location.hash) {
      const id = location.hash.replace('#', '');

      // If navigating to demo, open the modal
      if (id === 'demo') {
        setShowDemo(true);
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        // Use setTimeout to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const handleShowDemo = () => {
    setShowDemo(true);
  };

  const SectionDivider = () => (
    <div className="container mx-auto px-6">
      <div className="my-8 h-px w-full bg-border/60" aria-hidden="true" />
    </div>
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero onShowDemo={handleShowDemo} />
      <DemoSection isOpen={showDemo} onClose={() => setShowDemo(false)} />
      <SectionDivider />
      <Products />
      <SectionDivider />
      <Sponsorship />
      <SectionDivider />
      <BlogSection />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
