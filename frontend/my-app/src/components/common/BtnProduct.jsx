import React from "react";
import { Link } from "react-router-dom";

export default function BtnProduct({ to = "/product", children = "View Details", className = "" }) {
    return (
        <>
        <div className="flex justify-between gap-2">
            <Link 
            to={to} 
            className={`flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-orange-400 transition ${className}`}
        >
            {children}
        </Link>

        </div>
        
        </>
        
    )
}

