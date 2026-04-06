"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function PhasesV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-white pt-[100px] pb-[120px]">
      <div className="max-w-[1100px] mx-auto px-8">

        {/* Top label */}
        <motion.p
          style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "16px" }}
          {...fade(0)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          03&nbsp;&nbsp;Phase Breakdown
        </motion.p>

        {/* Intro line */}
        <motion.p
          style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.6, maxWidth: "420px", marginBottom: "40px" }}
          {...fade(0.07)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          The system is established through a defined progression.
        </motion.p>

        {/* Sequence block */}
        <motion.div
          style={{ position: "relative", paddingLeft: "20px", maxWidth: "520px" }}
          {...fade(0.14)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Left border — 60% opacity, tight offset */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "4px",
            bottom: "4px",
            width: "1px",
            background: "rgba(229, 231, 235, 0.6)",
          }} />

          <p style={{ fontSize: "30px", fontWeight: 600, lineHeight: 1.15, color: "#111827", marginBottom: "10px" }}>
            Direction is made explicit.
          </p>
          <p style={{ fontSize: "27px", fontWeight: 500, lineHeight: 1.15, color: "#6B7280", marginBottom: "8px" }}>
            Structure is established to support it.
          </p>
          <p style={{ fontSize: "25px", fontWeight: 400, lineHeight: 1.15, color: "#9CA3AF" }}>
            Execution operates within that structure.
          </p>
        </motion.div>

        {/* Main statement */}
        <motion.p
          style={{ marginTop: "56px", fontSize: "34px", fontWeight: 600, lineHeight: 1.15, color: "#111827", maxWidth: "480px" }}
          {...fade(0.26)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          The system then stabilizes into consistent operation.
        </motion.p>

        {/* Supporting lines */}
        <motion.div
          style={{ marginTop: "16px", maxWidth: "420px", display: "flex", flexDirection: "column", gap: "6px" }}
          {...fade(0.34)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.6 }}>
            Each phase builds on the previous one.
          </p>
          <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.6 }}>
            No phase stands alone.
          </p>
        </motion.div>

        {/* Final line */}
        <motion.p
          style={{ marginTop: "24px", fontSize: "17px", fontWeight: 500, color: "#111827", lineHeight: 1.6, maxWidth: "440px" }}
          {...fade(0.41)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Control is established progressively—until the system operates as one.
        </motion.p>

      </div>
    </section>
  );
}
