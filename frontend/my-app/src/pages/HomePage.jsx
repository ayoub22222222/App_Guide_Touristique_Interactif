// import React from "react";
// import HeroSection from "../components/layout/HeroSection";
// import Navbar from "../components/layout/Navbar";
// import ProductSection from "../components/layout/ProductSection";
// import ProductCard from "../components/common/ProductCard";
// import InspirationSection from "../components/layout/InspirationSection";
// import RecomandationCard from "../components/layout/RecomandationCard";
// import TestoSection from "../components/layout/TestoSection";
// import CustomerPicture from "../components/common/CustomerPicture";
// import FooterSection from "../components/layout/FooterSection";
// import BtnHome from "../components/common/BtnHome";
// import { useEffect, useState } from "react";
// // import { response } from "../../../../backend/src/app";

// const API_URL = 'http://localhost:5000/api'


// export default function HomePage() {
//     const [moroccoCities, setMoroccoCities] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//     fetch(`${API_URL}/countries/ma`)  
//       .then(res => {
//         if (!res.ok) throw new Error('Failed to fetch');
//         return res.json();
//       })
//       .then(data => {
//         setMoroccoCities(data.country?.cities || []);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);




//         return (
//         <>
//         <HeroSection>
//             <Navbar />
//         </HeroSection>
//         <ProductSection>
//         {moroccoCities.map(city => (
//           <ProductCard
//             key={city.id}
//             title={city.name}
//             description={city.description}
//             image={city.image}
            
//           >
//             <BtnHome to={`/product/ma/${city.id}`}/>
//           </ProductCard>
//         ))}
//         </ProductSection>
//         <InspirationSection>
//             <RecomandationCard />
//             <RecomandationCard />
//             <RecomandationCard />
//         </InspirationSection>
//         <TestoSection>
//              <CustomerPicture className="translate-y-20"/>
//              <CustomerPicture className="-translate-y-4" />
//              <CustomerPicture className="translate-y-32" />
//              <CustomerPicture className="-translate-y-18" />
//              <CustomerPicture className="translate-y-40 translate-x-5" />
//         </TestoSection>
//         <FooterSection />
//         </>
//     )
// }

// pages/HomePage.jsx
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

  // Find specific cities for recommendations
  const marrakech = moroccoCities.find(c => c.id === 'ma-marrakech');
  const paris = franceCities.find(c => c.id === 'fr-paris');
  const toulouse = franceCities.find(c => c.id === 'fr-toulouse');

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

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
          >
            <BtnHome to={`/product/ma/${city.id}`}/>
          </ProductCard>
        ))}
      </ProductSection>

      {/* ✅ Inspiration Section with dynamic city data */}
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