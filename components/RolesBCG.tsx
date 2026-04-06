"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function RolesBCG() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "180px 760px 1fr",
        columnGap: "140px",
        paddingLeft: "160px",
        paddingRight: "160px",
        paddingTop: "120px",
        paddingBottom: "140px",
        alignItems: "start",
      }}
    >

      {/* ── Column 1 — Quiet section reference ── */}
      <motion.div
        className="hidden md:block"
        style={{ alignSelf: "start" }}
        {...fade(0)}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        <p style={{
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(17,24,39,0.36)",
          lineHeight: 1,
          marginBottom: "12px",
        }}>
          04&nbsp;&nbsp;Roles
        </p>
        <p style={{
          fontSize: "26px",
          fontWeight: 500,
          lineHeight: 1.1,
          color: "rgba(17,24,39,0.82)",
          marginBottom: "22px",
        }}>
          Roles
        </p>
        <p style={{
          fontSize: "16px",
          lineHeight: 1.6,
          color: "rgba(17,24,39,0.36)",
          maxWidth: "220px",
          marginBottom: "8px",
        }}>
          The system operates through clearly defined ownership layers.
        </p>
        <p style={{
          fontSize: "16px",
          lineHeight: 1.6,
          color: "rgba(17,24,39,0.36)",
          maxWidth: "220px",
        }}>
          Each layer has a distinct responsibility.
        </p>
      </motion.div>

      {/* ── Column 2 — Role architecture ── */}
      {/*
        max-width: 860px keeps the content field anchored.
        All child elements share the same left edge.
      */}
      <div style={{ maxWidth: "860px" }}>

        {/* Role matrix header */}
        <motion.div
          style={{
            borderTop: "1px solid rgba(17,24,39,0.08)",
            borderBottom: "1px solid rgba(17,24,39,0.08)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginBottom: "56px",
          }}
          {...fade(0.1)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Direction */}
          <div style={{
            minHeight: "54px",
            display: "flex",
            alignItems: "center",
            padding: "0 36px 0 0",
            borderRight: "1px solid rgba(17,24,39,0.06)",
          }}>
            <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(17,24,39,0.72)" }}>Direction</p>
          </div>

          {/* Structure */}
          <div style={{
            minHeight: "54px",
            display: "flex",
            alignItems: "center",
            padding: "0 36px",
            borderRight: "1px solid rgba(17,24,39,0.06)",
          }}>
            <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(17,24,39,0.72)" }}>Structure</p>
          </div>

          {/* Execution */}
          <div style={{
            minHeight: "54px",
            display: "flex",
            alignItems: "center",
            padding: "0 36px",
            borderRight: "1px solid rgba(17,24,39,0.06)",
          }}>
            <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(17,24,39,0.72)" }}>Execution</p>
          </div>

          {/* System Design — integrative layer, slightly stronger only */}
          <div style={{
            minHeight: "54px",
            display: "flex",
            alignItems: "center",
            padding: "0 36px",
          }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "rgba(17,24,39,0.84)" }}>System Design</p>
          </div>
        </motion.div>

        {/*
          Roles content block — left rule anchors everything below the matrix.
          matrix → statement: 34px (matrix marginBottom:40px accounts for the gap; rule paddingLeft:28px starts here)
          All elements share the same left edge inside the rule.
        */}
        <div style={{
          borderLeft: "1px solid rgba(17,24,39,0.18)",
          paddingLeft: "42px",
          maxWidth: "860px",
        }}>

          {/* Main statement */}
          <motion.p
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: 1.08,
              color: "#111827",
              maxWidth: "760px",
              marginBottom: "38px",
            }}
            {...fade(0.2)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            No overlap. No ambiguity.
          </motion.p>

          {/* Body copy */}
          <div style={{ maxWidth: "820px" }}>
            <motion.p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "rgba(17,24,39,0.58)",
                marginBottom: "22px",
                maxWidth: "780px",
              }}
              {...fade(0.28)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Ownership is structured to ensure coordination across direction, structure,
              execution, and system design.
            </motion.p>

            <motion.p
              style={{
                fontSize: "17px",
                fontWeight: 500,
                lineHeight: 1.75,
                color: "#1f2937",
                maxWidth: "820px",
              }}
              {...fade(0.35)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Together, these ownership layers ensure the system operates as a single
              coordinated system under control.
            </motion.p>
          </div>

        </div>

      </div>

      {/* ── Column 3 — Intentionally empty ── */}
      <div />

    </section>
  );
}
