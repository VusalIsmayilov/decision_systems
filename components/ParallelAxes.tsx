interface ParallelAxesProps {
  columns: React.ReactNode[];
  theme: 'light' | 'dark';
}

export default function ParallelAxes({ columns, theme }: ParallelAxesProps) {
  const borderColor = theme === 'dark'
    ? 'border-[rgba(255,255,255,0.1)]'
    : 'border-[rgba(10,22,40,0.08)]';

  const colCount = columns.length;
  const gridClass =
    colCount === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : colCount === 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`grid ${gridClass} gap-0`}>
      {columns.map((col, i) => (
        <div
          key={i}
          className={`border-l ${borderColor} pl-6 py-6`}
        >
          {col}
        </div>
      ))}
    </div>
  );
}
