"use client";
import { useState } from "react";

const DESTINATIONS = ["All Madagascar","Andasibe – East","Nosy Be – North","Tsingy – West","Tulear – South","Antananarivo","Fort Dauphin","Morondava"];
const DURATIONS    = ["1 day","2–3 days","4–7 days","8–14 days","15+ days"];
const TYPES        = ["Group Tours","Tailor-made","Day Trips","Low Cost","Big Deals"];

interface FieldProps {
  icon: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}

function Field({ icon, label, value, onChange, options, placeholder }: FieldProps) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#C8102E", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
        <span>{icon}</span>{label}
      </div>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            width: "100%", border: "1.5px solid #e8e8e8", borderRadius: 10,
            padding: "12px 36px 12px 14px", fontSize: 13, color: value ? "#1a1a1a" : "#9ca3af",
            background: "#fff", outline: "none", cursor: "pointer", appearance: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={e => (e.target.style.borderColor = "#C8102E")}
          onBlur={e => (e.target.style.borderColor = "#e8e8e8")}
        >
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", width: 14, height: 14, color: "#999" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function SearchBar() {
  const [dest, setDest] = useState("");
  const [dur, setDur]   = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <style>{`
        .search-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 40px);
        }
        .search-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 12px 50px rgba(0,0,0,0.13);
          padding: 28px 32px;
          margin-top: -56px;
          position: relative;
          z-index: 30;
          border: 1px solid rgba(255,255,255,0.8);
        }
        .search-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .search-fields {
          display: flex;
          gap: 14px;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        .search-btn {
          flex-shrink: 0;
          background: #C8102E;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 12px 26px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
          height: 47px;
          margin-top: 22px;
        }
        .search-btn:hover { background: #9e0c23; transform: scale(1.02); }
        .search-divider {
          width: 1px;
          height: 36px;
          background: #f0f0f0;
          flex-shrink: 0;
          align-self: flex-end;
          margin-bottom: 6px;
        }
        .popular-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .popular-tag {
          background: #f8f8f8;
          border: 1px solid #eee;
          color: #555;
          font-size: 11px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .popular-tag:hover { background: #C8102E; color: #fff; border-color: #C8102E; }
        @media (max-width: 700px) {
          .search-card { padding: 20px 18px; margin-top: -40px; border-radius: 16px; }
          .search-fields { flex-direction: column; }
          .search-fields > * { width: 100% !important; flex: none !important; }
          .search-divider { display: none; }
          .search-btn { width: 100%; justify-content: center; margin-top: 4px; }
        }
      `}</style>

      <div className="search-wrapper">
        <div className="search-card">
          <div className="search-title">
            <span style={{ fontSize: 18 }}>🔍</span>
            Find Your Perfect Madagascar Tour
          </div>

          <div className="search-fields">
            <Field icon="📍" label="Destination" value={dest} onChange={setDest} options={DESTINATIONS} placeholder="Where in Madagascar?" />
            <div className="search-divider" />
            <Field icon="📅" label="Duration" value={dur} onChange={setDur} options={DURATIONS} placeholder="How many days?" />
            <div className="search-divider" />
            <Field icon="🎒" label="Tour Type" value={type} onChange={setType} options={TYPES} placeholder="What type of tour?" />
            <button className="search-btn">
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
              </svg>
              Search Tours
            </button>
          </div>

          {/* Popular searches */}
          <div className="popular-tags">
            <span style={{ fontSize: 11, color: "#aaa", fontWeight: 600 }}>Popular:</span>
            {["🦎 Andasibe Lemurs","🏝 Nosy Be","🪨 Tsingy N.P","🌅 RN7 South","🌿 Day Trip Tana"].map(tag => (
              <button key={tag} className="popular-tag">{tag}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
