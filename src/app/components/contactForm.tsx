"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api";
import {
  LuArrowRight,
  LuCheckCircle2,
  LuAlertCircle,
  LuLoader2,
} from "react-icons/lu";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!formStatus.message) return;
    const timer = setTimeout(
      () => setFormStatus({ loading: false, message: "", type: "" }),
      5000,
    );
    return () => clearTimeout(timer);
  }, [formStatus.message]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus.loading) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setFormStatus({ loading: true, message: "", type: "" });
    try {
      const response = await apiFetch("/email/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok && responseData.status) {
        setFormStatus({
          loading: false,
          message:
            responseData.message || "Your message has been sent successfully!",
          type: "success",
        });
        form.reset();
      } else {
        throw new Error(responseData.message || "Failed to send message");
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <div className="rounded-2xl border border-hub-border bg-white p-6 shadow-hub sm:p-8 lg:p-10">
      <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-hub-accent-strong">
        START A CONVERSATION
      </p>
      <h2 className="mt-4 text-2xl font-bold tracking-[-0.7px] sm:text-3xl">
        Send us a message.
      </h2>
      <p className="mt-3 text-sm leading-7 text-hub-text">
        Tell us about your school, your question, or what you need help with.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-7"
        aria-busy={formStatus.loading || !isReady}
        aria-describedby="contact-status"
      >
        <fieldset
          disabled={formStatus.loading || !isReady}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-medium">
              Full name{" "}
              <span className="text-hub-muted" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
              className="h-11 w-full rounded-2xl border border-hub-border bg-white px-4 text-sm text-rasin-black placeholder:text-hub-muted focus:border-royal-lilac focus:outline-none focus:ring-2 focus:ring-royal-lilac/20 disabled:bg-hub-surface"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-medium">
              Email address{" "}
              <span className="text-hub-muted" aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@school.edu"
              className="h-11 w-full rounded-2xl border border-hub-border bg-white px-4 text-sm text-rasin-black placeholder:text-hub-muted focus:border-royal-lilac focus:outline-none focus:ring-2 focus:ring-royal-lilac/20 disabled:bg-hub-surface"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-2 block text-xs font-medium">
              Subject{" "}
              <span className="text-hub-muted" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="subject"
              name="subject"
              required
              placeholder="How can we help?"
              className="h-11 w-full rounded-2xl border border-hub-border bg-white px-4 text-sm text-rasin-black placeholder:text-hub-muted focus:border-royal-lilac focus:outline-none focus:ring-2 focus:ring-royal-lilac/20 disabled:bg-hub-surface"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-xs font-medium">
              Your message{" "}
              <span className="text-hub-muted" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="A few details about your school or question…"
              className="min-h-[140px] w-full resize-y rounded-2xl border border-hub-border bg-white px-4 py-3 text-sm leading-7 text-rasin-black placeholder:text-hub-muted focus:border-royal-lilac focus:outline-none focus:ring-2 focus:ring-royal-lilac/20 disabled:bg-hub-surface"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={formStatus.loading}
              className="inline-flex min-h-[48px] w-full items-center justify-between gap-3 rounded-2xl bg-hub-accent-strong px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-hub-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4 disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
            >
              {!isReady
                ? "Preparing form…"
                : formStatus.loading
                  ? "Sending your message…"
                  : "Send message"}
              {formStatus.loading || !isReady ? (
                <LuLoader2
                  className="h-4 w-4 animate-spin motion-reduce:animate-none"
                  aria-hidden="true"
                />
              ) : (
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </fieldset>
        <div
          id="contact-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-4 min-h-[24px]"
        >
          {formStatus.message && (
            <p
              className={
                "flex items-start gap-2 rounded-2xl px-4 py-3 text-xs leading-6 " +
                (formStatus.type === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800")
              }
            >
              {formStatus.type === "success" ? (
                <LuCheckCircle2
                  className="mt-1 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <LuAlertCircle
                  className="mt-1 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
              )}
              {formStatus.message}
            </p>
          )}
        </div>
        <p className="mt-3 text-[11px] leading-6 text-hub-muted">
          We use your details to respond to your inquiry. Read our{" "}
          <Link
            href="/privacy"
            className="text-hub-accent-strong underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac"
          >
            privacy policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
