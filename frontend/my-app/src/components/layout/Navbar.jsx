import React from "react"
export default function Navbar() {
    return (
        <>
        <nav className=" bg-black text-white font-heading flex justify-between p-5 group-hover:text-secondary">
            <h1>Logo</h1>
            <ul className="flex gap-5 ">
                <li >Home</li>
                <li >Product</li>
                <li >FeedBack</li>
                <li >Login</li>
            </ul>
        </nav>
        </>
    )
}