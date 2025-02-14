import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
    <div class="container">
        <div class="product-card">
            <img src="https://via.placeholder.com/300" alt="Product Image" />
            <h2>Product Name</h2>
            <p>This is a short description of the product. It highlights the key features and benefits.</p>
        </div>
    </div>
    </>
  )
}

export default Home
