"use client";

import content from "../data/content.json";

const { footer, brand } = content;

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
              <div style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/logo-gym-cropped.png"
                  alt={brand.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {brand.name}
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
              {brand.description}
            </p>
            <div
              style={{
                fontSize: 12,
                color: "var(--ink-4)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {brand.location} · {brand.email}
            </div>
          </div>

          {/* link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
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
                {col.title}
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
            {footer.copyright}
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
            {footer.statusText}
          </div>
        </div>
      </div>
    </footer>
  );
}
