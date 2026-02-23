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
import { useParams } from "react-router-dom";

export default function ProductPage() { 



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
      
      <FooterSection />
          </>  
  );
}