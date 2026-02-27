"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Join a Group", href: "/Join-group" },
  { label: "Tailor-made", href: "/tailor-made" },
  { label: "Day Trip", href: "/day-trips" },
  { label: "Best Selling Tours", href: "/best-selling" },
  { label: "Low Cost Tours", href: "/low-cost" },
  { label: "Big Deals", href: "/big-deals" },
  { label: "Contact", href: "/contact" },
];

const INNER = "0 clamp(16px, 4vw, 40px)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none", transition: "box-shadow 0.3s" }}>

      {/* Top info bar */}
      <div style={{ background: "#111", height: "35px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: `7px ${INNER}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            
            <a href="tel:+261207979718" style={{ color: "#D4A017", fontSize: 12, textDecoration: "none", fontWeight: 600 }}>📞 +261 020 79 797 18</a>
            <a href="tel:+261340828700" style={{ color: "#888", fontSize: 11, textDecoration: "none" }}>Hotline: +261 34 08 287 00</a>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            
            <span style={{ color: "#444", fontSize: 11 }}>· 24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Logo + search + login */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: `12px ${INNER}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="Great Madagascar Tours"
              width={52}
              height={52}
              style={{ objectFit: "contain", borderRadius: 6 }}
            />
            <div>
              <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 900, fontSize: 20, color: "#C8102E", lineHeight: 1 }}>Great Madagascar Tours</div>
              <div style={{ fontSize: 14, color: "#888", marginTop: 2 }}>Local Tour Operator & Car Rental | REF: 027-11/MTA/ED8M </div>
              <span style={{ color: "#D4A017", fontSize: 18, fontStyle: "italic", fontFamily: "Playfair Display, serif" }}>Feel free... wherever you are!</span>
            </div>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", background: "#f5f5f5", borderRadius: 50, padding: "8px 16px", gap: 8 }} className="search-box">
              <svg width="14" height="14" fill="none" stroke="#888" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Search tours..." style={{ border: "none", background: "transparent", fontSize: 13, color: "#333", outline: "none", width: 130 }} />
            </div>
            <Link href="/login" className="btn-red" style={{ fontSize: 13, padding: "9px 20px" }}>Login →</Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#333", display: "none", padding: 4 }}
              className="hamburger-btn"
              aria-label="Menu"
            >
              {mobileOpen
                ? <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12"/></svg>
                : <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
              }
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav style={{ background: "#C8102E" }} className="desktop-nav">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: `0 ${INNER}` }}>
          <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV.map((item) => (
              <li key={item.label} className="nav-item">
                <Link
                  href={item.href}
                  style={{ display: "block", color: "#fff", fontSize: 13, fontWeight: 500, padding: "12px 15px", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.2)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "2px solid #C8102E" }}>
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "14px clamp(16px, 4vw, 40px)", color: "#333", textDecoration: "none", fontSize: 14, fontWeight: 500, borderBottom: "1px solid #f0f0f0" }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ padding: "14px clamp(16px, 4vw, 40px)" }}>
            <Link href="/login" className="btn-red" style={{ width: "100%", justifyContent: "center" }}>Login →</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
          .search-box { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}