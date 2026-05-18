"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#producto", label: "Producto" },
  { href: "#owner", label: "Para dueños" },
  { href: "#cliente", label: "Para socios" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(14,14,12,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(245,244,238,0.06)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
        color: "var(--page-ink)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "var(--accent)",
              color: "var(--accent-ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            F
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: -0.4,
            }}
          >
            Forja
          </span>
        </a>

        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "var(--ink-4)",
                fontSize: 13,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--page-ink)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--ink-4)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href="#cta"
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--page-ink)",
              padding: "8px 14px",
              borderRadius: 10,
              border: "1px solid rgba(245,244,238,0.10)",
            }}
          >
            Ver demo
          </a>
          <a
            href="#cta"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--accent-ink)",
              padding: "9px 16px",
              borderRadius: 10,
              background: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Agendar llamada
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
