import React from "react";

export default function ProductCard({
  title,
  description,
  image,
  link,
  children,
}) {
  const fixedImage = image
    ? image.replace("/images/transport/", "/images/transports/")
    : "";

  const imageSrc = fixedImage
    ? fixedImage.startsWith("http")
      ? fixedImage
      : `http://localhost:5000${fixedImage}`
    : "";

  return (
    <div
      className="group w-60 bg-neutral-100 overflow-hidden rounded-2xl 
                    transform transition-all duration-300 
                    hover:-translate-y-2 
                    hover:shadow-2xl hover:shadow-orange-500/20
                    border border-neutral-300 hover:border-orange-400
                    shadow-md"
    >
      {/* Image Container with Zoom Effect */}
      <div className="overflow-hidden relative">
        <img
          src={imageSrc}
          alt={title || "Product"}
          className="w-full h-40 object-cover 
                     transition-transform duration-500 
                     group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-neutral-100">
        {/* Title - Better Hierarchy */}
        <h2
          className="font-heading font-bold text-lg text-neutral-900 
                       mb-2 line-clamp-1"
        >
          {title}
        </h2>

        {/* Description - Consistent Height */}
        <p
          className="font-heading text-sm text-neutral-600 
                      line-clamp-2 leading-relaxed mb-3"
        >
          {description}
        </p>

        {/* Children (Buttons) - Spaced Properly */}
        <div className="pt-3 border-t border-neutral-300">{children}</div>
      </div>
    </div>
  );
}
