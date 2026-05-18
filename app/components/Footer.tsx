"use client";

const cols = [
  {
    t: "Producto",
    items: ["Panel del dueño", "App del socio", "Integraciones", "Cambios"],
  },
  {
    t: "Compañía",
    items: [
      "Sobre Forja",
      "Clientes",
      "Trabajá con nosotros",
      "Prensa",
    ],
  },
  {
    t: "Recursos",
    items: [
      "Centro de ayuda",
      "Estado del servicio",
      "Política de privacidad",
      "Términos",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--page-bg)",
        color: "var(--page-ink)",
        padding: "60px 0 40px",
        borderTop: "1px solid rgba(245,244,238,0.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
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
                }}
              >
                F
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Forja
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--ink-4)",
                lineHeight: 1.55,
                margin: "0 0 12px",
                maxWidth: 280,
              }}
            >
              Software para gimnasios independientes y cadenas en Costa Rica.
            </p>
            <div
              style={{
                fontSize: 12,
                color: "var(--ink-4)",
                fontFamily: "var(--font-mono)",
              }}
            >
              San José, CR · hola@forja.app
            </div>
          </div>

          {/* link columns */}
          {cols.map((col) => (
            <div key={col.t}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: "var(--ink-4)",
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                {col.t}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        color: "var(--page-ink)",
                        fontSize: 13,
                        opacity: 0.7,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "0.7")
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245,244,238,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "var(--ink-4)",
              fontFamily: "var(--font-mono)",
            }}
          >
            © 2026 Forja Software S.A. · Costa Rica
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--ink-4)",
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 8,
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            Todos los sistemas operando
          </div>
        </div>
      </div>
    </footer>
  );
}
