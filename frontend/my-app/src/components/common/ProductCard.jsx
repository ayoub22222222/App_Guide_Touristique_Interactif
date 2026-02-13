import React from "react";
import Italy from "../../assets/Italy.jpg";



export default function ProductCard() {
    return (

    <div className="w-60 p-2 bg-gray-300 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
  
    <img src={Italy} alt="" className="h-40 object-cover rounded-xl" />
    <div>
      <h2 className="font-bold text-lg">Hello Kitty</h2>
      
      <p className="text-sm ">random text tohelp me understand
        random text tohelp me understand
      </p>
      <div className="m-2">
        <a href="#" role="button" class="text-white bg-black px-3 py-1 rounded-md hover:bg-secondary">learn More</a>
      </div>
    </div>
  </div>
  
    )
}