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

      {/* About The Ribbit Report */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          About The Ribbit Report
        </h2>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            The Ribbit Report is an educational app from the{' '}
            <span className="text-[#2D5A3D] dark:text-[#6B9B7A] font-medium">
              Amphibian Survival Alliance
            </span>
            , designed to connect kids ages 9-12 with the amazing world of amphibians and the scientists working to protect them.
          </p>
          <p>
            Through Dispatches from the Field, you'll meet real researchers from the Future Leaders of Amphibian Conservation program. Through Wild Decisions and Myth Busters, you'll learn to think like a conservationist.
          </p>
          <p>
            Amphibians — frogs, toads, salamanders, newts, and caecilians — are among the most threatened animals on Earth. More than 40% of amphibian species are at risk of extinction. But there's hope. Scientists, communities, and young people around the world are working together to protect them.
          </p>
          <p>
            The Ribbit Report is free and always will be. New content is added regularly.
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
            The Amphibian Survival Alliance (ASA) is a global partnership working to save amphibians and their habitats. We coordinate conservation efforts, support research, and inspire the next generation of amphibian champions.
          </p>
          <a
            href="https://www.amphibians.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#2D5A3D] dark:text-[#6B9B7A] font-medium hover:underline"
          >
            Learn more at amphibians.org
          </a>
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
