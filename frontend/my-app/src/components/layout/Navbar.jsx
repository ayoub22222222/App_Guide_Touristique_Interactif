import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <>
        <nav className=" bg-black text-white font-heading flex justify-between p-3 ">
            <h1>Logo</h1>
            <ul className="flex gap-5 ">
                <li className="hover:text-secondary cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-secondary cursor-pointer" >
                    <Link to="/product">Product</Link>
                </li>
                <li className="hover:text-secondary cursor-pointer">
                    <Link to='/feedback'>
                    FeedBack
                    </Link>
                    </li>
                <li className="hover:text-secondary cursor-pointer">
                    <Link to="/Login">
                    Login
                    </Link>
                    </li>
            </ul>
        </nav>
        </>
    )
}