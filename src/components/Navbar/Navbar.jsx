import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">Product Manager</div>
                <ul className="nav-links">
                    
                    <Link to="/">Home</Link>
                    <Link to="/addProduct">Add Product</Link>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
