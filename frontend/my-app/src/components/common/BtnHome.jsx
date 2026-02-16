import React from "react";
import { Link } from "react-router-dom";


export default function BtnHome() {
    return (
        <>
        <a href="#" role="button" class="text-white bg-black px-3 py-1 rounded-md hover:bg-secondary font-heading text-sm">
          <Link to="/Login">Learn More</Link>
          </a>
        </>
    )
}