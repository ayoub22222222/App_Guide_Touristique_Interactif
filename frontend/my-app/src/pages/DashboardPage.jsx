// import { useState } from "react";
// import DashboardLayout from "../components/layout/DashboardLayout";
// import DashboardSearch from "../components/ui/DashboardSearch";
// import ProductCard from "../components/common/ProductCard";
// import FavoriteButton from "../components/common/FavoriteButton";




// export default function DashboardPage() {
//   const [search, setSearch] = useState("");

//  //  const filteredData = data.filter((item) =>
// // item.title.toLowerCase().includes(search.toLowerCase())
// // );

//   return (
//     <>
//     <DashboardLayout>

//       <DashboardSearch search={search} setSearch={setSearch} />
       


//       <h1 className="text-2xl lg:text-3xl font-bold mb-8">
//       Hi, happy to see you again
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {filteredData.map((item) => (
//         <div
//         key={item.id}
//         className="bg-gray-200 rounded-2xl overflow-hidden shadow-md"
//         >
//         <img
//         src={item.image}
//         alt={item.title}
//         className="h-48 w-full object-cover"
//         />
//             <div className="p-4">
//               <h3 className="text-lg font-bold">{item.title}</h3>
//               <p className="text-gray-600">{item.location}</p>
//               <p className="text-orange-500 mt-2">★★★★★</p>
//             </div>
//             </div>
//         ))}
//         </div> 
//       <div className="flex md:flex-wrap gap-6 flex-row  items-center justify-center">
//   <ProductCard>
//         <FavoriteButton  />
//       </ProductCard>
//         <ProductCard>
//         <FavoriteButton />
//       </ProductCard>
//  <ProductCard>
//         <FavoriteButton />
//       </ProductCard>
//         <ProductCard>
//         <FavoriteButton />
//       </ProductCard>
//  <ProductCard>
//         <FavoriteButton />
//       </ProductCard>
//         <ProductCard>
//         <FavoriteButton />
//       </ProductCard>
//  <ProductCard>
//         <FavoriteButton />
//       </ProductCard>
//         <ProductCard>
//         <FavoriteButton/>
//       </ProductCard>
//  <ProductCard>
//         <FavoriteButton/>
//       </ProductCard>
      
//       </div>
     
   
//     </DashboardLayout>
//         </>
      
//   );
// }

// pages/DashboardPage.jsx
import { useState, useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardSearch from "../components/ui/DashboardSearch";
import ProductCard from "../components/common/ProductCard";
import BtnProduct from "../components/common/BtnProduct";
import { getPlanItems, removeFromPlan } from "../utils/plan";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [planItems, setPlanItems] = useState([]);

  // Load planned items on mount
  useEffect(() => {
    const items = getPlanItems();
    setPlanItems(items);
  }, []);

  // Filter by search
  const filteredItems = planItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Remove item from plan
  const handleRemove = (itemId) => {
    removeFromPlan(itemId);
    setPlanItems(getPlanItems()); // Refresh state
  };

  return (
    <>
      <DashboardLayout>
        <DashboardSearch search={search} setSearch={setSearch} />
        
        {/* Header */}
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-heading font-semibold">
            My Plan ({planItems.length})
          </h2>
          {planItems.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Clear all items from your plan?')) {
                  localStorage.removeItem('travel_plan_items');
                  setPlanItems([]);
                }
              }}
              className="text-sm text-red-600 hover:text-red-800 transition"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Empty state */}
        {planItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-neutral-500 text-lg">Your plan is empty</p>
            <p className="text-neutral-400 mt-2">
              Go explore cities and add places, hotels, or transport!
            </p>
          </div>
        ) : (
          /* Items grid */
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-wrap gap-6 justify-center">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <ProductCard
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      type={item.type}
                    >
                      <div className="flex gap-2">
                        <BtnProduct
                          item={item}
                          className="bg-green-100 text-green-700 hover:bg-green-200"
                        >
                          <span>Added ✓</span>
                        </BtnProduct>
                        
                        {/* Remove button */}
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition"
                          title="Remove from plan"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </ProductCard>
                    
                    {/* Type badge */}
                    {item.type && (
                      <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-neutral-800 text-white">
                        {item.type}
                      </span>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center w-full py-8 text-neutral-500">
                  No items match "{search}"
                </p>
              )}
            </div>
          </div>
        )}
      </DashboardLayout>
    </>
  );
}
