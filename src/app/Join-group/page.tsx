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
  departure: string;
  type: string;
  theme: string;
  accommodation: string;
  transport: string;
  description: string;
  season: string;
  level: string;
  rating: string;
  price: number;
  imageSrc: string;
};

// ── Exemple de tours (26 items) ──
const TOURS: Tour[] = [
  {
    title: "ANDASIBE & THE RN7 TO IFATY | 12 DAYS",
    duration: "12 DAYS",
    route: "Tana; Andasibe; Antsirabe; Ranomafana; Fianarantsoa; Ambalavao; Ranohira; Isalo; Toliara and Ifaty.",
    badge: "REGISTERED",
    departure: "Apr 18 – Apr 29 2026",
    type: "Group Tour - Min. 4 pax | Max. 12 pax + Private Tour Guide",
    theme: "Top Discover Fauna & Flora",
    accommodation: "Hotel (Choose your Option)",
    transport: "Private vehicle; flight & boat",
    description: "This tour is going to make you discover the Peyreiras reserve and its endemic reptiles...",
    season: "April to December",
    level: "Medium",
    rating: "12345",
    price: 1060,
    imageSrc: "/images/andasibe.jpg",
  },
  {
    title: "BERENTY & THE RN7 TO IFATY | 13 DAYS",
    duration: "13 DAYS",
    route: "Tana; Berenty; Fort Dauphin; Antsirabe; Ranomafana; Fianarantsoa; Ambalavao; Ranohira; Isalo; Toliara and Ifaty.",
    badge: "REGISTERED",
    departure: "May 22nd - Jun 3rd 2026",
    type: "Group Tour - Min. 4 pax | Max. 12 pax + Private Tour Guide",
    theme: "Top Discover & Beach",
    accommodation: "Mid-Range Hotel",
    transport: "Private vehicles; flights",
    description: "Fly from Antananarivo to Fort Dauphin and then depart for Berenty reserve...",
    season: "April to December",
    level: "Medium",
    rating: "12345",
    price: 1735,
    imageSrc: "/images/berenty.jpg",
  },
  // Ajoute ici toutes les autres cartes
];
export default function JoinGroupPage() {
  const [priceFilter, setPriceFilter] = useState(2000);
  const [dayFilter, setDayFilter] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // ── Filter tours ──
  const filteredTours = useMemo(() => {
    return TOURS.filter(
      (t) =>
        t.price <= priceFilter &&
        parseInt(t.duration) <= dayFilter &&
        t.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [priceFilter, dayFilter, searchText]);

  // ── Pagination ──
  const totalPages = Math.ceil(filteredTours.length / pageSize);
  const paginatedTours = filteredTours.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Quick Search Card ── */}
          <div className="w-full lg:w-1/4 flex-shrink-0 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4">
              <h3 className="font-bold text-lg">QUICK SEARCH</h3>
              
              {/* Price Filter */}
              <div>
                <label className="text-sm font-semibold">Price Range: €1 to €{priceFilter}/pax</label>
                <input
                  type="range"
                  min={1}
                  max={2000}
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-red-600"
                />
              </div>

              {/* Day Filter */}
              <div>
                <label className="text-sm font-semibold">Day Range: 1 to {dayFilter} days</label>
                <input
                  type="range"
                  min={1}
                  max={15}
                  value={dayFilter}
                  onChange={(e) => setDayFilter(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-red-600"
                />
              </div>

              {/* Search Input */}
              <div>
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            {/* Petite carte supplémentaire */}
            <div className="bg-white rounded-xl shadow-lg p-4 text-center">
              <h4 className="font-semibold">Promo Card</h4>
              <p className="text-sm text-gray-600">Some promotional content here</p>
            </div>

            {/* Deuxième carte */}
            <div className="bg-white rounded-xl shadow-lg p-4 text-center">
              <h4 className="font-semibold">Another Card</h4>
              <p className="text-sm text-gray-600">Additional info or links</p>
            </div>
          </div>

          {/* ── Tour Cards ── */}
          <div className="flex-1 flex flex-col gap-4">
  {paginatedTours.map((tour, i) => (
    <div key={i} className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden hover:shadow-2xl transition-shadow hover:scale-[1.01] duration-300">

      {/* Image */}
      <div className="relative w-full lg:w-48 h-32 lg:h-auto flex-shrink-0 group">
        <Image src={tour.imageSrc} alt={tour.title} fill className="object-cover rounded-l-xl transition-transform duration-300 group-hover:scale-105" />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-l-xl"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-2 text-sm">
        {/* Title + Badge */}
        <div className="flex justify-between items-start">
          <h3 className="font-bold truncate text-gray-900 text-lg lg:text-xl bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            {tour.title} | {tour.duration}
          </h3>
          {tour.badge && (
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${
              tour.badge === "REGISTERED" ? "bg-blue-600 text-white" :
              tour.badge === "TOP PICK" ? "bg-red-500 text-white" :
              tour.badge === "PROMO" ? "bg-yellow-400 text-gray-900" :
              "bg-gray-300 text-gray-700"
            }`}>
              {tour.badge}
            </span>
          )}
        </div>

        {/* Route */}
        <p className="text-gray-600 truncate">{tour.route}</p>

        {/* Info rows */}
        <div className="flex flex-wrap justify-between gap-1 text-gray-500 text-xs mt-1 bg-gray-50 p-2 rounded">
          <span>Next: {tour.departure}</span>
          <span>{tour.type}</span>
          <span>Theme: {tour.theme}</span>
          <span>Stay: {tour.accommodation}</span>
        </div>

        {/* Transport */}
        <p className="text-gray-600 truncate mt-1">Transport: {tour.transport}</p>

        {/* Description */}
        <p className="text-gray-700 line-clamp-3 mt-1">{tour.description}</p>

        {/* Footer info */}
        <div className="flex justify-between items-center text-gray-700 text-xs mt-2">
          <span>Season: {tour.season}</span>
          <span>Level: {tour.level}</span>
          <span>Rating: {tour.rating}</span>
          <span className="font-bold text-red-600 text-base lg:text-lg">€ {tour.price}/pax</span>
        </div>
      </div>
    </div>
  ))}
</div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-red-600 text-white" : "bg-gray-200"}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
    
      </main>
      <Footer />
    </>
  );
}