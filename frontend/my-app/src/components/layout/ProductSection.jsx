import React from "react";


export default function ProductSection({ children }) {
    return (
        <>
        {/* <h1 className="font-heading font-semibold text-3xl text-center absolute translate-y-24">Destination Options</h1> */}
        <section className=" grid grid-rows-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            { children }
        </section>
        
        </>
    )
}