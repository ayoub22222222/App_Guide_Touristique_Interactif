import React from "react";
import HeroPic from "../../assets/HeroPic.jpg";
import SearchBar from "../ui/SearchBar";
import Card from "../common/Card";

export default function HeroSection({ children }) {
  return (
    <>
      {/* Navigation Container */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[85vh] min-h-[600px] bg-center bg-cover bg-fixed overflow-hidden flex flex-col justify-end"
        style={{
          backgroundImage: `url(${HeroPic})`,
          backgroundPosition: "50% 30%",
        }}
      >
        {/* Dark Overlay - Smooth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pb-16 md:pb-24 z-10">
          {/* Main Title */}
          <h1 className="font-heading font-bold text-white mb-4 tracking-tight">
            <span className="text-6xl md:text-7xl lg:text-8xl text-orange-500 font-extrabold">P</span>
            <span className="text-3xl md:text-4xl lg:text-5xl ml-2">LAN YOUR ESCAPE</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl font-heading text-white/90 text-base md:text-lg lg:text-xl pb-8 leading-relaxed">
            Discover amazing destinations and create unforgettable memories with our curated travel experiences
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* ✅ Stats Section - EXACTLY AS PROVIDED (No Changes) */}
      <div className="text-black overflow-visible relative min-h-[20vh] font-heading flex justify-evenly items-start m-0 pb-2">    
        <Card num = "+10" text="total customers"/>
        <Card num = "+10" text="total customers"/>
        <Card num = "+10" text="total customers"/>
        {/* <h1 className="font-heading font-semibold text-3xl text-center absolute translate-y-24 z-10">Destination Options</h1> */}
      </div>
    </>
  );
}