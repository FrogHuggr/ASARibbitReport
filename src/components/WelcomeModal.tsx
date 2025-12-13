import { useState, useEffect } from 'react';
import { X, Share, Plus, MoreVertical, Sparkles } from 'lucide-react';

const WELCOME_SHOWN_KEY = 'ribbit-welcome-shown';

// Detect device type
function getDeviceType(): 'ios' | 'android' | 'desktop' {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) {
    return 'ios';
  } else if (/android/.test(ua)) {
    return 'android';
  }
  return 'desktop';
}

// Check if running as installed PWA
function isInstalledPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches
    || (window.navigator as { standalone?: boolean }).standalone === true;
}

export function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [device] = useState(getDeviceType);

  useEffect(() => {
    // Don't show if already installed as PWA
    if (isInstalledPWA()) return;

    // Don't show if already seen
    const hasSeenWelcome = localStorage.getItem(WELCOME_SHOWN_KEY);
    if (hasSeenWelcome) return;

    // Show modal after a brief delay for smoother experience
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(WELCOME_SHOWN_KEY, 'true');
  };

  const handleExplore = () => {
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[100] animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white dark:bg-[#242424] rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm pointer-events-auto animate-fade-in relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-2 text-[#9CA3AF] hover:text-[#6B7280] dark:hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* MarshMellow header */}
          <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] dark:from-[#1B3D2F] dark:to-[#2D5A3D] pt-6 pb-4 px-6 text-center relative overflow-hidden">
            {/* Decorative bubbles */}
            <div className="absolute top-2 left-4 w-3 h-3 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-4 left-8 w-2 h-2 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: '0.8s' }} />

            <img
              src="/images/marshmellow/marshmellow-wave.png"
              alt="MarshMellow waving hello"
              className="w-28 h-28 mx-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={18} className="text-[#FFB300]" />
              <h2 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
                Welcome!
              </h2>
              <Sparkles size={18} className="text-[#FFB300]" />
            </div>

            <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-4">
              I'm <span className="font-bold text-[#2D5A3D] dark:text-[#81C784]">MarshMellow</span>, your guide to the amazing world of frogs, toads, and salamanders!
            </p>

            {/* Install tip - device specific */}
            {device !== 'desktop' && (
              <div className="bg-[#FFF8E1] dark:bg-[#3D3520] rounded-xl p-4 mb-4 text-left">
                <p className="text-sm font-medium text-[#F57C00] dark:text-[#FFB74D] mb-2">
                  Pro tip: Install me as an app!
                </p>
                {device === 'ios' && (
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    Tap <Share size={12} className="inline mx-0.5 text-[#007AFF]" /> then <span className="font-medium">"Add to Home Screen"</span> <Plus size={10} className="inline mx-0.5" />
                  </p>
                )}
                {device === 'android' && (
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    Tap <MoreVertical size={12} className="inline mx-0.5" /> then <span className="font-medium">"Add to Home screen"</span>
                  </p>
                )}
              </div>
            )}

            {device === 'desktop' && (
              <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280] mb-4">
                Visit on your phone for the best experience!
              </p>
            )}

            {/* CTA Button */}
            <button
              onClick={handleExplore}
              className="w-full py-3 px-6 bg-[#2D5A3D] hover:bg-[#234A31] text-white font-bold rounded-full transition-colors active:scale-95"
            >
              Let's Explore!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

