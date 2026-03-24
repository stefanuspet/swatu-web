import type { Metadata } from "next";
import "./globals.css";

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
