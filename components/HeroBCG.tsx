"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

const nodes = [
  { step: "01", label: "Direction", active: true  },
  { step: "02", label: "Structure", active: false },
  { step: "03", label: "Execution", active: false },
];

const LINE_COLOR = "#C4CDD8";

export default function HeroBCG() {
  const locale = useLocale();
  return (
    <section style={{ background: "#FAFAFA", paddingTop: "140px", paddingBottom: "0" }}>
      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "120px", paddingRight: "120px" }}>

        {/* Utility nav — near-invisible, utility only */}
        <div style={{ marginBottom: "48px" }}>
          <Link
            href={withLocale(locale, "/")}
            style={{ fontSize: "11px", color: "#D1D5DB", textDecoration: "none", letterSpacing: "0.02em" }}
          >
            ← Overview
          </Link>
        </div>

        {/* 60 / 40 split */}
        <div style={{ display: "grid", gridTemplateColumns: "60% 40%", gap: "0 40px", alignItems: "start" }}>

          {/* ── LEFT — System declaration ── */}
          <div>
            <p style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#9CA3AF",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}>
              How We Work
            </p>

            <h1 style={{
              fontSize: "clamp(56px, 5.2vw, 68px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.016em",
              color: "#0F172A",
              maxWidth: "600px",
              marginBottom: "28px",
            }}>
              The system is<br />
              structured and<br />
              controlled as one.
            </h1>

            <p style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#9CA3AF",
              lineHeight: 1.5,
              maxWidth: "400px",
            }}>
              Not services. A controlled system.
            </p>
          </div>

          {/* ── RIGHT — System model ── */}
          <div style={{ paddingTop: "38px" }}>

            {/* Caption — aligned to spine */}
            <p style={{
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "#C4C9D4",
              textTransform: "uppercase",
              marginBottom: "18px",
              paddingLeft: "26px",
            }}>
              System Model
            </p>

            {/*
              Spine container:
              – position:relative so the absolute spine line fills top→bottom
              – paddingTop/Bottom creates the extension above/below the nodes
              – paddingLeft reserves space for the line + node squares
            */}
            <div style={{ position: "relative", paddingTop: "16px", paddingBottom: "16px", paddingLeft: "26px" }}>

              {/* Full-height spine — extends above first and below last node */}
              <div style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "4px",
                width: "1px",
                background: LINE_COLOR,
              }} />

              {nodes.map((node, i) => (
                <div
                  key={node.label}
                  style={{
                    position: "relative",
                    marginBottom: i < nodes.length - 1 ? "34px" : "0",
                  }}
                >
                  {/* Node square — centered on spine (spine left:4px, center:4.5px) */}
                  <div style={{
                    position: "absolute",
                    left: node.active ? "0px" : "1.5px",   // center 9px/6px on spine center 4.5px
                    top: "3px",
                    width: node.active ? "9px" : "6px",
                    height: node.active ? "9px" : "6px",
                    border: `1px solid ${node.active ? "#1E293B" : "#CBD5E1"}`,
                    background: node.active ? "#1E293B" : "transparent",
                  }} />

                  {/* Labels */}
                  <p style={{
                    fontSize: "11px",
                    color: "#C4C9D4",
                    letterSpacing: "0.04em",
                    marginBottom: "3px",
                    lineHeight: 1,
                  }}>
                    {node.step}
                  </p>
                  <p style={{
                    fontSize: node.active ? "18px" : "15px",
                    fontWeight: node.active ? 600 : 400,
                    color: node.active ? "#0F172A" : "#94A3B8",
                    lineHeight: 1.25,
                  }}>
                    {node.label}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Hard structural break */}
        <div style={{ height: "1px", background: "#E2E8F0", marginTop: "120px" }} />

      </div>
    </section>
  );
}
