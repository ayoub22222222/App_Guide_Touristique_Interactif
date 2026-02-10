import React from "react"
export default function Navbar() {
    return (
        <>
        <nav className="bg-black text-white font-heading flex justify-between p-5 font-heading ">
            <h1>Logo</h1>
            <ul className="flex gap-5">
                <li className="cursor-pointer hover:text-orange-500 transition-colors duration-200">Home</li>
                <li className="hover:text-orange-500 transition-colors">Product</li>
                <li className="hover:text-orange-500 transition-colors">FeedBack</li>
                <li className="hover:text-orange-500 transition-colors">Login</li>
            </ul>
        </nav>
        </>
    )
}