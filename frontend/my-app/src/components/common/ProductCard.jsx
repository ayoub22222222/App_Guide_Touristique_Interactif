import React from "react";

export default function ProductCard({
  title,
  description,
  image,
  link,
  children,
}) {
  const fixedImage = image ? image.replace("/images/transport/", "/images/transports/") : "";

  const imageSrc = fixedImage
    ? fixedImage.startsWith("http")
      ? fixedImage
      : `http://localhost:5000${fixedImage}`
    : "";

  return (
    <div className="w-60  bg-gray-300 overflow-hidden rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
      <div className=" overflow-hidden">
        <img
          src={imageSrc}
          alt={title || "Product"}
          className=" object-cover w-full h-36"
        />
      </div>
      <div>
        <h2 className="font-bold text-lg p-2 m-1 font-heading">{title}</h2>
        <p className="text-sm p-1 m-1 font-heading">{description}</p>
        <div className="m-2 p-1">{children}</div>
      </div>
    </div>
  );
}