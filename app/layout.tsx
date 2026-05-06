import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "madebykuro | Graphic Artist & Video Editor",
  description:
    "madebykuro — Graphic artist and video editor. Creator of beat-sync CapCut templates, promotional design, and digital content inspired by Filipino hip-hop and OPM.",
  keywords: [
    "graphic design",
    "video editing",
    "CapCut templates",
    "madebykuro",
    "Filipino artist",
    "beat-sync",
    "digital design",
    "Canva",
    "Adobe Illustrator",
  ],
  authors: [{ name: "madebykuro" }],
  creator: "madebykuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
