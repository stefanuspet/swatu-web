import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "CV. Swatu Engineering — Structural Design Consultant",
  description:
    "CV. Swatu Engineering delivers safe, precise, and reliable structural solutions. Structural drawings, calculation reports, technical specifications, and SKK for PBG.",
  keywords: [
    "structural engineering",
    "konsultan struktur",
    "PBG",
    "gambar struktur",
    "Yogyakarta",
    "Jakarta",
    "Bali",
    "Swatu Engineering",
  ],
  openGraph: {
    title: "CV. Swatu Engineering",
    description: "Structural Design Consultant — Safe, Precise, Reliable",
    type: "website",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/api/og?title=CV. Swatu Engineering&description=Structural Design Consultant`,
        width: 1200,
        height: 630,
        alt: "CV. Swatu Engineering",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Swatu Engineering",
    description: "Structural Design Consultant — Safe, Precise, Reliable",
    images: [
      `${baseUrl}/api/og?title=CV. Swatu Engineering&description=Structural Design Consultant`,
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
