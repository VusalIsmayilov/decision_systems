"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function ControlV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-neutral-950" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto", paddingLeft: "32px", paddingRight: "32px" }}>

        {/* Section label */}
        <motion.div
          style={{ marginBottom: "40px" }}
          {...fade(0)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1, marginBottom: "5px" }}>05</p>
          <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1 }}>Control Model</p>
        </motion.div>

        {/* Headline */}
        <motion.p
          style={{
            fontSize: "clamp(32px, 3vw, 36px)",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#E5E7EB",
            maxWidth: "520px",
            marginBottom: "64px",
          }}
          {...fade(0.08)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Control is established through ownership and enforced through structure.
        </motion.p>

        {/* Failure pair */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            maxWidth: "720px",
          }}
          {...fade(0.18)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "clamp(18px, 1.6vw, 20px)", fontWeight: 500, lineHeight: 1.5, color: "#94A3B8" }}>
            When ownership is unclear, decisions drift.
          </p>
          <p style={{ fontSize: "clamp(18px, 1.6vw, 20px)", fontWeight: 500, lineHeight: 1.5, color: "#94A3B8" }}>
            When structure is weak, execution diverges.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          style={{ marginTop: "80px", maxWidth: "520px" }}
          {...fade(0.30)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "clamp(20px, 1.8vw, 22px)", fontWeight: 500, lineHeight: 1.4, color: "#94A3B8", marginBottom: "8px" }}>
            It is not an overlay.
          </p>
          <p style={{ fontSize: "clamp(26px, 2.4vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#FFFFFF" }}>
            It is how the system operates.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
