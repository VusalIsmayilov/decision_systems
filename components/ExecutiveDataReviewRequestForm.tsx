"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const labelClass =
  "text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]";
const inputClass =
  "w-full border border-[rgba(10,22,40,0.12)] bg-white px-4 py-2.5 text-[16px] leading-[1.5] text-[#0A1628] placeholder:text-[rgba(10,22,40,0.3)] transition-colors focus:border-[#0A1628] focus:outline-none max-sm:text-[15px]";
const fieldCol = "flex flex-col gap-2";

export default function ExecutiveDataReviewRequestForm() {
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({
    name: "",
    role: "",
    organization: "",
    email: "",
    phone: "",
    context: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Executive Data Review request",
          name: values.name,
          role: values.role,
          organization: values.organization,
          email: values.email,
          phone: values.phone || undefined,
          context: values.context || undefined,
        }),
      });

      if (res.ok) {
        setState("success");
        setValues({
          name: "",
          role: "",
          organization: "",
          email: "",
          phone: "",
          context: "",
        });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="w-full py-2 text-left">
        <p className="text-[16px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
          Request received.
        </p>
        <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[rgba(10,22,40,0.58)] max-sm:text-[13px]">
          We review each request and respond directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4"
      style={{ borderRadius: 0 }}
    >
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        style={{ borderRadius: 0 }}
      >
        <div className={fieldCol}>
          <label htmlFor="edr-name" className={labelClass}>
            Name <span className="text-[#0A1628]">*</span>
          </label>
          <input
            id="edr-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>

        <div className={fieldCol}>
          <label htmlFor="edr-role" className={labelClass}>
            Role <span className="text-[#0A1628]">*</span>
          </label>
          <input
            id="edr-role"
            name="role"
            type="text"
            required
            autoComplete="organization-title"
            value={values.role}
            onChange={handleChange}
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>

        <div className={fieldCol}>
          <label htmlFor="edr-organization" className={labelClass}>
            Organization <span className="text-[#0A1628]">*</span>
          </label>
          <input
            id="edr-organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            value={values.organization}
            onChange={handleChange}
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>

        <div className={fieldCol}>
          <label htmlFor="edr-email" className={labelClass}>
            Email <span className="text-[#0A1628]">*</span>
          </label>
          <input
            id="edr-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>

        <div className={`${fieldCol} md:col-span-2`}>
          <label htmlFor="edr-phone" className={labelClass}>
            Phone{" "}
            <span className="font-normal normal-case tracking-normal text-[rgba(90,100,120,0.55)]">
              (optional)
            </span>
          </label>
          <input
            id="edr-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            className={inputClass}
            style={{ borderRadius: 0 }}
          />
        </div>

        <div className={`${fieldCol} md:col-span-2`}>
          <label htmlFor="edr-context" className={labelClass}>
            Context{" "}
            <span className="font-normal normal-case tracking-normal text-[rgba(90,100,120,0.55)]">
              (optional)
            </span>
          </label>
          <textarea
            id="edr-context"
            name="context"
            rows={3}
            value={values.context}
            onChange={handleChange}
            className={`${inputClass} resize-none leading-relaxed`}
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>

      {state === "error" && (
        <p className="text-[14px] leading-[1.5] text-red-600 max-sm:text-[13px]">
          Something went wrong. Try again or email{" "}
          <a
            href="mailto:contact@dataofis.az"
            className="font-medium text-[#2B5CE6] underline-offset-2 hover:text-[#1E4AC4] hover:underline"
          >
            contact@dataofis.az
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="min-h-11 w-full bg-[#234CB8] px-6 py-2.5 text-[14px] font-bold tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1C3E96] disabled:cursor-not-allowed disabled:opacity-60 max-sm:py-3 max-sm:text-[13px]"
        style={{ borderRadius: 0 }}
      >
        {state === "loading" ? "Sending…" : "Submit request"}
      </button>
    </form>
  );
}
