// app/join-group/page.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TOURS, Tour } from "./tour"; // ← importe depuis le fichier tours.ts


export default function JoinGroupPage() {
  const [priceFilter, setPriceFilter] = useState(2000);
  const [dayFilter, setDayFilter] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    setCurrentPage(1);
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

         {/* QUICK SEARCH */}
<div className="w-full lg:w-1/4">
  <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-600 space-y-6 sticky top-10">
    <h3 className="text-xl font-bold text-gray-800">
      QUICK SEARCH
    </h3>

    {/* Price Slider */}
    <div className="space-y-2">
      <label className="font-semibold text-sm">
        Price: €1 – €{priceFilter}
      </label>
      <input
  type="range"
  min={1}
  max={2000}
  step={10}
  value={priceFilter}
  onChange={(e) => setPriceFilter(Number(e.target.value))}
  className="
    w-full h-4 rounded-full bg-red-200 cursor-pointer
    accent-red-600 mt-2
    transition-all duration-200
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-6
    [&::-webkit-slider-thumb]:h-6
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-red-600
    [&::-webkit-slider-thumb]:shadow-lg
    [&::-webkit-slider-thumb]:hover:bg-red-700
    [&::-moz-range-thumb]:w-6
    [&::-moz-range-thumb]:h-6
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-red-600
    [&::-moz-range-thumb]:shadow-lg
    [&::-moz-range-thumb]:hover:bg-red-700
  "
/>
    </div>

    {/* Days Slider */}
    <div className="space-y-2">
      <label className="font-semibold text-sm">
        Days: 1 – {dayFilter} days
      </label>
      <input
        type="range"
        min={1}
        max={15}
        step={1}
        value={dayFilter}
        onChange={(e) => setDayFilter(Number(e.target.value))}
        className="
           w-full h-4 rounded-full bg-red-200 cursor-pointer
    accent-red-600 mt-2
    transition-all duration-200
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-6
    [&::-webkit-slider-thumb]:h-6
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-red-600
    [&::-webkit-slider-thumb]:shadow-lg
    [&::-webkit-slider-thumb]:hover:bg-red-700
    [&::-moz-range-thumb]:w-6
    [&::-moz-range-thumb]:h-6
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-red-600
    [&::-moz-range-thumb]:shadow-lg
    [&::-moz-range-thumb]:hover:bg-red-700"
      />
    </div>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search tours..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
    />
  </div>
</div>

          {/* TOURS */}
          <div className="flex-1">

            {totalPages > 1 && <Pagination />}

            {/* IMPORTANT: vraie séparation */}
            <div className="flex flex-col gap-8">

  {paginatedTours.map((tour, i) => (
    <div
      key={i}
      className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">

        {/* IMAGE LARGE */}
        <div className="relative w-full lg:w-[420px] h-[380px]">
          <Image
            src={tour.imageSrc}
            alt={tour.title}
            fill
            className="object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Badge */}
          {tour.badge && (
            <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg tracking-wide">
              {tour.badge}
            </span>
          )}

          {/* Price */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-80">
              From
            </p>
            <p className="text-3xl font-bold">
              € {tour.price}
            </p>
            <p className="text-xs opacity-80">per person</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-12 py-10 flex flex-col justify-between">

          {/* HEADER */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              {tour.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {tour.duration} • {tour.route}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                ⭐ {tour.rating} Excellent
              </span>
              <span className="text-gray-400 text-sm">
                Trusted by travelers
              </span>
            </div>
          </div>

          {/* TRUST INFO GRID */}
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

          {/* FULL DESCRIPTION */}
          <div className="mt-12 max-w-4xl">
            <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
              {tour.description}
            </p>
          </div>

          {/* FOOTER CTA */}
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