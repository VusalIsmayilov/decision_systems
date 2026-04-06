"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { withLocale } from "@/lib/i18n";

export default function CTABCG() {
  const locale = useLocale();
  return (
    <section
      style={{
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        columnGap: "120px",
        paddingLeft: "160px",
        paddingRight: "160px",
        paddingTop: "120px",
        paddingBottom: "0",
        alignItems: "start",
      }}
    >

      {/* ── Column 1 — Quiet closing index ── */}
      <div className="hidden md:block" style={{ alignSelf: "start" }}>
        <p style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "rgba(17,24,39,0.40)",
          lineHeight: 1,
          marginBottom: "6px",
        }}>
          09
        </p>
        <p style={{
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(17,24,39,0.30)",
          lineHeight: 1,
        }}>
          NEXT STEP
        </p>
      </div>

      {/* ── Column 2 — Closing field ── */}
      {/*
        Closing block: headline + CTA.
        border-bottom separates it from the bottom strip.
        No dead space between block and strip.
      */}
      <div style={{ paddingBottom: "64px", borderBottom: "1px solid rgba(17,24,39,0.10)", maxWidth: "1180px" }}>

        {/* Closing statement */}
        <p style={{
          fontSize: "56px",
          fontWeight: 600,
          lineHeight: 1.04,
          color: "#111827",
          marginBottom: "8px",
          maxWidth: "980px",
        }}>
          Control is not established by effort.
        </p>
        <p style={{
          fontSize: "52px",
          fontWeight: 500,
          lineHeight: 1.06,
          color: "rgba(17,24,39,0.24)",
          marginBottom: "52px",
          maxWidth: "980px",
        }}>
          It is established by system design.
        </p>

        {/*
          BCG-style action block — not a button.
          border-top + inline-flex creates a formal next-step indicator.
          No filled rectangle. No rounding.
        */}
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "18px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(17,24,39,0.14)",
            textDecoration: "none",
          }}
        >
          <span style={{
            fontSize: "13px",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#111827",
          }}>
            Schedule Executive Data Review
          </span>
          <span style={{
            fontSize: "18px",
            color: "rgba(17,24,39,0.55)",
          }}>
            →
          </span>
        </Link>

      </div>

      {/*
        Bottom navigation strip — spans both grid columns.
        padding-left: 280px aligns content to same axis as main field
        (160px section padding + 160px index col width — close enough to align visually).
        Quiet closure, not a separate footer.
      */}
      <div
        style={{
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          minHeight: "84px",
          paddingLeft: "280px",
          paddingRight: "0",
          borderTop: "1px solid rgba(17,24,39,0.08)",
        }}
      >
        <Link
          href={withLocale(locale, "/")}
          style={{
            justifySelf: "start",
            fontSize: "14px",
            color: "rgba(17,24,39,0.36)",
            textDecoration: "none",
          }}
        >
          ← Return to overview
        </Link>
        <Link
          href={withLocale(locale, "/about")}
          style={{
            justifySelf: "end",
            fontSize: "14px",
            color: "rgba(17,24,39,0.36)",
            textDecoration: "none",
          }}
        >
          About →
        </Link>
      </div>

    </section>
  );
}
