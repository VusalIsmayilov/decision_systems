"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function EngagementFormatsBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0a1628",
        position: "relative",
        paddingLeft: "160px",
        paddingRight: "160px",
        paddingTop: "120px",
        paddingBottom: "140px",
      }}
    >

      {/* ── Section index — detached, does not define layout ── */}
      <motion.div
        className="hidden md:block"
        style={{ position: "absolute", left: "160px", top: "120px" }}
        {...fade(0)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.55)", lineHeight: 1, marginBottom: "6px" }}>07</p>
        <p style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", lineHeight: 1 }}>FORMATS</p>
        <div style={{ width: "1px", height: "205px", background: "rgba(255,255,255,0.14)", marginTop: "8px" }} />
      </motion.div>

      {/*
        TOP BAND — wide statement spanning most of the section width.
        margin-left: 220px clears the index column.
        border-bottom separates it from the operational strip below.
        Does NOT split into columns — headline belongs to the whole section.
      */}
      <motion.div
        style={{
          marginLeft: "220px",
          maxWidth: "1120px",
          paddingBottom: "48px",
          borderBottom: "1px solid rgba(255,255,255,0.14)",
          marginBottom: "40px",
        }}
        {...fade(0.06)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <p style={{
          fontSize: "60px",
          fontWeight: 600,
          lineHeight: 1.02,
          color: "rgba(255,255,255,0.96)",
          marginBottom: "6px",
          maxWidth: "860px",
        }}>
          The model remains constant.
        </p>
        <p style={{
          fontSize: "44px",
          fontWeight: 500,
          lineHeight: 1.04,
          color: "rgba(255,255,255,0.38)",
          maxWidth: "760px",
        }}>
          The level of involvement adapts.
        </p>
      </motion.div>

      {/*
        BOTTOM STRIP — 3-part operational grid under the top band.
        margin-left: 220px aligns to same left edge as top band.
        3 units: format 1 / formats 2+3 / governing rule.
        This is the key architectural difference — not a left-right split.
      */}
      <div style={{
        marginLeft: "220px",
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "250px 220px 420px",
        columnGap: "96px",
        alignItems: "start",
        maxWidth: "1180px",
      }}>

        {/* Strip A — Format 1 */}
        <motion.div
          style={{ paddingTop: "8px" }}
          {...fade(0.18)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{
            fontSize: "17px",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.86)",
            maxWidth: "220px",
          }}>
            It can be embedded as leadership.
          </p>
        </motion.div>

        {/* Strip B — Format 2 only */}
        <motion.div
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.10)",
            paddingLeft: "24px",
          }}
          {...fade(0.26)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.66)",
            maxWidth: "190px",
          }}>
            It can operate as oversight across initiatives.
          </p>
        </motion.div>

        {/* Strip C — Governing rule + format 3 (most conditional, sits closest to the rule) */}
        <motion.div
          style={{ paddingLeft: "12px", maxWidth: "420px", justifySelf: "end" }}
          {...fade(0.34)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Kicker */}
          <p style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.42)",
            marginBottom: "16px",
          }}>
            The format changes based on the situation.
          </p>

          {/* Rule title */}
          <p style={{
            fontSize: "38px",
            fontWeight: 600,
            lineHeight: 1.08,
            color: "rgba(255,255,255,0.98)",
            marginBottom: "18px",
          }}>
            The system does not.
          </p>

          {/* Divider */}
          <div style={{ width: "88%", height: "1px", background: "rgba(255,255,255,0.14)", marginBottom: "20px" }} />

          {/* Rule text */}
          <p style={{
            fontSize: "17px",
            fontWeight: 500,
            lineHeight: 1.72,
            color: "rgba(255,255,255,0.70)",
            marginBottom: "28px",
            maxWidth: "360px",
          }}>
            Ownership, structure, and execution remain aligned under the same model.
          </p>

          {/* Format tail — most conditional, weakest, below the rule */}
          <p style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.48)",
            maxWidth: "300px",
          }}>
            It can focus on targeted intervention where control is required.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
