import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

interface DemoSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoSection = ({ isOpen, onClose }: DemoSectionProps) => {
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setShouldLoadIframe(false); // Unload iframe when closing
    }, 300); // Match animation duration
  };

  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
      // Load iframe when modal opens
      setShouldLoadIframe(true);
    } else {
      unlockBodyScroll();
    }
    return () => {
      unlockBodyScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isClosing ? 'opacity-0 backdrop-blur-0' : 'opacity-100 backdrop-blur-md'
      } bg-black/80`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-[95vw] h-[90vh] transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Custom Frame with Theme */}
        <div className="glass-card p-6 shadow-2xl h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                Interactive Demo
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Use your webcam to capture your hand pose and control the robot hand model. Please allow camera access
                when prompted.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-foreground flex-shrink-0"
              aria-label="Close demo"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Demo Container */}
          <div className="flex-1 bg-black/20 rounded-lg overflow-hidden border border-border/50">
            {shouldLoadIframe ? (
              <iframe
                src="https://robot-hand-simulation-broswer-sim-git-e8dec0-reatureds-projects.vercel.app/"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allow="camera"
                title="Robot Hand Simulation"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-pulse text-muted-foreground">
                    Loading interactive demo...
                  </div>
                </div>
              </div>
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
