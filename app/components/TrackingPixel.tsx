'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    analytics: any;
  }
}

export function TrackingPixel() {
  useEffect(() => {
    // Step 1. Initialize the JavaScript pixel SDK
    // Note: You should replace this with the actual initialization code for your pixel SDK
    if (typeof window.analytics === 'undefined') {
      console.warn('Analytics SDK not found. Make sure to include the SDK script.');
      return;
    }

    // Step 2. Subscribe to customer events with analytics.subscribe()
    window.analytics.subscribe("all_standard_events", (event: any) => {
      console.log("Event data ", event?.data);
    });

  }, []);

  return null; // This component doesn't render anything
}

