import React from "react";
// import { Link } from "react-router-dom";

import  { useState } from "react";
import { Link } from "react-router-dom";
import { addToPlan, isInPlan } from "../../utils/plan";

// export default function BtnProduct({ to = "/product", children = "View Details", className = "" }) {
//     return (
//         <>
//         <div className="flex justify-between gap-2">
//             <Link 
//             to={to} 
//             className={`flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-orange-400 transition ${className}`}
//         >
//             {children}
//         </Link>

//         </div>
        
//         </>
        
//     )
// }
export default function BtnProduct({ 
  to = "/product", 
  children = "View Details", 
  className = "",
  item,           // ✅ Pass the full item object here
  onAdded,        // ✅ Optional callback when added
  showAddedState = true  // ✅ Show "Added ✓" state
}) {
  const [isAdded, setIsAdded] = useState(item ? isInPlan(item.id) : false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent navigation if we're adding to plan
    
    if (item) {
      const success = addToPlan(item);
      if (success) {
        setIsAdded(true);
        if (onAdded) onAdded(item);
        
        // Visual feedback
        const btn = e.currentTarget.closest('button') || e.currentTarget;
        btn?.classList.add('scale-95', 'bg-green-500');
        setTimeout(() => {
          btn?.classList.remove('scale-95', 'bg-green-500');
        }, 200);
      }
    }
  };

  // If already added, show different state
  if (showAddedState && isAdded) {
    return (
      <div className="flex justify-between gap-2">
        <button
          disabled
          className={`flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg cursor-default ${className}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>Add tofavorite</span>
        </button>
        
        {/* Optional: Still allow navigation to item detail */}
         {/* {to && (
          <Link 
            to={to} 
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <span>View</span>
          </Link>
        )}  */}
      </div>
    );
  }

  // Default "Add to plan" button
  return (
    <>
      <div className="flex justify-between gap-2">
        <button
          onClick={handleClick}
          className={`flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-orange-400 transition ${className}`}
        >
          {children}
        </button>

        {/* Optional: Link to item detail page */}
        {to && (
          <Link 
            to={to} 
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <span>View</span>
          </Link>
        )}
      </div>
    </>
  );
}
