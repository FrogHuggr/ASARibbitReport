import { Link } from 'react-router-dom';
import type { Dispatch } from '../../data/dispatches';

interface DispatchCardProps {
  dispatch: Dispatch;
}

const countryFlags: Record<string, string> = {
  IN: '🇮🇳',
  PA: '🇵🇦',
  PE: '🇵🇪',
  AR: '🇦🇷',
  NP: '🇳🇵',
};

export function DispatchCard({ dispatch }: DispatchCardProps) {
  const flag = countryFlags[dispatch.countryCode] || '🌍';
  const hasImage = !!dispatch.heroImage;

  return (
    <Link
      to={`/dispatches/${dispatch.id}`}
      className="flex-shrink-0 w-44 group"
    >
      <div
        className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md transition-all duration-200 group-hover:shadow-lg group-hover:scale-[1.02]"
        style={{
          background: hasImage
            ? undefined
            : `linear-gradient(135deg, ${dispatch.palette.primary} 0%, ${dispatch.palette.secondary} 100%)`,
        }}
      >
        {/* Hero image or gradient fallback */}
        {hasImage ? (
          <img
            src={dispatch.heroImage}
            alt={dispatch.commonName}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">🐸</div>
          </div>
        )}

        {/* Country stamp */}
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold text-white uppercase"
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {flag} {dispatch.countryCode}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white font-display font-bold text-base leading-tight">
            {dispatch.region}
          </p>
          <p className="text-white/80 text-sm">
            {dispatch.country}
          </p>
        </div>
      </div>
    </Link>
  );
}
