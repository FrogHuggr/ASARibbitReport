import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Smartphone, Share, Plus, MoreVertical } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTextSize, type TextSize } from '../context/TextSizeContext';

// Detect if app is running as installed PWA
function useIsInstalled() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (installed PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as { standalone?: boolean }).standalone === true;
    setIsInstalled(isStandalone);
  }, []);

  return isInstalled;
}

// Detect device type
function useDeviceType() {
  const [device, setDevice] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      setDevice('ios');
    } else if (/android/.test(ua)) {
      setDevice('android');
    } else {
      setDevice('desktop');
    }
  }, []);

  return device;
}

export function Settings() {
  const { isDark, toggleDark } = useTheme();
  const { textSize, setTextSize } = useTextSize();
  const isInstalled = useIsInstalled();
  const device = useDeviceType();

  return (
    <div className="container-app px-4 py-6 pb-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          Settings
        </h1>
      </header>

      {/* Appearance Section */}
      <div className="card mb-6">
        <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-4">
          Appearance
        </h2>

        {/* Dark/Light Mode Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{isDark ? '🌙' : '☀️'}</span>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-white">
                Light Mode
              </p>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                {isDark ? 'Off (using dark theme)' : 'On (using light theme)'}
              </p>
            </div>
          </div>

          {/* Toggle Switch - now toggles light mode on/off */}
          <button
            onClick={toggleDark}
            className={`relative w-14 h-8 rounded-full transition-colors border-2 ${
              !isDark
                ? 'bg-[#2D5A3D] border-[#2D5A3D]'
                : 'bg-[#D1D5DB] dark:bg-[#404040] border-[#9CA3AF] dark:border-[#404040]'
            }`}
            aria-label="Toggle light mode"
          >
            <span
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                !isDark ? 'translate-x-7' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {/* Text Size Selector */}
        <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#374151]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">Aa</span>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-white">
                Text Size
              </p>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                Adjust reading comfort
              </p>
            </div>
          </div>

          {/* Size buttons */}
          <div className="flex gap-2">
            {(['small', 'medium', 'large'] as TextSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm capitalize transition-colors border-2 ${
                  textSize === size
                    ? 'bg-[#2D5A3D] text-white border-[#2D5A3D]'
                    : 'bg-[#F3F4F6] dark:bg-[#374151] text-[#4B5563] dark:text-white border-[#D1D5DB] dark:border-[#4B5563] hover:bg-[#E5E7EB] dark:hover:bg-[#4B5563]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Install as App Section - only show if not already installed */}
      {!isInstalled && (
        <div className="card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#2D5A3D]/10 dark:bg-[#6B9B7A]/10 flex items-center justify-center">
              <Smartphone size={20} className="text-[#2D5A3D] dark:text-[#6B9B7A]" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white">
                Install as App
              </h2>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                Add to your home screen
              </p>
            </div>
          </div>

          {device === 'ios' && (
            <div className="bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-4">
              <p className="text-sm font-medium text-[#2D2D2D] dark:text-white mb-3">
                On iPhone or iPad:
              </p>
              <ol className="space-y-3 text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs font-bold flex items-center justify-center">1</span>
                  <span>Tap the <Share size={16} className="inline mx-1 text-[#007AFF]" /> Share button at the bottom of Safari</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <span>Scroll down and tap <span className="font-medium">"Add to Home Screen"</span> <Plus size={14} className="inline mx-1" /></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs font-bold flex items-center justify-center">3</span>
                  <span>Tap <span className="font-medium">"Add"</span> in the top right corner</span>
                </li>
              </ol>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-4">
                MarshMellow will appear on your home screen!
              </p>
            </div>
          )}

          {device === 'android' && (
            <div className="bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-4">
              <p className="text-sm font-medium text-[#2D2D2D] dark:text-white mb-3">
                On Android:
              </p>
              <ol className="space-y-3 text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs font-bold flex items-center justify-center">1</span>
                  <span>Tap the <MoreVertical size={16} className="inline mx-1" /> menu button in Chrome</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <span>Tap <span className="font-medium">"Add to Home screen"</span> or <span className="font-medium">"Install app"</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs font-bold flex items-center justify-center">3</span>
                  <span>Tap <span className="font-medium">"Add"</span> to confirm</span>
                </li>
              </ol>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-4">
                MarshMellow will appear on your home screen!
              </p>
            </div>
          )}

          {device === 'desktop' && (
            <div className="bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-4">
              <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                The Ribbit Report works best on mobile devices! Visit this site on your phone or tablet to install it as an app.
              </p>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-3">
                On desktop Chrome, look for the install icon <Plus size={12} className="inline mx-1" /> in the address bar.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Already installed message */}
      {isInstalled && (
        <div className="card mb-6 bg-[#E8F5E9] dark:bg-[#1B3D2F] border border-[#4CAF50]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center">
              <Smartphone size={20} className="text-[#4CAF50]" />
            </div>
            <div>
              <p className="font-medium text-[#2D5A3D] dark:text-[#8FBC8F]">
                App Installed!
              </p>
              <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF]">
                You're using The Ribbit Report as an app
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* Quick Links */}
      <section className="mb-6">
        <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-4">
          Learn More
        </h2>
        <div className="space-y-2">
          <Link
            to="/meet-marshmellow"
            className="flex items-center justify-between p-4 bg-white dark:bg-[#262626] rounded-xl border border-[#E5E7EB] dark:border-[#374151] hover:border-[#2D5A3D] dark:hover:border-[#6B9B7A] transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src="/images/marshmellow/marshmellow-searching.png"
                alt="MarshMellow"
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-[#2D2D2D] dark:text-white">Meet MarshMellow</span>
            </div>
            <ChevronRight size={20} className="text-[#9CA3AF]" />
          </Link>

          <Link
            to="/conservation-status"
            className="flex items-center justify-between p-4 bg-white dark:bg-[#262626] rounded-xl border border-[#E5E7EB] dark:border-[#374151] hover:border-[#2D5A3D] dark:hover:border-[#6B9B7A] transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src="/images/marshmellow/marshmellow-thinking6.png"
                alt="MarshMellow thinking"
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-[#2D2D2D] dark:text-white">Conservation Status Guide</span>
            </div>
            <ChevronRight size={20} className="text-[#9CA3AF]" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* About The Ribbit Report */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          About The Ribbit Report
        </h2>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            <span className="font-semibold text-[#2D5A3D] dark:text-[#6B9B7A]">The Ribbit Report</span> is a free educational app from the Amphibian Survival Alliance (ASA), designed to connect kids ages 9-12 with the amazing world of amphibians and the conservationists working to protect them.
          </p>
          <p>
            Through <span className="font-medium">Dispatches from the Field</span>, you'll meet real conservationists from the Future Leaders of Amphibian Conservation program. Through <span className="font-medium">Wild Decisions</span> and <span className="font-medium">Myth Busters</span>, you'll learn to think like a conservationist. And through <span className="font-medium">The Real Story</span>, you'll dig into the science behind what makes amphibians so extraordinary.
          </p>
          <p>
            Amphibians have been on Earth for over 300 million years. Today, frogs, toads, salamanders, newts, and caecilians are among the most threatened animals on the planet. More than 40% of species are at risk of extinction. But there's hope. Scientists, communities, and young people around the world are working together to protect them.
          </p>
          <p>
            That's what The Ribbit Report is about: <span className="font-medium">real stories, real science, real hope.</span>
          </p>
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            New content is added regularly. The app is free and always will be.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* About ASA */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          About the Amphibian Survival Alliance
        </h2>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            The <span className="font-semibold text-[#2D5A3D] dark:text-[#6B9B7A]">Amphibian Survival Alliance</span> is a global partnership working to save amphibians and their habitats. We coordinate conservation efforts, support field research, and inspire the next generation of amphibian champions.
          </p>
          <p>
            Our <span className="font-medium">Future Leaders of Amphibian Conservation</span> program supports early-career conservationists from around the world. Many of the people you'll meet in The Ribbit Report are Future Leaders, doing incredible work in their home countries.
          </p>
          <a
            href="https://www.amphibians.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#2D5A3D] dark:text-[#6B9B7A] font-medium hover:underline"
          >
            Learn more at amphibians.org
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* Support Our Work */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          Support Our Work
        </h2>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            The Ribbit Report is made possible by donors who believe in conservation education. If you'd like to help us create more content and support more conservationists:
          </p>

          <a
            href="https://www.amphibians.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2D5A3D] hover:bg-[#234A31] text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Donate to the ASA
            <ExternalLink size={16} />
          </a>

          <div className="pt-2">
            <p className="font-medium text-[#2D2D2D] dark:text-white mb-2">Follow us:</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/amphibiansurvivalalliance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2D5A3D] dark:text-[#6B9B7A] hover:underline"
              >
                Instagram: @amphibiansurvivalalliance
                <ExternalLink size={12} />
              </a>
              <a
                href="https://twitter.com/amphibiansorg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2D5A3D] dark:text-[#6B9B7A] hover:underline"
              >
                X/Twitter: @amphibiansorg
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* Credits */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          Credits
        </h2>
        <div className="space-y-3 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3]">
          <div>
            <p className="font-medium text-[#2D2D2D] dark:text-white">App Development</p>
            <p>Candace M. Hansen, ASA Programs Director</p>
          </div>
          <div>
            <p className="font-medium text-[#2D2D2D] dark:text-white">Content & Editorial</p>
            <p>Amphibian Survival Alliance</p>
          </div>
          <div>
            <p className="font-medium text-[#2D2D2D] dark:text-white">MarshMellow Character Design</p>
            <p>Candace M. Hansen</p>
          </div>
          <div>
            <p className="font-medium text-[#2D2D2D] dark:text-white">Photography</p>
            <p>All photos are credited to their respective researchers and photographers within each Dispatch.</p>
          </div>
          <div>
            <p className="font-medium text-[#2D2D2D] dark:text-white">Special Thanks</p>
            <p>The ASA's Future Leaders of Amphibian Conservation program, who shared their stories, photos, and passion for the launch!</p>
          </div>
        </div>
      </section>

      {/* Version & Copyright */}
      <div className="text-center space-y-2 pt-4">
        <p className="text-[13px] text-[#808080] dark:text-[#808080]">
          Version 1.0.0
        </p>
        <p className="text-[13px] text-[#808080] dark:text-[#808080]">
          © 2025 Amphibian Survival Alliance
        </p>
      </div>
    </div>
  );
}
