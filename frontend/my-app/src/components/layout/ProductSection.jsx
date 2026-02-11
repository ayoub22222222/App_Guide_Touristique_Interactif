import React from "react";


export default function ProductSection({ children }) {
    return (
        <>
        <h1 className="font-heading">Destination Options</h1>
        <div className="grid grid-cols-3 gap-4 p-7">
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            <div className="bg-blue-500 h-16 "></div>
            { children }
        </div>
        {/* <div class="h-90 w-75 bg-blue-500 p-6 bg-gray-300 border-2 rounded-2xl">
      <img class="w-1/2 h-full object-cover" src="https://images.unsplash.com/photo-1767131636996-ae27286d36fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      random stuff 
    </div> */}
        </>
    )
}