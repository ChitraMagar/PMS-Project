import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./SingleProduct.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const SingleProduct = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [product,setProduct]= useState({})

    const deleteProduct =async()=>{
        const response= await axios.delete("https://67af2bdf9e85da2f020fc44f.mockapi.io/products/" + id)
        if(response.status==200){
            navigate("/")
        }else{
            alert("Something Went Wrong!, Try Again!!")
        }
    }

    const fetchSingleProduct = async ()=>{
        const response = await axios.get("https://67af2bdf9e85da2f020fc44f.mockapi.io/products/" + id)
        setProduct(response.data)
    }

    useEffect(()=>{
        fetchSingleProduct()
    },[])
    return (
        <>
            <Navbar />
            <div className="container">
                            <div className="product-card">
                                <img src={product.productImage} alt="Product Image" />
                                <h2>{product.productName}</h2>
                                <p>{product.productDescription}</p>
                                <mark>{product.productMaterial}</mark>
                                <button onClick={deleteProduct}>Delete</button>
                                <button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>


                                
                                {/* <Link to={`/editProduct/${product.id}`}>Edit</Link> */}
                                {/* <Link to='/singleProduct'>See More</Link> */}
                                {/* <button onClick={() => navigate("/singleProduct")}>See More</button> */}
                            </div>
                
            </div>
        </>

    )
}

export default SingleProduct
