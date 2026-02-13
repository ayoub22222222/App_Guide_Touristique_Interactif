import React from "react";


export default function TestoSection({ children }) {
    return (
        <section className="text-center font-heading text p-3">
            <div className="p-5">
                <h1 className="font-heading text-3xl font-semibold">What Are They Saying?</h1>
                <p>Rea story from real people! see how our paltform
                    have tranformed their experiences</p>
            </div>
            <div className="flex flex-row justify-evenly h-80">
             { children }
            </div>
        </section>
    )
}