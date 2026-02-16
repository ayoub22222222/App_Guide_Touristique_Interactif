import React from "react";


export default function SearchBar() {
    return (
           <div className="relative w-80">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-12 px-4 pr-12 border rounded-lg"
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-md"
      >
        Go
      </button>
    </div>
    )
}