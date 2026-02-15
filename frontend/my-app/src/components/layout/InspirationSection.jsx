import React from "react"



export default function InspirationSection({ children }) {
    return (
        <>
            <p className="container mx-auto px-4  text-center font-heading p-10 font-semibold text-3xl">

                Travel Inspiration
            </p>
        <section className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-evenly items-center">
            { children }
        </section>
        </>
    )
}