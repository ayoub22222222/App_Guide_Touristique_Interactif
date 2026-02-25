// import React from "react"



// export default function InspirationSection({ children }) {
//     return (
//         <>
//             <p className="container mx-auto px-4  text-center font-heading p-10 font-semibold text-3xl">

//                 Travel Inspiration
//             </p>
//         <section className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-evenly items-center">
//             { children }
//         </section>
//         </>
//     )
// }

// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
// components/layout/InspirationSection.jsx
export default function InspirationSection({ children }) {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Heading Section - More spacing from top */}
        <div className="text-center mb-12 pt-8">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></span>
            <span className="text-gray-400 text-xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></span>
          </div>
          
          {/* Title */}
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-800">
            Travel Inspiration
          </h2>
          
          {/* Subtitle */}
          <p className="mt-3 text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Discover amazing destinations for your next adventure
          </p>
        </div>

        {/* Cards with more space between them */}
        <div className="flex flex-wrap justify-between gap-12 pb-8">
          {children}
        </div>
      </div>
    </section>
  );
}

// export default function InspirationSection({ children }) {
//   return (
//     <>
//       {/* Animated Heading Section */}
//       <div className="container mx-auto px-4 py-12 text-center">
        
//         {/* Subtle decorative line */}
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <span className="h-px w-10 bg-gradient-to-r from-transparent to-orange-300 animate-pulse"></span>
//           <span className="text-orange-400 animate-bounce-slow">✦</span>
//           <span className="h-px w-10 bg-gradient-to-l from-transparent to-orange-300 animate-pulse"></span>
//         </div>
        
//         {/* Main heading with subtle fade-in + slide-up animation */}
//         <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-800 
//                       animate-fade-in-up animation-delay-200">
//           Travel Inspiration
//         </h2>
        
//         {/* Subtle subtitle */}
//         <p className="mt-3 text-neutral-500 text-sm md:text-base max-w-md mx-auto 
//                       animate-fade-in animation-delay-400">
//           Discover amazing destinations for your next adventure
//         </p>
        
//         {/* Subtle animated dots */}
//         <div className="flex items-center justify-center gap-2 mt-6">
//           <span className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-ping-slow"></span>
//           <span className="w-1.5 h-1.5 rounded-full bg-orange-200 animate-pulse"></span>
//           <span className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-ping-slow animation-delay-300"></span>
//         </div>
//       </div>

//       {/* Content Section with subtle staggered fade-in for children */}
//       <section className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-evenly items-center gap-6 pb-12">
//         {children}
//       </section>
//     </>
//   );
// }