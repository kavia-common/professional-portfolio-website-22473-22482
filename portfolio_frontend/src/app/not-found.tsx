import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-blue-500/10 to-transparent">
      <section className="w-full max-w-xl rounded-2xl bg-white border border-blue-100 shadow-sm p-8 text-center">
        <div className="mx-auto h-14 w-14 rounded-xl bg-blue-50 ring-1 ring-blue-200 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 8v4m0 4h.01M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3Z" />
          </svg>
        </div>
        <h1 className="mt-5 text-2xl font-bold text-gray-900">404 — Page Not Found</h1>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
