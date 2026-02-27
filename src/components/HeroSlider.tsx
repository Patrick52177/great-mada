"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 0,
    imageSrc: "/images/hero-chameleon.jpg",
    fallbackGradient: "linear-gradient(135deg, #0a3d2e 0%, #1a6b40 50%, #2d8a55 100%)",
    // Slide 4 — Chameleon
    label: null,
    title: "Big Deals 2026 for Madagascar Destination",
    subtitle: "DON'T NEED TO WAIT",
    cta: null,
    ctaHref: "/big-deals",
  },
  {
    id: 1,
    imageSrc: "/images/nosy-be.jpg",
    fallbackGradient: "linear-gradient(135deg, #1a2e0a 0%, #2a5c14 50%, #3a7a20 100%)",
    // Slide 2 — Guide + Indri
    label: "GMT+3™",
    title: "Holidays specialists in Madagascar, Mauritius, Seychelles, Reunion, Asia and South Africa",
    subtitle: "Represented by anja ANDRIANJATO",
    cta: null,
    ctaHref: "/about",
  },
  {
    id: 2,
    imageSrc: "/images/hero-tsingy.jpg",
    fallbackGradient: "linear-gradient(135deg, #451a03 0%, #92400e 50%, #d97706 100%)",
    // Slide 3 — Tsingy National Geographic
    label: "NATIONAL GEOGRAPHIC",
    labelIsNatGeo: true,
    title: "Why to book with us ?",
    subtitle: null,
    bulletPoints: [
      "RECOMMENDED ON TRIP ADVISOR",
      "LOWEST PRICE GUARANTEE",
      "ASK AND COMPARE",
      "BEST SERVICES GUARANTEE",
      "NOT SATISFIED",
      "100% REFUNDED",
    ],
    cta: null,
    ctaHref: "/about",
  },
  {
    id: 3,
    imageSrc: "/images/hero-lemur.jpg",
    fallbackGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    // Slide 1 — Black lemur
    label: null,
    title: "What are you waiting for?",
    subtitle: null,
    cta: "BOOK RIGHT NOW!",
    ctaHref: "/contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
      setAnimKey(k => k + 1);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  function goTo(i: number) {
    setCurrent(i);
    setAnimKey(k => k + 1);
  }

  const slide = slides[current];

  return (
    <section style={{ position: "relative", width: "100%", height: "clamp(400px, 60vh, 580px)", overflow: "hidden" }}>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-label   { animation: fadeInLeft 0.5s ease both; animation-delay: 0.1s; }
        .slide-title   { animation: fadeInUp  0.6s ease both; animation-delay: 0.3s; }
        .slide-sub     { animation: fadeInUp  0.6s ease both; animation-delay: 0.55s; }
        .slide-bullet  { animation: fadeInUp  0.5s ease both; }
        .slide-cta     { animation: fadeInUp  0.6s ease both; animation-delay: 0.7s; }
        .natgeo-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #FFCC00; color: #000;
          font-size: 11px; font-weight: 900; letter-spacing: 0.5px;
          padding: 4px 10px; text-transform: uppercase;
        }
        .natgeo-rect { width: 14px; height: 14px; background: #FFCC00; }
        .ta-badge {
          position: absolute; bottom: 50px; right: clamp(16px, 4vw, 40px);
          z-index: 20;
          animation: fadeInUp 0.7s ease both;
          animation-delay: 0.4s;
        }
      `}</style>

      {/* ── Slides ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="hero-slide"
          style={{ opacity: i === current ? 1 : 0, background: s.fallbackGradient }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={s.imageSrc}
              alt={s.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={i === 0}
            />
          </div>
          {/* Overlay gradient — sombre en bas à gauche pour lisibilité du texte */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)" }} />
        </div>
      ))}

      {/* ── Content — bas gauche comme le site original ── */}
      <div key={animKey} style={{ position: "absolute", bottom: 50, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
          <div style={{ maxWidth: 560 }}>

            {/* Label / Badge au dessus du titre */}
            {"labelIsNatGeo" in slide && slide.labelIsNatGeo ? (
              <div className="slide-label natgeo-badge" style={{ marginBottom: 10 }}>
                <div className="natgeo-rect" />
                NATIONAL GEOGRAPHIC
              </div>
            ) : slide.label ? (
              <div className="slide-label" style={{
                display: "inline-block", background: "#C8102E", color: "#fff",
                fontSize: 14, fontWeight: 900, padding: "4px 12px",
                letterSpacing: "0.5px", marginBottom: 10,
              }}>
                {slide.label}
              </div>
            ) : null}

            {/* Titre — fond rouge translucide comme le site original */}
            <div className="slide-title" style={{
              display: "inline-block",
              background: "rgba(200, 16, 46, 0.88)",
              padding: "8px 16px",
              marginBottom: slide.bulletPoints ? 14 : 8,
            }}>
              <span style={{
                fontFamily: "Playfair Display, serif", fontWeight: 700,
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "#fff",
                lineHeight: 1.2,
              }}>
                {slide.title}
              </span>
            </div>

            {/* Bullet points (slide "Why to book with us") */}
            {slide.bulletPoints && (
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {slide.bulletPoints.map((point, idx) => (
                  <div
                    key={point}
                    className="slide-bullet"
                    style={{
                      animationDelay: `${0.45 + idx * 0.08}s`,
                      color: "#fff", fontSize: "clamp(10px, 1.3vw, 13px)",
                      fontWeight: 600, letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {point}
                  </div>
                ))}
              </div>
            )}

            {/* Subtitle */}
            {slide.subtitle && (
              <div className="slide-sub" style={{
                color: "#fff", fontSize: "clamp(11px, 1.4vw, 14px)",
                fontStyle: slide.id === 1 ? "italic" : "normal",
                fontWeight: slide.id === 1 ? 400 : 600,
                marginTop: 4,
              }}>
                {slide.id === 1
                  ? <>Represented by <strong>anja ANDRIANJATO</strong></>
                  : slide.subtitle
                }
              </div>
            )}

            {/* CTA text link */}
            {slide.cta && (
              <Link href={slide.ctaHref} className="slide-cta" style={{
                display: "inline-block", marginTop: 8,
                color: "#fff", fontSize: "clamp(11px, 1.3vw, 13px)",
                fontWeight: 700, textDecoration: "none",
                textTransform: "uppercase", letterSpacing: "0.5px",
              }}>
                {slide.cta}
              </Link>
            )}

          </div>
        </div>
      </div>

      {/* ── TripAdvisor Travelers' Choice Badge — bas droite sur chaque slide ── */}
      <div className="ta-badge" key={`ta-${animKey}`}>
        <div style={{
          background: "#34E0A1", borderRadius: "50% 50% 8px 8px",
          padding: "12px 14px 10px", textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          width: 110,
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#000", letterSpacing: "0.3px", lineHeight: 1.2 }}>Tripadvisor</div>
          <div style={{ fontSize: 8, fontWeight: 700, color: "#000", lineHeight: 1.2 }}>Travelers'</div>
          <div style={{ fontSize: 8, fontWeight: 700, color: "#000", lineHeight: 1.2, marginBottom: 4 }}>Choice Awards</div>
          {/* Owl icon SVG */}
          <div style={{ fontSize: 22, lineHeight: 1 }}>🦉</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#000", marginTop: 4 }}>2024</div>
          <div style={{ fontSize: 7, color: "#000", marginTop: 2 }}>Thanks for your support!</div>
        </div>
      </div>

      {/* ── Dots ── */}
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 4, background: i === current ? "#fff" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
        ))}
      </div>

      {/* ── Arrows ── */}
      <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 0, right: 0, zIndex: 20, pointerEvents: "none" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", justifyContent: "space-between" }}>
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => goTo((current + dir + slides.length) % slides.length)}
              style={{
                pointerEvents: "all", width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}
              aria-label={dir === -1 ? "Previous" : "Next"}
            >
              {dir === -1
                ? <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/></svg>
                : <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              }
            </button>
          ))}
        </div>
      </div>

      {/* ── Ticker ── */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(200,16,46,0.92)", overflow: "hidden", height: 30, display: "flex", alignItems: "center", zIndex: 20 }}>
        <div className="ticker-track">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} style={{ display: "flex", alignItems: "center" }}>
              {[
                "⭐ BIG DEALS: THE TSINGY TOUR | 12 DAYS/ 11 NIGHTS — Only €790/person",
                "🦎 ANDASIBE ONE DAY TOUR — Only €145/person",
                "🏝 DIEGO SUAREZ & NOSY BE | 11 DAYS/ 10 NIGHTS — Only €1,435/person",
              ].map((msg, i) => (
                <span key={i} style={{ color: "#fff", fontSize: 11, fontWeight: 600, padding: "0 32px", borderRight: "1px solid rgba(255,255,255,0.2)", whiteSpace: "nowrap" }}>
                  {msg}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}