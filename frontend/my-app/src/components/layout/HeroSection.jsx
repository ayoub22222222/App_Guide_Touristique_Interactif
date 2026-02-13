import React from "react";
import HeroPic from "../../assets/HeroPic.jpg"
// import Button from "../ui/Button";
import SearchBar from "../ui/SearchBar";
// import ProductSection from "./ProductSection";
import Card from "../common/Card";
import ProductSection from "./ProductSection";
import ProductCard from "../common/ProductCard";

export default function HeroSection({ children }) {
    return (
        <>
        <div>

        { children }
        </div>
<section
  className="relative h-[80vh] bg-center bg-cover bg-slate-500 bg-blend-overlay bg-black/30  overflow-hidden flex justify-between items-end p-10"
  style={{ backgroundImage: `url(${HeroPic})`, backgroundPosition: "20% 30%" }}
>
  {/* Left content */}
  <div className="mb-20 ">
    <h1 className="font-heading font-bold text-3xl">
      <span className="text-7xl text-secondary">P</span>LAN YOUR ESCAPE
    </h1>
    <p className="max-w-md font-heading">
      RANDOM TEXT TO INCREASE THE ENGAGMENT INTO YOUR WEBSITE AND STUFF RELATED TO THAT
    </p>
  </div>

  {/* Right content */}
  <div className="mb-20">
    <SearchBar />
    
  </div>
</section>
                <div className="text-black overflow-visible relative min-h-[20vh] font-heading flex justify-evenly items-start m-0">    
                    <Card num = "+10" text="total customers"/>
                    <Card num = "+10" text="total customers"/>
                    <Card num = "+10" text="total customers"/>
                    <h1 className="font-heading font-semibold text-3xl text-center absolute translate-y-24">Destination Options</h1>
                </div>
                    <ProductSection>
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                    </ProductSection>

                

        </>
    )
}