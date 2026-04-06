"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const ROW: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  gap: "0 48px",
  alignItems: "baseline",
};

export default function CausalityV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-neutral-50 pt-[100px] pb-[120px]">
      <div className="max-w-[1000px] mx-auto px-8">

        {/* Top label */}
        <motion.p
          className="mb-5"
          style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#9CA3AF", textTransform: "uppercase" }}
          {...fade(0)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          02&nbsp;&nbsp;Causality
        </motion.p>

        {/* Section title */}
        <motion.p
          className="max-w-[480px] mb-[56px]"
          style={{ fontSize: "38px", fontWeight: 600, lineHeight: 1.1, color: "#111827" }}
          {...fade(0.08)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          The system operates on a fixed logic.
        </motion.p>

        {/* ── Paired rows ── */}
        <motion.div
          {...fade(0.16)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >

          {/* Row 1 — Direction */}
          <div style={{ ...ROW, marginBottom: "28px" }}>
            <span style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.3, color: "#111827" }}>
              Direction
            </span>
            <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.6, color: "#111827" }}>
              Direction is defined first.
            </p>
          </div>

          {/* Row 2 — Structure */}
          <div style={{ ...ROW, marginBottom: "28px" }}>
            <span style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.3, color: "#9CA3AF" }}>
              Structure
            </span>
            <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#6B7280" }}>
              Structure is established to support it.
            </p>
          </div>

          {/* Row 3 — Execution + failure statements */}
          <div style={ROW}>
            <span style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.3, color: "#9CA3AF" }}>
              Execution
            </span>
            <div>
              <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.6, color: "#6B7280" }}>
                Execution operates within that structure.
              </p>
              <div style={{ marginTop: "12px", maxWidth: "420px" }}>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#9CA3AF", marginBottom: "8px" }}>
                  Execution without direction disperses effort without outcome.
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#9CA3AF" }}>
                  Execution without structure creates inconsistency and loss of control.
                </p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom statement */}
        <motion.p
          className="max-w-[480px]"
          style={{ marginTop: "64px", fontSize: "26px", fontWeight: 600, lineHeight: 1.2, color: "#111827" }}
          {...fade(0.28)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Control exists only when this order is maintained.
        </motion.p>

        {/* Supporting lines */}
        <motion.div
          style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}
          {...fade(0.36)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "14px", color: "#9CA3AF" }}>
            This is not a preference.
          </p>
          <p style={{ fontSize: "17px", fontWeight: 500, color: "#111827" }}>
            It is the condition required for the system to function.
          </p>
          <p style={{ fontSize: "14px", color: "#9CA3AF" }}>
            All work follows this logic—without exception.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
