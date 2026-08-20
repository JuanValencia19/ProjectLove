import type { Metadata } from "next";
import { Bungee_Inline, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Bungee_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const serif = Playfair_Display({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter_Tight({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ProjectLove — Nuestra historia en cada universo",
  description:
    "Una historia de amor interactiva y cinematográfica: recuerdos, cartas y momentos contados como un cómic.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body className="bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}