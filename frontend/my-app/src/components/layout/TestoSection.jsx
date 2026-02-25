import React from "react";
import { Link } from "react-router-dom";

export default function TestoSection({ children }) {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-neutral-50 to-white border-t border-neutral-200 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></span>
            <span className="text-orange-500 text-xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></span>
          </div>
          
          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-3">
            What Are They Saying?
          </h2>
          
          {/* Subtitle */}
          <p className="text-neutral-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Real stories from real people! See how our platform has transformed their travel experiences
          </p>
          
          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/Login"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-heading font-medium px-6 py-3 rounded-xl 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span>Sign Up to Discover More</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ✅ Testimonial Cards - RESTORED ORIGINAL STRUCTURE */}
        {/* Keeps CustomerPicture translate transforms working */}
        <div className="flex flex-row justify-evenly items-start h-80 relative">
          {children}
        </div>
      </div>
    </section>
  );
}