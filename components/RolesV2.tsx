"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function RolesV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-neutral-50 pt-[100px] pb-[120px]">
      <div className="max-w-[1100px] mx-auto px-8">

        {/* Top label */}
        <motion.p
          style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "24px" }}
          {...fade(0)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          04&nbsp;&nbsp;Roles
        </motion.p>

        {/* Intro */}
        <motion.div
          style={{ maxWidth: "480px", marginBottom: "64px" }}
          {...fade(0.08)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>
            The system operates through clearly defined ownership layers.
          </p>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}>
            Each layer has a distinct responsibility.
          </p>
        </motion.div>

        {/* Vertical ownership stack */}
        <motion.div
          style={{ position: "relative", paddingLeft: "24px", maxWidth: "520px" }}
          {...fade(0.16)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Structural left border */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "4px",
            bottom: "4px",
            width: "1px",
            background: "#E5E7EB",
          }} />

          {/* Layer 1 — Direction */}
          <p style={{ fontSize: "23px", fontWeight: 600, lineHeight: 1.2, color: "#111827", marginBottom: "24px" }}>
            Direction
          </p>

          {/* Layer 2 — Structure */}
          <p style={{ fontSize: "21px", fontWeight: 500, lineHeight: 1.2, color: "#6B7280", marginBottom: "24px" }}>
            Structure
          </p>

          {/* Layer 3 — Execution */}
          <p style={{ fontSize: "21px", fontWeight: 500, lineHeight: 1.2, color: "#6B7280", marginBottom: "24px" }}>
            Execution
          </p>

          {/* Layer 4 — System Design */}
          <p style={{ fontSize: "21px", fontWeight: 500, lineHeight: 1.2, color: "#6B7280" }}>
            System Design
          </p>
        </motion.div>

        {/* Main statement */}
        <motion.p
          style={{ marginTop: "56px", fontSize: "34px", fontWeight: 600, lineHeight: 1.15, color: "#111827", maxWidth: "520px" }}
          {...fade(0.28)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          No overlap. No ambiguity.
        </motion.p>

        {/* Supporting text */}
        <motion.p
          style={{ marginTop: "20px", maxWidth: "480px", fontSize: "15px", color: "#6B7280", lineHeight: 1.6 }}
          {...fade(0.36)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Ownership is structured to ensure coordination across direction, structure, execution,
          and system design.
        </motion.p>

        {/* Final statement */}
        <motion.p
          style={{ marginTop: "20px", maxWidth: "480px", fontSize: "17px", fontWeight: 500, color: "#111827", lineHeight: 1.6 }}
          {...fade(0.43)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Together, these ownership layers ensure the system operates as a single coordinated
          system under control.
        </motion.p>

      </div>
    </section>
  );
}
