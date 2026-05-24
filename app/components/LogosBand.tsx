import content from "../data/content.json";

const { logosBand } = content;

export default function LogosBand() {
  return (
    <div
      style={{
        background: "var(--page-bg)",
        color: "var(--page-ink)",
        padding: "40px 0 80px",
      }}
    >
      <div
        className="rsp-px"
        style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: 2,
            color: "var(--ink-4)",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          {logosBand.eyebrow}
        </div>
        <div
          className="logos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${logosBand.logos.length}, 1fr)`,
            gap: 24,
            alignItems: "center",
            opacity: 0.7,
          }}
        >
          {logosBand.logos.map((t) => (
            <div
              key={t}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: 1,
                color: "var(--ink-4)",
                textAlign: "center",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
