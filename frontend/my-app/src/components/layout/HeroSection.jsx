import React from "react";
import HeroPic from "../../assets/HeroPic.jpg"
// import Button from "../ui/Button";
import SearchBar from "../ui/SearchBar";
import ProductSection from "./ProductSection";

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

        
                <div className="text-black overflow-visible relative font-heading min-h-screen bg-blue-400 flex justify-center gap-2 ">
                    <p className="-mt-3">1</p>
                    <p className="-mt-3">1</p>
                    <p className="-mt-3">1</p>
                </div>

        </>
    )
}