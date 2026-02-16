import React from "react";

export default function Card({ num, text }) {
    return (
      <div className="inline-block -mt-10  px-8 py-4 bg-gray-200 rounded-full border-2 border-black shadow-md text-center">
  <h2 className="text-3xl font-bold">{num}</h2>
  <p className="text-sm text-gray-600">{ text }</p>
</div>

    )
}