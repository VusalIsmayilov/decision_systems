interface AtomicTextProps {
  lines: string[];
  variant: 'stack' | 'flow' | 'emphasis';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
}

const gapMap = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-10',
};

export default function AtomicText({ lines, variant, gap = 'md', theme = 'light' }: AtomicTextProps) {
  const primaryText = theme === 'dark' ? 'text-white' : 'text-[#0A1628]';
  const secondaryText = theme === 'dark' ? 'text-[rgba(255,255,255,0.55)]' : 'text-[#5A6478]';

  if (variant === 'stack') {
    return (
      <div className={`flex flex-col ${gapMap[gap]}`}>
        {lines.map((line, i) => (
          <p key={i} className={`text-[17px] max-sm:text-[15px] font-400 leading-[1.65] ${primaryText}`}>
            {line}
          </p>
        ))}
      </div>
    );
  }

  if (variant === 'emphasis') {
    return (
      <div className={`flex flex-col ${gapMap[gap]}`}>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`leading-[1.65] ${
              i === 0
                ? `text-[20px] max-sm:text-[17px] font-semibold ${primaryText}`
                : `text-[17px] max-sm:text-[15px] font-normal ${secondaryText}`
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    );
  }

  // flow
  return (
    <p className={`text-[17px] max-sm:text-[15px] leading-[1.65] ${primaryText}`}>
      {lines.join(' ')}
    </p>
  );
}
