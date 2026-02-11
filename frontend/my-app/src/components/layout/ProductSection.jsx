import React from "react";


export default function ProductSection({ children }) {
    return (
        <>
        <h1 className="font-heading">Destination Options</h1>
        <div className="">
            { children }
        </div>
        </>
    )
}