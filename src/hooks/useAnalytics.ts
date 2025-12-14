import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const API_URL = import.meta.env.PROD 
  ? '/api/analytics/event'
  : 'http://localhost:3001/api/analytics/event';

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
  const statsUrl = import.meta.env.PROD 
    ? '/api/analytics/stats'
    : 'http://localhost:3001/api/analytics/stats';
    
  const response = await fetch(statsUrl);
  if (!response.ok) throw new Error('Failed to fetch stats');
  return response.json();
}
