interface PrincipleStackProps {
  lines: string[];
  theme: 'light' | 'dark';
  dividers?: boolean;
}

export default function PrincipleStack({ lines, theme, dividers = false }: PrincipleStackProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#0A1628]';
  const dividerColor = theme === 'dark'
    ? 'border-[rgba(255,255,255,0.1)]'
    : 'border-[rgba(10,22,40,0.08)]';

  return (
    <div className="flex flex-col">
      {lines.map((line, i) => (
        <div key={i}>
          {dividers && i > 0 && (
            <div className={`border-t ${dividerColor}`} />
          )}
          <p
            className={`text-[17px] max-sm:text-[15px] font-semibold leading-[1.65] ${textColor} py-10`}
          >
            {line}
          </p>
        </div>
      ))}
    </div>
  );
}
