// app/join-group/page.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TOURS, Tour } from "./tour";

export default function BigdealsPage() {
  const [priceFilter, setPriceFilter] = useState(2000);
  const [dayFilter, setDayFilter] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFiltered, setHasFiltered] = useState(false);
  const pageSize = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [priceFilter, dayFilter, searchText]);

  useEffect(() => {
    if (priceFilter !== 2000 || dayFilter !== 15 || searchText !== "") {
      setHasFiltered(true);
    } else {
      setHasFiltered(false);
    }
  }, [priceFilter, dayFilter, searchText]);

  const filteredTours = useMemo(() => {
    return TOURS.filter(
      (t) =>
        t.price <= priceFilter &&
        parseInt(t.duration) <= dayFilter &&
        t.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [priceFilter, dayFilter, searchText]);

  const totalPages = Math.ceil(filteredTours.length / pageSize);

  const paginatedTours = filteredTours.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // ── PAGINATION AMÉLIORÉE ──
  const Pagination = () => {
    const getPageNumbers = () => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      const pages: (number | string)[] = [];
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
      return pages;
    };

    return (
      <div className="flex flex-col items-center gap-3 my-10">

        {/* Indicateur page X sur Y */}
        <p className="text-sm text-gray-500">
          Page{" "}
          <span className="font-semibold text-gray-700">{currentPage}</span>{" "}
          sur{" "}
          <span className="font-semibold text-gray-700">{totalPages}</span>
        </p>

        <div className="flex items-center gap-1">

          {/* Première page */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            title="Première page"
          >
            «
          </button>

          {/* Précédent */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            ‹ Précédent
          </button>

          {/* Numéros */}
          <div className="flex items-center gap-1 mx-2">
            {getPageNumbers().map((page, i) =>
              page === "..." ? (
                <span
                  key={`dots-${i}`}
                  className="px-2 py-2 text-gray-400 select-none"
                >
                  •••
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page as number)}
                  className={`w-10 h-10 rounded-lg text-sm font-semibold transition ${
                    currentPage === page
                      ? "bg-red-600 text-white shadow-md scale-105"
                      : "text-gray-600 hover:bg-gray-100 border border-transparent hover:border-gray-200"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          {/* Suivant */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Suivant ›
          </button>

          {/* Dernière page */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            title="Dernière page"
          >
            »
          </button>
        </div>

        {/* Barre de progression */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* COLONNE GAUCHE */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-10 flex flex-col gap-6">

              {/* QUICK SEARCH */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-800">QUICK SEARCH</h3>
                <div className="space-y-2 mt-4">
                  <label className="font-semibold text-sm">Price: €1 – €{priceFilter}</label>
                  <input
                    type="range" min={1} max={2000} step={10} value={priceFilter}
                    onChange={(e) => setPriceFilter(Number(e.target.value))}
                    className="w-full h-4 rounded-full bg-red-200 accent-red-600 cursor-pointer mt-2"
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <label className="font-semibold text-sm">Days: 1 – {dayFilter} days</label>
                  <input
                    type="range" min={1} max={15} step={1} value={dayFilter}
                    onChange={(e) => setDayFilter(Number(e.target.value))}
                    className="w-full h-4 rounded-full bg-red-200 accent-red-600 cursor-pointer mt-2"
                  />
                </div>
                <input
                  type="text" placeholder="Search tours..." value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none mt-4"
                />
              </div>

              {/* CARD 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-lg mb-2">PLAN YOUR TRIP</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Madagascar Island</li>
                  <li>Climate of Madagascar</li>
                  <li>When to go ?</li>
                  <li>Wildlife</li>
                  <li>Parks and attractions</li>
                  <li>Accommodations and Restaurants</li>
                  <li>Transportations</li>
                  <li>Photo Gallery</li>
                  <li>Airlines that connect Madagascar</li>
                </ul>
              </div>

              {/* CARD 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-lg mb-2">PLAN YOUR TRIP</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Madagascar Island</li>
                  <li>Climate of Madagascar</li>
                  <li>When to go ?</li>
                  <li>Wildlife</li>
                  <li>Parks and attractions</li>
                  <li>Accommodations and Restaurants</li>
                  <li>Transportations</li>
                  <li>Photo Gallery</li>
                  <li>Airlines that connect Madagascar</li>
                </ul>
              </div>

            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="flex-1">

            {!hasFiltered ? (
           <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
  <div className="bg-gray-700 px-8 py-6">
    <h2 className="text-2xl font-extrabold text-white uppercase tracking-wide leading-tight">
      BIG DEALS IN MADAGASCAR 
    </h2>
    <p className="text-red-200 font-semibold text-sm uppercase tracking-widest mt-1">
      by GMT+3 GREAT MADAGASCAR TOURS
    </p>
  </div>

  <div className="p-8">
    <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
      <p className="text-gray-600 text-sm leading-relaxed">
       Welcome to GMT+3 "BIG DEALS” page, you will find here all promotions (hotels & Tours)
        to make your holidays in Madagascar more memorable. GMT+3 is pleased to give you the 
        lowest price guarantee
      </p>
    </div>
  </div>
</div>

            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1 uppercase tracking-wide">
                  Here are some suggestions
                </h2>
                <div className="w-12 h-1 bg-red-600 rounded mb-5" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  For price between{" "}
                  <span className="font-semibold text-gray-800">€ 1</span> and{" "}
                  <span className="font-semibold text-gray-800">€ {priceFilter}</span> with days
                  between <span className="font-semibold text-gray-800">1</span> and{" "}
                  <span className="font-semibold text-gray-800">{dayFilter} days</span>.
                </p>
                <p className="text-red-600 font-bold mt-2">
                  We found {filteredTours.length} result
                  {filteredTours.length !== 1 ? "s" : ""} for you....
                </p>
              </div>
            )}

            {totalPages > 1 && <Pagination />}

            <div className="flex flex-col gap-8">
              {paginatedTours.map((tour, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative w-full lg:w-[420px] h-[380px]">
                      <Image src={tour.imageSrc} alt={tour.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {tour.badge && (
                        <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg tracking-wide">
                          {tour.badge}
                        </span>
                      )}
                      <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-xs uppercase tracking-widest opacity-80">From</p>
                        <p className="text-3xl font-bold">€ {tour.price}</p>
                        <p className="text-xs opacity-80">per person</p>
                      </div>
                    </div>

                    <div className="flex-1 px-12 py-10 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">{tour.title}</h3>
                        <p className="text-gray-500 mt-3">{tour.duration} • {tour.route}</p>
                        <div className="flex items-center gap-3 mt-4">
                          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                            ⭐ {tour.rating} Excellent
                          </span>
                          <span className="text-gray-400 text-sm">Trusted by travelers</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-sm">
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Departure</p>
                          <p className="font-semibold text-gray-800">{tour.departure}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Type</p>
                          <p className="font-semibold text-gray-800">{tour.type}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Theme</p>
                          <p className="font-semibold text-gray-800">{tour.theme}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Accommodation</p>
                          <p className="font-semibold text-gray-800">{tour.accommodation}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Transport</p>
                          <p className="font-semibold text-gray-800">{tour.transport}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Season</p>
                          <p className="font-semibold text-gray-800">{tour.season}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Level</p>
                          <p className="font-semibold text-gray-800">{tour.level}</p>
                        </div>
                      </div>

                      <div className="mt-12 max-w-4xl">
                        <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                          {tour.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-14 border-t pt-8">
                        <div className="text-sm text-gray-500">
                          Secure booking • Instant confirmation • Professional local guide
                        </div>
                        <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide hover:bg-red-700 hover:shadow-xl transition duration-300">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && <Pagination />}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}