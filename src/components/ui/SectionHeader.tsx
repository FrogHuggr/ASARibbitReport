interface SectionHeaderProps {
  title: string;
  color?: string;
}

export function SectionHeader({ title, color = '#2D2D2D' }: SectionHeaderProps) {
  return (
    <h2
      className="font-display text-2xl font-bold mb-4"
      style={{ color }}
    >
      {title}
    </h2>
  );
}
