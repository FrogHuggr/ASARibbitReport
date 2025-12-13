import { useTheme } from '../context/ThemeContext';

export function Settings() {
  const { isDark, toggleDark } = useTheme();

  return (
    <div className="container-app px-4 py-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          Settings
        </h1>
      </header>

      {/* Appearance Toggle */}
      <div className="card mb-6">
        <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-4">
          Appearance
        </h2>
        <div className="flex items-center justify-between">
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
            className={`relative w-14 h-8 rounded-full transition-colors ${
              !isDark ? 'bg-[#2D5A3D]' : 'bg-[#404040]'
            }`}
            aria-label="Toggle light mode"
          >
            <span
              className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                !isDark ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* About Section */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          About
        </h2>
        <div className="space-y-4 text-[#2D2D2D] dark:text-[#E5E5E5]">
          <p>
            <strong>The Ribbit Report</strong> is a digital magazine created by the{' '}
            <span className="text-[#2D5A3D] dark:text-[#81C784] font-semibold">
              Amphibian Survival Alliance
            </span>{' '}
            to inspire the next generation of amphibian conservationists.
          </p>
          <p>
            Each issue features field reports from researchers around the world, fun facts
            about amazing frog species, and interactive content to help you learn about
            amphibian conservation.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          Contact
        </h2>
        <p className="text-[#2D2D2D] dark:text-[#E5E5E5] mb-3">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <a
          href="mailto:ribbitreport@amphibians.org"
          className="inline-flex items-center gap-2 text-[#2D5A3D] dark:text-[#81C784] font-semibold hover:underline"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          ribbitreport@amphibians.org
        </a>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

      {/* Credits */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          Credits
        </h2>
        <div className="space-y-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
          <p>
            <strong>Mascot:</strong> MarshMellow the Frog
          </p>
          <p>
            <strong>Content:</strong> Amphibian Survival Alliance Research Team
          </p>
          <p>
            <strong>Design:</strong> Built with care for young explorers
          </p>
        </div>
      </section>

      {/* App Version */}
      <div className="text-center text-sm text-[#6B7280] dark:text-[#9CA3AF]">
        Version 1.0.0
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-[#9CA3AF] dark:text-[#6B7280] mt-4">
        © 2025 Amphibian Survival Alliance
      </div>
    </div>
  );
}
