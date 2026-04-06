interface IndexedNarrativeProps {
  index: React.ReactNode;
  content: React.ReactNode;
  theme: 'light' | 'dark';
  /** Full grid utility string; defaults to `grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16` */
  layoutClassName?: string;
  /** Overrides default `pt-1` on the index column (e.g. `pt-0` to align content with the number top) */
  indexWrapperClassName?: string;
}

export default function IndexedNarrative({
  index,
  content,
  theme,
  layoutClassName,
  indexWrapperClassName,
}: IndexedNarrativeProps) {
  const secondaryText = theme === 'dark'
    ? 'text-[rgba(255,255,255,0.55)]'
    : 'text-[#5A6478]';

  const layout =
    layoutClassName ?? 'grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16';

  const indexPad = indexWrapperClassName ?? 'pt-1';

  return (
    <div className={layout}>
      <div className={`text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.3] ${indexPad} ${secondaryText}`}>
        {index}
      </div>
      <div>
        {content}
      </div>
    </div>
  );
}
