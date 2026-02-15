import React from "react";


export default function ProductSection({ children }) {
    return (
        <>
        {/* <h1 className="font-heading font-semibold text-3xl text-center absolute translate-y-24">Destination Options</h1> */}
        <section className="container mx-auto px-4 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center translate-y-10 pb-5">
            { children }
        </section>
        
        </>
    )
}