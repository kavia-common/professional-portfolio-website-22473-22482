import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Portfolio — Modern Next.js Portfolio",
  description:
    "A modern Ocean Professional themed portfolio showcasing projects, skills, and contact information.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Ocean Portfolio",
    description:
      "A modern Ocean Professional themed portfolio showcasing projects, skills, and contact information.",
    url: "http://localhost:3000",
    siteName: "Ocean Portfolio",
    images: [],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-200/60 selection:text-blue-900" suppressHydrationWarning>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
