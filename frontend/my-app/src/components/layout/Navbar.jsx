import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { clearSession, getCurrentUser, isAuthenticated } from "../../utils/auth"
export default function Navbar() {
    const navigate = useNavigate()
    const [connected, setConnected] = useState(isAuthenticated())
    const [user, setUser] = useState(getCurrentUser())

    useEffect(() => {
        const syncAuth = () => {
            setConnected(isAuthenticated())
            setUser(getCurrentUser())
        }
        syncAuth()
        window.addEventListener("auth-changed", syncAuth)
        window.addEventListener("storage", syncAuth)
        return () => {
            window.removeEventListener("auth-changed", syncAuth)
            window.removeEventListener("storage", syncAuth)
        }
    }, [])

    const handleLogout = () => {
        clearSession()
        navigate("/login")
    }

    return (
        <>
        <nav className=" bg-black text-white font-heading flex justify-between p-3 ">
            <h1>Logo</h1>
            <ul className="flex gap-5 ">
                {connected && user && (
                    <li className="text-gray-300">
                        {user.firstname} {user.lastname}
                    </li>
                )}
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
                {connected ? (
                    <>
                        <li className="hover:text-secondary cursor-pointer">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="hover:text-secondary cursor-pointer" onClick={handleLogout}>
                            Logout
                        </li>
                    </>
                ) : (
                    <li className="hover:text-secondary cursor-pointer">
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
        </>
    )
}
