const steps = [
  {
    n: "01",
    t: "Te damos de alta",
    d: "En una llamada de 30 minutos migramos tu base de socios, planes y cobros. Sin pelearte con un CSV.",
  },
  {
    n: "02",
    t: "Cargás tu gym",
    d: "Sedes, planes, rutinas y staff. Te acompañamos en la primera semana hasta que cada coach esté operando.",
  },
  {
    n: "03",
    t: "Tus socios entran",
    d: "Cada miembro se registra con QR y la app les pide los pagos pendientes. Cero cobros perdidos desde día 1.",
  },
  {
    n: "04",
    t: "Crecé sin caos",
    d: "Abrí más sedes, sumá coaches, lanzá planes nuevos. Forja escala con vos sin romper la operación.",
  },
];

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
          <Eyebrow>Cómo funciona</Eyebrow>
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
            De Excel al cierre de mes, en una semana.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {steps.map((s, i) => (
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
                {s.t}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-3)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {s.d}
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
