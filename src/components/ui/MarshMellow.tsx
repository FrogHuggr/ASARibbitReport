interface MarshMellowProps {
  message: string;
}

export function MarshMellow({ message }: MarshMellowProps) {
  return (
    <div className="bg-[#E8F5E9] dark:bg-[#1B3B2F] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-center">
      {/* MarshMellow character - simple friendly frog */}
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#81C784] flex items-center justify-center text-5xl shadow-md">
        🐸
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
