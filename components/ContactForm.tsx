"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

// Replace with your Formspree form ID from https://formspree.io
// e.g. "https://formspree.io/f/xabcdefg"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({
    name: "",
    company: "",
    role: "",
    context: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          role: values.role,
          context: values.context,
        }),
      });

      if (res.ok) {
        setState("success");
        setValues({ name: "", company: "", role: "", context: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="border border-[rgba(10,22,40,0.08)] rounded-lg p-10 text-center">
        <p className="text-base font-semibold text-navy mb-2">
          Request received.
        </p>
        <p className="text-sm text-[rgba(10,22,40,0.58)] leading-relaxed">
          We review each request and respond directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Full name */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-xs font-semibold text-[rgba(10,22,40,0.55)] uppercase tracking-wider"
        >
          Full name <span className="text-navy">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[rgba(10,22,40,0.12)] rounded text-sm text-navy placeholder:text-[rgba(10,22,40,0.3)] focus:outline-none focus:border-navy transition-colors bg-white"
          placeholder="Your full name"
        />
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="company"
          className="text-xs font-semibold text-[rgba(10,22,40,0.55)] uppercase tracking-wider"
        >
          Company <span className="text-navy">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          value={values.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[rgba(10,22,40,0.12)] rounded text-sm text-navy placeholder:text-[rgba(10,22,40,0.3)] focus:outline-none focus:border-navy transition-colors bg-white"
          placeholder="Your organization"
        />
      </div>

      {/* Role / Title */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="role"
          className="text-xs font-semibold text-[rgba(10,22,40,0.55)] uppercase tracking-wider"
        >
          Role / Title <span className="text-navy">*</span>
        </label>
        <input
          id="role"
          name="role"
          type="text"
          required
          value={values.role}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[rgba(10,22,40,0.12)] rounded text-sm text-navy placeholder:text-[rgba(10,22,40,0.3)] focus:outline-none focus:border-navy transition-colors bg-white"
          placeholder="Your title"
        />
      </div>

      {/* Context */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="context"
          className="text-xs font-semibold text-[rgba(10,22,40,0.55)] uppercase tracking-wider"
        >
          Context <span className="text-navy">*</span>
        </label>
        <p className="text-xs text-[rgba(10,22,40,0.45)]">
          What prompted this conversation?
        </p>
        <textarea
          id="context"
          name="context"
          required
          rows={5}
          value={values.context}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[rgba(10,22,40,0.12)] rounded text-sm text-navy placeholder:text-[rgba(10,22,40,0.3)] focus:outline-none focus:border-navy transition-colors bg-white resize-none leading-relaxed"
          placeholder="Briefly describe your current situation and what you'd like to discuss"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:contact@dataofis.az" className="underline">
            contact@dataofis.az
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-2 w-full md:w-auto md:self-start px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-mid transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Sending…" : "Request Executive Data Review"}
      </button>
    </form>
  );
}
