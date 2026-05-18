import CheckIcon from "./icons/CheckIcon";
import PhoneMockup from "./PhoneMockup";

export default function Producto() {
  return (
    <section
      id="producto"
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto 80px",
          }}
        >
          <Eyebrow>Una plataforma, dos lados</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: -1.8,
              lineHeight: 1,
              margin: "20px 0",
            }}
          >
            Tus socios entrenan.
            <br />
            Vos administrás.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-3)",
              lineHeight: 1.55,
            }}
          >
            Forja viene en dos sabores que comparten datos en tiempo real:
            una app móvil para los miembros y un panel web para el dueño y el
            staff.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* mobile card */}
          <div
            style={{
              background: "var(--page-bg)",
              color: "var(--page-ink)",
              borderRadius: 28,
              padding: "40px 40px 0",
              position: "relative",
              overflow: "hidden",
              minHeight: 760,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Pill dark>iOS · Android</Pill>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 34,
                fontWeight: 600,
                letterSpacing: -1,
                margin: "16px 0 12px",
              }}
            >
              App del socio
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--ink-4)",
                lineHeight: 1.55,
                margin: "0 0 20px",
                maxWidth: 380,
              }}
            >
              Rutinas asignadas, ejecución guiada, progreso, pagos y agenda.
              Pensada para usarse en el suelo del gym, con una mano.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "Rutinas con sets, reps y tempo",
                "Timer de descanso integrado",
                "Historial de pagos y recibos",
                "Notificaciones del coach",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "var(--page-ink)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 18,
                      background: "var(--accent)",
                      color: "var(--accent-ink)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon size={11} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div
              style={{
                flex: 1,
                position: "relative",
                marginTop: "auto",
                minHeight: 340,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: "50%",
                  transform: "translateX(-50%) scale(0.62)",
                  transformOrigin: "bottom center",
                }}
              >
                <PhoneMockup>
                  <MobileAppPreview />
                </PhoneMockup>
              </div>
            </div>
          </div>

          {/* web card */}
          <div
            style={{
              background: "var(--cream-sunk)",
              color: "var(--ink)",
              borderRadius: 28,
              padding: "40px 40px 0",
              position: "relative",
              overflow: "hidden",
              minHeight: 760,
              border: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Pill>Web · Tablet</Pill>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 34,
                fontWeight: 600,
                letterSpacing: -1,
                margin: "16px 0 12px",
              }}
            >
              Panel del dueño
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--ink-3)",
                lineHeight: 1.55,
                margin: "0 0 20px",
                maxWidth: 380,
              }}
            >
              Operación completa: socios, rutinas, cobros, reportes y
              multi-sede. Todo en un dashboard que cabe en una pantalla.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "Dashboard con métricas en vivo",
                "Cobros automáticos · Stripe",
                "Constructor de rutinas",
                "Multi-sede con un solo login",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 18,
                      background: "var(--ink)",
                      color: "var(--cream)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon size={11} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div
              style={{
                flex: 1,
                position: "relative",
                marginTop: "auto",
                minHeight: 340,
                overflow: "hidden",
              }}
            >
              <OwnerDashboardPreview />
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

function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 10px",
        borderRadius: 99,
        fontSize: 11,
        fontFamily: "var(--font-mono)",
        letterSpacing: 0.6,
        background: dark
          ? "rgba(245,244,238,0.08)"
          : "rgba(14,14,12,0.05)",
        color: dark ? "var(--ink-4)" : "var(--ink-3)",
        border: `1px solid ${dark ? "rgba(245,244,238,0.10)" : "rgba(14,14,12,0.08)"}`,
      }}
    >
      {children}
    </span>
  );
}

function MobileAppPreview() {
  return (
    <div
      style={{
        height: "100%",
        background: "#0E0E0C",
        padding: "60px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "#F5F4EE" }}>Rutinas</div>
          <div style={{ fontSize: 12, color: "#5A5A52", marginTop: 2 }}>Push / Pull / Legs · Sem 4 de 8</div>
        </div>
      </div>
      {["Push · Pecho/Tríceps", "Pull · Espalda/Bíceps", "Legs · Tren inferior"].map((name, i) => (
        <div
          key={name}
          style={{
            background: "#161614",
            borderRadius: 16,
            padding: 16,
            border: i === 0 ? "1.5px solid var(--accent)" : "none",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, color: i === 0 ? "#F5F4EE" : "#5A5A52", textTransform: "uppercase", marginBottom: 4 }}>
                {["Hoy", "Mañana", "Mié"][i]}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "#F5F4EE" }}>{name}</div>
            </div>
            {i === 0 && (
              <div style={{ background: "var(--accent)", color: "var(--accent-ink)", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 0.5, padding: "3px 8px", borderRadius: 99 }}>Hoy</div>
            )}
          </div>
          <div style={{ display: "flex", gap: 14, fontSize: 11, color: "#5A5A52", fontFamily: "var(--font-mono)" }}>
            <span>{[8, 7, 6][i]} ejercicios</span>
            <span>{[24, 22, 20][i]} series</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OwnerDashboardPreview() {
  const kpis = [
    { label: "Socios activos", value: "247", change: "+12" },
    { label: "Ingresos · May", value: "₡3.2M", change: "+8%" },
    { label: "Asistencia hoy", value: "43", change: "↑ vs ayer" },
    { label: "Pagos pendientes", value: "18", change: "−3" },
  ];
  return (
    <div
      style={{
        background: "#FAF9F6",
        borderRadius: "12px 12px 0 0",
        padding: 20,
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* topbar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "#0E0E0C" }}>Dashboard</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["Clientes", "Rutinas", "Pagos"].map((s) => (
            <div key={s} style={{ fontSize: 10, padding: "4px 8px", borderRadius: 6, background: "#F2F0EA", color: "#6B6B64", fontFamily: "var(--font-mono)" }}>{s}</div>
          ))}
        </div>
      </div>
      {/* kpi grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ background: "#fff", borderRadius: 10, padding: 12, border: "1px solid rgba(14,14,12,0.08)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#A6A69D", marginBottom: 6 }}>{k.label}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "#0E0E0C", letterSpacing: -0.5 }}>{k.value}</div>
            <div style={{ fontSize: 10, color: "oklch(0.62 0.18 150)", marginTop: 4, fontFamily: "var(--font-mono)" }}>{k.change}</div>
          </div>
        ))}
      </div>
      {/* recent activity */}
      <div style={{ marginTop: 12 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "#A6A69D", marginBottom: 8 }}>Actividad reciente</div>
        {["Cliente 14 · Pago recibido ₡25.000", "Cliente 9 · Nueva membresía Mensual", "Cliente 22 · Cobro pendiente"].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: "1px solid rgba(14,14,12,0.06)" }}>
            <div style={{ width: 28, height: 28, borderRadius: 28, background: "#F2F0EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#0E0E0C", flexShrink: 0 }}>
              {["C14", "C9", "C22"][i]}
            </div>
            <div style={{ fontSize: 11, color: "#2B2B27" }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
