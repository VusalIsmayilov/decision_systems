/*
 * Strip uses the full page canvas width — same max-width as other page sections.
 * Centered via mx-auto.
 *
 * IMPORTANT: padding is applied as LEFT-ONLY to the flex track.
 * Applying symmetric px-* to a width:max-content flex inside overflow-x-auto
 * causes the browser to collapse the right padding — last cards appear clipped.
 * Right breathing room is achieved with a trailing flex spacer div instead.
 */
const STRIP_CONTAINER = "mx-auto w-full max-w-[1280px]";
const STRIP_LABEL_PAD = "px-5 md:px-10";
const STRIP_TRACK_PL = "pl-5 md:pl-10";

const cards = [
  {
    label: "Decision-making",
    statement: "Reports do not create value — decisions do",
    support: "Why organizations stop at insight",
  },
  {
    label: "Data culture",
    statement: "Data exists. Decisions don't change",
    support: "Systems fail without structure",
  },
  {
    label: "AI readiness",
    statement: "AI initiatives fail before they start",
    support: "Missing prerequisites block execution",
  },
  {
    label: "Governance",
    statement: "Ownership without accountability is decoration",
    support: "How data functions lose control",
  },
  {
    label: "Architecture",
    statement: "Vendor-designed systems serve vendors",
    support: "Why internal control matters",
  },
];

export default function WorkStrip() {
  return (
    <div className={STRIP_CONTAINER}>
      {/* Section label */}
      <div className={`${STRIP_LABEL_PAD} mb-5`}>
        <p
          className="font-bold text-[rgba(10,22,40,0.32)] uppercase tracking-[0.14em]"
          style={{ fontSize: "11px" }}
        >
          From our work
        </p>
      </div>

      {/* Scroll container */}
      <div
        className="overflow-x-auto"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {/*
         * Left-only padding on the track: STRIP_TRACK_PL offsets the first card
         * from the container edge. No right padding class — trailing spacer div
         * handles right breathing room so the browser includes it in scroll width.
         */}
        <div className={`flex gap-4 ${STRIP_TRACK_PL} pb-2`} style={{ width: "max-content" }}>
          {cards.map((card, i) => {
            const featured = i === 0;
            return (
              <div
                key={i}
                className={`rounded-lg flex flex-col flex-shrink-0 ${
                  featured
                    ? "bg-[rgba(10,22,40,0.03)] border border-[rgba(10,22,40,0.13)] p-7"
                    : "bg-white border border-[rgba(10,22,40,0.08)] p-6"
                }`}
                style={{ width: featured ? "340px" : "284px" }}
              >
                {card.label && (
                  <span
                    className="font-bold text-[rgba(10,22,40,0.32)] uppercase tracking-[0.1em] mb-3"
                    style={{ fontSize: "10px" }}
                  >
                    {card.label}
                  </span>
                )}
                <p
                  className="text-navy leading-snug mb-2.5"
                  style={{
                    fontSize: featured ? "20px" : "17px",
                    fontWeight: featured ? 700 : 600,
                    lineHeight: 1.22,
                  }}
                >
                  {card.statement}
                </p>
                <p
                  className="text-[rgba(10,22,40,0.52)] leading-relaxed"
                  style={{ fontSize: "14px" }}
                >
                  {card.support}
                </p>
              </div>
            );
          })}
          {/* Trailing spacer — acts as right padding but is a flex child,
              so browsers correctly include it in the scrollable area */}
          <div className="w-5 shrink-0 md:w-10" />
        </div>
      </div>
    </div>
  );
}
