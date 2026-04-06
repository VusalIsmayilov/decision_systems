"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const phases = [
  { n: "01", text: "Direction is made explicit.",               color: "rgba(255,255,255,0.96)", weight: 500 },
  { n: "02", text: "Structure is established to support it.",  color: "rgba(255,255,255,0.76)", weight: 400 },
  { n: "03", text: "Execution operates within that structure.", color: "rgba(255,255,255,0.50)", weight: 400 },
];

export default function PhasesBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0a1628",
        paddingTop: "120px",
        paddingBottom: "140px",
        paddingLeft: "160px",
        paddingRight: "160px",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", columnGap: "140px", alignItems: "start" }}>

        {/* ── Column 1 — Section index (quieter) ── */}
        <motion.div
          className="hidden md:block"
          style={{ alignSelf: "start" }}
          {...fade(0)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.36)", lineHeight: 1, marginBottom: "14px" }}>
            03&nbsp;&nbsp;Phases
          </p>
          <p style={{ fontSize: "28px", fontWeight: 500, lineHeight: 1.08, color: "rgba(255,255,255,0.88)", marginBottom: "26px", maxWidth: "180px" }}>
            Phase Breakdown
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(255,255,255,0.42)", maxWidth: "210px" }}>
            The system is established through a defined progression.
          </p>
          {/* Vertical spine under label block */}
          <div style={{ width: "1px", height: "220px", background: "rgba(255,255,255,0.14)", marginTop: "30px" }} />
        </motion.div>

        {/* ── Column 2 — Phase model (main content field) ── */}
        {/*
          margin-left: -40px pulls column left to create better relation with section index.
          max-width: 760px keeps the content field disciplined.
          All child elements align to the same left axis.
        */}
        <div style={{ marginLeft: "-40px", maxWidth: "760px" }}>

          {/*
            Phase progression block — top structural mechanism of the section.
            margin-top: 18px separates it slightly from top edge.
            margin-bottom: 84px creates deliberate space before main statement.
            padding-left: 64px: reserves space for spine (at left:18px) + marker (at left:-45px from item) + number column.
            Continuous vertical line spans full block height.
          */}
          <motion.div
            style={{
              position: "relative",
              paddingLeft: "64px",
              marginTop: "18px",
              marginBottom: "84px",
            }}
            {...fade(0.1)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            {/* Single continuous progression line */}
            <div style={{
              position: "absolute",
              left: "18px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: "rgba(255,255,255,0.18)",
            }} />

            {/* Phase items */}
            {phases.map((phase, i) => (
              <div
                key={phase.n}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "32px 1fr",
                  columnGap: "18px",
                  alignItems: "start",
                  maxWidth: "520px",
                  marginBottom: i < phases.length - 1 ? "34px" : "0",
                }}
              >
                {/* Square marker on the progression line */}
                <div style={{
                  position: "absolute",
                  left: "-45px",
                  top: "10px",
                  width: "7px",
                  height: "7px",
                  background: i === 0 ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.22)",
                }} />

                {/* Phase number */}
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: 1.5, paddingTop: "2px", width: "28px" }}>
                  {phase.n}
                </p>

                {/* Phase text */}
                <p style={{ fontSize: "20px", fontWeight: phase.weight, lineHeight: 1.35, color: phase.color }}>
                  {phase.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Main statement — visual anchor of the section */}
          <motion.p
            style={{
              fontSize: "34px",
              fontWeight: 500,
              lineHeight: 1.16,
              color: "rgba(255,255,255,0.92)",
              maxWidth: "560px",
              marginTop: "-8px",
              marginBottom: "24px",
            }}
            {...fade(0.22)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            The system then stabilizes into consistent operation.
          </motion.p>

          {/* Supporting text — reduced presence */}
          <motion.div
            {...fade(0.30)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(255,255,255,0.42)", maxWidth: "360px", marginBottom: "8px" }}>
              Each phase builds on the previous one.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(255,255,255,0.42)", maxWidth: "360px" }}>
              No phase stands alone.
            </p>
          </motion.div>

          {/* Structural divider — fixed width, aligned to content left edge */}
          <motion.div
            style={{ width: "680px", height: "1px", background: "rgba(255,255,255,0.14)", margin: "42px 0 28px 0" }}
            {...fade(0.36)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          />

          {/* Enforcement line — closes section with authority */}
          <motion.p
            style={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.86)",
              maxWidth: "620px",
            }}
            {...fade(0.44)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            Control is established progressively—until the system operates as one.
          </motion.p>

        </div>

      </div>
    </section>
  );
}
