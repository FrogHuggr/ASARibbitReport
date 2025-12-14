import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Always use relative URL - Vite proxy handles in dev, and production should have proper routing
const API_URL = '/api/analytics/event';

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventType: 'page_view',
            pagePath: location.pathname,
            pageTitle: document.title,
            referrer: document.referrer || null,
          }),
        });
      } catch (error) {
        console.debug('Analytics tracking failed:', error);
      }
    };

    trackPageView();
  }, [location.pathname]);
}

export async function trackEvent(eventType: string, data?: Record<string, string>) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType,
        pagePath: window.location.pathname,
        pageTitle: data?.title || document.title,
        ...data,
      }),
    });
  } catch (error) {
    console.debug('Analytics tracking failed:', error);
  }
}

export async function fetchAnalyticsStats() {
  const response = await fetch('/api/analytics/stats');
  if (!response.ok) throw new Error('Failed to fetch stats');
  return response.json();
}
