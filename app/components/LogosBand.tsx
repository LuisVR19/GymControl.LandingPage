const logos = [
  "SABANA FIT",
  "FORJA CENTRAL",
  "IRONWORKS",
  "NORTE GYM",
  "CASA STRENGTH",
  "HÉROES CLUB",
];

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
          GIMNASIOS QUE OPERAN CON FORJA
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${logos.length}, 1fr)`,
            gap: 24,
            alignItems: "center",
            opacity: 0.7,
          }}
        >
          {logos.map((t) => (
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
