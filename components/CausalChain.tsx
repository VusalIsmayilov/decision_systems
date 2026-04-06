interface CausalChainProps {
  premise: React.ReactNode;
  mechanism: React.ReactNode;
  consequence: React.ReactNode;
  theme: 'light' | 'dark';
}

export default function CausalChain({ premise, mechanism, consequence, theme }: CausalChainProps) {
  const dividerColor = theme === 'dark'
    ? 'border-[rgba(255,255,255,0.1)]'
    : 'border-[rgba(10,22,40,0.08)]';
  const secondaryText = theme === 'dark'
    ? 'text-[rgba(255,255,255,0.55)]'
    : 'text-[#5A6478]';
  const primaryText = theme === 'dark' ? 'text-white' : 'text-[#0A1628]';

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-0">
      {/* Premise */}
      <div className={`md:border-r ${dividerColor} md:pr-10 pb-10 md:pb-0`}>
        <div className={`text-[15px] leading-[1.65] ${secondaryText}`}>
          {premise}
        </div>
      </div>

      {/* Mechanism — dominant */}
      <div className={`md:border-r ${dividerColor} md:px-10 pb-10 md:pb-0 border-t md:border-t-0 ${dividerColor} pt-10 md:pt-0`}>
        <div className={`text-[17px] max-sm:text-[15px] font-semibold leading-[1.65] ${primaryText}`}>
          {mechanism}
        </div>
      </div>

      {/* Consequence */}
      <div className={`md:pl-10 border-t md:border-t-0 ${dividerColor} pt-10 md:pt-0`}>
        <div className={`text-[15px] leading-[1.65] ${secondaryText}`}>
          {consequence}
        </div>
      </div>
    </div>
  );
}
