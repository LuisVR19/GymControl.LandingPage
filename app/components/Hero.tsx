"use client";

import ArrowIcon from "./icons/ArrowIcon";
import PlayIcon from "./icons/PlayIcon";
import CheckIcon from "./icons/CheckIcon";
import FlameIcon from "./icons/FlameIcon";
import PhoneMockup from "./PhoneMockup";
import content from "../data/content.json";

const { hero } = content;

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-sec"
      style={{
        background: "var(--page-bg)",
        color: "var(--page-ink)",
        padding: "180px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* halo */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, oklch(0.85 0.18 130) 0%, transparent 60%)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
      {/* grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(245,244,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,244,238,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="rsp-px hero-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* left */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 2.2,
              textTransform: "uppercase",
              color: "var(--ink-4)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 18,
                height: 1,
                background: "currentColor",
                opacity: 0.5,
                display: "inline-block",
              }}
            />
            {hero.eyebrow}
          </div>

          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 84,
              lineHeight: 0.96,
              letterSpacing: -2.5,
              margin: "24px 0 28px",
            }}
          >
            {hero.headline}
            <br />
            sin{" "}
            <span style={{ color: "var(--accent)" }}>{hero.headlineAccent}</span>.
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--ink-4)",
              maxWidth: 520,
              margin: "0 0 36px",
            }}
          >
            {hero.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <a
              href="#cta"
              style={{
                padding: "14px 22px",
                borderRadius: 12,
                background: "var(--accent)",
                color: "var(--accent-ink)",
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {hero.ctaPrimary}{" "}
              <ArrowIcon size={14} />
            </a>
            <a
              href="#producto"
              style={{
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid rgba(245,244,238,0.10)",
                color: "var(--page-ink)",
                fontSize: 15,
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 22,
                  background: "var(--page-ink)",
                  color: "var(--page-bg)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlayIcon size={9} />
              </span>
              {hero.ctaSecondary}
            </a>
          </div>

          {/* social proof */}
          <div
            style={{
              display: "flex",
              gap: 32,
              alignItems: "center",
              paddingTop: 24,
              borderTop: "1px solid rgba(245,244,238,0.06)",
            }}
          >
            {hero.stats.map((stat, i) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                {i > 0 && (
                  <div
                    style={{
                      width: 1,
                      height: 36,
                      background: "rgba(245,244,238,0.06)",
                      marginRight: -16,
                    }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      fontWeight: 600,
                      letterSpacing: -1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--ink-4)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right — phone mockup */}
        <div
          className="hero-phones"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 680,
          }}
        >
          {/* glow */}
          <div
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, oklch(0.85 0.18 130) 0%, transparent 65%)",
              opacity: 0.18,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* secondary phone behind */}
          <div
            className="hero-sec-phone"
            style={{
              position: "absolute",
              top: 60,
              right: -30,
              transform: "rotate(8deg) scale(0.82)",
              opacity: 0.55,
              pointerEvents: "none",
            }}
          >
            <PhoneMockup>
              <div
                style={{
                  height: "100%",
                  background: "#0E0E0C",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-display)",
                }}
              >
                <div
                  style={{
                    fontSize: 56,
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  {hero.mockupRecord.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: 1.5,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {hero.mockupRecord.label}
                </div>
              </div>
            </PhoneMockup>
          </div>

          {/* primary phone */}
          <div
            style={{ position: "relative", zIndex: 2, transform: "scale(0.92)", transformOrigin: "center" }}
          >
            <PhoneMockup>
              <ClientAppPreview />
            </PhoneMockup>
          </div>

          {/* badge top left */}
          <div
            className="hero-badge"
            style={{
              position: "absolute",
              top: 80,
              left: 0,
              zIndex: 3,
              background: "rgba(245,244,238,0.06)",
              border: "1px solid rgba(245,244,238,0.10)",
              borderRadius: 14,
              padding: "12px 14px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              maxWidth: 230,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--accent)",
                color: "var(--accent-ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CheckIcon size={18} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>
                {hero.badgePayment.title}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--ink-4)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {hero.badgePayment.detail}
              </div>
            </div>
          </div>

          {/* badge bottom right */}
          <div
            className="hero-badge"
            style={{
              position: "absolute",
              bottom: 80,
              right: -10,
              zIndex: 3,
              background: "rgba(245,244,238,0.06)",
              border: "1px solid rgba(245,244,238,0.10)",
              borderRadius: 14,
              padding: "12px 14px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              maxWidth: 230,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(245,244,238,0.10)",
                color: "var(--page-ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FlameIcon size={16} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>
                {hero.badgeStreak.title}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--ink-4)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {hero.badgeStreak.detail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientAppPreview() {
  const app = hero.mockupApp;
  return (
    <div
      style={{
        height: "100%",
        background: "#0E0E0C",
        padding: "60px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        overflowY: "hidden",
      }}
    >
      {/* top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, color: "#5A5A52", textTransform: "uppercase" }}>{app.date}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "#F5F4EE", letterSpacing: -0.5 }}>{app.greeting}</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 36, background: "#161614", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#A0A097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      {/* hero workout card */}
      <div style={{ background: "#F5F4EE", color: "#0E0E0C", borderRadius: 20, padding: 20, position: "relative", overflow: "hidden" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(14,14,12,0.5)", marginBottom: 10 }}>{app.workout.dayLabel}</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: -1, lineHeight: 1.05, marginBottom: 16 }}>
          {app.workout.name}
        </div>
        <div style={{ display: "flex", gap: 18, marginBottom: 16, fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(14,14,12,0.6)" }}>
          <span><b style={{ color: "#0E0E0C", fontFamily: "var(--font-display)", fontSize: 16 }}>{app.workout.exercises}</b> ejercicios</span>
          <span><b style={{ color: "#0E0E0C", fontFamily: "var(--font-display)", fontSize: 16 }}>{app.workout.duration}</b> min</span>
        </div>
        <div style={{ width: "100%", padding: "12px 16px", borderRadius: 12, background: "var(--accent)", color: "var(--accent-ink)", fontSize: 13, fontWeight: 600, textAlign: "center", fontFamily: "var(--font-display)" }}>
          {app.workout.cta}
        </div>
      </div>

      {/* stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ background: "#161614", borderRadius: 16, padding: 16 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#5A5A52" }}>{app.statsWeek.label}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: -1, color: "#F5F4EE", marginTop: 4 }}>
            {app.statsWeek.value}<span style={{ color: "#5A5A52", fontSize: 16 }}>/{app.statsWeek.total}</span>
          </div>
          <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
            {[1,1,1,0,0].map((v,i) => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: v ? "var(--accent)" : "#0A0A09" }} />
            ))}
          </div>
        </div>
        <div style={{ background: "#161614", borderRadius: 16, padding: 16 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#5A5A52" }}>{app.statsStreak.label}</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 4 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: -1, color: "#F5F4EE" }}>{app.statsStreak.value}</div>
            <div style={{ color: "#A0A097", fontSize: 11 }}>{app.statsStreak.unit}</div>
          </div>
          <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 8, fontFamily: "var(--font-mono)" }}>{app.statsStreak.badge}</div>
        </div>
      </div>

      {/* bottom nav */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "8px 12px 20px",
        background: "rgba(14,14,12,0.9)",
        backdropFilter: "blur(20px)",
        borderTop: "0.5px solid rgba(245,244,238,0.08)",
        display: "flex",
        justifyContent: "space-around",
      }}>
        {app.bottomNav.map((label, i) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, color: i === 0 ? "#F5F4EE" : "#5A5A52" }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: i === 0 ? "var(--accent)" : "transparent" }} />
            <span style={{ fontSize: 8, fontWeight: 500 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
