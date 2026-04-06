interface Step {
  number: string;
  text: string;
}

interface LinearProgressionProps {
  steps: Step[];
  theme: 'light' | 'dark';
}

export default function LinearProgression({ steps, theme }: LinearProgressionProps) {
  const numColor = theme === 'dark'
    ? 'text-[rgba(255,255,255,0.2)]'
    : 'text-[rgba(10,22,40,0.2)]';
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#0A1628]';
  const dividerColor = theme === 'dark'
    ? 'bg-[rgba(255,255,255,0.1)]'
    : 'bg-[rgba(10,22,40,0.1)]';

  return (
    <div className="flex flex-col md:flex-row gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex md:flex-col flex-1 items-start md:items-start gap-4">
          {/* Connector line (not on first) */}
          {i > 0 && (
            <div className={`hidden md:block w-full h-px ${dividerColor} mb-6`} />
          )}
          <div className="flex md:flex-col gap-4 md:gap-6 w-full">
            <span className={`text-[48px] font-light leading-none ${numColor} block min-w-[3rem]`}>
              {step.number}
            </span>
            <p className={`text-[17px] max-sm:text-[15px] font-semibold leading-[1.4] ${textColor} md:mt-4`}>
              {step.text}
            </p>
          </div>
          {/* Vertical connector on mobile */}
          {i < steps.length - 1 && (
            <div className={`md:hidden w-px h-8 ${dividerColor} ml-6 my-2`} />
          )}
        </div>
      ))}
    </div>
  );
}
