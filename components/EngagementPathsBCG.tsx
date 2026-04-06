"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const paths = [
  { n: "01", text: "a direction gap,",                    color: "rgba(255,255,255,0.92)", weight: 500 },
  { n: "02", text: "a control gap,",                      color: "rgba(255,255,255,0.68)", weight: 400 },
  { n: "03", text: "or an execution alignment gap.",       color: "rgba(255,255,255,0.48)", weight: 400 },
];

export default function EngagementPathsBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0a1628",
        display: "grid",
        gridTemplateColumns: "160px 640px 360px",
        columnGap: "140px",
        paddingLeft: "160px",
        paddingRight: "160px",
        paddingTop: "120px",
        paddingBottom: "140px",
        alignItems: "start",
      }}
    >

      {/* ── Column 1 — Structural index ── */}
      <motion.div
        className="hidden md:block"
        style={{ alignSelf: "start" }}
        {...fade(0)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.55)", lineHeight: 1, marginBottom: "6px" }}>08</p>
        <p style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", lineHeight: 1 }}>PATHS</p>
        <div style={{ width: "1px", height: "270px", background: "rgba(255,255,255,0.14)", marginTop: "8px" }} />
      </motion.div>

      {/* ── Column 2 — Starting-point field ── */}
      <div>

        {/* Dominant headline */}
        <motion.p
          style={{
            fontSize: "56px",
            fontWeight: 600,
            lineHeight: 1.04,
            color: "rgba(255,255,255,0.96)",
            maxWidth: "620px",
            marginBottom: "44px",
          }}
          {...fade(0.06)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Organizations enter from different starting points.
        </motion.p>

        {/*
          Path list — three distinct entry conditions.
          3-column row: marker / number / text.
          Hierarchy descends by opacity — same structure, different weight.
        */}
        <motion.div
          style={{ display: "grid", rowGap: "22px", marginBottom: "46px", maxWidth: "420px" }}
          {...fade(0.16)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {paths.map((path) => (
            <div
              key={path.n}
              style={{
                display: "grid",
                gridTemplateColumns: "18px 28px 1fr",
                columnGap: "22px",
                alignItems: "start",
              }}
            >
              {/* Marker square */}
              <div style={{
                width: "6px",
                height: "6px",
                background: "rgba(255,255,255,0.70)",
                marginTop: "9px",
              }} />

              {/* Path number */}
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", lineHeight: 1.6 }}>
                {path.n}
              </p>

              {/* Path text */}
              <p style={{ fontSize: "17px", fontWeight: path.weight, lineHeight: 1.6, color: path.color }}>
                {path.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/*
          Entry conclusion — sits under the path list as the center column resolution.
          Border-top separates it from the path list above.
          Kicker (muted) → title (strong): different starts → same destination.
        */}
        <motion.div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "22px",
            maxWidth: "420px",
          }}
          {...fade(0.28)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.40)",
            marginBottom: "10px",
          }}>
            The entry point differs.
          </p>
          <p style={{
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: 1.14,
            color: "rgba(255,255,255,0.96)",
          }}>
            The destination does not.
          </p>
        </motion.div>

      </div>

      {/* ── Column 3 — Convergence field ── */}
      {/*
        padding-top: 58px offsets it below the headline —
        it appears after the entry conditions are established, not beside them.
        Contains only the convergence statement — no supporting text.
      */}
      <motion.div
        className="hidden md:block"
        style={{ paddingTop: "58px", maxWidth: "340px" }}
        {...fade(0.36)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        {/* Anchor rule */}
        <div style={{ width: "52px", height: "1px", background: "rgba(255,255,255,0.18)", marginBottom: "18px" }} />

        {/* Convergence statement — the system-level answer */}
        <p style={{
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: 1.18,
          color: "rgba(255,255,255,0.94)",
        }}>
          All paths converge into a single controlled system.
        </p>
      </motion.div>

    </section>
  );
}
