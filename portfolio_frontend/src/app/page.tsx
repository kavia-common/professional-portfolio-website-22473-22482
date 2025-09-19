"use client";

import { useState } from "react";
import Link from "next/link";

// Color palette from Ocean Professional style guide
const COLORS = {
  primary: "#2563EB",
  secondary: "#F59E0B",
  error: "#EF4444",
  background: "#f9fafb",
  surface: "#ffffff",
  text: "#111827",
};

// Reusable Chip component
function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">
      {label}
    </span>
  );
}

// PUBLIC_INTERFACE
export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const projects = [
    {
      title: "Oceanic Analytics Dashboard",
      description:
        "A responsive analytics dashboard with interactive charts and role-based access control.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      link: "#",
      repo: "#",
    },
    {
      title: "Portfolio Generator",
      description:
        "CLI tool that scaffolds modern portfolio sites with opinionated design tokens.",
      stack: ["Node.js", "ESBuild", "Commander"],
      link: "#",
      repo: "#",
    },
    {
      title: "AmberCast Blog",
      description:
        "Markdown-driven, statically exported blog with search and incremental static regeneration.",
      stack: ["Next.js", "MDX", "Algolia"],
      link: "#",
      repo: "#",
    },
  ];

  const skills = [
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "React", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Accessibility", level: 80 },
  ];

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    // Since we are static-exporting, demonstrate a local-only "success" UX.
    // In a real integration, replace this with a POST to an API or service.
    await new Promise((r) => setTimeout(r, 900));
    const valid =
      form.name.trim().length > 1 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.message.trim().length > 4;

    if (!valid) {
      setStatus({
        type: "error",
        message: "Please complete all fields with valid information.",
      });
      setSubmitting(false);
      return;
    }

    setStatus({
      type: "success",
      message: "Thanks! Your message has been prepared. Connect via email or socials below.",
    });
    setSubmitting(false);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background, color: COLORS.text }}>
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-2 group">
              <div
                className="h-8 w-8 rounded-md ring-1 ring-blue-200 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-gray-50"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 12c4-8 14-8 18 0-4 8-14 8-18 0Z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
                </svg>
              </div>
              <span className="font-semibold tracking-tight">Ocean Portfolio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#projects" className="hover:text-blue-700 transition-colors">
                Projects
              </a>
              <a href="#about" className="hover:text-blue-700 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-blue-700 transition-colors">
                Skills
              </a>
              <a href="#contact" className="hover:text-blue-700 transition-colors">
                Contact
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white text-xs font-medium shadow-sm hover:bg-blue-700 transition-colors"
                style={{ backgroundColor: COLORS.primary }}
              >
                Download CV
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm tracking-wider text-blue-700 font-semibold mb-3">
                Ocean Professional
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                Building clean, performant web experiences.
              </h1>
              <p className="mt-4 text-gray-600">
                I’m a frontend engineer specializing in Next.js and TypeScript, crafting accessible,
                scalable interfaces with a focus on performance and delightful UX.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium ring-1 ring-inset transition-all hover:shadow-sm"
                  style={{ color: COLORS.primary, borderColor: COLORS.primary }}
                >
                  Contact
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Chip label="Next.js" />
                <Chip label="TypeScript" />
                <Chip label="Accessibility" />
                <Chip label="Tailwind CSS" />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg border border-blue-100 bg-white shadow-sm p-6">
                <div className="aspect-video rounded-md bg-gradient-to-br from-blue-500/10 to-gray-50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-20 w-20 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M2 7h20M2 12h20M2 17h20" />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Featured work preview. Clean code, pragmatic patterns, robust testing, and a sharp
                  eye for detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Projects</h2>
            <p className="text-gray-600 mt-1">
              Selected projects demonstrating engineering, UX, and performance.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center text-sm font-medium"
            style={{ color: COLORS.primary }}
          >
            View all
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-500/10 to-gray-50 mb-4 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-12 w-12 text-blue-600 group-hover:scale-105 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M4 17V7a2 2 0 0 1 2-2h9l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    <path d="M15 5v4h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-md bg-gray-50 text-gray-700 px-2 py-1 text-[11px] font-medium ring-1 ring-inset ring-gray-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.link}
                    className="text-sm font-medium hover:underline"
                    style={{ color: COLORS.primary }}
                  >
                    Live
                  </a>
                  <a
                    href={p.repo}
                    className="text-sm font-medium hover:underline text-gray-700"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About + Skills */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-8 items-start"
      >
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About</h2>
          <p className="mt-3 text-gray-600">
            I enjoy translating complex requirements into simple, usable interfaces. I value
            accessibility, design systems, component ergonomics, and performance budgets. I ship with
            type safety, tests, and thoughtful documentation.
          </p>
          <div className="mt-6 rounded-xl bg-white border border-gray-100 shadow-sm p-6">
            <h3 className="font-semibold text-gray-900">Approach</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Design tokens and accessible components first.</li>
              <li>Performance as a feature: code-splitting and sensible loading states.</li>
              <li>Automated checks: type-safety and linting to prevent regressions.</li>
            </ul>
          </div>
        </div>

        <aside id="skills" className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-4 space-y-4">
            {skills.map((s) => (
              <div key={s.name} className="rounded-lg bg-white border border-gray-100 shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs text-gray-500">{s.level}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.level}%`,
                      background:
                        "linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(245,158,11,1) 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-16"
        aria-labelledby="contact-heading"
      >
        <div className="rounded-2xl border border-blue-100 bg-white shadow-sm p-6 md:p-10">
          <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
            <div>
              <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold text-gray-900">
                Get in touch
              </h2>
              <p className="mt-1 text-gray-600">
                Have a question or want to work together? Send a message.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                aria-label="GitHub"
                href="#"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full ring-1 ring-inset ring-gray-200 text-gray-600 hover:text-gray-900 hover:ring-gray-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.68-1.29-1.68-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.77 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18A11 11 0 0 1 12 6.8c.99.01 1.98.13 2.91.37 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.8 1.07.8 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full ring-1 ring-inset ring-gray-200 text-gray-600 hover:text-gray-900 hover:ring-gray-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h3.96v12H3zM9.5 9H13v1.64h.05c.49-.93 1.7-1.9 3.5-1.9 3.74 0 4.43 2.46 4.43 5.66V21H17V15.2c0-1.38-.02-3.16-1.93-3.16-1.94 0-2.24 1.5-2.24 3.06V21H9.5z" />
                </svg>
              </a>
              <a
                aria-label="Email"
                href="mailto:hello@example.com"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full ring-1 ring-inset ring-gray-200 text-gray-600 hover:text-gray-900 hover:ring-gray-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.3l8 4.7 8-4.7V6.5a.5.5 0 0 0-.5-.5h-15Zm15.5 3.6-7.66 4.5a1 1 0 0 1-1.18 0L3.5 9.6V17.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V9.6Z" />
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Jane Doe"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="jane@example.com"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Let’s build something great together..."
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:shadow-md transition-all disabled:opacity-60"
                style={{ backgroundColor: COLORS.primary }}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
              {status.type === "success" && (
                <p className="text-sm" style={{ color: COLORS.secondary }}>
                  {status.message}
                </p>
              )}
              {status.type === "error" && (
                <p className="text-sm" style={{ color: COLORS.error }}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ocean Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:text-blue-700 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm hover:text-blue-700 transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm hover:text-blue-700 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-blue-700 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
