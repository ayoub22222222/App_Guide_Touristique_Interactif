
import React from "react";
import SearchBar from "../ui/SearchBar";
import Card from "../common/Card";

export default function HeroSection({ 
  children,
  onCountryChange,
  onSearchChange,
  selectedCountry,
  heroImage,        // ✅ From API
  countryName       // ✅ From API
}) {
  
  // ✅ Build full image URL from API
  const backgroundImage = heroImage 
    ? (heroImage.startsWith('http') 
        ? heroImage 
        : `http://localhost:5000${heroImage}`)  // ← Backend serves images
    : '/images/hero-default.jpg';

  return (
    <>
      {/* Navigation */}
      <div className="relative z-20">
        {children}
      </div>

      {/* ✅ Hero with dynamic background from API */}
      <section
        className="relative h-[85vh] min-h-[600px] bg-center bg-cover bg-fixed overflow-hidden flex flex-col justify-end transition-all duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,  // ← From backend!
          backgroundPosition: "50% 30%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

        {/* ✅ Country Badge */}
        {countryName && (
          <div className="absolute top-6 left-6 z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/90 backdrop-blur-sm 
                           text-white font-heading font-bold rounded-xl shadow-lg">
              <span>{selectedCountry === "ma" ? "🇲🇦" : "🇫"}</span>
              <span>{countryName}</span>
            </span>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-6 pb-16 md:pb-24 z-10">
          <h1 className="font-heading font-bold text-white mb-4 tracking-tight">
            <span className="text-6xl md:text-7xl lg:text-8xl text-orange-500 font-extrabold">P</span>
            <span className="text-3xl md:text-4xl lg:text-5xl ml-2">LAN YOUR ESCAPE</span>
          </h1>

          <p className="max-w-xl font-heading text-white/90 text-base md:text-lg lg:text-xl pb-8 leading-relaxed">
            {selectedCountry === "ma" 
              ? "Discover the magic of Morocco: ancient medinas, Sahara dunes, and vibrant culture"
              : "Explore the beauty of France: romantic Paris, stunning coastlines, and world-class cuisine"
            }
          </p>

          <div className="max-w-2xl">
            <SearchBar 
              onCountryChange={onCountryChange}
              onSearchChange={onSearchChange}
              selectedCountry={selectedCountry}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="text-black overflow-visible relative min-h-[20vh] font-heading flex justify-evenly items-start m-0 pb-2">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-neutral-50/80 to-white/80 backdrop-blur-sm -z-10 rounded-2xl"></div>
        <Card num="+10K" text="Happy Customers" />
        <Card num="+50" text="Destinations" />
        <Card num="+100" text="Partner Hotels" />
      </div>
    </>
  );
}