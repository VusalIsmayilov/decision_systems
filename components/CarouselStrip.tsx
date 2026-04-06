"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const CARD_W = 300;
const GAP = 12;
const STEP = CARD_W + GAP; // 312px per slot
const AUTO_MS = 4500;
const DRAG_THRESHOLD = 50; // px — minimum drag to trigger a step
const RESUME_AFTER = 8000; // ms — resume auto-advance after manual interaction

const SOURCE = [
  {
    label: "Decision-making",
    statement: "Reports do not create value — decisions do",
    support: "Why organizations stop at insight",
  },
  {
    label: "Decision clarity",
    statement: "Undefined decisions create endless analysis",
    support: "Why ambiguity generates noise instead of action",
  },
  {
    label: "Alignment",
    statement: "Alignment meetings replace alignment systems",
    support: "Why coordination fails without structure",
  },
  {
    label: "Ownership",
    statement: "Multiple owners mean no owner",
    support: "How shared responsibility removes control",
  },
  {
    label: "Metrics",
    statement: "Metrics track activity, not decisions",
    support: "Why measurement does not equal control",
  },
  {
    label: "Data culture",
    statement: "Data exists. Decisions don't change",
    support: "Systems fail without structure",
  },
  {
    label: "Transformation",
    statement: "Capability built is not capability adopted",
    support: "Why implementation alone is not enough",
  },
  {
    label: "AI readiness",
    statement: "AI amplifies broken decision systems",
    support: "Why automation fails without structure",
  },
];

const N = SOURCE.length; // 8
const CARDS = [...SOURCE, ...SOURCE, ...SOURCE]; // 18 cards, indices 0–17
const START = N; // 6

function cardScale(dist: number): number {
  if (dist === 0) return 1.02;
  if (dist === 1) return 0.9;
  return 0.8;
}

function cardOpacity(dist: number): number {
  if (dist === 0) return 1.0;
  if (dist === 1) return 0.65;
  return 0.38;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CarouselStrip() {
  const [activeIdx, setActiveIdx] = useState(START);
  const [animated, setAnimated] = useState(true);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const idxRef = useRef(START);
  const jumping = useRef(false);
  const paused = useRef(false);
  const dragStartX = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const viewportRef = useRef<HTMLDivElement>(null);
  const [vpW, setVpW] = useState(1300);

  // Measure viewport width
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setVpW(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Computed track position ──────────────────────────────────────────────────
  const baseOffset = Math.round(-activeIdx * STEP + vpW / 2 - CARD_W / 2);
  const trackTransform = `translateX(${baseOffset + dragDelta}px)`;
  // Disable transition while dragging or during a silent loop-jump
  const trackTransition =
    animated && dragDelta === 0
      ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "none";

  // ── Schedule auto-advance resume after manual interaction ────────────────────
  const scheduleResume = useCallback(() => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, RESUME_AFTER);
  }, []);

  // ── Step one card in direction +1 (next) or -1 (prev) ───────────────────────
  const step = useCallback(
    (dir: 1 | -1) => {
      if (jumping.current) return;
      scheduleResume();
      const next = idxRef.current + dir;
      idxRef.current = next;
      setActiveIdx(next);
    },
    [scheduleResume]
  );

  // ── Silent loop-jump (no visible transition) ─────────────────────────────────
  const jumpTo = useCallback((to: number) => {
    jumping.current = true;
    idxRef.current = to;
    setAnimated(false);
    setActiveIdx(to);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setAnimated(true);
        jumping.current = false;
      })
    );
  }, []);

  // ── Transition-end: check loop boundaries ────────────────────────────────────
  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
      if (jumping.current) return;
      const cur = idxRef.current;
      if (cur >= N * 2) jumpTo(cur - N);
      else if (cur < N) jumpTo(cur + N);
    },
    [jumpTo]
  );

  // ── Auto-advance ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      if (jumping.current || paused.current) return;
      const next = idxRef.current + 1;
      idxRef.current = next;
      setActiveIdx(next);
    }, AUTO_MS);
    return () => clearInterval(timer);
  }, []);

  // ── Drag helpers ─────────────────────────────────────────────────────────────
  const startDrag = (clientX: number) => {
    dragStartX.current = clientX;
    setIsDragging(true);
    paused.current = true; // pause auto during drag
  };

  const moveDrag = (clientX: number) => {
    if (dragStartX.current === null) return;
    setDragDelta(clientX - dragStartX.current);
  };

  const endDrag = (clientX: number) => {
    if (dragStartX.current === null) return;
    const delta = clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);
    setDragDelta(0); // snap back / snap forward (transition re-enabled by dragDelta === 0)
    if (delta < -DRAG_THRESHOLD) step(1);
    else if (delta > DRAG_THRESHOLD) step(-1);
    else scheduleResume(); // no step, just resume
  };

  const cancelDrag = () => {
    if (dragStartX.current === null) return;
    dragStartX.current = null;
    setIsDragging(false);
    setDragDelta(0);
    scheduleResume();
  };

  // ── Mouse handlers ───────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => startDrag(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current !== null) moveDrag(e.clientX);
  };
  const onMouseUp = (e: React.MouseEvent) => endDrag(e.clientX);
  const onMouseLeave = () => cancelDrag();

  // ── Touch handlers ───────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => moveDrag(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) =>
    endDrag(e.changedTouches[0].clientX);

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="relative group">
      {/* Prev arrow — hidden until hover */}
      <button
        onClick={() => step(-1)}
        aria-label="Previous card"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full border border-[rgba(10,22,40,0.1)] bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ width: 28, height: 28 }}
      >
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="rgba(10,22,40,0.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 2L4 7l5 5" />
        </svg>
      </button>

      {/* Next arrow — hidden until hover */}
      <button
        onClick={() => step(1)}
        aria-label="Next card"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full border border-[rgba(10,22,40,0.1)] bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ width: 28, height: 28 }}
      >
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="rgba(10,22,40,0.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 2l5 5-5 5" />
        </svg>
      </button>

      {/* Carousel viewport */}
      <div
        ref={viewportRef}
        className="overflow-hidden w-full select-none"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Track */}
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: trackTransform,
            transition: trackTransition,
            willChange: "transform",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {CARDS.map((card, i) => {
            const dist = Math.abs(i - activeIdx);
            const scale = cardScale(dist);
            const opacity = cardOpacity(dist);
            const isCenter = dist === 0;

            return (
              <div
                key={i}
                aria-hidden={!isCenter}
                style={{
                  width: `${CARD_W}px`,
                  flexShrink: 0,
                  transform: `scale(${scale})`,
                  opacity,
                  transition:
                    "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease",
                  transformOrigin: "center center",
                  pointerEvents: isDragging ? "none" : "auto",
                }}
              >
                <div
                  className="rounded-lg flex flex-col bg-white"
                  style={{
                    border: isCenter
                      ? "1px solid rgba(10,22,40,0.18)"
                      : "1px solid rgba(10,22,40,0.06)",
                    padding: isCenter ? "32px" : "24px",
                    minHeight: "370px",
                  }}
                >
                  {/* Title — pinned to top */}
                  <span
                    className="font-bold uppercase tracking-[0.1em] block flex-shrink-0"
                    style={{
                      fontSize: "10px",
                      color: "rgba(10,22,40,0.3)",
                    }}
                  >
                    {card.label}
                  </span>

                  {/* Statement + support — vertically centered in remaining space */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p
                      className="font-semibold text-navy"
                      style={{
                        fontSize: isCenter ? "18px" : "16px",
                        lineHeight: 1.24,
                        marginBottom: "30px",
                      }}
                    >
                      {card.statement}
                    </p>

                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.5,
                        color: "rgba(10,22,40,0.52)",
                      }}
                    >
                      {card.support}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
