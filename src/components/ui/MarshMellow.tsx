interface MarshMellowProps {
  message: string;
  pose?: 'wave' | 'reading' | 'explorer' | 'thinking' | 'celebrating' | 'searching';
}

const poseImages: Record<string, string> = {
  wave: '/images/marshmellow/marshmellow-wave.png',
  reading: '/images/marshmellow/marshmellow-reading.png',
  explorer: '/images/marshmellow/marshmellow-explorer.png',
  thinking: '/images/marshmellow/marshmellow-thinking.png',
  celebrating: '/images/marshmellow/marshmellow-celebrating.png',
  searching: '/images/marshmellow/marshmellow-searching.png',
};

export function MarshMellow({ message, pose = 'wave' }: MarshMellowProps) {
  return (
    <div className="bg-[#E8F5E9] dark:bg-[#1B3B2F] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-center">
      {/* MarshMellow character */}
      <div className="flex-shrink-0 w-28 h-28">
        <img
          src={poseImages[pose]}
          alt={`MarshMellow ${pose}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Message */}
      <div className="flex-1 text-center sm:text-left">
        <p className="font-display text-lg font-semibold text-[#2D5A3D] dark:text-[#81C784] mb-1">
          Hey there, explorer!
        </p>
        <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
          {message}
        </p>
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2 italic">
          — MarshMellow
        </p>
      </div>
    </div>
  );
}
