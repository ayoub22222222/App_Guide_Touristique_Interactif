import React from "react";
import Bali from "../../assets/Bali.jpg";
import { Link } from "react-router-dom";



export default function ProductCard({ title, description, image, link, children }) {
    return (

    <div className="w-60  bg-gray-300 overflow-hidden rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
    
    <div className=" overflow-hidden">

    <img src={`http://localhost:5000${image}`} alt="" className=" object-cover w-full h-36" />
    </div>
    <div>
      <h2 className="font-bold text-lg p-2 m-1 font-heading">{ title }</h2>
      
      <p className="text-sm p-1 m-1 font-heading">
        {description}
      </p>
      <div className="m-2 p-1">
        {/* <a href="#" role="button" class="text-white bg-black px-3 py-1 rounded-md hover:bg-secondary font-heading text-sm">
          <Link to="/Login">Learn More</Link> */}
          { children }
          
      </div>
    </div>
  </div>
  
  
    )
}