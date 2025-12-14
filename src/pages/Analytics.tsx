import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Eye, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchAnalyticsStats } from '../hooks/useAnalytics';

interface AnalyticsData {
  totalViews: number;
  todayViews: number;
  weekViews: number;
  popularPages: Array<{ page_path: string; page_title: string; views: string }>;
  dailyStats: Array<{ date: string; views: string }>;
}

export function Analytics() {
  const [stats, setStats] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchAnalyticsStats();
        setStats(data);
      } catch (err) {
        setError('Failed to load analytics');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  const formatPageName = (path: string, title: string | null) => {
    if (title) return title;
    if (path === '/') return 'Home';
    return path.replace(/^\//, '').replace(/-/g, ' ').replace(/\//g, ' > ');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1A1A1A]">
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <Link
          to="/settings"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D5A3D] dark:hover:text-[#81C784] mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Settings</span>
        </Link>

        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white mb-2">
          Analytics
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-6">
          Anonymous usage stats for The Ribbit Report
        </p>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-[#2D5A3D] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-[#6B7280] dark:text-[#9CA3AF]">Loading stats...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl">
            {error}
          </div>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white dark:bg-[#242424] rounded-xl p-4 text-center shadow-sm">
                <Eye size={24} className="mx-auto text-[#2D5A3D] dark:text-[#81C784] mb-2" />
                <p className="text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  {stats.totalViews.toLocaleString()}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Total Views</p>
              </div>

              <div className="bg-white dark:bg-[#242424] rounded-xl p-4 text-center shadow-sm">
                <Calendar size={24} className="mx-auto text-[#F59E0B] mb-2" />
                <p className="text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  {stats.todayViews.toLocaleString()}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Today</p>
              </div>

              <div className="bg-white dark:bg-[#242424] rounded-xl p-4 text-center shadow-sm">
                <TrendingUp size={24} className="mx-auto text-[#3B82F6] mb-2" />
                <p className="text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  {stats.weekViews.toLocaleString()}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">This Week</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#242424] rounded-xl p-5 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Award size={20} className="text-[#F59E0B]" />
                <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white">
                  Popular Pages
                </h2>
              </div>

              {stats.popularPages.length === 0 ? (
                <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                  No page views recorded yet. Check back soon!
                </p>
              ) : (
                <ul className="space-y-3">
                  {stats.popularPages.map((page, index) => (
                    <li
                      key={page.page_path}
                      className="flex items-center justify-between py-2 border-b border-[#E5E7EB] dark:border-[#374151] last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 flex items-center justify-center bg-[#E8F5E9] dark:bg-[#1B3D2F] text-[#2D5A3D] dark:text-[#81C784] text-sm font-bold rounded-full">
                          {index + 1}
                        </span>
                        <span className="text-[#2D2D2D] dark:text-white text-sm capitalize">
                          {formatPageName(page.page_path, page.page_title)}
                        </span>
                      </div>
                      <span className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                        {parseInt(page.views).toLocaleString()} views
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className="text-xs text-center text-[#9CA3AF] dark:text-[#6B7280]">
              Privacy-friendly analytics. No cookies. No personal data.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
