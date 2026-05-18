export default function PhoneMockup({
  children,
  width = 340,
  height = 720,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 48,
        background: "#1A1A18",
        boxShadow:
          "0 0 0 2px #2A2A28, 0 40px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* notch */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 34,
          background: "#1A1A18",
          borderRadius: 20,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#111" }} />
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#111" }} />
      </div>

      {/* screen content */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
