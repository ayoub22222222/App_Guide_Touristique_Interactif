import React from "react";

export default function ProductSection({ children }) {
  return (
    <>
      {/* Section Header */}
      <div className="container mx-auto px-4 pt-0 pb-8 text-center ">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></span>
          <span className="text-orange-500 text-xl">✦</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></span>
        </div>
        
        {/* Section Title */}
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-3">
          Explore Our Destinations
        </h2>
        
        {/* Subtitle */}
        <p className="text-neutral-500 text-sm md:text-base max-w-md mx-auto">
          Discover amazing cities, cultures, and experiences across the kingdom
        </p>
      </div>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {children}
        </div>
      </section>
    </>
  );
}