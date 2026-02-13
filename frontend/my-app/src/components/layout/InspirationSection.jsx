import React from "react"



export default function InspirationSection({ children }) {
    return (
        <>
            <p className="text-center font-heading p-10 font-semibold text-3xl">

                Travel Inspiration
            </p>
        <section className="flex flex-row justify-evenly items-center">
            { children }
        </section>
        </>
    )
}