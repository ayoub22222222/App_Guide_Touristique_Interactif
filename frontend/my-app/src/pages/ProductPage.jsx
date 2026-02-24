import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/common/ProductCard";
import BtnProduct from "../components/common/BtnProduct";
import FilterBar from "../components/ui/FiltterBar";
import FooterSection from "../components/layout/FooterSection";
import { Data, categories } from "../Data/Data";
import HeroProduct from "../components/ui/HeroProduct";
import ProductSection from "../components/layout/ProductSection";
import ProductDestination from "../components/layout/ProductDestination";
import { useParams } from "react-router-dom";
import { useMemo } from "react";






export default function ProductPage() {
  const API_URL = "http://localhost:5000/api"
  const { countryId = "ma", cityId } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const relatedItems = useMemo(() => {
    if (!city) return [];
    return [...(city.places || []), ...(city.transport || []), ...(city.hotels || [])];
  }, [city]);
return (
    <>
      <Navbar />
      <HeroProduct />

      {loading && <p className="text-center py-4">Loading product data...</p>}
      {error && <p className="text-center py-4 text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="max-w-5xl mx-auto px-4 pt-6">
            <h1 className="text-2xl font-heading font-semibold">{city?.name || "City not found"}</h1>
            <p className="text-sm text-gray-700 mt-2">{city?.description || "No city description available."}</p>
          </div>

          <ProductDestination>
            {relatedItems.length > 0 ? (
              relatedItems.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  image={item.image}
                >
                  <BtnProduct
                        item={item}  // ✅ Pass full item object
                        to={`/item/${item.type?.toLowerCase() || 'place'}/${item.id}`}
                        onAdded={(addedItem) => {
        // Optional: Show toast notification
                        console.log(`✅ Added: ${addedItem.name}`);
                    }}
                  >
                    <span>Add to plan</span>
                  </BtnProduct>
                </ProductCard>
              ))
            ) : (
              <p className="text-center w-full">No data found for this city.</p>
            )}
          </ProductDestination>
        </>
      )}

      <FooterSection />
    </>
  );
}

