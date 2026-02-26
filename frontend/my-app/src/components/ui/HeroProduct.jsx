import React from "react";
import FiltterBar from "./FiltterBar";

export default function HeroProduct({ 
  onFilterChange, 
  activeCategory,
  cityImage,      // ✅ ADD: City hero image URL
  cityName        // ✅ ADD: City name for overlay
}) {
  
  // Default fallback image if none provided
  const heroImage = cityImage 
    ? (cityImage.startsWith('http') ? cityImage : `http://localhost:5000${cityImage}`)
    : '/hero-section-ProductPage.jpg';

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-10 py-10">
      
      {/* ✅ Dynamic Hero Image with City Name Overlay */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
        <img
          src={heroImage}
          alt={cityName || "Destination"}
          className="w-full h-[320px] md:h-[400px] object-cover 
                     transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* ✅ City Name Overlay (Bottom Left) */}
        {cityName && (
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-4 py-2 bg-orange-500/90 backdrop-blur-sm 
                           text-white font-heading font-bold text-xl md:text-2xl 
                           rounded-xl shadow-lg">
              {cityName}
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-neutral-800">
          Seamless <span className="text-orange-500">Travel</span> & <span className="text-orange-500">Experience</span>
        </h2>
      </div>

      {/* Filter Bar */}
      <FiltterBar 
        onFilterChange={onFilterChange} 
        activeCategory={activeCategory} 
      />
    </div>
  );
}