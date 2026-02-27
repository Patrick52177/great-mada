// app/join-group/page.tsx
"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

type Tour = {
  title: string;
  duration: string;
  route: string;
  badge?: string;
  departure?: string;
  type?: string;
  theme?: string;
  accommodation?: string;
  transport?: string;
  description?: string;
  season?: string;
  level?: string;
  rating?: number;
  price: number;
  imageSrc: string;
};

// ── MOCK DATA ──────────────────────────────────────────────────────────────
const TOURS: Tour[] = [
  {
    title: "ANDASIBE & THE RN7 TO IFATY",
    duration: "12 Days",
    route: "Tana; Andasibe; Antsirabe; Ranomafana; Fianarantsoa; Ambalavao; Ranohira; Isalo; Toliara and Ifaty.",
    badge: "REGISTERED",
    departure: "Apr 18 - Apr 29 2026",
    type: "Group Tour - Min. 4 pax | Max. 12 pax",
    theme: "Top Discover Fauna & Flora",
    accommodation: "Hotel (Choose Option)",
    transport: "Private vehicle; flight & boat",
    description: "Découverte de la faune et flore uniques de Madagascar...",
    season: "Apr - Dec",
    level: "Medium",
    rating: 12345,
    price: 1060,
    imageSrc: "/images/andasibe.jpg",
  },
  {
    title: "BERENTY & THE RN7 TO IFATY",
    duration: "13 Days",
    route: "Tana; Berenty; Fort Dauphin; Ranomafana; Isalo; Toliara; Ifaty",
    badge: "REGISTERED",
    departure: "May 22 - Jun 3 2026",
    type: "Group Tour - Min. 4 pax | Max. 12 pax",
    theme: "Top Discover & Beach",
    accommodation: "Mid-Range Hotel",
    transport: "Private vehicle + Flight",
    description: "Découverte de Berenty et ses paysages exceptionnels...",
    season: "May - Jul",
    level: "Medium",
    rating: 9876,
    price: 1735,
    imageSrc: "/images/berenty.jpg",
  },
  // Ajoute ici tes autres tours (26 cartes au total)
];

// ── PAGINATION ─────────────────────────────────────────────────────────────
const TOURS_PER_PAGE = 6;

// ── COMPOSANT ─────────────────────────────────────────────────────────────
export default function JoinGroupPage() {
  const [priceFilter, setPriceFilter] = useState(2000);
  const [daysFilter, setDaysFilter] = useState(14);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrage des tours
  const filteredTours = useMemo(() => {
    return TOURS.filter(t => {
      const days = parseInt(t.duration);
      const matchesPrice = t.price <= priceFilter;
      const matchesDays = days <= daysFilter;
      const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesPrice && matchesDays && matchesSearch;
    });
  }, [priceFilter, daysFilter, searchTerm]);

  // Pagination
  const pageCount = Math.ceil(filteredTours.length / TOURS_PER_PAGE);
  const paginatedTours = filteredTours.slice(
    (currentPage - 1) * TOURS_PER_PAGE,
    currentPage * TOURS_PER_PAGE
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ── LEFT: Quick Search & Cards ── */}
          <aside className="w-full lg:w-[300px] flex flex-col gap-6">

            {/* Quick Search */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 border-b-2 border-red-600 pb-2">QUICK SEARCH</h3>

              {/* Price Slider */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Price: € 1 to € {priceFilter}</label>
                <input
                  type="range"
                  min={1}
                  max={2000}
                  value={priceFilter}
                  onChange={(e) => { setPriceFilter(parseInt(e.target.value)); setCurrentPage(1); }}
                  className="w-full accent-red-600"
                />
              </div>

              {/* Days Slider */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Day Range: 1 to {daysFilter} days</label>
                <input
                  type="range"
                  min={1}
                  max={14}
                  value={daysFilter}
                  onChange={(e) => { setDaysFilter(parseInt(e.target.value)); setCurrentPage(1); }}
                  className="w-full accent-red-600"
                />
              </div>

              {/* Search Input */}
              <div>
                <label className="block text-sm font-semibold mb-1">Search Tour</label>
                <input
                  type="text"
                  placeholder="Enter tour name..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            {/* Autres Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6">Card 2 (info ou pub)</div>
            <div className="bg-white rounded-xl shadow-lg p-6">Card 3 (info ou pub)</div>

          </aside>

          {/* ── RIGHT: Tours List ── */}
          <div className="flex-1 flex flex-col gap-6">

            {paginatedTours.map(t => (
              <div key={t.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition-shadow">
                
                {/* Image */}
                <div className="relative w-full lg:w-64 h-48 lg:h-auto flex-shrink-0">
                  <Image src={t.imageSrc} alt={t.title} fill className="object-cover" />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    {t.badge && <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">{t.badge}</span>}
                    <span className="text-sm text-gray-500">{t.departure}</span>
                  </div>
                  <h3 className="font-bold text-lg">{t.title} | {t.duration}</h3>
                  <p className="text-sm text-gray-600">{t.route}</p>
                  <p className="text-sm mt-2">{t.description}</p>
                  <div className="mt-auto flex justify-between items-center text-sm text-gray-700">
                    <span>PRICE: € {t.price}/pax</span>
                    <span>LEVEL: {t.level}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}