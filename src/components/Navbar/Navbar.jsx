import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">Product Manager</div>
                <ul className="nav-links">
                    
                    <li><a href="#"><Link to="/">Home</Link></a></li>
                    <li><a href='#'><Link to="/addProduct">Add Product</Link></a></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
