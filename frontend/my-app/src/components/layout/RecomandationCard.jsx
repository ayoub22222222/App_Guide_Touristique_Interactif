// import React from "react";
// import Japan from "../../assets/Japan.jpg";



// export default function RecomandationCard() {
//     return (
//         <div className="p-3">

//         <div className="relative h-80 w-64 hover:-translate-y-2 duration-300 shadow-lg">
//         <img src={Japan} alt="pic" className="h-full w-full rounded-3xl object-cover " />
//         <p className="absolute bottom-32 left-1/2 -translate-x-1/2 text-2xl font-bold text-white z-10 hover:text-orange-300 cursor-pointer py-2 font-heading ">Rome</p>
//         <p className="absolute bottom-10 z-10 text-white max-w-sm px-5 text-sm translate-x-5 translate-y-1 font-heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni facere doloribus consectetur soluta aspernatur, impedit assumenda</p>
//         <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-black"></div>
//       </div>
//     </div>
//     )
// }

// components/layout/RecomandationCard.jsx
// components/layout/RecomandationCard.jsx
// components/layout/RecomandationCard.jsx
// components/layout/RecomandationCard.jsx
// components/layout/RecomandationCard.jsx
// components/layout/RecomandationCard.jsx
// components/layout/RecomandationCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function RecomandationCard({ city, countryId }) {
  if (!city) return null;

  return (
    <div className="group w-72">
      {/* Card with hover lift & shadow */}
      <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg 
                      transform transition-all duration-500 
                      group-hover:-translate-y-3 
                      group-hover:shadow-2xl 
                      group-hover:shadow-gray-400/30">
        
        {/* Image with zoom on hover */}
        <img 
          src={`http://localhost:5000${city.image}`} 
          alt={city.name} 
          className="h-full w-full object-cover 
                     transition-transform duration-700 
                     group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        
        {/* Content - Centered */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          
          {/* City Name - Always visible */}
          <h3 className="text-2xl font-bold text-white font-heading mb-2 drop-shadow-lg">
            {city.name}
          </h3>
          
          {/* Description - Hidden, slides up on hover */}
          <p className="text-white/90 text-sm font-heading 
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-500 
                        h-0 group-hover:h-auto 
                        overflow-hidden mb-4">
            {city.description}
          </p>
          
          {/* Button - Hidden, fades in on hover */}
          <div className="opacity-0 group-hover:opacity-100 
                          transition-all duration-500 
                          transform group-hover:translate-y-0 
                          translate-y-4">
            <Link
              to={`/product/${countryId}/${city.id}`}
              className="inline-block bg-orange-500 hover:bg-orange-600 
                         text-white px-6 py-2.5 rounded-lg 
                         text-sm font-heading transition-colors
                         shadow-lg hover:shadow-orange-500/40"
            >
              Explore City
            </Link>
          </div>
          
        </div>
        
        {/* Country Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
          {countryId === 'ma' ? '🇲🇦 Morocco' : '🇫🇷 France'}
        </div>
        
      </div>
    </div>
  );
}