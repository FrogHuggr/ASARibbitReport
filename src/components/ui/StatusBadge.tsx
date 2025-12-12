interface StatusBadgeProps {
  status: 'CR' | 'EN' | 'VU' | 'NT' | 'LC';
  label: string;
}

const statusColors: Record<string, string> = {
  CR: '#D32F2F',
  EN: '#F57C00',
  VU: '#FBC02D',
  NT: '#7CB342',
  LC: '#43A047',
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-sm font-semibold"
      style={{ backgroundColor: statusColors[status] }}
    >
      {(status === 'CR' || status === 'EN') && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      )}
      {label}
    </span>
  );
}
