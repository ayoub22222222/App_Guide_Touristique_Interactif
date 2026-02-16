import React from "react";
import { Link } from "react-router-dom";


export default function TestoSection({ children }) {
    return (
        <section className="container mx-auto px-4 text-center font-heading text p-3">
            <div className="p-5">
                <h1 className="font-heading text-3xl font-semibold  pb-2">What Are They Saying?</h1>
                <p className="pb-2.5">Real story from real people! see how our paltform
                    have tranformed their experiences</p>
            <div className="bg-black text-white p-2.5 inline-block rounded-xl hover:bg-secondary cursor-pointer hover:-translate-y-2 duration-300 shadow-2xl">
                <Link to="/Login">Signe up to Discover More</Link>
  </div>
            </div>
            <div className="flex flex-row justify-evenly h-80">
             { children }
            </div>
        </section>
    )
}