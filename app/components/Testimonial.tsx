import content from "../data/content.json";

const { testimonial } = content;

export default function Testimonial() {
  return (
    <section
      style={{
        background: "var(--cream-sunk)",
        color: "var(--ink)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              fontWeight: 300,
              color: "var(--accent)",
              lineHeight: 0,
              marginBottom: 20,
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 34,
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: -0.8,
              margin: "0 0 32px",
            }}
          >
            {testimonial.quote}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 48,
                background: "var(--ink)",
                color: "var(--cream)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {testimonial.authorInitials}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{testimonial.authorName}</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {testimonial.authorTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
