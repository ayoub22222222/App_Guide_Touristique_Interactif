import React from "react"
export default function Navbar() {
    return (
        <>
        <nav className=" bg-black text-white font-heading flex justify-between p-3 ">
            <h1>Logo</h1>
            <ul className="flex gap-5 ">
                <li className="hover:text-secondary cursor-pointer">Home</li>
                <li className="hover:text-secondary cursor-pointer">Product</li>
                <li className="hover:text-secondary cursor-pointer">FeedBack</li>
                <li className="hover:text-secondary cursor-pointer">Login</li>
            </ul>
        </nav>
        </>
    )
}