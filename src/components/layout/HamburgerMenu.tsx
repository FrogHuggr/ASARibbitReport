import { X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItemProps {
  to: string;
  label: string;
  onClose: () => void;
  disabled?: boolean;
}

function MenuItem({ to, label, onClose, disabled }: MenuItemProps) {
  if (disabled) {
    return (
      <div className="flex items-center justify-between h-12 text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed">
        <span className="font-medium">{label}</span>
        <span className="text-xs bg-[#F3F4F6] dark:bg-[#374151] px-2 py-0.5 rounded">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClose}
      className="flex items-center justify-between h-12 text-[#1a1a1a] dark:text-white hover:text-[#2D5A3D] dark:hover:text-[#81C784] transition-colors"
    >
      <span className="font-medium">{label}</span>
      <ChevronRight size={18} className="text-[#9CA3AF] dark:text-[#808080]" />
    </Link>
  );
}

export function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Scrim/overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-white dark:bg-[#1a1a1a] z-50 shadow-xl animate-slide-in-right flex flex-col">
        {/* Close button */}
        <div className="flex justify-end p-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu sections - scrollable */}
        <nav className="px-5 overflow-y-auto flex-1" style={{ paddingBottom: 'max(6rem, calc(4rem + env(safe-area-inset-bottom, 2rem)))' }}>
          {/* EXPLORE Section */}
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#808080] mb-3">
            Explore
          </p>
          <div className="space-y-0">
            <MenuItem to="/dispatches" label="Dispatches" onClose={onClose} />
            <MenuItem to="/field-notes/glass-half-full" label="Field Notes" onClose={onClose} />
            <MenuItem to="/wild-decisions" label="Wild Decisions" onClose={onClose} />
            <MenuItem to="/myths" label="Myth Busters" onClose={onClose} />
            <MenuItem to="/real-story/frogs-vs-toads" label="The Real Story" onClose={onClose} />
            <MenuItem to="/species" label="Species Files" onClose={onClose} disabled />
            <MenuItem to="/toolkit" label="Conservation Toolkit" onClose={onClose} disabled />
          </div>

          {/* Divider */}
          <hr className="my-5 border-[#e5e5e5] dark:border-[#404040]" />

          {/* COLLECTIONS Section */}
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#808080] mb-3">
            Collections
          </p>
          <div className="space-y-0">
            <MenuItem to="/new" label="New This Month" onClose={onClose} />
            <MenuItem to="/picks" label="MarshMellow's Picks" onClose={onClose} />
            <MenuItem to="/popular" label="Most Popular" onClose={onClose} />
          </div>

          {/* Divider */}
          <hr className="my-5 border-[#e5e5e5] dark:border-[#404040]" />

          {/* About Section */}
          <MenuItem to="/meet-marshmellow" label="Meet MarshMellow" onClose={onClose} />
          <MenuItem to="/settings" label="About The Ribbit Report" onClose={onClose} />
        </nav>
      </div>
    </>
  );
}
