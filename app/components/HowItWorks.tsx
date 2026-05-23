import content from "../data/content.json";

const { howItWorks } = content;

export default function HowItWorks() {
  return (
    <section
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 70px" }}
        >
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: -1.6,
              lineHeight: 1.02,
              margin: "20px 0",
            }}
          >
            {howItWorks.headline}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {howItWorks.steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: "32px 28px",
                position: "relative",
                borderLeft: i === 0 ? "none" : "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: "var(--accent)",
                  marginBottom: 24,
                  fontWeight: 600,
                }}
              >
                {s.n}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: -0.5,
                  margin: "0 0 12px",
                }}
              >
                {s.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-3)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
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
        color: "var(--ink-3)",
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
