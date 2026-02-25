export default function InspirationSection({ children }) {
  return (
    <section className="pt-2 mt-10 bg-neutral-100 backdrop-blur-sm border-t border-neutral-200">
      <div className="container mx-auto px-4">
        
        {/* Heading Section */}
        <div className="text-center mb-12 pt-8">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></span>
            <span className="text-orange-500 text-xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></span>
          </div>
          
          {/* Title */}
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-800">
            Travel Inspiration
          </h2>
          
          {/* Subtitle */}
          <p className="mt-3 text-neutral-500 text-sm md:text-base max-w-md mx-auto">
            Discover amazing destinations for your next adventure
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-evenly gap-12 pb-8">
          {children}
        </div>
      </div>
    </section>
  );
}