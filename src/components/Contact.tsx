"use client";

import { useState, FormEvent } from "react";

const PROJECT_TYPES = [
  "Feature Film",
  "TV / Series",
  "Video Game",
  "Commercial / Brand",
  "Personal Commission",
  "Other",
];

const CONTACT_EMAIL = "diz.migz@gmail.com";

// Set NEXT_PUBLIC_FORMSPREE_ID in .env.local (and in your host's env settings)
// to deliver messages straight to your inbox. Without it, the form falls back
// to opening the visitor's email app with the message pre-filled.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const openMailClient = () => {
    const subject = `${form.projectType} enquiry from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    // No form service configured: hand the message to the visitor's email app.
    if (!FORMSPREE_ID) {
      openMailClient();
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: form.message,
          _replyto: form.email,
          _subject: `${form.projectType} enquiry from ${form.name}`,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const done = status === "sent" || status === "mailto";

  const inputBase =
    "w-full bg-transparent border border-cream/10 text-cream text-sm font-sans px-4 py-3 outline-none focus:border-accent/60 transition-colors duration-200 placeholder:text-cream/25";

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
            Get In Touch
          </p>
          <h2 className="font-display font-light text-5xl md:text-6xl text-cream mb-8 leading-tight">
            Let&apos;s make<br />something.
          </h2>
          <p className="text-cream/45 text-sm font-sans leading-relaxed mb-10 max-w-sm">
            Have a project in mind or just want to explore what&apos;s possible?
            Send a message — I read every enquiry personally and typically
            respond within 48 hours.
          </p>
          <div>
            <p className="text-cream/30 text-xs font-sans tracking-widest uppercase mb-2">
              Direct email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-display text-2xl text-cream hover:text-accent transition-colors duration-200"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {done ? (
            <div className="h-full flex flex-col justify-center py-12">
              <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center mb-6">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#a78bca"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 8l4 4 8-8" />
                </svg>
              </div>
              <h3 className="font-display text-3xl text-cream mb-3">
                {status === "sent" ? "Message received." : "Almost there."}
              </h3>
              <p className="text-cream/45 text-sm font-sans leading-relaxed">
                {status === "sent" ? (
                  <>Thanks for reaching out. I&apos;ll be in touch within 48 hours.</>
                ) : (
                  <>
                    Your email app should have opened with your message ready —
                    just hit send. If nothing opened, email me directly at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-accent hover:text-[#b89fd6] transition-colors duration-200"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </>
                )}
              </p>
              {status === "mailto" && (
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 self-start text-cream/40 hover:text-cream text-xs font-sans tracking-[0.12em] uppercase transition-colors duration-200"
                >
                  ← Back to form
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update}
                  required
                  className={inputBase}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={update}
                  required
                  className={inputBase}
                />
              </div>

              <select
                name="projectType"
                value={form.projectType}
                onChange={update}
                required
                className={`${inputBase} ${form.projectType === "" ? "text-cream/25" : "text-cream"}`}
              >
                <option value="" disabled>
                  Project type
                </option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-dark text-cream">
                    {t}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Tell me about your project — the story, the feel, the timeline..."
                value={form.message}
                onChange={update}
                required
                rows={5}
                className={`${inputBase} resize-none`}
              />

              {status === "error" && (
                <p role="alert" className="text-sm font-sans text-[#e8a0a0]">
                  Something went wrong sending your message. Please try again,
                  or email me directly at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline hover:text-cream transition-colors duration-200"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 px-8 py-4 bg-accent text-dark text-xs font-sans font-semibold tracking-[0.12em] uppercase hover:bg-[#b89fd6] transition-colors duration-200 self-start disabled:opacity-60 disabled:cursor-wait"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
