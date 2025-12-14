import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Eye, Calendar, Award, Lock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchAnalyticsStats } from '../hooks/useAnalytics';

// Password from environment variable (set in .env file)
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || '';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Check if already authenticated this session
  useEffect(() => {
    const authenticated = sessionStorage.getItem('ribbit-admin-auth');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('ribbit-admin-auth', 'true');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

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
  }, [isAuthenticated]);

  const formatPageName = (path: string, title: string | null) => {
    if (title) {
      // Remove " | The Ribbit Report" suffix if present
      return title.replace(/\s*\|\s*The Ribbit Report$/i, '');
    }
    if (path === '/') return 'Home';
    return path
      .replace(/^\//, '')
      .replace(/-/g, ' ')
      .replace(/\//g, ' › ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get max views for chart scaling
  const getMaxViews = () => {
    if (!stats?.dailyStats?.length) return 100;
    return Math.max(...stats.dailyStats.map((d) => parseInt(d.views))) || 100;
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1A1A1A] flex items-center justify-center px-4">
        <div className="w-full max-w-[320px]">
          <div className="bg-white dark:bg-[#242424] rounded-2xl p-6 shadow-lg min-w-[280px]">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] dark:bg-[#1B3D2F] flex items-center justify-center">
                <Lock size={32} className="text-[#2D5A3D] dark:text-[#81C784]" />
              </div>
            </div>

            <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white text-center mb-2 whitespace-nowrap">
              Admin Access
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] text-center mb-6 whitespace-nowrap">
              Enter password to view analytics
            </p>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-xl border-2 bg-[#F9FAFB] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-white placeholder-[#9CA3AF] focus:outline-none transition-colors ${
                  passwordError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#374151] focus:border-[#2D5A3D] dark:focus:border-[#81C784]'
                }`}
                autoFocus
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">Incorrect password</p>
              )}
              <button
                type="submit"
                className="w-full mt-4 bg-[#2D5A3D] hover:bg-[#234A31] text-white font-medium py-3 px-6 rounded-xl transition-colors whitespace-nowrap"
              >
                Access Dashboard
              </button>
            </form>

            <Link
              to="/"
              className="block text-center mt-6 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D5A3D] dark:hover:text-[#81C784] transition-colors whitespace-nowrap"
            >
              Return to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1A1A1A]">
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D5A3D] dark:hover:text-[#81C784] mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white mb-2 whitespace-nowrap">
          Analytics Dashboard
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-6 whitespace-nowrap">
          Anonymous usage stats for The Ribbit Report
        </p>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-[#2D5A3D] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-[#6B7280] dark:text-[#9CA3AF]">Loading stats...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl whitespace-normal">
            {error}
          </div>
        )}

        {stats && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white dark:bg-[#242424] rounded-xl p-4 text-center shadow-sm">
                <Eye size={24} className="mx-auto text-[#2D5A3D] dark:text-[#81C784] mb-2" />
                <p className="text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  {stats.totalViews.toLocaleString()}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Total</p>
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
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Week</p>
              </div>
            </div>

            {/* 30-Day Trend Chart */}
            {stats.dailyStats && stats.dailyStats.length > 0 && (
              <div className="bg-white dark:bg-[#242424] rounded-xl p-5 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 size={20} className="text-[#3B82F6]" />
                  <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white">
                    Last 30 Days
                  </h2>
                </div>

                {/* Simple bar chart */}
                <div className="flex items-end gap-1 h-32 mb-2">
                  {stats.dailyStats
                    .slice()
                    .reverse()
                    .slice(-30)
                    .map((day) => {
                      const views = parseInt(day.views);
                      const maxViews = getMaxViews();
                      const height = maxViews > 0 ? (views / maxViews) * 100 : 0;
                      return (
                        <div
                          key={day.date}
                          className="flex-1 bg-[#2D5A3D] dark:bg-[#81C784] rounded-t hover:bg-[#234A31] dark:hover:bg-[#6ABF8A] transition-colors cursor-default group relative"
                          style={{ height: `${Math.max(height, 2)}%` }}
                          title={`${formatDate(day.date)}: ${views} views`}
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2D2D2D] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                            {formatDate(day.date)}: {views}
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Date labels */}
                <div className="flex justify-between text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  <span>30 days ago</span>
                  <span>Today</span>
                </div>
              </div>
            )}

            {/* Popular Pages */}
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
                      className="flex items-center justify-between gap-3 py-2 border-b border-[#E5E7EB] dark:border-[#374151] last:border-0"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#E8F5E9] dark:bg-[#1B3D2F] text-[#2D5A3D] dark:text-[#81C784] text-sm font-bold rounded-full">
                          {index + 1}
                        </span>
                        <span className="text-[#2D2D2D] dark:text-white text-sm truncate">
                          {formatPageName(page.page_path, page.page_title)}
                        </span>
                      </div>
                      <span className="flex-shrink-0 text-[#6B7280] dark:text-[#9CA3AF] text-sm whitespace-nowrap">
                        {parseInt(page.views).toLocaleString()}
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
