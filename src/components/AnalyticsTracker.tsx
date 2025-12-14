import { usePageTracking } from '../hooks/useAnalytics';

export function AnalyticsTracker() {
  usePageTracking();
  return null;
}
