import { NavLink } from 'react-router-dom';
import { Home, Globe, Search, Settings } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/dispatches', icon: Globe, label: 'Dispatches' },
  { to: '/myths', icon: Search, label: 'Myth Busters' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#242424] border-t border-[#E5E7EB] dark:border-[#374151] safe-area-bottom z-50">
      <div className="container-app">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-2 transition-default ${
                  isActive
                    ? 'text-[#2D5A3D]'
                    : 'text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D5A3D]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    fill={isActive ? 'currentColor' : 'none'}
                  />
                  <span className="text-xs font-medium">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
