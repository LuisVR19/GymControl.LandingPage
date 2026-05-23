import {
  UsersIcon,
  MoneyIcon,
  DumbbellIcon,
  ChartIcon,
  BellIcon,
  SettingsIcon,
} from "./icons";
import content from "../data/content.json";

const { ownerFeatures } = content;

type IconKey = "users" | "money" | "dumbbell" | "chart" | "bell" | "settings";

const iconMap: Record<IconKey, React.ComponentType<{ size?: number }>> = {
  users: UsersIcon,
  money: MoneyIcon,
  dumbbell: DumbbellIcon,
  chart: ChartIcon,
  bell: BellIcon,
  settings: SettingsIcon,
};

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
            <Eyebrow>{ownerFeatures.eyebrow}</Eyebrow>
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
              {ownerFeatures.headline}
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
            {ownerFeatures.description}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
        >
          {ownerFeatures.features.map((f) => {
            const Icon = iconMap[f.icon as IconKey];
            return (
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
                  <Icon size={20} />
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
            );
          })}
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
