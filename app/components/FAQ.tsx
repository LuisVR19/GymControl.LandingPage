"use client";

import { useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";

const items = [
  {
    q: "¿Necesito instalar algo?",
    a: "No. Forja funciona desde el navegador para el panel del dueño y desde la App Store / Play Store para tus socios. No hay servidores, ni instaladores, ni licencias.",
  },
  {
    q: "¿Qué pasa con mis datos actuales?",
    a: "Te migramos. Mandanos un Excel, una exportación de tu sistema actual o una foto del cuaderno. En la llamada de onboarding lo cargamos por vos.",
  },
  {
    q: "¿Cobran comisión sobre los pagos?",
    a: "No. Pagás la mensualidad de Forja y nada más de nuestra parte. Solo se aplican las comisiones del procesador de tarjeta (Stripe), igual que en cualquier comercio.",
  },
  {
    q: "¿Puedo cancelar?",
    a: "Sí, cuando quieras. Sin penalización. Te entregamos toda tu data exportada antes de irte.",
  },
  {
    q: "¿Funciona si tengo varias sedes?",
    a: "Sí. El plan Growth está pensado para multi-sede: un login, vista consolidada, permisos por sucursal. Si tenés más de 3 sedes te armamos un plan a medida.",
  },
  {
    q: "¿Mis socios necesitan crear cuenta?",
    a: "Lo hacen una vez al afiliarse con el QR del gym. Después entran con biometría. La fricción es mínima — está diseñado para que un socio nuevo esté pagando en menos de 90 segundos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      style={{
        background: "var(--cream-sunk)",
        color: "var(--ink)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: 80,
            alignItems: "flex-start",
          }}
        >
          {/* sticky left */}
          <div style={{ position: "sticky", top: 120 }}>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 48,
                fontWeight: 600,
                letterSpacing: -1.5,
                lineHeight: 1.02,
                margin: "20px 0 20px",
              }}
            >
              Todo lo que querés preguntar antes de la demo.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--ink-3)",
                lineHeight: 1.55,
                margin: "0 0 20px",
              }}
            >
              ¿No ves tu pregunta? Escribinos directamente.
            </p>
            <a
              href="mailto:hola@forja.app"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 2,
              }}
            >
              hola@forja.app <ArrowIcon size={12} />
            </a>
          </div>

          {/* accordion right */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q} style={{ borderTop: "1px solid var(--line)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "22px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 20,
                      fontFamily: "var(--font-display)",
                      fontSize: 19,
                      fontWeight: 500,
                      color: "var(--ink)",
                      letterSpacing: -0.3,
                    }}
                  >
                    <span>{it.q}</span>
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 32,
                        background: isOpen ? "var(--ink)" : "transparent",
                        border: "1px solid var(--line)",
                        color: isOpen ? "var(--cream)" : "var(--ink-3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.2s",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 0 22px",
                        fontSize: 15,
                        color: "var(--ink-3)",
                        lineHeight: 1.6,
                        maxWidth: 600,
                      }}
                    >
                      {it.a}
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid var(--line)" }} />
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
