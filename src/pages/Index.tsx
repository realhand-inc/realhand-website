import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrimaryNavSections from "@/components/PrimaryNavSections";
import Technology from "@/components/Technology";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
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
