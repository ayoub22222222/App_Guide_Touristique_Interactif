
import React, { useState } from "react";

export default function SearchBar({ onCountryChange, onSearchChange, selectedCountry }) {
  const [searchQuery, setSearchQuery] = useState("");

  const countries = [
    { id: "ma", name: "Morocco", flag: "🇲🇦" },
    { id: "fr", name: "France", flag: "🇫🇷" }
  ];

  const handleCountrySelect = (countryId) => {
    if (onCountryChange) {
      onCountryChange(countryId);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      
      {/* Country Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {countries.map((country) => (
          <button
            key={country.id}
            onClick={() => handleCountrySelect(country.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                selectedCountry === country.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/90 text-neutral-700 hover:bg-white hover:text-orange-500 backdrop-blur-sm border border-white/20"
              }
            `}
          >
            <span>{country.flag}</span>
            <span>{country.name}</span>
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder={`Search cities in ${countries.find(c => c.id === selectedCountry)?.name}...`}
          value={searchQuery}
          onChange={handleSearch}
          className="w-full h-12 px-4 pr-12 bg-white/95 backdrop-blur-sm border border-white/20 
                     rounded-xl text-neutral-800 placeholder-neutral-400
                     focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                     shadow-lg shadow-black/10 transition-all duration-300"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 
                     bg-orange-500 hover:bg-orange-600 text-white 
                     px-4 py-1.5 rounded-lg text-sm font-medium
                     transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
        >
          Search
        </button>
      </div>
      
    </div>
  );
}