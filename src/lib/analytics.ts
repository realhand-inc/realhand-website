import ReactGA from "react-ga4";

// Get the Google Analytics Measurement ID from environment variables
// For Vite, use VITE_ prefix instead of REACT_APP_
const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID);
    console.log("Google Analytics initialized with ID:", TRACKING_ID);
  } else {
    console.warn("Google Analytics Measurement ID not found in environment variables");
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (TRACKING_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Track custom events (optional, for future use)
export const trackEvent = (category: string, action: string, label?: string) => {
  if (TRACKING_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
