"use client";
const FEATURES = [
  { icon: "🛡️", title: "Official Licensed Operator", desc: "REF: 027-11/MTA/ED8M — certified by Madagascar Tourism Authority" },
  { icon: "🏆", title: "TripAdvisor Award Winner", desc: "Travellers' Choice 2024, #11 of 242 tours in Antananarivo" },
  { icon: "🌍", title: "Local Expert Knowledge", desc: "Born and raised in Madagascar — we know every hidden gem" },
  { icon: "🕐", title: "24/7 Service Center", desc: "Round-the-clock support for all our clients worldwide" },
  { icon: "🤝", title: "Tailor-made Experiences", desc: "Every tour customized to your preferences, budget and pace" },
  { icon: "🗣️", title: "Multilingual Guides", desc: "English, French, Malagasy — we speak your language" },
];

export default function WhyUs() {
  return (
    <section style={{ padding: "72px 0", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-eyebrow">Why Travel With Us</div>
          <h2 className="section-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginTop: 6 }}>Madagascar Experts Since 2011</h2>
          <p style={{ color: "#666", marginTop: 14, maxWidth: 500, margin: "14px auto 0", fontSize: 14, lineHeight: 1.7 }}>
            Over a decade crafting unforgettable journeys across the world's most biodiverse island.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0", transition: "all 0.3s", cursor: "default" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)"; }}>
              <div style={{ width: 48, height: 48, background: "rgba(200,16,46,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a", marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
