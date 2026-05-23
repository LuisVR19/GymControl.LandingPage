// Self-contained mockups for the Producto section.
// PhoneFrame + ClientAppMock  →  mobile card
// BrowserFrame + OwnerAppMock →  web card

const M = {
  accent: "oklch(0.85 0.18 130)",
  accentInk: "#0E0E0C",
  phoneBg: "#0E0E0C",
  phoneInk: "#F5F4EE",
  phoneInk2: "rgba(245,244,238,0.72)",
  phoneInk3: "rgba(245,244,238,0.48)",
  phoneLine: "rgba(245,244,238,0.08)",
  phoneSunk: "rgba(245,244,238,0.05)",
  webBg: "#FAF9F6",
  webSunk: "#F2F0EA",
  webInk: "#0E0E0C",
  webInk2: "#2B2B27",
  webInk3: "#6B6963",
  webLine: "rgba(14,14,12,0.08)",
  webLine2: "rgba(14,14,12,0.05)",
};

// ─── SVG icon helpers ──────────────────────────────────────────
const MI = {
  home:   (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  dumb:   (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M3 9v6M6 6v12M18 6v12M21 9v6M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  cal:    (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  user:   (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  flame:  (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 3s4 4 4 8a4 4 0 11-8 0c0-1 .5-2 1-2.5C8 11 7 13 7 15a5 5 0 1010 0c0-5-5-12-5-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  chart:  (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  card:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18M7 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  users:  (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 11.5a3 3 0 100-6M17 20c0-2.5 1.5-4 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  cog:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  arrow:  (s=14) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  bell:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 1112 0c0 5 2 7 2 7H4s2-2 2-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  plus:   (s=14) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
};

function MAvatar({ initials = "CR", size = 28, bg = "#D97757" }: { initials?: string; size?: number; bg?: string }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size, background: bg, color: "#fff",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: Math.round(size * 0.42),
      flexShrink: 0,
    }}>{initials}</div>
  );
}

// ─── PHONE FRAME ───────────────────────────────────────────────
export function PhoneFrame({ width = 340, height = 720, children }: { width?: number; height?: number; children: React.ReactNode }) {
  const radius = Math.round(width * 0.14);
  return (
    <div style={{
      width, height, borderRadius: radius, position: "relative",
      background: "#0a0a09", padding: 8,
      boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 2px #1a1a18",
      flexShrink: 0,
    }}>
      <div style={{
        width: "100%", height: "100%", borderRadius: radius - 8, overflow: "hidden",
        background: M.phoneBg, color: M.phoneInk, position: "relative",
        fontFamily: "var(--font-ui)",
      }}>
        {/* status bar */}
        <div style={{
          height: 42, padding: "0 22px", display: "flex", alignItems: "center", justifyContent: "space-between",
          fontSize: 13, fontWeight: 600, color: M.phoneInk, position: "relative", zIndex: 2,
        }}>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>9:41</span>
          <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="1" y="7" width="2.5" height="3.5" rx="0.5" fill="currentColor"/><rect x="5" y="5" width="2.5" height="5.5" rx="0.5" fill="currentColor"/><rect x="9" y="3" width="2.5" height="7.5" rx="0.5" fill="currentColor"/><rect x="13" y="1" width="2.5" height="9.5" rx="0.5" fill="currentColor"/></svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 3.5C2.7 2 4.7 1 7 1s4.3 1 6 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M3 5.6C4.1 4.6 5.5 4 7 4s2.9.6 4 1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="7" cy="8" r="1.1" fill="currentColor"/></svg>
            <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.2" fill="currentColor"/><rect x="21" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.5"/></svg>
          </span>
        </div>
        {/* dynamic island */}
        <div style={{
          position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
          width: 108, height: 30, borderRadius: 18, background: "#000", zIndex: 3,
        }}/>
        {/* content */}
        <div style={{ position: "absolute", top: 42, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
          {children}
        </div>
        {/* home indicator */}
        <div style={{
          position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
          width: 120, height: 4, borderRadius: 4, background: M.phoneInk, opacity: 0.55, zIndex: 3,
        }}/>
      </div>
    </div>
  );
}

// ─── CLIENT APP MOCK ───────────────────────────────────────────
export function ClientAppMock() {
  const upcoming = [
    { d: "MAR", n: "4", t: "Pull · Día 1", s: "45 min · 6 ejercicios", dim: false },
    { d: "MIE", n: "5", t: "Legs · Día 2", s: "60 min · 7 ejercicios", dim: false },
    { d: "JUE", n: "6", t: "Descanso", s: "Mobility opcional", dim: true },
  ];
  return (
    <div style={{ height: "100%", background: M.phoneBg, color: M.phoneInk, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* header */}
      <div style={{ padding: "14px 20px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: M.phoneInk3, fontFamily: "var(--font-mono)", letterSpacing: 1, textTransform: "uppercase" }}>Lunes · 3 jun</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, marginTop: 2 }}>Hola, Carlos</div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: M.phoneSunk,
            color: M.phoneInk, display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
          }}>
            {MI.bell(16)}
            <span style={{ position: "absolute", top: 8, right: 9, width: 6, height: 6, borderRadius: 6, background: M.accent }}/>
          </div>
          <MAvatar initials="C" size={36} bg="#D97757"/>
        </div>
      </div>

      {/* hero today card */}
      <div style={{ margin: "14px 16px 0", borderRadius: 18, padding: 18, background: M.accent, color: M.accentInk, position: "relative", overflow: "hidden" }}>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.7 }}>Rutina de hoy</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, marginTop: 4 }}>Push · Día 2</div>
        <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>8 ejercicios · ~52 min</div>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 6, background: "rgba(14,14,12,0.18)", overflow: "hidden" }}>
            <div style={{ width: "35%", height: "100%", background: M.accentInk }}/>
          </div>
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 600 }}>3/8</span>
        </div>
        <div style={{
          marginTop: 14, padding: "10px 14px", borderRadius: 10, background: M.accentInk, color: M.accent,
          fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          Continuar entreno {MI.arrow(12)}
        </div>
      </div>

      {/* stats row */}
      <div style={{ padding: "14px 16px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ padding: 14, borderRadius: 14, background: M.phoneSunk, border: `1px solid ${M.phoneLine}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: M.phoneInk2, fontSize: 11 }}>
            <span style={{ color: M.accent }}>{MI.flame(14)}</span> Racha
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, marginTop: 6 }}>
            12 <span style={{ fontSize: 12, color: M.phoneInk3, fontWeight: 400 }}>días</span>
          </div>
        </div>
        <div style={{ padding: 14, borderRadius: 14, background: M.phoneSunk, border: `1px solid ${M.phoneLine}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: M.phoneInk2, fontSize: 11 }}>
            <span style={{ color: M.accent }}>{MI.chart(14)}</span> 1RM Banca
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, marginTop: 6 }}>
            78 <span style={{ fontSize: 12, color: M.phoneInk3, fontWeight: 400 }}>kg</span>
          </div>
        </div>
      </div>

      {/* upcoming */}
      <div style={{ padding: "14px 16px 0", flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: 1, textTransform: "uppercase", color: M.phoneInk3 }}>Esta semana</div>
          <div style={{ fontSize: 11, color: M.phoneInk3 }}>Ver todo</div>
        </div>
        {upcoming.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: i === 0 ? "none" : `1px solid ${M.phoneLine}` }}>
            <div style={{
              width: 40, height: 44, borderRadius: 10, background: M.phoneSunk, border: `1px solid ${M.phoneLine}`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: M.phoneInk3 }}>{r.d}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600 }}>{r.n}</div>
            </div>
            <div style={{ flex: 1, minWidth: 0, opacity: r.dim ? 0.55 : 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{r.t}</div>
              <div style={{ fontSize: 11, color: M.phoneInk3, marginTop: 2 }}>{r.s}</div>
            </div>
            <span style={{ color: M.phoneInk3 }}>{MI.arrow(14)}</span>
          </div>
        ))}
      </div>

      {/* tab bar */}
      <div style={{
        padding: "10px 16px 22px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6,
        background: M.phoneBg, borderTop: `1px solid ${M.phoneLine}`,
      }}>
        {[
          { icon: MI.home, label: "Inicio", active: true },
          { icon: MI.dumb, label: "Rutina", active: false },
          { icon: MI.cal, label: "Agenda", active: false },
          { icon: MI.user, label: "Perfil", active: false },
        ].map((it, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: it.active ? M.phoneInk : M.phoneInk3 }}>
            {it.icon(20)}
            <div style={{ fontSize: 10, fontWeight: it.active ? 600 : 400 }}>{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── BROWSER FRAME ─────────────────────────────────────────────
export function BrowserFrame({ width = 1200, height = 720, url = "mygymgo.app/owner", tab = "MyGymGo · Owner", children }: {
  width?: number; height?: number; url?: string; tab?: string; children: React.ReactNode;
}) {
  return (
    <div style={{
      width, height, borderRadius: 14, background: "#E9E7E1", overflow: "hidden",
      boxShadow: "0 30px 80px -20px rgba(0,0,0,0.25), 0 0 0 1px rgba(14,14,12,0.06)",
      display: "flex", flexDirection: "column", fontFamily: "var(--font-ui)",
    }}>
      {/* chrome */}
      <div style={{ padding: "10px 14px 0", background: "#E9E7E1", borderBottom: "1px solid rgba(14,14,12,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 8 }}>
          <div style={{ display: "flex", gap: 7 }}>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: "#FF5F57" }}/>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: "#FEBC2E" }}/>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: "#28C840" }}/>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
          <div style={{
            padding: "7px 14px", borderRadius: "9px 9px 0 0", background: "#FAF9F6",
            fontSize: 12, color: "#0E0E0C", fontWeight: 500, display: "flex", alignItems: "center", gap: 8,
            border: "1px solid rgba(14,14,12,0.06)", borderBottom: "none",
          }}>
            <div style={{ width: 14, height: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/logo-gym-cropped.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
            </div>
            {tab}
            <span style={{ color: "#9b988f", fontSize: 14, lineHeight: "1", marginLeft: 4 }}>×</span>
          </div>
        </div>
      </div>
      <div style={{ padding: "8px 12px", background: "#FAF9F6", borderBottom: "1px solid rgba(14,14,12,0.06)", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 4, color: "#9b988f" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <div style={{
          flex: 1, padding: "5px 12px", borderRadius: 7, background: "#F2F0EA", border: "1px solid rgba(14,14,12,0.05)",
          fontSize: 12, color: "#3a3a35", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: 8,
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="1.6"/></svg>
          {url}
        </div>
      </div>
      <div style={{ flex: 1, overflow: "hidden", background: "#FAF9F6" }}>
        {children}
      </div>
    </div>
  );
}

// ─── OWNER APP MOCK ────────────────────────────────────────────
export function OwnerAppMock() {
  const { webBg, webSunk, webInk: ink, webInk2: ink2, webInk3: ink3, webLine: line, webLine2: line2 } = M;

  const NavItem = ({ icon, label, active }: { icon: (s: number) => React.ReactNode; label: string; active?: boolean }) => (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, padding: "8px 11px",
      borderRadius: 8, fontSize: 13, fontWeight: active ? 500 : 400,
      background: active ? webSunk : "transparent", color: active ? ink : ink3, cursor: "default",
    }}>{icon(18)} {label}</div>
  );

  const KPI = ({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) => (
    <div style={{ padding: 18, borderRadius: 14, background: webBg, border: `1px solid ${line}` }}>
      <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: 1, textTransform: "uppercase", color: ink3 }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, letterSpacing: -0.8, marginTop: 6, color: accent ? M.accent : ink }}>{value}</div>
      <div style={{ fontSize: 12, color: ink3, marginTop: 4 }}>{sub}</div>
    </div>
  );

  const bars = [60, 72, 68, 84, 78, 92, 88, 96, 90, 104, 98, 112];
  const maxBar = Math.max(...bars);
  const months = ["J","J","A","S","O","N","D","E","F","M","A","M"];

  const pending = [
    { n: "Cliente 14", a: "₡25.000", d: "8 May · 5d", danger: true },
    { n: "Cliente 22", a: "₡25.000", d: "1 May · 12d", danger: true },
    { n: "Cliente 5",  a: "₡25.000", d: "15 May", danger: false },
    { n: "Cliente 31", a: "₡25.000", d: "12 May", danger: false },
    { n: "Cliente 19", a: "₡25.000", d: "10 May", danger: false },
  ];

  return (
    <div style={{ height: "100%", display: "grid", gridTemplateColumns: "220px 1fr", background: webBg, color: ink, fontFamily: "var(--font-ui)" }}>
      {/* sidebar */}
      <div style={{ padding: "18px 14px", borderRight: `1px solid ${line}`, display: "flex", flexDirection: "column", gap: 4, background: webBg }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 8px 18px" }}>
          <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/logo-gym-cropped.png" alt="MyGymGo" style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, lineHeight: 1 }}>MyGymGo</div>
            <div style={{ fontSize: 10, color: ink3, fontFamily: "var(--font-mono)", letterSpacing: 0.5, marginTop: 2 }}>GYM 1</div>
          </div>
        </div>
        <NavItem icon={MI.home} label="Dashboard" active/>
        <NavItem icon={MI.users} label="Clientes"/>
        <NavItem icon={MI.dumb} label="Rutinas"/>
        <NavItem icon={MI.card} label="Membresías"/>
        <NavItem icon={MI.chart} label="Pagos"/>
        <NavItem icon={MI.cog} label="Mi gym"/>
        <div style={{ flex: 1 }}/>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 8px", borderTop: `1px solid ${line2}`, marginTop: 8 }}>
          <MAvatar initials="O" size={28} bg="#0E0E0C"/>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Owner 1</div>
            <div style={{ fontSize: 10, color: ink3 }}>owner@gym.cr</div>
          </div>
        </div>
      </div>

      {/* main */}
      <div style={{ padding: "22px 26px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: 1, textTransform: "uppercase", color: ink3 }}>Dashboard</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, marginTop: 2 }}>Resumen general</div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${line}`, background: webBg, fontSize: 12, color: ink2, display: "inline-flex", alignItems: "center", gap: 6 }}>
              {MI.cal(13)} Mayo 2026
            </div>
            <div style={{ padding: "6px 12px", borderRadius: 8, background: ink, color: webBg, fontSize: 12, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
              {MI.plus(12)} Nuevo cliente
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          <KPI label="Ingresos mes" value="₡3.005.000" sub="+12% vs Abr"/>
          <KPI label="Clientes activos" value="124" sub="+8 nuevos"/>
          <KPI label="Asistencia" value="78%" sub="−3% vs media"/>
          <KPI label="Morosos" value="7" sub="₡175.000 en mora" accent/>
        </div>

        {/* chart + side */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 12, flex: 1, minHeight: 0 }}>
          <div style={{ padding: 18, borderRadius: 14, background: webBg, border: `1px solid ${line}`, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: 1, textTransform: "uppercase", color: ink3 }}>Ingresos · últimos 12 meses</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginTop: 4 }}>₡32.4M</div>
              </div>
              <div style={{ display: "flex", gap: 6, fontSize: 11, color: ink3 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 8, background: M.accent, display: "inline-block" }}/> Cobrado
                </span>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 8, paddingTop: 10, minHeight: 120 }}>
              {bars.map((b, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: "100%", height: `${(b / maxBar) * 100}%`, minHeight: 8,
                    background: i === bars.length - 1 ? M.accent : "rgba(14,14,12,0.15)",
                    borderRadius: "6px 6px 0 0",
                  }}/>
                  <div style={{ fontSize: 9, color: ink3, fontFamily: "var(--font-mono)" }}>{months[i]}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: 18, borderRadius: 14, background: webBg, border: `1px solid ${line}`, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: 1, textTransform: "uppercase", color: ink3, marginBottom: 10 }}>Pagos pendientes</div>
            {pending.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderTop: i === 0 ? "none" : `1px solid ${line2}`, fontSize: 12 }}>
                <MAvatar initials={r.n.slice(-2)} size={26} bg={r.danger ? "#C2410C" : "#6B6963"}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, color: ink }}>{r.n}</div>
                  <div style={{ color: ink3, fontSize: 11 }}>{r.d}</div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: r.danger ? "#C2410C" : ink }}>{r.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
