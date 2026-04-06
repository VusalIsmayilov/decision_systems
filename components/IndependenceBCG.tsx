"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function IndependenceBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "160px 560px 420px",
        columnGap: "140px",
        paddingLeft: "160px",
        paddingRight: "160px",
        paddingTop: "120px",
        paddingBottom: "140px",
        alignItems: "start",
      }}
    >

      {/* ── Column 1 — Structural marker ── */}
      <motion.div
        className="hidden md:block"
        style={{ alignSelf: "start" }}
        {...fade(0)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: 1, marginBottom: "8px" }}>06</p>
        <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", lineHeight: 1 }}>INDEPENDENCE</p>
        <div style={{ width: "1px", height: "160px", background: "rgba(0,0,0,0.18)", marginTop: "16px" }} />
      </motion.div>

      {/* ── Column 2 — Problem field ── */}
      <div style={{ maxWidth: "520px" }}>

        <motion.h2
          style={{
            fontSize: "44px",
            fontWeight: 600,
            lineHeight: 1.08,
            color: "#111827",
            marginBottom: "28px",
          }}
          {...fade(0.06)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          Control requires independence.
        </motion.h2>

        <motion.div
          style={{ width: "120px", height: "1px", background: "rgba(0,0,0,0.18)", marginBottom: "28px" }}
          {...fade(0.12)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        />

        <motion.div
          {...fade(0.18)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(0,0,0,0.58)", marginBottom: "16px" }}>
            When those responsible for delivery influence direction or structure, control is compromised.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(0,0,0,0.58)" }}>
            Decisions shift toward delivery convenience rather than system integrity.
          </p>
        </motion.div>

      </div>

      {/* ── Column 3 — Resolution block ── */}
      <motion.div
        className="hidden md:block"
        style={{
          borderLeft: "1px solid rgba(0,0,0,0.16)",
          paddingLeft: "32px",
          maxWidth: "380px",
          marginTop: "64px",
        }}
        {...fade(0.28)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <div style={{ width: "48px", height: "1px", background: "rgba(0,0,0,0.20)", marginBottom: "18px" }} />

        <p style={{
          fontSize: "26px",
          fontWeight: 600,
          lineHeight: 1.2,
          color: "#111827",
          marginBottom: "18px",
        }}>
          Independence separates ownership from execution.
        </p>

        <p style={{
          fontSize: "16px",
          lineHeight: 1.7,
          color: "rgba(0,0,0,0.52)",
        }}>
          This preserves objectivity, protects structure, and ensures the system operates under control—not influence.
        </p>
      </motion.div>

    </section>
  );
}
