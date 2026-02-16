import React from "react";
import Bali from "../../assets/Bali.jpg";
import { Link } from "react-router-dom";



export default function ProductCard() {
    return (

    <div className="w-60  bg-gray-300 overflow-hidden rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
  
    <img src={Bali} alt="" className="h-full object-cover w-full" />
    <div>
      <h2 className="font-bold text-lg p-2 m-1 font-heading">Oxford Walking Tour</h2>
      
      <p className="text-sm p-1 m-1 font-heading">random text tohelp me understand
        random text tohelp me understand
      </p>
      <div className="m-2 p-1">
        <a href="#" role="button" class="text-white bg-black px-3 py-1 rounded-md hover:bg-secondary font-heading text-sm">
          <Link to="/Login">Learn More</Link>
          </a>
      </div>
    </div>
  </div>
  
    )
}