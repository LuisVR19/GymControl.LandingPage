import {
  DumbbellIcon,
  ChartIcon,
  CalendarIcon,
  CardIcon,
} from "./icons";
import PhoneMockup from "./PhoneMockup";
import content from "../data/content.json";

const { clientFeatures } = content;

type IconKey = "dumbbell" | "chart" | "calendar" | "card";

const iconMap: Record<IconKey, React.ComponentType<{ size?: number }>> = {
  dumbbell: DumbbellIcon,
  chart: ChartIcon,
  calendar: CalendarIcon,
  card: CardIcon,
};

export default function ClientFeatures() {
  return (
    <section
      id="cliente"
      style={{
        background: "var(--page-bg)",
        color: "var(--page-ink)",
        padding: "120px 0",
      }}
    >
      <div className="rsp-px" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="cf-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* left – phones */}
          <div
            className="cf-phones"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              minHeight: 680,
            }}
          >
            {/* secondary phone */}
            <div
              className="cf-phone-bg"
              style={{
                position: "absolute",
                top: 20,
                left: "30%",
                transform: "rotate(-6deg) scale(0.78)",
                zIndex: 1,
                opacity: 0.85,
              }}
            >
              <PhoneMockup>
                <ProgressPreview />
              </PhoneMockup>
            </div>
            {/* primary phone */}
            <div
              className="cf-phone-pri"
              style={{ position: "relative", zIndex: 2, transform: "translateX(40px)" }}
            >
              <PhoneMockup>
                <WorkoutPreview />
              </PhoneMockup>
            </div>
          </div>

          {/* right – copy */}
          <div className="cf-copy">
            <Eyebrow color="var(--ink-4)">{clientFeatures.eyebrow}</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 52,
                fontWeight: 600,
                letterSpacing: -1.6,
                lineHeight: 1.02,
                margin: "20px 0 24px",
              }}
            >
              {clientFeatures.headline}
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--ink-4)",
                lineHeight: 1.6,
                margin: "0 0 40px",
              }}
            >
              {clientFeatures.description}
            </p>

            <div
              className="cf-feat"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {clientFeatures.features.map((f) => {
                const Icon = iconMap[f.icon as IconKey];
                return (
                  <div
                    key={f.title}
                    style={{
                      padding: 20,
                      borderRadius: 16,
                      background: "rgba(245,244,238,0.04)",
                      border: "1px solid rgba(245,244,238,0.10)",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(245,244,238,0.08)",
                        color: "var(--page-ink)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 17,
                        fontWeight: 600,
                        margin: "0 0 6px",
                        letterSpacing: -0.3,
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--ink-4)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Eyebrow({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: 2.2,
        textTransform: "uppercase",
        color: color || "var(--ink-3)",
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

function WorkoutPreview() {
  const { workoutMockup: wm } = clientFeatures;
  return (
    <div
      style={{
        height: "100%",
        background: "#0E0E0C",
        padding: "60px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        overflowY: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "#F5F4EE" }}>{wm.title}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)" }}>{wm.progress}</div>
      </div>
      <div style={{ background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 16, padding: 16, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>{wm.timerLabel}</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 600, letterSpacing: -2, lineHeight: 1 }}>{wm.timerValue}</div>
        <div style={{ fontSize: 11, marginTop: 8, opacity: 0.7 }}>{wm.timerDetail}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {wm.exercises.map((ex, i) => (
          <div key={ex.name} style={{ background: "#161614", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 10, opacity: i === 0 ? 1 : 0.5 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "var(--accent)" : "#5A5A52", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F5F4EE" }}>{ex.name}</div>
              <div style={{ fontSize: 10, color: "#5A5A52", fontFamily: "var(--font-mono)" }}>{ex.sets}×{ex.reps} · {ex.last}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressPreview() {
  const { progressMockup: pm } = clientFeatures;
  const maxVal = pm.chartMax;
  return (
    <div
      style={{
        height: "100%",
        background: "#0E0E0C",
        padding: "60px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        overflowY: "hidden",
      }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "#F5F4EE" }}>{pm.title}</div>
      <div style={{ background: "#161614", borderRadius: 16, padding: 16 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#5A5A52", marginBottom: 8 }}>{pm.weightLabel}</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, color: "#F5F4EE", letterSpacing: -1 }}>{pm.weightValue}<span style={{ fontSize: 16, color: "#5A5A52" }}>{pm.weightUnit}</span></div>
        <div style={{ fontSize: 11, color: "var(--accent)", fontFamily: "var(--font-mono)", marginTop: 4 }}>{pm.weightTrend}</div>
        {/* chart bars */}
        <div style={{ display: "flex", gap: 6, alignItems: "flex-end", marginTop: 16, height: 60 }}>
          {pm.chartValues.map((v, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: "100%", borderRadius: 4, background: i === pm.chartValues.length - 1 ? "var(--accent)" : "#2B2B27", height: `${(v / maxVal) * 60}px` }} />
              <div style={{ fontSize: 8, color: "#5A5A52", fontFamily: "var(--font-mono)" }}>{pm.chartMonths[i]}</div>
            </div>
          ))}
        </div>
      </div>
      {/* stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {pm.stats.map((s) => (
          <div key={s.label} style={{ background: "#161614", borderRadius: 12, padding: 12 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#5A5A52" }}>{s.label}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "#F5F4EE", marginTop: 4 }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
