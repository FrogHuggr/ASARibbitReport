import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

export function NotFound() {
  const handleClick = () => {
    triggerHaptic('light');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-8">
      {/* Lost in the wild header */}
      <div className="text-center mb-6">
        <h1 className="font-display text-6xl font-bold text-[#2D5A3D] dark:text-[#8FBC8F]">
          404
        </h1>
        <p className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mt-2">
          Lost in the Wild!
        </p>
      </div>

      {/* MarshMellow lost with maps */}
      <div className="relative w-64 h-64 mb-6">
        {/* Decorative question marks floating around */}
        <div className="absolute -top-2 -left-4 text-[#2D5A3D]/30 dark:text-[#8FBC8F]/30 text-3xl font-bold animate-bounce" style={{ animationDelay: '0s' }}>?</div>
        <div className="absolute top-4 -right-2 text-[#2D5A3D]/20 dark:text-[#8FBC8F]/20 text-2xl font-bold animate-bounce" style={{ animationDelay: '0.3s' }}>?</div>
        <div className="absolute bottom-8 -left-6 text-[#2D5A3D]/25 dark:text-[#8FBC8F]/25 text-xl font-bold animate-bounce" style={{ animationDelay: '0.6s' }}>?</div>

        <img
          src="/images/marshmellow/marshmellow-lost.png"
          alt="MarshMellow looking lost with maps"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Message */}
      <div className="mb-8 px-4" style={{ maxWidth: '320px', width: '100%' }}>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed text-center">
          Hmm, this trail doesn't seem to lead anywhere! Even MarshMellow can't find this page on his maps.
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          onClick={handleClick}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2D5A3D] hover:bg-[#234A31] text-white rounded-full font-medium transition-colors active:scale-95"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>

        <Link
          to="/explore"
          onClick={handleClick}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F3F4F6] dark:bg-[#374151] hover:bg-[#E5E7EB] dark:hover:bg-[#4B5563] text-[#4B5563] dark:text-[#D1D5DB] rounded-full font-medium transition-colors active:scale-95"
        >
          <Compass size={18} />
          <span>Explore</span>
        </Link>
      </div>

      {/* Fun footer message */}
      <p className="text-[#9CA3AF] dark:text-[#6B7280] text-xs mt-8 text-center">
        Don't worry, no frogs were harmed in the making of this 404.
      </p>
    </div>
  );
}
