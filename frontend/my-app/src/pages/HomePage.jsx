import React from "react";
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
import { useEffect, useState } from "react";
// import { response } from "../../../../backend/src/app";

const API_URL = 'http://localhost:5000/api'


export default function HomePage() {
    const [moroccoCities, setMoroccoCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch(`${API_URL}/countries/ma`)  
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setMoroccoCities(data.country?.cities || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);




        return (
        <>
        <HeroSection>
            <Navbar />
        </HeroSection>
        <ProductSection>
        {moroccoCities.map(city => (
          <ProductCard
            key={city.id}
            title={city.name}
            description={city.description}
            image={city.image}
            link={`/country/ma/city/${city.id}`}
          >
            <BtnHome />
          </ProductCard>
        ))}
        </ProductSection>
        <InspirationSection>
            <RecomandationCard />
            <RecomandationCard />
            <RecomandationCard />
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
    )
}