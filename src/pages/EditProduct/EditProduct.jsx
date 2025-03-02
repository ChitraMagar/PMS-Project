import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './EditProduct.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    const navigate= useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
    };

    //fetch product id
    const fetchProduct = async () => {
        const response = await axios.get("https://67af2bdf9e85da2f020fc44f.mockapi.io/products/" +id)
        setProduct(response.data)
 
    }
    //Edit Product
    const editProduct = async (e) => {
        e.preventDefault()
        const response = await axios.put(`https://67af2bdf9e85da2f020fc44f.mockapi.io/products/${id}`, product);
        if(response.status == 200){
            navigate(`/singleProduct/${id}`)
        }else{
            alert("Something Wrong! Try Again")
        }
    }

    
    useEffect(() => {
        fetchProduct()
    },[])
    return (
        <>
            <Navbar />
            <div className="form-container">
                <h2>Edit Product</h2>
                <form onSubmit={editProduct}>
                    <div className="form-group">
                        <label htmlFor="productImage">Product Image</label>
                        <input value={product.productImage} type="text" id="productImage" name="productImage" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input value={product.productName} type="text" id="productName" name="productName" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductDescription">Product Description</label>
                        <textarea value={product.productDescription} id="productDescription" name="productDescription" rows="4" onChange={handleChange} ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductMaterial">Product Material</label>
                        <input value={product.productMaterial} type="text" id="productMaterial" name="productMaterial" onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditProduct
