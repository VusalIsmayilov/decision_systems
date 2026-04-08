"use client";

import { useState } from "react";

const labelClass =
  "text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]";
const inputClass =
  "w-full min-w-0 border border-[rgba(10,22,40,0.12)] bg-white px-4 py-2.5 text-[16px] leading-[1.5] text-[#0A1628] placeholder:text-[rgba(10,22,40,0.3)] transition-colors focus:border-[#0A1628] focus:outline-none";
const fieldCol = "flex flex-col gap-2";

const INCONSISTENCY = [
  { name: "inc_teams", label: "across teams" },
  { name: "inc_regions", label: "across regions" },
  { name: "inc_time", label: "across time" },
  { name: "inc_individuals", label: "depends on individuals" },
  { name: "inc_other", label: "other" },
] as const;

export default function DiagnosticIntakeForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const anyInc = INCONSISTENCY.some(({ name }) => fd.get(name) === "on");
    if (!anyInc) {
      setError("Select at least one option for where inconsistency appears.");
      return;
    }

    const email = String(fd.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    setSuccess(null);
    setIsSending(true);
    try {
      const payload = {
        name: String(fd.get("name") ?? "").trim(),
        company: String(fd.get("company") ?? "").trim(),
        role: String(fd.get("role") ?? "").trim(),
        decision: String(fd.get("decision") ?? "").trim(),
        inconsistencyWhere: INCONSISTENCY.filter(({ name }) => fd.get(name) === "on").map(({ label }) => label),
        howHappens: String(fd.get("how_happens") ?? "").trim(),
        email,
      };

      const res = await fetch("/api/decision-diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const result = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(result?.error || "Submission failed. Please try again.");
        return;
      }

      form.reset();
      setSuccess("Request received. We will review your decision context and respond by email.");
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-0 w-full flex-col gap-8"
      style={{ borderRadius: 0 }}
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className={fieldCol}>
          <label htmlFor="intake-name" className={labelClass}>
            Name <span className="text-[#0A1628]">*</span>
          </label>
          <input
            id="intake-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>
        <div className={fieldCol}>
          <label htmlFor="intake-company" className={labelClass}>
            Company <span className="text-[#0A1628]">*</span>
          </label>
          <input
            id="intake-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>

      <div className={fieldCol}>
        <label htmlFor="intake-role" className={labelClass}>
          Your role <span className="text-[#0A1628]">*</span>
        </label>
        <input
          id="intake-role"
          name="role"
          type="text"
          required
          autoComplete="organization-title"
          className={inputClass}
          style={{ borderRadius: 0 }}
        />
      </div>

      <div className={fieldCol}>
        <label htmlFor="intake-decision" className={labelClass}>
          Which recurring decision produces inconsistent outcomes?{" "}
          <span className="text-[#0A1628]">*</span>
        </label>
        <p className="text-[13px] font-normal leading-[1.45] text-[#5A6478] max-sm:text-[12px]">
          (e.g. pricing adjustments, customer retention intervention, planning allocation) Focus on one decision.
        </p>
        <textarea
          id="intake-decision"
          name="decision"
          required
          rows={4}
          className={`${inputClass} min-h-[100px] resize-y py-3`}
          style={{ borderRadius: 0 }}
        />
      </div>

      <fieldset className="min-w-0 border-0 p-0">
        <legend className={`${labelClass} mb-3 block`}>Where does inconsistency appear?</legend>
        <ul className="flex flex-col gap-3">
          {INCONSISTENCY.map(({ name, label }) => (
            <li key={name} className="flex items-start gap-3">
              <input
                id={`intake-${name}`}
                name={name}
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 border border-[rgba(10,22,40,0.2)] accent-[#2B5CE6]"
                style={{ borderRadius: 0 }}
              />
              <label
                htmlFor={`intake-${name}`}
                className="text-[15px] font-medium leading-[1.45] text-[#0A1628] max-sm:text-[14px]"
              >
                {label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <div className={fieldCol}>
        <label htmlFor="intake-how" className={labelClass}>
          How does this decision currently happen? <span className="text-[#0A1628]">*</span>
        </label>
        <p className="text-[13px] font-normal leading-[1.45] text-[#5A6478] max-sm:text-[12px]">
          (What triggers it, who decides, what inputs are used, what action follows)
        </p>
        <textarea
          id="intake-how"
          name="how_happens"
          required
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y py-3`}
          style={{ borderRadius: 0 }}
        />
      </div>

      <div className={fieldCol}>
        <label htmlFor="intake-email" className={labelClass}>
          Email <span className="text-[#0A1628]">*</span>
        </label>
        <input
          id="intake-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          style={{ borderRadius: 0 }}
        />
      </div>

      <div className="border-t border-[rgba(10,22,40,0.08)] pt-8">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex min-h-11 w-full max-w-full items-center justify-center bg-[#2B5CE6] px-10 py-3 text-center text-[15px] font-semibold leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1E4AC4] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto max-sm:px-5 max-sm:text-[13px] max-sm:leading-snug"
          style={{ borderRadius: 0 }}
        >
          {isSending ? "Sending..." : "Request Decision Diagnostic"}
        </button>
        {success ? (
          <p className="mt-4 text-[14px] font-medium leading-[1.4] text-[#0A1628]" role="status">
            {success}
          </p>
        ) : null}
        {error ? (
          <p className="mt-4 text-[14px] font-medium leading-[1.4] text-[#0A1628]" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
