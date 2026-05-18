import {
  UsersIcon,
  MoneyIcon,
  DumbbellIcon,
  ChartIcon,
  BellIcon,
  SettingsIcon,
} from "./icons";

const features = [
  {
    Icon: UsersIcon,
    title: "Socios",
    desc: "Altas, bajas, congelamientos y check-in con QR. Cada miembro tiene un perfil con su historial, métricas y pagos.",
  },
  {
    Icon: MoneyIcon,
    title: "Cobros automáticos",
    desc: "Cobrá tarjeta, transferencia o efectivo. Forja envía recordatorios, reintenta cargos fallidos y emite recibos.",
  },
  {
    Icon: DumbbellIcon,
    title: "Rutinas",
    desc: "Construí planes una vez y asignalos por grupo o por socio. Tus coaches editan desde el panel; los socios ven cambios al instante.",
  },
  {
    Icon: ChartIcon,
    title: "Reportes en vivo",
    desc: "Ingresos, asistencia, retención y proyecciones. Filtros por sede, plan y período. Exportá a CSV o PDF.",
  },
  {
    Icon: BellIcon,
    title: "Comunicación",
    desc: "Notificaciones push, anuncios por sede y mensajes 1:1 con socios. Plantillas para mora, renovación y eventos.",
  },
  {
    Icon: SettingsIcon,
    title: "Multi-sede",
    desc: "Una cuenta, todas las sucursales. Roles por staff, permisos por sede, consolidado global. Sin Excel paralelo.",
  },
];

export default function OwnerFeatures() {
  return (
    <section
      id="owner"
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "40px 0 120px",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 80,
            alignItems: "flex-start",
            marginBottom: 60,
          }}
        >
          <div>
            <Eyebrow>Para dueños y staff</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 52,
                fontWeight: 600,
                letterSpacing: -1.6,
                lineHeight: 1.02,
                margin: "20px 0 0",
              }}
            >
              La operación del gym, en un solo panel.
            </h2>
          </div>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-3)",
              lineHeight: 1.6,
              paddingTop: 32,
            }}
          >
            Forja reemplaza la planilla, el cuaderno de cobros, los chats de
            WhatsApp y las apps separadas. Todo lo que necesitás para correr el
            gym vive acá — y se comunica solo con la app del socio.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--cream-sunk)",
                borderRadius: 20,
                padding: 28,
                border: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--ink)",
                  color: "var(--cream)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <f.Icon size={20} />
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: -0.4,
                  margin: 0,
                }}
              >
                {f.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-3)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {f.desc}
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
