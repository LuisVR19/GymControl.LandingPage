"use client";

import { useEffect, useState } from "react";
import content from "../data/content.json";

const { nav, brand } = content;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
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
          className="rsp-px"
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
            <div style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="/logo-gym-cropped.png"
                alt={brand.name}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: -0.4,
              }}
            >
              {brand.name}
            </span>
          </a>

          <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "var(--ink-4)",
                  fontSize: 13,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--page-ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-4)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-ctas" style={{ display: "flex", gap: 10, alignItems: "center" }}>
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
              {nav.ctaSecondary}
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
              {nav.ctaPrimary}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--page-bg)",
            display: "flex",
            flexDirection: "column",
            padding: "20px 20px 40px",
          }}
        >
          {/* top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <a
              href="#top"
              onClick={close}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <div style={{ width: 36, height: 36 }}>
                <img src="/logo-gym-cropped.png" alt={brand.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600 }}>{brand.name}</span>
            </a>
            <button
              onClick={close}
              aria-label="Cerrar menú"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--page-ink)", padding: 8, borderRadius: 8 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* links */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: -1,
                  color: "var(--page-ink)",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(245,244,238,0.06)",
                  display: "block",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#cta"
            onClick={close}
            style={{
              display: "block",
              padding: "16px",
              borderRadius: 12,
              background: "var(--accent)",
              color: "var(--accent-ink)",
              textAlign: "center",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {nav.ctaPrimary}
          </a>
        </div>
      )}
    </>
  );
}
