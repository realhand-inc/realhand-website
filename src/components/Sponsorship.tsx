import SponsorshipForm from "@/components/SponsorshipForm";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const Sponsorship = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [isFormClosing, setIsFormClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowVideoModal(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleCloseFormModal = () => {
    setIsFormClosing(true);
    setTimeout(() => {
      setShowFormModal(false);
      setIsFormClosing(false);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    if (showVideoModal || showFormModal) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    return () => {
      unlockBodyScroll();
    };
  }, [showVideoModal, showFormModal]);

  return (
    <section id="sponsorship" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sponsorship
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Scholar Sponsorship Program
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 text-left">
              The RealHand™ Scholar Sponsorship Program is a prestigious initiative designed to
              empower groundbreaking research in AI, robotics, machine learning, and computer
              vision. Through this program, leading researchers, labs, and academic institutions can
              gain complimentary access to our flagship dexterous robotic hand, enabling them to
              push the boundaries of embodied intelligence and accelerate technological
              breakthroughs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-left">
              By partnering with top innovators and providing cutting-edge tools, RealHand® is
              committed to advancing the future of human-robot collaboration and shaping the next
              generation of intelligent systems.{" "}
              <button
                onClick={() => setShowVideoModal(true)}
                className="text-primary hover:underline font-medium cursor-pointer bg-transparent border-0 p-0"
              >
                Watch Demo here
              </button>
              .
            </p>
            <p className="text-muted-foreground text-base text-left">
              Please complete the following details to apply for the Realhand™ Scholar Sponsorship
              Program. This information helps us evaluate your eligibility and deliver equipment if
              selected.
            </p>
            <div className="mt-6 text-left">
              <button
                type="button"
                onClick={() => setShowFormModal(true)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-expanded={showFormModal}
              >
                Apply
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Form Modal */}
      {showFormModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isFormClosing ? 'opacity-0 backdrop-blur-0' : 'opacity-100 backdrop-blur-md'
          } bg-black/80`}
          onClick={handleCloseFormModal}
        >
          <div
            className={`relative w-full max-w-4xl transition-all duration-300 ${
              isFormClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-card p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Sponsorship Application
                </h3>
                <button
                  onClick={handleCloseFormModal}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-foreground"
                  aria-label="Close form"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-y-auto pr-1">
                <div className="glass-card p-6 md:p-8">
                  <SponsorshipForm />
                </div>

                <div className="mt-8 glass-card p-6 md:p-8">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    Privacy Notice
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    In compliance with the California Consumer Privacy Act (CCPA), your personal
                    information will be used exclusively to assess your eligibility and, if
                    selected, facilitate communication and delivery of the sponsored equipment. We
                    do not share or sell your data to third parties. For details, please review our
                    company's Privacy Policy or e-mail us at{" "}
                    <a href="mailto:privacy@realhand.com" className="text-primary hover:underline">
                      privacy@realhand.com
                    </a>
                    .
                  </p>

                  <h4 className="text-lg font-display font-bold text-foreground mb-4">
                    Disclaimer
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This Privacy Policy is provided for informational purposes only and does not
                    create any contractual rights or legal obligations beyond those required by
                    applicable law. In the event of a conflict between this Policy and applicable
                    privacy laws, the latter shall prevail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isClosing ? 'opacity-0 backdrop-blur-0' : 'opacity-100 backdrop-blur-md'
          } bg-black/80`}
          onClick={handleCloseModal}
        >
          <div
            className={`relative w-full max-w-6xl transition-all duration-300 ${
              isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Custom Frame with Theme */}
            <div className="glass-card p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  RealHand™ Demo
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-foreground"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-border/50">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/awHmL9YxSdI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0"
                  title="RealHand Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Optional Footer */}
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  RealHand™ Scholar Sponsorship Program Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sponsorship;
