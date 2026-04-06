"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function ControlModelBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0a1628",
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        columnGap: "140px",
        paddingLeft: "160px",
        paddingRight: "160px",
        paddingTop: "120px",
        paddingBottom: "140px",
        alignItems: "start",
      }}
    >

      {/* ── Column 1 — Control premise ── */}
      <motion.div
        style={{ alignSelf: "start" }}
        {...fade(0)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        {/* Kicker */}
        <p style={{
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
          lineHeight: 1,
          marginBottom: "12px",
        }}>
          05&nbsp;&nbsp;Control Model
        </p>

        {/* Title */}
        <p style={{
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: 1.1,
          color: "rgba(255,255,255,0.74)",
          marginBottom: "36px",
        }}>
          Control Model
        </p>

        {/* Section premise — reads as the structural argument */}
        <p style={{
          fontSize: "22px",
          fontWeight: 500,
          lineHeight: 1.22,
          color: "rgba(255,255,255,0.88)",
          maxWidth: "300px",
        }}>
          Control is established through ownership and enforced through structure.
        </p>
      </motion.div>

      {/* ── Column 2 — Failure conditions + conclusion ── */}
      {/*
        max-width: 820px constrains the right field.
        All child elements align to the same left edge.
      */}
      <div style={{ maxWidth: "820px", paddingTop: "34px" }}>

        {/*
          Control band — two failure states in one structural band.
          border-top and border-bottom frame the band as a contained unit.
          margin-bottom: 56px separates it from the conclusion.
        */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            marginBottom: "64px",
          }}
          {...fade(0.08)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Failure condition 1 */}
          <div style={{
            minHeight: "88px",
            display: "flex",
            alignItems: "center",
            padding: "0 28px 0 0",
            borderRight: "1px solid rgba(255,255,255,0.10)",
          }}>
            <p style={{
              fontSize: "17px",
              fontWeight: 500,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.70)",
            }}>
              When ownership is unclear, decisions drift.
            </p>
          </div>

          {/* Failure condition 2 */}
          <div style={{
            minHeight: "88px",
            display: "flex",
            alignItems: "center",
            padding: "0 0 0 28px",
          }}>
            <p style={{
              fontSize: "17px",
              fontWeight: 500,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.70)",
            }}>
              When structure is weak, execution diverges.
            </p>
          </div>
        </motion.div>

        {/*
          Conclusion block — system truth.
          Left rule anchors it to the same axis as the top band.
          border-left aligns flush with the band's left edge.
          weak line = clarification, strong line = enforcement.
        */}
        <motion.div
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.16)",
            paddingLeft: "32px",
            maxWidth: "700px",
          }}
          {...fade(0.24)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <p style={{
            fontSize: "22px",
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.48)",
            marginBottom: "12px",
          }}>
            It is not an overlay.
          </p>
          <p style={{
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "rgba(255,255,255,0.96)",
            maxWidth: "560px",
          }}>
            It is how the system operates.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
