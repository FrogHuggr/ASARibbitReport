import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { HamburgerMenu } from './HamburgerMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white dark:bg-[#1A1A1A] border-b border-[#E5E5E5] dark:border-[#374151]">
        <div className="container-app px-4 h-14 flex items-center justify-between">
          {/* Logo/Home link */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/marshmellow/marshmellow-wave.png"
              alt="MarshMellow waving"
              className="h-10 w-auto"
            />
            <span className="font-display text-xl font-bold text-[#2D5A3D] dark:text-[#81C784]">
              The Ribbit Report
            </span>
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -mr-2 text-[#4A4A4A] dark:text-[#9CA3AF] hover:text-[#2D5A3D] dark:hover:text-[#81C784] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Hamburger Menu Drawer */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
