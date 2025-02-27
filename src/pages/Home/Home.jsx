import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get("https://67af2bdf9e85da2f020fc44f.mockapi.io/products")
    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        {
          products.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <img src={product.productImage} alt="Product Image" />
                <h2>{product.productName}</h2>
                <p>{product.productDescription}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
