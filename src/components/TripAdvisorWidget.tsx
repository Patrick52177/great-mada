import Link from "next/link";

export default function TripAdvisorWidget() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid #f0f0f0", padding: "18px 20px" }}>

      {/* Row 1 : logo + name + stars compact */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 42, height: 42, background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>🦉</div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 12, color: "#1a1a1a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            GMT+3 Great Madagascar Tours
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
            <div style={{ display: "flex", gap: 1 }}>
              {[1,2,3,4].map(i => <span key={i} style={{ color: "#34E0A1", fontSize: 13, lineHeight: 1 }}>★</span>)}
              <span style={{ color: "#ddd", fontSize: 13, lineHeight: 1 }}>★</span>
            </div>
            <span style={{ fontSize: 11, color: "#555", fontWeight: 600, whiteSpace: "nowrap" }}>214 reviews</span>
          </div>
        </div>
      </div>

      {/* Ranking badge */}
      <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "9px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>🏆</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.5px" }}>Tripadvisor Ranking</div>
          <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700 }}>#11 of 242 Tours in Antananarivo</div>
        </div>
      </div>

      {/* Buttons — grid so they never wrap */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        <Link href="#" style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "#34E0A1", border: "1.5px solid #34E0A1", borderRadius: 8, padding: "8px 4px", textDecoration: "none" }}>
          Read Reviews
        </Link>
        <Link href="#" style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "#fff", background: "#34E0A1", borderRadius: 8, padding: "8px 4px", textDecoration: "none" }}>
          Write Review
        </Link>
      </div>

      {/* Award */}
      <div style={{ paddingTop: 10, borderTop: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>✅</span>
        <div style={{ fontSize: 11, color: "#666" }}><strong>Travellers&apos; Choice</strong> Award 2024</div>
      </div>
    </div>
  );
}
