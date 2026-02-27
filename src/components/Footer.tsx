import Link from "next/link";

export default function Footer() {
  const colTitle: React.CSSProperties = { color: "#fff", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 16 };

  return (
    <footer>
      <style>{`
        .footer-link { color: #999; font-size: 12px; text-decoration: none; display: block; margin-bottom: 8px; transition: color 0.2s; }
        .footer-link:hover { color: #C8102E; }
        .social-btn { background: rgba(255,255,255,0.1); color: #fff; font-size: 11px; padding: 6px 10px; border-radius: 8px; text-decoration: none; transition: background 0.2s; }
        .social-btn:hover { background: #C8102E; }
        .ql-link { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .ql-link:last-child { border-bottom: none; }
        .ql-link:hover { color: #C8102E; }
      `}</style>

      {/* Newsletter */}
      <div style={{ background: "#C8102E", padding: "48px clamp(16px, 4vw, 40px)", textAlign: "center" }}>
        <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 900, fontSize: "1.7rem", color: "#fff", marginBottom: 8 }}>Get the Best Madagascar Deals</h3>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13, marginBottom: 20 }}>Subscribe for exclusive travel deals, tips and new tour announcements</p>
        <div style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
          <input type="email" placeholder="Your email address…" style={{ flex: 1, minWidth: 200, padding: "12px 18px", borderRadius: 50, border: "none", fontSize: 13, outline: "none" }} />
          <button style={{ background: "#fff", color: "#C8102E", fontWeight: 700, fontSize: 13, padding: "12px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>Subscribe</button>
        </div>
      </div>

      {/* Main */}
      <div style={{ background: "#1a1a1a", padding: "56px clamp(16px, 4vw, 40px) 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, background: "#C8102E", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 10, lineHeight: 1.2, textAlign: "center" }}>GMT<br/>+3</span>
              </div>
              <div>
                <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>Great Madagascar Tours</div>
                <div style={{ fontSize: 11, color: "#777", fontStyle: "italic" }}>Feel free… wherever you are!</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#888", lineHeight: 1.9 }}>
              <div>📍 Lot II B 37 BIS – West Ampandrana</div>
              <div>Antananarivo, Madagascar</div>
              <div style={{ marginTop: 6 }}><a href="tel:+261207979718" style={{ color: "#aaa", textDecoration: "none" }}>📞 +261 020 79 797 18</a></div>
              <div><a href="tel:+261340828700" style={{ color: "#aaa", textDecoration: "none" }}>📞 +261 34 08 287 00</a></div>
              <div><a href="mailto:info@great-madagascar-tours.com" style={{ color: "#aaa", textDecoration: "none" }}>✉️ Email GMT+3</a></div>
              <div style={{ color: "#D4A017", marginTop: 4 }}>🕐 24/7 Services Center</div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {[["📘 FB","#"],["▶️ YT","#"],["🦉 TA","#"]].map(([s,h]) => (
                <a key={s} href={h} className="social-btn">{s}</a>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
              {["VISA","Mastercard","MVola","Orange Money"].map(p => (
                <span key={p} style={{ background: "rgba(255,255,255,0.1)", color: "#bbb", fontSize: 10, fontWeight: 600, padding: "4px 8px", borderRadius: 6 }}>{p}</span>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <div style={colTitle}>Menu</div>
            {[["Home","/"],["Join a Group","/group-tours"],["Tailor-made","/tailor-made"],["Best Selling Tours","/best-selling"],["Low Cost Tours","/low-cost"],["Big Deals","/big-deals"],["Day Trip","/day-trips"],["Contact","/contact"]].map(([l,h]) => (
              <Link key={l} href={h} className="footer-link">→ {l}</Link>
            ))}
          </div>

          {/* Who Are We */}
          <div>
            <div style={colTitle}>Who Are We?</div>
            {[["About GMT+3","/about"],["Legal Notice","/legal"],["Quality Charter","/quality"],["What We Do?","/services"],["Terms & Conditions","/terms"]].map(([l,h]) => (
              <Link key={l} href={h} className="footer-link">→ {l}</Link>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <div style={colTitle}>FAQ</div>
            {[["Madagascar Island","/faq/madagascar"],["Climate of Madagascar","/faq/climate"],["When to Go?","/faq/best-time"],["National Parks & Attractions","/faq/parks"],["Accommodations & Restaurants","/faq/accommodation"],["Car Rental Madagascar","/car-rental"],["Photo Gallery","/gallery"],["Airlines to Madagascar","/faq/flights"]].map(([l,h]) => (
              <Link key={l} href={h} className="footer-link">→ {l}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ background: "#111", padding: "14px clamp(16px, 4vw, 40px)", textAlign: "center" }}>
        <p style={{ color: "#555", fontSize: 12 }}>
          Copyright 2011 – 2026 © GMT+3 (Great Madagascar Tours) | All Rights Reserved |{" "}
          <Link href="/admin" style={{ color: "#777", textDecoration: "none" }}>gmt+3design</Link>
        </p>
      </div>
    </footer>
  );
}
