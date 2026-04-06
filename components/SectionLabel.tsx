interface SectionLabelProps {
  text: string;
  theme: 'light' | 'dark';
}

export default function SectionLabel({ text, theme }: SectionLabelProps) {
  const color = theme === 'dark'
    ? 'text-[rgba(255,255,255,0.55)]'
    : 'text-[#5A6478]';

  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.3] mb-10 ${color}`}
    >
      {text}
    </p>
  );
}
