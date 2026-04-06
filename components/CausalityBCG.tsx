"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function CausalityBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} style={{ background: "#fff", paddingTop: "140px", paddingBottom: "140px" }}>
      <div style={{ maxWidth: "none", width: "100%", paddingLeft: "160px", paddingRight: "160px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 420px", columnGap: "80px", alignItems: "start" }}>

          {/* ── Column 1 — System index ── */}
          <motion.div
            className="hidden md:block"
            {...fade(0)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: 1, marginBottom: "8px" }}>02</p>
            <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", lineHeight: 1 }}>CAUSALITY</p>
            {/*
              Right-aligned via marginLeft:auto on a block div with explicit width.
              Pushes the spine to col1's right edge — adjacent to the gap,
              visually continuous with the sequence block border in col2.
              Height covers headline + sequence + 20px below = ~280px.
            */}
            <div style={{ width: "1px", height: "340px", background: "rgba(0,0,0,0.22)", marginTop: "16px", marginLeft: "96px" }} />
          </motion.div>

          {/* ── Column 2 — Fixed logic + sequence ── */}
          <div>

            {/*
              Headline shifted 80px left → left edge aligns with col1/col2 boundary.
              This anchors the headline under the section label, not floating in the center.
            */}
            <motion.h2
              style={{
                fontSize: "54px",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                color: "#111827",
                maxWidth: "560px",
                marginBottom: "24px",
                marginLeft: "-80px",
              }}
              {...fade(0.06)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              The system operates on a fixed logic.
            </motion.h2>

            {/*
              Sequence block — the PRIMARY system device.
              Left border serves as the section's inner spine.
              Increased opacity + spacing makes it read as ordered logic, not body text.
              marginTop reduced by 8px (40→32) to tighten headline→sequence rhythm.
            */}
            <motion.div
              style={{
                marginTop: "0",
                paddingLeft: "24px",
                borderLeft: "1px solid rgba(0,0,0,0.28)",
              }}
              {...fade(0.14)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.5, color: "#111", marginBottom: "16px" }}>
                Direction is defined first.
              </p>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5, color: "#444", marginBottom: "16px" }}>
                Structure is established to support it.
              </p>
              <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.5, color: "#777" }}>
                Execution operates within that structure.
              </p>
            </motion.div>

          </div>

          {/* ── Column 3 — Consequence field ── */}
          {/*
            Dropped 96px (56 + 40) — diagonal relationship with headline,
            not horizontal competition.
          */}
          <div className="hidden md:block" style={{ paddingTop: "56px" }}>

            {/* Block 1 — failure conditions */}
            <motion.div
              {...fade(0.22)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(0,0,0,0.5)", marginBottom: "12px" }}>
                Execution without direction disperses effort without outcome.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(0,0,0,0.5)" }}>
                Execution without structure creates inconsistency and loss of control.
              </p>
            </motion.div>

            {/* Block 2 — core statement (anchor rule removed — was decorative) */}
            <motion.div
              style={{ marginTop: "20px" }}
              {...fade(0.32)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p style={{
                fontSize: "28px",
                fontWeight: 500,
                lineHeight: 1.25,
                color: "#111",
              }}>
                Control exists only when this order is maintained.
              </p>
            </motion.div>

            {/* Block 3 — clarification */}
            <motion.div
              style={{ marginTop: "28px" }}
              {...fade(0.41)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p style={{ fontSize: "14px", lineHeight: 1.5, color: "rgba(0,0,0,0.5)", marginBottom: "8px" }}>
                This is not a preference.
              </p>
              <p style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.6, color: "rgba(0,0,0,0.65)" }}>
                It is the condition required for the system to function.
              </p>
            </motion.div>

            {/* Final line — non-negotiable rule */}
            <motion.p
              style={{
                marginTop: "48px",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#111",
              }}
              {...fade(0.50)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              All work follows this logic—without exception.
            </motion.p>

          </div>

        </div>
      </div>
    </section>
  );
}
