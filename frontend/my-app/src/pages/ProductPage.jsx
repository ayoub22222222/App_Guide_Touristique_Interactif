import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/common/ProductCard";
import BtnProduct from "../components/common/BtnProduct";
import FilterBar from "../components/ui/FiltterBar";
import FooterSection from "../components/layout/FooterSection";
import { Data, categories } from "../Data/Data";
import HeroProduct from "../components/ui/HeroProduct";
import ProductSection from "../components/layout/ProductSection";
import ProductDestination from "../components/layout/ProductDestination";

export default function ProductPage() {
  {/*  const [filteredData, setFilteredData] = useState(Data);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredData(Data);
    } else {
      const filtered = Data.filter(item => item.category === category);
      setFilteredData(filtered);
    }
  };*/}
 

  return (
   <>
      <Navbar />
      
      <HeroProduct />

<ProductDestination>
  <ProductCard>
                    <BtnProduct>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/>
                    </svg> 
                    <span>Add to plan</span> 
                    </BtnProduct>
                      </ProductCard>
                      <ProductCard>
                    <BtnProduct>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/>
                    </svg> 
                    <span>Add to plan</span> 
                    </BtnProduct>
                      </ProductCard>
                      <ProductCard>
                    <BtnProduct>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/>
                    </svg> 
                    <span>Add to plan</span> 
                    </BtnProduct>
                      </ProductCard>
                      <ProductCard>
                    <BtnProduct>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/>
                    </svg> 
                    <span>Add to plan</span> 
                    </BtnProduct>
                      </ProductCard>

</ProductDestination>
        
          
                      
  

        {/* products grid 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
          key={item.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
          <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full object-cover"
          />
          
          <div className="p-4">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-neutral-500">{item.location}</p>
          
          <div className="flex items-center justify-between mt-2">
          <div></div>
          
          
          <BtnProduct>
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/>
          </svg> 
          <span>Add to plan</span> 
          </BtnProduct>
          </div>
          </div>
          </div>
          ))}
          </div>
          */}
      
      
      <FooterSection />
          </>  
  );
}