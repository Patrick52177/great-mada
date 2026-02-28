"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOURS } from "./tour";
import Select, { components } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../utils/countries";

// ── Option pays pour react-select ──
const CountryOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{ width: "20px", height: "20px" }}
      />
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: "0.75rem",
    borderColor: "#E5E7EB",
    minHeight: "44px",
    fontSize: "0.875rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    "&:hover": { borderColor: "#E5E7EB" },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "0.75rem",
    overflow: "hidden",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#DC2626"
      : state.isFocused
      ? "#FEE2E2"
      : "white",
    color: state.isSelected ? "white" : "#374151",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#D1D5DB",
    fontSize: "0.875rem",
  }),
};

// Classes Tailwind pour les inputs
const inputClass =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition";

export default function TailorMadePage() {
  const [priceFilter, setPriceFilter] = useState(2000);
  const [dayFilter, setDayFilter] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<{ value: string; label: string } | null>(null);
  const [preferredCallTime, setPreferredCallTime] = useState<string>("");

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

  return (
    <>
      <Navbar />

      {/* ================= MAP ================= */}
      <div className="w-full h-[420px] relative shadow-lg">
        <iframe
          src="https://maps.google.com/maps?q=-18.905408,47.5336&z=16&output=embed"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent z-10 pointer-events-none" />

        {/* Badge GPS */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute inset-0 opacity-75" />
            <div className="w-3 h-3 bg-red-600 rounded-full relative" />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">GMT+3 Madagascar</p>
            <p className="text-xs text-gray-400">Antananarivo, Madagascar</p>
          </div>
        </div>

        {/* Boutons Maps */}
        <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
          <a
            href="https://www.google.com/maps?ll=-18.905408,47.5336"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg hover:bg-red-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Ouvrir dans Maps
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=-18.905408,47.5336"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-700 px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg border border-gray-200 hover:bg-gray-50 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Itinéraire
          </a>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <main className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-10 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-800">QUICK SEARCH</h3>
                <div className="space-y-2 mt-4">
                  <label className="font-semibold text-sm">Price: €1 – €{priceFilter}</label>
                  <input type="range" min={1} max={2000} step={10} value={priceFilter} onChange={e => setPriceFilter(Number(e.target.value))} className="w-full h-4 rounded-full bg-red-200 accent-red-600 cursor-pointer mt-2"/>
                </div>
                <div className="space-y-2 mt-4">
                  <label className="font-semibold text-sm">Days: 1 – {dayFilter} days</label>
                  <input type="range" min={1} max={15} step={1} value={dayFilter} onChange={e => setDayFilter(Number(e.target.value))} className="w-full h-4 rounded-full bg-red-200 accent-red-600 cursor-pointer mt-2"/>
                </div>
                <input type="text" placeholder="Search tours..." value={searchText} onChange={e => setSearchText(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none mt-4"/>
              </div>

              {["PLAN YOUR TRIP", "PLAN YOUR TRIP"].map((title, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-lg mb-2">{title}</h4>
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
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
        <div className="p-8 bg-gray-50">
                <form className="space-y-6">

                  {/* ── SECTION 1 : Personal Information ── */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        1
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm uppercase tracking-widest">
                        Personal Information
                      </h3>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Civility + Surname + Given Names */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Civility <span className="text-red-500">*</span>
                          </label>
                          <select className={inputClass}>
                            <option value="">Select...</option>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Miss</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Surname <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Your surname"
                            className={inputClass}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Given Names <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Your given names"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Email + Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <input
                              type="email"
                              placeholder="your@email.com"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Phone
                          </label>
                          <div className="relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <input
                              type="tel"
                              placeholder="+1 234 567 890"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Country + Preferred Call Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Country
                          </label>
                          <Select
                            options={countries}
                            value={selectedCountry}
                            onChange={setSelectedCountry}
                            components={{ Option: CountryOption }}
                            placeholder="Select your country..."
                            styles={selectStyles}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Preferred Call Time
                          </label>
                          <select
                            value={preferredCallTime}
                            onChange={(e) => setPreferredCallTime(e.target.value)}
                            className={inputClass}
                          >
                            <option value="">Please select...</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── SECTION 2 : Travel Details ── */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        2
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm uppercase tracking-widest">
                        Travel Details
                      </h3>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Adults + Children + Infants */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Adults <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number" min={1} defaultValue={1}
                            className={inputClass}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Children (3–12 y.o)
                          </label>
                          <input
                            type="number" min={0} defaultValue={0}
                            className={inputClass}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Infants (&lt; 2 y.o)
                          </label>
                          <input
                            type="number" min={0} defaultValue={0}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Hotel Option + Arrival + Departure */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Hotel Option <span className="text-red-500">*</span>
                          </label>
                          <select className={inputClass}>
                            <option value="">All Options</option>
                            <option>Budget</option>
                            <option>Comfort</option>
                            <option>Luxury</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Arrival Date <span className="text-red-500">*</span>
                          </label>
                          <input type="date" className={inputClass} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Departure Date <span className="text-red-500">*</span>
                          </label>
                          <input type="date" className={inputClass} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── SECTION 3 : Message ── */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        3
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm uppercase tracking-widest">
                        Your Message
                      </h3>
                    </div>
                    <div className="p-6">
                      <textarea
                        rows={5}
                        placeholder="Tell us about your dream trip, special requests, or any questions..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {/* ── SUBMIT ── */}
                  <div className="pt-2">
                    <p className="text-xs text-gray-400 mb-4">
                      Fields marked with{" "}
                      <span className="text-red-500 font-bold">*</span> are required.
                    </p>
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-red-200"
                    >
                      Send My Enquiry →
                    </button>

                    {/* Badges de confiance */}
                    <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        Secure & Private
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Reply within 24h
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        No commitment
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          

        
        
      </main>

      <Footer />
    </>
  );
}