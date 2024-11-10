declare global {
  interface Window {
    gtag: (
      command: string,
      target: string | undefined,
      params?: Record<string, any>
    ) => void;
  }
}

// Google Analytics configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual GA tracking ID

// Analytics helper functions
export const pageview = (url: string): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

export const event = ({ 
  action, 
  category, 
  label, 
  value 
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}