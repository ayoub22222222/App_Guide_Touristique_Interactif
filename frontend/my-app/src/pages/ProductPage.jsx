import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/common/ProductCard";
import BtnProduct from "../components/common/BtnProduct";
import FilterBar from "../components/ui/FiltterBar";
import FooterSection from "../components/layout/FooterSection";
import HeroProduct from "../components/ui/HeroProduct";
import ProductDestination from "../components/layout/ProductDestination";

const API_URL = "http://localhost:5000/api";

export default function ProductPage() {
  const { countryId = "ma", cityId } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_URL}/countries/${countryId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch country data");
        return res.json();
      })
      .then((data) => {
        setCountry(data.country || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [countryId]);

  const city = useMemo(() => {
    if (!country) return null;
    if (!cityId) return country.cities?.[0] || null;
    return country.cities?.find((item) => item.id === cityId) || null;
  }, [country, cityId]);

  const filteredItems = useMemo(() => {
    if (!city) return [];
    
    if (activeCategory === "All") {
      return [
        ...(city.places || []).map(item => ({ ...item, type: "Places" })),
        ...(city.transport || []).map(item => ({ ...item, type: "Transport" })),
        ...(city.hotels || []).map(item => ({ ...item, type: "Hotels" }))
      ];
    } else {
      const categoryKey = activeCategory.toLowerCase();
      return (city[categoryKey] || []).map(item => ({ ...item, type: activeCategory }));
    }
  }, [city, activeCategory]);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
  if (!city) return <div className="text-center py-10">City not found</div>;

  return (
    <>
      <Navbar />
      
      {/* ✅ PASS: City image and name to HeroProduct */}
      <HeroProduct 
        onFilterChange={handleFilterChange} 
        activeCategory={activeCategory}
        cityImage={city.image}    // ✅ Dynamic hero image
        cityName={city.name}      // ✅ City name overlay
      />

      {/* City header */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <h1 className="text-2xl font-heading font-semibold">{city.name}</h1>
        <p className="text-sm text-gray-700 mt-2">{city.description}</p>
        
        {/* Quick stats */}
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
            🏛️ {city.places?.length || 0} Places
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
            🚌 {city.transport?.length || 0} Transport
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            🏨 {city.hotels?.length || 0} Hotels
          </span>
        </div>
      </div>

      {/* Items grid */}
      <ProductDestination>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
              type={item.type}
            >
              <BtnProduct
                item={item}
                to={`/item/${item.type?.toLowerCase() || 'place'}/${item.id}`}
                onAdded={(addedItem) => {
                  console.log(`✅ Added: ${addedItem.name}`);
                }}
              >
                <span>Add to plan</span>
              </BtnProduct>
            </ProductCard>
          ))
        ) : (
          <p className="text-center w-full py-8 text-neutral-500">
            No {activeCategory.toLowerCase()} found for {city.name}.
          </p>
        )}
      </ProductDestination>

      <FooterSection />
    </>
  );
}