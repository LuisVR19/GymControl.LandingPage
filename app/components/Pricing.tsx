import CheckIcon from "./icons/CheckIcon";
import ArrowIcon from "./icons/ArrowIcon";

const plans = [
  {
    name: "Starter",
    price: "25.000",
    desc: "Una sede, hasta 100 socios.",
    cta: "Empezar 14 días gratis",
    highlight: false,
    features: [
      "App del socio (iOS + Android)",
      "Panel web · 2 cuentas de staff",
      "Cobros con tarjeta y SINPE",
      "Rutinas y agenda",
      "Soporte por chat",
    ],
  },
  {
    name: "Growth",
    price: "55.000",
    desc: "Hasta 3 sedes, socios ilimitados.",
    cta: "Probar Growth",
    highlight: true,
    features: [
      "Todo lo de Starter",
      "Multi-sede con consolidado",
      "Reportes avanzados y exportación",
      "Cuentas de staff ilimitadas",
      "Onboarding asistido",
      "Soporte prioritario",
    ],
  },
  {
    name: "Cadena",
    price: "A medida",
    desc: "Más de 3 sedes o operación regional.",
    cta: "Hablemos",
    highlight: false,
    features: [
      "Todo lo de Growth",
      "API y webhooks",
      "SLA y manager dedicado",
      "Integración con tu contabilidad",
      "Despliegue regional",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 60px" }}
        >
          <Eyebrow>Precios</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: -1.6,
              lineHeight: 1.02,
              margin: "20px 0 18px",
            }}
          >
            Precios honestos, en colones.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-3)",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Sin contratos largos, sin comisiones sobre tus cobros, sin
            sorpresas. Cancelás cuando querés.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {plans.map((p) => (
            <div
              key={p.name}
              style={{
                borderRadius: 24,
                padding: "32px 28px",
                background: p.highlight ? "var(--page-bg)" : "var(--cream-sunk)",
                color: p.highlight ? "var(--page-ink)" : "var(--ink)",
                border: p.highlight ? "none" : "1px solid var(--line)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {p.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "var(--accent-ink)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: 1.5,
                    padding: "5px 12px",
                    borderRadius: 99,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  MÁS POPULAR
                </div>
              )}

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    color: p.highlight ? "var(--ink-4)" : "var(--ink-3)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{ display: "flex", alignItems: "baseline", gap: 6 }}
                >
                  {p.price !== "A medida" && (
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      ₡
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 48,
                      fontWeight: 600,
                      letterSpacing: -1.6,
                      lineHeight: 1,
                    }}
                  >
                    {p.price}
                  </span>
                  {p.price !== "A medida" && (
                    <span
                      style={{
                        fontSize: 13,
                        color: p.highlight ? "var(--ink-4)" : "var(--ink-3)",
                      }}
                    >
                      /mes
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: p.highlight ? "var(--ink-4)" : "var(--ink-3)",
                    marginTop: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {p.desc}
                </div>
              </div>

              <a
                href="#cta"
                style={{
                  padding: "12px 16px",
                  borderRadius: 12,
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  background: p.highlight ? "var(--accent)" : "var(--ink)",
                  color: p.highlight ? "var(--accent-ink)" : "var(--cream)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                {p.cta} <ArrowIcon size={13} />
              </a>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderTop: `1px solid ${p.highlight ? "rgba(245,244,238,0.06)" : "rgba(14,14,12,0.08)"}`,
                  paddingTop: 18,
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: p.highlight ? "var(--page-ink)" : "var(--ink-2)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <CheckIcon size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 13,
            color: "var(--ink-3)",
            fontFamily: "var(--font-mono)",
            letterSpacing: 0.3,
          }}
        >
          Todos los precios incluyen IVA · Sin costo de instalación · Migración gratis
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
