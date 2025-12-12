import { X, Info, Globe, Download, Archive } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Scrim/overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-white dark:bg-[#1A1A1A] z-50 shadow-xl animate-slide-in-right">
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="px-4">
          <Link
            to="/settings"
            onClick={onClose}
            className="flex items-center gap-4 h-12 text-[#2D2D2D] dark:text-white hover:text-[#2D5A3D] dark:hover:text-[#81C784] transition-colors"
          >
            <Info size={24} className="text-[#6B7280] dark:text-[#9CA3AF]" />
            <span>About The Ribbit Report</span>
          </Link>

          <button
            disabled
            className="flex items-center gap-4 h-12 w-full text-left text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed"
          >
            <Globe size={24} />
            <span>Language</span>
            <span className="ml-auto text-xs bg-[#E5E5E5] dark:bg-[#374151] px-2 py-0.5 rounded">
              Coming Soon
            </span>
          </button>

          <button
            disabled
            className="flex items-center gap-4 h-12 w-full text-left text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed"
          >
            <Download size={24} />
            <span>Download for Offline</span>
          </button>

          {/* Divider */}
          <hr className="my-4 border-[#E5E5E5] dark:border-[#374151]" />

          <button
            disabled
            className="flex items-center gap-4 h-12 w-full text-left text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed"
          >
            <Archive size={24} />
            <span>Issue Archive</span>
            <span className="ml-auto text-xs bg-[#E5E5E5] dark:bg-[#374151] px-2 py-0.5 rounded">
              Coming Soon
            </span>
          </button>
        </nav>
      </div>
    </>
  );
}
