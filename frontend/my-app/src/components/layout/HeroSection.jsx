import React from "react";
import HeroPic from "../../assets/HeroPic.jpg"
import Button from "../ui/Button";
import SearchBar from "../ui/SearchBar";

export default function HeroSection({ children }) {
    return (
        <>
        <section className="relative h-[80vh] bg-cover bg-no-repeat bg-center"
        style={{  backgroundImage: `url(${HeroPic})`, backgroundPosition: "20% 30%"}}>
            { children }
            <div className="absolute inset-0 bg-black/30"></div>
            {/* the conetent section  */}
            <div className=" top-1/2 p-10 translate-y-32">
                {/* head line hero section */}
                <h1 className="font-heading font-bold text-3xl">
                  <span className="text-7xl text-secondary">P</span>LAN YOUR ESCAPE
                </h1>
                <div className="relative flex justify-between">

                <p className="max-w-md font-heading">
                    RANDOM TEXT TO INCREASE THE ENGAGMENT INTO YOUR WEBSITE AND STUFF RELATED TO THAT THAT WILL SERVE THAT MATTER
                </p>
                <SearchBar></SearchBar>
                <Button>Search</Button>
                </div>

            </div>
        </section>
        <p className="text-black">text</p>
                <div className="text-black font-heading max-w-sm bg-blue-400">
                    10+
                    total customers
                </div>

        </>
    )
}