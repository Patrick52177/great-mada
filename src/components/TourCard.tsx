import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  duration: string;
  accommodation: string;
  transport: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeType?: "red" | "blue" | "gold";
  date?: string;
  href?: string;
  gradient: string;
  imageSrc?: string;
  emoji: string;
  featured?: boolean;
}

export default function TourCard({ title, subtitle, duration, accommodation, transport, price, originalPrice, badge, badgeType = "red", date, href = "#", gradient, imageSrc, emoji, featured }: Props) {
  const badgeColors = { red: "#C8102E", blue: "#2563eb", gold: "#D4A017" };

  return (
    <div className="tour-card" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: featured ? "2px solid #C8102E" : "1px solid #f0f0f0" }}>
      {/* Image */}
      <div style={{ position: "relative", height: 200, background: gradient, overflow: "hidden" }}>
        {imageSrc && (
          <Image src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
        )}
        {badge && (
          <div className="ribbon" style={{ background: badgeColors[badgeType] }}>{badge}</div>
        )}
        {featured && (
          <div style={{ position: "absolute", top: 10, right: 10, background: "#D4A017", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>⭐ FEATURED</div>
        )}
        {/* Emoji deco */}
        <div style={{ position: "absolute", right: -5, bottom: -10, fontSize: 100, opacity: 0.15, userSelect: "none", pointerEvents: "none" }} aria-hidden>{emoji}</div>
        {/* Bottom gradient + price */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)", padding: "20px 14px 12px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            {originalPrice && <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, textDecoration: "line-through" }}>{originalPrice}</span>}
            <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 900, fontSize: "1.4rem", color: "#fff" }}>{price}</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>/ pax</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginBottom: 12 }}>{subtitle}</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
          {[
            ["⏱", duration],
            ["🏠", `Accommodation: ${accommodation}`],
            ["🚗", transport],
            ...(date ? [["📅", date]] : []),
          ].map(([icon, text]) => (
            <div key={String(text)} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12, color: "#555" }}>
              <span style={{ flexShrink: 0 }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <Link href={href} className="btn-red" style={{ flex: 1, justifyContent: "center", fontSize: 12, padding: "9px 12px" }}>Read More</Link>
          <Link href={`${href}/book`} className="btn-outline" style={{ flex: 1, justifyContent: "center", fontSize: 12, padding: "9px 12px" }}>Book Now</Link>
        </div>
      </div>
    </div>
  );
}
