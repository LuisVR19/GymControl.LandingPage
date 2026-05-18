import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forja — Software para gimnasios",
  description:
    "Forja conecta a tus socios y a tu operación en una sola plataforma: app móvil para entrenar y pagar, panel web para administrar sedes, rutinas, cobros y crecimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
      style={
        {
          "--font-display": "var(--font-inter-tight), -apple-system, system-ui, sans-serif",
          "--font-ui": "var(--font-inter), -apple-system, system-ui, sans-serif",
          "--font-mono": "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, monospace",
        } as React.CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
}
