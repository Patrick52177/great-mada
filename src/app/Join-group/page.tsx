// app/join-group/page.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TOURS, Tour } from "./tour";

export default function JoinGroupPage() {
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

  const Pagination = () => (
    <div className="flex justify-center items-center gap-2 my-10 flex-wrap">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            currentPage === i + 1
              ? "bg-red-600 text-white shadow-md"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );

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

            {/* ── INTRO ou SUGGESTION ── */}
            {!hasFiltered ? (

              /* ── BLOC INTRO PAR DÉFAUT ── */
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">

                {/* Header rouge */}
                <div className="bg-gray-700 px-8 py-6">
                  <h2 className="text-2xl font-extrabold text-white uppercase tracking-wide leading-tight">
                    Join or Create a Group<br />in Madagascar
                  </h2>
                  <p className="text-red-200 font-semibold text-sm uppercase tracking-widest mt-1">
                    by GMT+3
                  </p>
                </div>

                <div className="p-8">

                  {/* JOIN + CREATE côte à côte */}
                  <div className="grid md:grid-cols-2 gap-0 mb-8 rounded-xl overflow-hidden border border-gray-200">

                    {/* JOIN A GROUP */}
                    <div className="p-6 bg-red-50 border-r border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          J
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-sm uppercase tracking-widest">
                          Join a Group
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        There are one fixed date departures per month with hotel options{" "}
                        <span className="font-semibold text-gray-800">
                          (Luxury, Mid-Range and Budget hotels)
                        </span>{" "}
                        that you can choose depending your budget. A minimum of{" "}
                        <span className="font-semibold text-red-700">4 persons</span> and a maximum of{" "}
                        <span className="font-semibold text-red-700">12 persons</span> and always with a
                        private guide/assistant speaking English during the whole tour.
                      </p>
                    </div>

                    {/* CREATE A GROUP */}
                    <div className="p-6 bg-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          C
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-sm uppercase tracking-widest">
                          Create a Group
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        You have your own date which is different than the fixed date departure. You can
                        create your group based on your travel dates to have other traveler's with you
                        during the tour. The price will be{" "}
                        <span className="font-semibold text-gray-800">cheap and competitive</span>.{" "}
                        <em className="text-gray-500">
                          Tour examples (The RN7 to Berenty or Andasibe and the Tsingy of Bemaraha
                          National Park)
                        </em>
                      </p>
                    </div>
                  </div>

                  {/* Twin-share notice */}
                  <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="text-amber-500 text-xl flex-shrink-0 mt-0.5">ℹ️</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The{" "}
                      <span className="font-semibold text-gray-800">Join or Create a group</span> is
                      planned and operated on a{" "}
                      <span className="font-semibold text-gray-800">twin-share basis</span>, meaning
                      that the standard cost is based either on individual travelers sharing
                      accommodation with another group member of the same sex, or people who book
                      together sharing accommodation. On this particular tour,{" "}
                      <span className="font-semibold text-gray-800">GMT+3</span> is pleased to be able
                      to offer customers the option of pre-booking a{" "}
                      <span className="font-semibold text-gray-800">guaranteed single room</span> for
                      each night of the tour.
                    </p>
                  </div>

                </div>
              </div>

            ) : (

              /* ── BLOC SUGGESTION après filtrage ── */
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