import ArrowIcon from "./icons/ArrowIcon";
import CheckIcon from "./icons/CheckIcon";
import content from "../data/content.json";

const { finalCta, brand } = content;

export default function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        background: "var(--page-bg)",
        color: "var(--page-ink)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 32,
            padding: "80px 60px",
            background:
              "linear-gradient(135deg, oklch(0.85 0.18 130) 0%, oklch(0.78 0.18 130) 100%)",
            color: "var(--accent-ink)",
            overflow: "hidden",
          }}
        >
          {/* decorative circle */}
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(14,14,12,0.05)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 0.6fr",
              gap: 60,
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* left */}
            <div>
              <Eyebrow>{finalCta.eyebrow}</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 64,
                  fontWeight: 600,
                  letterSpacing: -2,
                  lineHeight: 0.98,
                  margin: "20px 0 24px",
                }}
              >
                {finalCta.headlineLine1}
                <br />
                {finalCta.headlineLine2}
              </h2>
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(14,14,12,0.7)",
                  lineHeight: 1.55,
                  margin: "0 0 36px",
                  maxWidth: 540,
                }}
              >
                {finalCta.description}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={`mailto:${brand.email}`}
                  style={{
                    padding: "16px 24px",
                    borderRadius: 12,
                    background: "var(--ink)",
                    color: "var(--cream)",
                    fontSize: 15,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {finalCta.ctaPrimary} <ArrowIcon size={14} />
                </a>
                <a
                  href="#producto"
                  style={{
                    padding: "16px 22px",
                    borderRadius: 12,
                    background: "rgba(14,14,12,0.08)",
                    color: "var(--ink)",
                    fontSize: 15,
                    fontWeight: 600,
                    border: "1px solid rgba(14,14,12,0.15)",
                  }}
                >
                  {finalCta.ctaSecondary}
                </a>
              </div>
            </div>

            {/* right — demo card */}
            <div>
              <div
                style={{
                  background: "var(--ink)",
                  color: "var(--cream)",
                  borderRadius: 20,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    color: "var(--ink-4)",
                  }}
                >
                  {finalCta.demoCard.title}
                </div>
                {finalCta.demoCard.items.map((t) => (
                  <div
                    key={t}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>
                      <CheckIcon size={14} />
                    </span>
                    {t}
                  </div>
                ))}
                <div
                  style={{
                    borderTop: "1px solid rgba(245,244,238,0.10)",
                    marginTop: 6,
                    paddingTop: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: 1,
                      color: "var(--ink-4)",
                    }}
                  >
                    {finalCta.demoCard.durationLabel}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 600,
                      marginTop: 4,
                    }}
                  >
                    {finalCta.demoCard.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: 2.2,
        textTransform: "uppercase",
        color: "rgba(14,14,12,0.6)",
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
      {children}
    </div>
  );
}
