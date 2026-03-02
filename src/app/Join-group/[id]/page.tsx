// app/join-group/[id]/page.tsx
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TOURS, Tour } from "../tour";

export default function TourDetailPage() {
  const params = useParams();
  const router = useRouter();
  const tourId = params.id;

  const tour: Tour | undefined = TOURS.find((t) => t.id.toString() === tourId);

  const [activeTab, setActiveTab] = useState("datePrice");
  const [priceFilter, setPriceFilter] = useState(2000);
  const [dayFilter, setDayFilter] = useState(15);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("price", priceFilter.toString());
    params.set("days", dayFilter.toString());
    if (searchText) params.set("search", searchText);
    router.push(`/join-group?${params.toString()}`);
  };

  if (!tour) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex justify-center items-center">
          <p className="text-red-600 font-bold text-xl">Tour not found</p>
        </main>
        <Footer />
      </>
    );
  }

  const tabs = [
    { key: "datePrice", label: "Date & Price" },
    { key: "itinerary", label: "Itinerary" },
    { key: "accommodation", label: "Accommodation" },
    { key: "extension", label: "Extension" },
    { key: "practicalInfo", label: "Practical Info" },
    { key: "video", label: "Video" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* ── COLONNE GAUCHE ── */}
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

          {/* ── COLONNE DROITE : DÉTAIL DU TOUR ── */}
          <div className="flex-1">

            {/* Bouton retour */}
            <button
              onClick={() => router.push("/join-group")}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition mb-6 font-medium"
            >
              ← Back to tours
            </button>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

              {/* Image header */}
              <div className="relative w-full h-96">
                <Image src={tour.imageSrc} alt={tour.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold">{tour.title}</h1>
                  <p className="mt-2 text-lg">{tour.duration} • {tour.route}</p>
                </div>
                {tour.badge && (
                  <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg tracking-wide">
                    {tour.badge}
                  </span>
                )}
              </div>

              {/* Tabs */}
              <div className="px-8 py-6">
                <div className="flex flex-wrap gap-3 border-b pb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-2 rounded-xl font-semibold transition text-sm ${
                        activeTab === tab.key
                          ? "bg-red-600 text-white shadow-md"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Contenu des onglets */}
                <div className="mt-6 text-gray-700 space-y-6">

                  {activeTab === "datePrice" && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">Overview</h2>
                      <p>{tour.overview}</p>
                      <h2 className="text-xl font-bold mt-4 mb-2">Tour Highlights</h2>
                      <ul className="list-disc list-inside space-y-1">
                        {tour.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      <h2 className="text-xl font-bold mt-4 mb-2">Dates & Prices</h2>
                      <p>{tour.datesAndPrices}</p>
                    </div>
                  )}

                  {activeTab === "itinerary" && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">Itinerary</h2>
                      <ul className="list-decimal list-inside space-y-1">
                        {tour.itinerary.map((day, i) => (
                          <li key={i}>{day}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "accommodation" && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">Accommodation</h2>
                      <p>{tour.accommodation}</p>
                    </div>
                  )}

                  {activeTab === "extension" && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">Extension</h2>
                      <p>{tour.extension}</p>
                    </div>
                  )}

                  {activeTab === "practicalInfo" && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">Practical Info</h2>
                      <p>{tour.practicalInfo}</p>
                    </div>
                  )}

                  {activeTab === "video" && tour.video && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">Video</h2>
                      <video
                        src={tour.video}
                        controls
                        className="w-full rounded-xl shadow-md"
                      />
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}