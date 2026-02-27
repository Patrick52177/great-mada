// src/app/page.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import SearchBar from "@/components/SearchBar";
import TourCard from "@/components/TourCard";
import TripAdvisorWidget from "@/components/TripAdvisorWidget";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

// ── DONNÉES RÉELLES SCRAPÉES DU SITE ─────────────────────────────────────────

const GROUP_TOURS = [
  {
    title: "Andasibe & The RN7 to Ifaty",
    subtitle: "The best of the Southeast",
    duration: "12 Days / 11 Nights",
    accommodation: "Hotel (Luxury, Mid-Range or Budget)",
    transport: "Private vehicle + Flight",
    price: "€1,060",
    date: "Apr 18 – Apr 29, 2026",
    badge: "REGISTERED", badgeType: "blue" as const,
    route: "Tana · Andasibe · Antsirabe · Ranomafana · Fianarantsoa · Ambalavao · Isalo · Toliara · Ifaty",
    gradient: "linear-gradient(135deg, #0a3d2e, #1a6b40, #2d8a55)",
    imageSrc: "/images/andasibe.jpg", emoji: "🦎", featured: true,
    href: "/group-tours/andasibe-rn7",
  },
  {
    title: "Berenty & The RN7 to Ifaty",
    subtitle: "Top Discover & Beach",
    duration: "13 Days / 12 Nights",
    accommodation: "Mid-Range Hotel",
    transport: "Private vehicles + Flights",
    price: "€1,735",
    date: "May 22 – Jun 3, 2026",
    badge: "REGISTERED", badgeType: "blue" as const,
    route: "Tana · Berenty · Fort Dauphin · Ranomafana · Isalo · Toliara · Ifaty",
    gradient: "linear-gradient(135deg, #1a3a0a, #2d6b14, #3a8a20)",
    imageSrc: "/images/berenty.jpg", emoji: "🐒",
    href: "/group-tours/berenty-rn7",
  },
];

const BEST_SELLING = [
  {
    title: "The Great East",
    subtitle: "The best of the East",
    duration: "6 Days / 5 Nights",
    accommodation: "Mid-Range Hotel",
    transport: "Private Vehicle & Boat",
    price: "€715",
    badge: "TOP PICK", badgeType: "red" as const,
    route: "Tana · Manambato · Akanin'ny Nofy · Aye Aye Island · Pangalanes · Andasibe · Vakona",
    gradient: "linear-gradient(135deg, #134e4a, #0f766e, #0d9488)",
    imageSrc: "/images/great-east.jpg", emoji: "🐒",
    href: "/best-selling/the-great-east",
  },
  {
    title: "The Tsingy of Bemaraha",
    subtitle: "UNESCO World Heritage",
    duration: "7 Days / 6 Nights",
    accommodation: "Hotel (choose option)",
    transport: "Private Vehicles & Flights",
    price: "€1,160",
    route: "Tana · Morondava · Tsingy of Bemaraha · Baobabs Avenue · Betania Village",
    gradient: "linear-gradient(135deg, #78350f, #92400e, #b45309)",
    imageSrc: "/images/tsingy.jpg", emoji: "🪨",
    href: "/best-selling/tsingy-bemaraha",
  },
  {
    title: "Berenty & The RN7 to Ifaty",
    subtitle: "Top Discover & Beach",
    duration: "13 Days / 12 Nights",
    accommodation: "Mid-Range Hotel",
    transport: "Private vehicles + Flights",
    price: "€1,735",
    route: "Tana · Fort Dauphin · Berenty · Ranomafana · Isalo · Toliara · Ifaty",
    gradient: "linear-gradient(135deg, #1a3a0a, #2d6b14, #3a8a20)",
    imageSrc: "/images/berenty.jpg", emoji: "🌿",
    href: "/best-selling/berenty-rn7",
  },
];

const LOW_COST = [
  {
    title: "The Tsingy Tour",
    subtitle: "Tsiribihina & The Tsingy",
    duration: "12 Days / 11 Nights",
    accommodation: "Budget Hotel & Camping",
    transport: "Taxi-brousse · Canoe · 4WD",
    price: "€780",
    date: "May 30 – Jun 10, 2026",
    badge: "REGISTERED", badgeType: "blue" as const,
    route: "Tana · Miandrivazo · Tsiribihina River · Bekopaka · Kirindy · Morondava",
    gradient: "linear-gradient(135deg, #78350f, #92400e, #b45309)",
    imageSrc: "/images/tsingy-lc.jpg", emoji: "🏕",
    href: "/low-cost/tsingy-tour",
  },
  {
    title: "Discover Andasibe N.P",
    subtitle: "Top Fauna & Flora",
    duration: "4 Days / 3 Nights",
    accommodation: "Hotel (choose option)",
    transport: "Private vehicle",
    price: "€295",
    route: "Tana · Peyreiras Reserve · Vakona · Andasibe N.P · Mantadia",
    gradient: "linear-gradient(135deg, #0a3d2e, #1a6b40, #2d8a55)",
    imageSrc: "/images/andasibe-lc.jpg", emoji: "🦎",
    href: "/low-cost/andasibe",
  },
];

const BIG_DEALS = [
  {
    title: "The RN7 to Tulear",
    subtitle: "The best of the South",
    duration: "8 Days / 7 Nights",
    accommodation: "Hotel (choose option)",
    transport: "Private Vehicle + Flight",
    price: "€1,025", originalPrice: "€1,645",
    badge: "PROMO", badgeType: "gold" as const,
    route: "Tana · Antsirabe · Ambositra · Ranomafana N.P · Fianarantsoa · Isalo · Toliara",
    gradient: "linear-gradient(135deg, #451a03, #7c2d12, #c2410c)",
    imageSrc: "/images/tulear.jpg", emoji: "🌅",
    featured: true, href: "/big-deals/rn7-tulear",
  },
  {
    title: "Andasibe & The Tsingy",
    subtitle: "Discover · Cultural · Beach",
    duration: "10 Days / 9 Nights",
    accommodation: "Hotel (choose option)",
    transport: "Private vehicles + Flights",
    price: "€1,260", originalPrice: "€1,325",
    badge: "PROMO", badgeType: "gold" as const,
    route: "Tana · Andasibe · Morondava · Bekopaka · Tsingy · Baobab Alley",
    gradient: "linear-gradient(135deg, #1e3a5f, #1d4ed8, #2563eb)",
    imageSrc: "/images/andasibe-tsingy.jpg", emoji: "🦋",
    href: "/big-deals/andasibe-tsingy",
  },
  {
    title: "Diego Suarez & Nosy Be",
    subtitle: "Adventure · Discover · Beach",
    duration: "11 Days / 10 Nights",
    accommodation: "Hotel (choose option)",
    transport: "Private Vehicles · Boats · Flights",
    price: "€1,585", originalPrice: "€2,675",
    badge: "PROMO", badgeType: "gold" as const,
    route: "Tana · Diego Suarez · Amber Mountain N.P · Red Tsingy · Ankarana · Nosy Be",
    gradient: "linear-gradient(135deg, #0c4a6e, #0369a1, #0284c7)",
    imageSrc: "/images/nosy-be.jpg", emoji: "🏝",
    href: "/big-deals/diego-nosy-be",
  },
];

const DAY_TRIPS = [
  {
    title: "Andasibe One Day Tour",
    subtitle: "Andasibe in 1 Day",
    duration: "1 Day",
    accommodation: "Top Fauna & Flora",
    transport: "The Indri Indri · Private vehicle",
    price: "€145",
    gradient: "linear-gradient(135deg, #0a3d2e, #1a6b40, #2d8a55)",
    imageSrc: "/images/andasibe-day.jpg", emoji: "🦎",
    href: "/day-trips/andasibe",
  },
];

// ── WHY GMT+3 — données réelles du site ──────────────────────────────────────
const WHY_GMT3 = [
  { icon: "⭐", text: "Recommended on TripAdvisor" },
  { icon: "🕐", text: "Available 24 hours a day & 7 days a week" },
  { icon: "⚡", text: "Guaranteed response within 24 hours" },
  { icon: "💰", text: "Lowest price guarantee (Ask & Compare)" },
  { icon: "📋", text: "Itinerary with full details" },
  { icon: "🏆", text: "Best services guarantee" },
  { icon: "✅", text: "Not satisfied — 100% Refunded" },
];

// ── Layout token ──────────────────────────────────────────────────────────────
const CONTAINER = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 40px)",
} as const;

function SectionHeader({ eyebrow, title, linkLabel, linkHref }: {
  eyebrow: string; title: string; linkLabel?: string; linkHref?: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, flexWrap: "wrap", gap: 10 }}>
      <div>
        <div className="section-eyebrow">{eyebrow}</div>
        <h2 className="section-heading" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", marginTop: 4 }}>{title}</h2>
      </div>
      {linkLabel && linkHref && (
        <Link href={linkHref} style={{ color: "#C8102E", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        .group-layout { display: grid; grid-template-columns: 1fr 300px; gap: 28px; align-items: start; }
        .group-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .group-sidebar { display: flex; flex-direction: column; gap: 16px; padding-top: 52px; }
        .best-selling-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .big-deals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .triplet-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 1024px) {
          .best-selling-grid { grid-template-columns: repeat(2, 1fr); }
          .big-deals-grid { grid-template-columns: repeat(2, 1fr); }
          .triplet-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
          .testi-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .group-layout { grid-template-columns: 1fr; }
          .group-cards { grid-template-columns: 1fr; }
          .group-sidebar { padding-top: 0; }
          .best-selling-grid { grid-template-columns: 1fr; }
          .big-deals-grid { grid-template-columns: 1fr; }
          .triplet-grid { grid-template-columns: 1fr; }
          .testi-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .quick-link { display: flex; justify-content: space-between; align-items: center; padding: 11px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .quick-link:last-child { border-bottom: none; }
        .quick-link:hover { color: #C8102E; }
      `}</style>

      <Navbar />
      <main>

        {/* Hero */}
        <HeroSlider />

        {/* Search */}
        <div style={{ background: "#f8f9fa", paddingBottom: 56, paddingTop: 8 }}>
          <SearchBar />
        </div>

        {/* ── WHY GMT+3 — bande de confiance ── */}
        <div style={{ background: "#C8102E", padding: "14px 0", overflow: "hidden" }}>
          <div style={CONTAINER}>
            <div className="why-grid">
              {WHY_GMT3.map(w => (
                <div key={w.text} style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{w.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>{w.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Group Tours ── */}
        <section style={{ padding: "64px 0", background: "#fff" }}>
          <div style={CONTAINER}>
            <div className="group-layout">
              <div>
                <SectionHeader eyebrow="Travel Together" title="Group Tours 2026" linkLabel="See all group tours per month" linkHref="/group-tours" />
                <div className="group-cards">
                  {GROUP_TOURS.map(t => <TourCard key={t.title} {...t} />)}
                </div>
              </div>
              <div className="group-sidebar">
                <TripAdvisorWidget />
                <div style={{ background: "#f8f9fa", borderRadius: 16, padding: "18px 20px", border: "1px solid #f0f0f0" }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", marginBottom: 4 }}>Quick Links</div>
                  <div style={{ fontSize: 11, color: "#aaa", marginBottom: 12 }}>Explore our services</div>
                  {[
                    ["🧭 Join a Group Tour", "/group-tours"],
                    ["✏️ Tailor-made Tour", "/tailor-made"],
                    ["🌅 Day Trips Antananarivo", "/day-trips"],
                    ["🚗 Car Rental Madagascar", "/car-rental"],
                    ["📞 Contact Us", "/contact"],
                  ].map(([l, h]) => (
                    <Link key={l} href={h} className="quick-link">
                      <span>{l}</span>
                      <span style={{ color: "#C8102E", fontSize: 11 }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Best Selling ── */}
        <section style={{ padding: "64px 0", background: "#f8f9fa" }}>
          <div style={CONTAINER}>
            <SectionHeader eyebrow="Most Popular" title="Best Selling Tours" linkLabel="See all best selling" linkHref="/best-selling" />
            <div className="best-selling-grid">
              {BEST_SELLING.map(t => <TourCard key={t.title} {...t} />)}
            </div>
          </div>
        </section>

        {/* ── Big Deals ── */}
        <section style={{ padding: "64px 0", background: "#fff" }}>
          <div style={CONTAINER}>
            <SectionHeader eyebrow="Save More" title="Big Deals — Special Offers" linkLabel="See all big deals" linkHref="/big-deals" />
            <div className="big-deals-grid">
              {BIG_DEALS.map(t => <TourCard key={t.title} {...t} />)}
            </div>
          </div>
        </section>

        {/* ── Low Cost + Day Trips ── */}
        <section style={{ padding: "64px 0", background: "#f8f9fa" }}>
          <div style={CONTAINER}>
            <div className="triplet-grid">
              {/* Low Cost */}
              <div style={{ gridColumn: "span 2" } as React.CSSProperties} className="low-cost-col">
                <SectionHeader eyebrow="Budget Friendly" title="Low Cost Tours" linkLabel="See all low cost" linkHref="/low-cost" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="low-cost-inner">
                  {LOW_COST.map(t => <TourCard key={t.title} {...t} />)}
                </div>
              </div>
              {/* Day Trips */}
              <div>
                <SectionHeader eyebrow="One Day Adventure" title="Antananarivo Day Trip" linkLabel="See all day trips" linkHref="/day-trips" />
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {DAY_TRIPS.map(t => <TourCard key={t.title} {...t} />)}
                  {/* Extra day trip CTA */}
                  <div style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1px solid #f0f0f0", textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>🗺️</div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a", marginBottom: 4 }}>More Day Trips</div>
                    <div style={{ fontSize: 12, color: "#888", marginBottom: 14 }}>From Antananarivo, discover Madagascar in just one day</div>
                    <Link href="/day-trips" className="btn-red" style={{ justifyContent: "center", fontSize: 12, padding: "9px 20px" }}>
                      See All Day Trips →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .low-cost-col { grid-column: span 1 !important; }
              .low-cost-inner { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Why Us ── */}
        <WhyUs />

        {/* ── CTA Banner ── */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #C8102E 0%, #9e0c23 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.07, fontSize: "28rem", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "3rem", userSelect: "none" }} aria-hidden>🦎</div>
          <div style={{ position: "relative", zIndex: 1, ...CONTAINER, maxWidth: 600 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>
              GMT+3™ — Holidays specialists in Madagascar, Mauritius, Seychelles, Reunion, Asia & South Africa
            </div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#fff", marginBottom: 12, lineHeight: 1.1 }}>
              Ready for Madagascar?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
              The only tour operator operating 24h/7 in Madagascar. From 1-day trips to 3-week expeditions — your dream journey starts here.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/tailor-made" style={{ background: "#fff", color: "#C8102E", fontWeight: 700, fontSize: 14, padding: "14px 32px", borderRadius: "50px", textDecoration: "none" }}>
                Request Tailor-made Tour
              </Link>
              <Link href="/contact" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 32px", borderRadius: "50px", textDecoration: "none" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section style={{ padding: "64px 0", background: "#fff" }}>
          <div style={CONTAINER}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="section-eyebrow">What Travellers Say</div>
              <h2 className="section-heading" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", marginTop: 4 }}>214 Happy Adventurers on TripAdvisor</h2>
            </div>
            <div className="testi-grid">
              {[
                { name: "Sarah M.", country: "🇫🇷 France", text: "Absolutely spectacular! The guides were incredibly knowledgeable about Madagascar's wildlife. The lemurs at Andasibe were breathtaking. GMT+3 handled everything perfectly.", tour: "Andasibe & RN7" },
                { name: "James K.", country: "🇬🇧 United Kingdom", text: "GMT+3 made our honeymoon unforgettable. Nosy Be was paradise on earth. The 24/7 availability was reassuring throughout the trip.", tour: "Diego Suarez & Nosy Be" },
                { name: "Marie D.", country: "🇩🇪 Germany", text: "Best value for money! The Tsingy trek was one of the most unique experiences of my life. Lowest price guarantee is real — I compared!", tour: "The Tsingy Tour" },
              ].map(r => (
                <div key={r.name} style={{ background: "#f8f9fa", borderRadius: 16, padding: 24, border: "1px solid #f0f0f0" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                    {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#34E0A1", fontSize: 16 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontStyle: "italic", marginBottom: 16 }}>"{r.text}"</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a" }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: "#888" }}>{r.country}</div>
                    </div>
                    <div style={{ background: "rgba(200,16,46,0.1)", color: "#C8102E", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{r.tour}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}