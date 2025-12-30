import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Demo = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Demo Section */}
      <section className="relative pt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-5xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Interactive Demo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experience real-time teleoperation of our AI-powered robotic hand. This interactive demo uses your device camera to capture your hand movements and translates them into precise control of the 3D robot hand visualization below.
            </p>
          </div>

          <iframe
            src="https://robot-hand-simulation-broswer-sim-git-e8dec0-reatureds-projects.vercel.app/"
            width="100%"
            height="800px"
            style={{ border: "none" }}
            allow="camera"
            title="Robot Hand Simulation"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Demo;
