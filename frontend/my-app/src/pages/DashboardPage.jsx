import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardSearch from "../components/ui/DashboardSearch";
import ProductCard from "../components/common/ProductCard";
import FavoriteButton from "../components/common/FavoriteButton";




export default function DashboardPage() {
  const [search, setSearch] = useState("");

 //  const filteredData = data.filter((item) =>
// item.title.toLowerCase().includes(search.toLowerCase())
// );

  return (
    <>
    <DashboardLayout>

      <DashboardSearch search={search} setSearch={setSearch} />
       

{/* 
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">
      Hi, happy to see you again
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredData.map((item) => (
        <div
        key={item.id}
        className="bg-gray-200 rounded-2xl overflow-hidden shadow-md"
        >
        <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
        />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.location}</p>
              <p className="text-orange-500 mt-2">★★★★★</p>
            </div>
            </div>
        ))}
        </div> */}
      <div className="flex md:flex-wrap gap-6 flex-row  items-center justify-center">
 <ProductCard>
        <FavoriteButton  />
      </ProductCard>
        <ProductCard>
        <FavoriteButton />
      </ProductCard>
 <ProductCard>
        <FavoriteButton />
      </ProductCard>
        <ProductCard>
        <FavoriteButton />
      </ProductCard>
 <ProductCard>
        <FavoriteButton />
      </ProductCard>
        <ProductCard>
        <FavoriteButton />
      </ProductCard>
 <ProductCard>
        <FavoriteButton />
      </ProductCard>
        <ProductCard>
        <FavoriteButton/>
      </ProductCard>
 <ProductCard>
        <FavoriteButton/>
      </ProductCard>
      
      </div>
     
   
    </DashboardLayout>
        </>
      
  );
}
