interface CountryStampProps {
  country: string;
  primaryColor: string;
  rotation?: number;
}

export function CountryStamp({ country, primaryColor, rotation = 3 }: CountryStampProps) {
  return (
    <div
      className="inline-block px-3 py-1.5 rounded font-display font-bold text-sm text-white uppercase tracking-wide"
      style={{
        backgroundColor: primaryColor,
        transform: `rotate(${rotation}deg)`,
        boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      {country}
    </div>
  );
}
