import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="logo">Product Manager</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
