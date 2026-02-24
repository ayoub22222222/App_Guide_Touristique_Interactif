import React from "react";
import HeroPic from "../../assets/HeroPic.jpg"
import SearchBar from "../ui/SearchBar";
import Card from "../common/Card";


export default function HeroSection({ children }) {
    return (
        <>
        <div>

        { children }
        </div>
<section
  className="relative h-[80vh] bg-center bg-cover bg-slate-500 bg-blend-overlay bg-fixed bg-black/30  overflow-hidden flex flex-col justify-end  p-10"
  style={{ backgroundImage: `url(${HeroPic})`, backgroundPosition: "20% 30%" }}
>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

  <div className="container mx-auto px-2 py-2 mb-1  z-10">
    <h1 className=" font-heading font-semibold text-white text-sm md:text-2xl xl:text-3xl ">
      <span className="text-7xl text-secondary">P</span>LAN YOUR ESCAPE
    </h1>
    <p className="max-w-md font-heading text-white pb-5">
      RANDOM TEXT TO INCREASE THE ENGAGMENT INTO YOUR WEBSITE AND STUFF RELATED TO THAT
    </p>
  <div className="mb-20">
    <SearchBar />
    
  </div>
  </div>

</section>
                <div className="text-black overflow-visible relative min-h-[20vh] font-heading flex justify-evenly items-start m-0">    
                    <Card num = "+10" text="total customers"/>
                    <Card num = "+10" text="total customers"/>
                    <Card num = "+10" text="total customers"/>
                    <h1 className="font-heading font-semibold text-3xl text-center absolute translate-y-24 z-10">Destination Options</h1>
                </div>
                

        </>
    )
}