import React, { useState } from "react";
import FiltterBar from "./FiltterBar";
import { Data } from "../../Data/Data";



export default function HeroProduct() {
  const [filteredData, setFilteredData] = useState(Data);
    const [activeCategory, setActiveCategory] = useState("All");
  
    const handleFilterChange = (category) => {
      setActiveCategory(category);
      if (category === "All") {
        setFilteredData(Data);
      } else {
        const filtered = Data.filter(item => item.category === category);
        setFilteredData(filtered);
      }
    };
    return (
        <div className="max-w-5xl mx-auto px-4 space-y-10 py-10">
        {/* hero section image */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/hero-section-ProductPage.jpg"
            alt="Hero"
            className="w-full h-[320px] object-cover"
          />
        </div>


        {/* title */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-neutral-800">
            Seamless <span className="text-orange-500">Travel</span> & <span className="text-orange-500">Experience</span>
          </h2>
        </div>

      
        <FiltterBar onFilterChange={handleFilterChange} activeCategory={activeCategory} />
        </div>
    )
}