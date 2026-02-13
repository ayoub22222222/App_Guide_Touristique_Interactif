import React from "react";


export default function RecomandationCard() {
    return (
        <div className="p-3">

        <div className="relative h-80 w-64 hover:-translate-y-2 duration-300 shadow-lg">
        <img src="https://images.unsplash.com/photo-1767131636996-ae27286d36fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full rounded-xl object-cover " />
        <p className="absolute bottom-32 left-1/2 -translate-x-1/2 text-2xl font-bold text-white z-10 hover:text-orange-300 cursor-pointer py-2 font-heading ">Rome</p>
        <p className="absolute bottom-10 z-10 text-white max-w-sm px-5 text-sm translate-x-5 translate-y-1 font-heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni facere doloribus consectetur soluta aspernatur, impedit assumenda</p>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
    </div>
    )
}