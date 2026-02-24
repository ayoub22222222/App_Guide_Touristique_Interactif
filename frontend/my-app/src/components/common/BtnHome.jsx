import { Link } from "react-router-dom";
import React from "react";

export default function BtnHome({ to = "/product" }) {
  return (
    <Link
      to={to}
      className="text-white bg-black px-3 py-1 rounded-md hover:bg-secondary font-heading text-sm inline-block"
    >
      Learn More
    </Link>
  );
}
