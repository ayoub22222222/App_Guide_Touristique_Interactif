import React from "react";


export default function Button({ children }) {
    return (
        <>
        <button type="submit"   className="absolute right-2 top-1/3 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-md font-heading text-sm hover:text-orange-400">
        {children}
        </button>
        </>
    )
}