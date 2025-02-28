import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
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
                <Link to={`/singleProduct/${product.id}`}>See More</Link>
                {/* <button onClick={()=>navigate("/singleProduct")}>See More</button> */}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
