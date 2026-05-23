import CheckIcon from "./icons/CheckIcon";
import { PhoneFrame, ClientAppMock, BrowserFrame, OwnerAppMock } from "./ProductoMocks";
import content from "../data/content.json";

const { producto } = content;

export default function Producto() {
  const { mobileApp, ownerPanel } = producto;

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
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 80px" }}>
          <Eyebrow>{producto.eyebrow}</Eyebrow>
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
            {producto.headlineLine1}
            <br />
            {producto.headlineLine2}
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-3)", lineHeight: 1.55 }}>
            {producto.description}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
          {/* mobile card */}
          <div style={{
            background: "var(--page-bg)", color: "var(--page-ink)", borderRadius: 28,
            padding: "40px 40px 0", position: "relative", overflow: "hidden",
            minHeight: 760, display: "flex", flexDirection: "column",
          }}>
            <Pill dark>{mobileApp.pill}</Pill>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, letterSpacing: -1, margin: "16px 0 12px" }}>
              {mobileApp.title}
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink-4)", lineHeight: 1.55, margin: "0 0 20px", maxWidth: 380 }}>
              {mobileApp.description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
              {mobileApp.features.map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--page-ink)" }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: 18, background: "var(--accent)", color: "var(--accent-ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <CheckIcon size={11} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ flex: 1, position: "relative", marginTop: "auto", minHeight: 340 }}>
              <div style={{
                position: "absolute", bottom: -40, left: "50%",
                transform: "translateX(-50%) scale(0.62)",
                transformOrigin: "bottom center",
              }}>
                <PhoneFrame width={340} height={720}>
                  <ClientAppMock />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* web card */}
          <div style={{
            background: "var(--cream-sunk)", color: "var(--ink)", borderRadius: 28,
            padding: "40px 40px 0", position: "relative", overflow: "hidden",
            minHeight: 760, border: "1px solid var(--line)", display: "flex", flexDirection: "column",
          }}>
            <Pill>{ownerPanel.pill}</Pill>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, letterSpacing: -1, margin: "16px 0 12px" }}>
              {ownerPanel.title}
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink-3)", lineHeight: 1.55, margin: "0 0 20px", maxWidth: 380 }}>
              {ownerPanel.description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
              {ownerPanel.features.map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: 18, background: "var(--ink)", color: "var(--cream)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <CheckIcon size={11} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ flex: 1, position: "relative", marginTop: "auto", minHeight: 340, overflow: "hidden" }}>
              <div style={{
                position: "absolute", bottom: 0, left: 0, width: "100%",
              }}>
                <div style={{ transform: "scale(0.48)", transformOrigin: "bottom left", width: 1200 }}>
                  <BrowserFrame tab="MyGymGo · Owner" url="mygymgo.app/owner/gym-1" width={1200} height={720}>
                    <OwnerAppMock />
                  </BrowserFrame>
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
    <div style={{
      fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 2.2,
      textTransform: "uppercase", color: "var(--ink-3)",
      display: "inline-flex", alignItems: "center", gap: 8,
    }}>
      <span style={{ width: 18, height: 1, background: "currentColor", opacity: 0.5, display: "inline-block" }}/>
      {children}
    </div>
  );
}

function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "5px 10px",
      borderRadius: 99, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: 0.6,
      background: dark ? "rgba(245,244,238,0.08)" : "rgba(14,14,12,0.05)",
      color: dark ? "var(--ink-4)" : "var(--ink-3)",
      border: `1px solid ${dark ? "rgba(245,244,238,0.10)" : "rgba(14,14,12,0.08)"}`,
    }}>
      {children}
    </span>
  );
}
