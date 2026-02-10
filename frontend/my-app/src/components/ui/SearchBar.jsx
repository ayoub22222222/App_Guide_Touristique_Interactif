import React from "react";


export default function SearchBar({ children }) {
    return (
        <>
        <input type="text" placeholder="Search..." className="w-80 px-4 border rounded-lg h-12 "/>
        {children}

        </>
    )
}