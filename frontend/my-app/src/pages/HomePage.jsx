import React, { useEffect, useState } from "react";
import HeroSection from "../components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import ProductSection from "../components/layout/ProductSection";
import ProductCard from "../components/common/ProductCard";
import InspirationSection from "../components/layout/InspirationSection";
import RecomandationCard from "../components/layout/RecomandationCard";
import TestoSection from "../components/layout/TestoSection";
import CustomerPicture from "../components/common/CustomerPicture";
import FooterSection from "../components/layout/FooterSection";
import BtnHome from "../components/common/BtnHome";

const API_URL = 'http://localhost:5000/api';

export default function HomePage() {
  const [moroccoCities, setMoroccoCities] = useState([]);
  const [franceCities, setFranceCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // ✅ ADD: Filter state
  const [selectedCountry, setSelectedCountry] = useState("ma");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Morocco
        const maRes = await fetch(`${API_URL}/countries/ma`);
        if (!maRes.ok) throw new Error('Failed to fetch Morocco');
        const maData = await maRes.json();
        setMoroccoCities(maData.country?.cities || []);

        // Fetch France
        const frRes = await fetch(`${API_URL}/countries/fr`);
        if (!frRes.ok) throw new Error('Failed to fetch France');
        const frData = await frRes.json();
        setFranceCities(frData.country?.cities || []);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ ADD: Get cities for selected country
  const currentCities = selectedCountry === "ma" ? moroccoCities : franceCities;

  // ✅ ADD: Filter cities by search query
  const filteredCities = currentCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Find specific cities for recommendations (unchanged)
  const marrakech = moroccoCities.find(c => c.id === 'ma-marrakech');
  const paris = franceCities.find(c => c.id === 'fr-paris');
  const toulouse = franceCities.find(c => c.id === 'fr-toulouse');

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <>
     <HeroSection 
  onCountryChange={setSelectedCountry}
  onSearchChange={setSearchQuery}
  selectedCountry={selectedCountry}
>
  <Navbar />
</HeroSection>
      
      <ProductSection>
        {/* ✅ PASS: Filter handlers to SearchBar via HeroSection */}
        {/* Note: You'll need to update HeroSection to forward these props */}
        
        {filteredCities.length > 0 ? (
          filteredCities.map(city => (
            <ProductCard
              key={city.id}
              title={city.name}
              description={city.description}
              image={city.image}
            >
              <BtnHome to={`/product/${selectedCountry}/${city.id}`}/>
            </ProductCard>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-neutral-500">
            <p className="text-lg">No cities found{searchQuery && ` for "${searchQuery}"`}</p>
            <p className="text-sm mt-1">Try searching for something else</p>
          </div>
        )}
      </ProductSection>

      {/* Inspiration Section (unchanged) */}
      <InspirationSection>
        {marrakech && <RecomandationCard city={marrakech} countryId="ma" />}
        {paris && <RecomandationCard city={paris} countryId="fr" />}
        {toulouse && <RecomandationCard city={toulouse} countryId="fr" />}
      </InspirationSection>

      <TestoSection>
        <CustomerPicture className="translate-y-20"/>
        <CustomerPicture className="-translate-y-4" />
        <CustomerPicture className="translate-y-32" />
        <CustomerPicture className="-translate-y-18" />
        <CustomerPicture className="translate-y-40 translate-x-5" />
      </TestoSection>
      
      <FooterSection />
    </>
  );
}