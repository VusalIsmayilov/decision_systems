"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function ModelBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: `linear-gradient(
          to right,
          #0b1f33 0%,
          #0b1f33 calc(100% - 420px - 160px),
          #081a2a calc(100% - 420px - 160px),
          #081a2a 100%
        )`,
        paddingTop: "140px",
        paddingBottom: "140px",
      }}
    >
      <div style={{ maxWidth: "none", width: "100%", paddingLeft: "160px", paddingRight: "160px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 420px", columnGap: "120px", alignItems: "start" }}>

          {/* ── Column 1 — System index ── */}
          <motion.div
            className="hidden md:block"
            {...fade(0)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.70)", lineHeight: 1, marginBottom: "8px" }}>01</p>
            <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.50)", lineHeight: 1 }}>MODEL</p>
            <div style={{ width: "1px", height: "500px", background: "rgba(255,255,255,0.22)", marginTop: "16px" }} />
          </motion.div>

          {/* ── Column 2 — Core statement ── */}
          <div style={{ maxWidth: "760px" }}>

            {/* Heading */}
            <motion.h2
              style={{
                fontSize: "56px",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                color: "rgba(255,255,255,0.92)",
                maxWidth: "820px",
                marginBottom: "0",
              }}
              {...fade(0.06)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              We do not operate through<br />
              fragmented advisory, governance,<br />
              or delivery efforts.
            </motion.h2>

            {/* Separator — headline → body. Confined to col 2 width, no overflow. */}
            <motion.div
              style={{ marginTop: "24px", marginBottom: "28px", height: "1px", width: "100%", background: "rgba(255,255,255,0.12)" }}
              {...fade(0.10)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            />

            {/* Block 1 — definition: strongest */}
            <motion.p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.90)",
                lineHeight: 1.65,
                maxWidth: "600px",
                marginBottom: "24px",
              }}
              {...fade(0.14)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              We take ownership of the data and AI function as a single system—
              where direction, structure, and execution operate under unified control.
            </motion.p>

            {/* Block 2 — explanation: softer */}
            <motion.p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.65,
                maxWidth: "600px",
                marginBottom: "24px",
              }}
              {...fade(0.20)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              When these elements are separated, fragmentation persists.
            </motion.p>

            {/* Block 3 — explanation: softer */}
            <motion.p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.65,
                maxWidth: "600px",
                marginBottom: "24px",
              }}
              {...fade(0.26)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              When unified, the system becomes consistent, accountable, and reliable.
            </motion.p>

            {/* Block 4 — conclusion: strong again */}
            <motion.p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1.65,
                maxWidth: "600px",
                marginTop: "32px",
              }}
              {...fade(0.32)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              The engagement is defined by control of the system—not by projects or services.
            </motion.p>

          </div>

          {/* ── Column 3 — System assertion ── */}
          {/*
            paddingTop: 62px aligns assertion to ~second line of heading (line box 61.6px).
            left: -60px pulls block 60px closer to main content.
          */}
          <motion.div
            className="hidden md:block"
            style={{ marginTop: "72px", marginLeft: "80px", paddingLeft: "24px", maxWidth: "280px" }}
            {...fade(0.18)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            {/* Anchor rule */}
            <div style={{
              width: "48px",
              height: "1px",
              background: "rgba(255,255,255,0.20)",
              marginBottom: "16px",
            }} />

            <p style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.45)",
            }}>
              This is not coordination.
            </p>
            <p style={{
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "rgba(255,255,255,1)",
              marginTop: "14px",
            }}>
              It is full-system ownership.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
