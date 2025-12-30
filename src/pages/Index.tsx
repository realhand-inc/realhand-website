import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrimaryNavSections from "@/components/PrimaryNavSections";
import Technology from "@/components/Technology";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (e.g., /#about, /#o6)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use setTimeout to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PrimaryNavSections />
      <Technology />
      <Industries />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
