interface AsymmetricSplitProps {
  label: React.ReactNode;
  content: React.ReactNode;
  ratio?: '30-70' | '40-60';
  reverse?: boolean;
  theme: 'light' | 'dark';
  className?: string;
}

export default function AsymmetricSplit({
  label,
  content,
  ratio = '30-70',
  reverse = false,
  theme,
  className = '',
}: AsymmetricSplitProps) {
  const gridCols = ratio === '40-60'
    ? 'md:grid-cols-[2fr_3fr]'
    : 'md:grid-cols-[3fr_7fr]';

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-10 md:gap-16 ${reverse ? 'direction-rtl' : ''} ${className}`}>
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        {label}
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        {content}
      </div>
    </div>
  );
}
