import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Addproduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addproduct = () => {
    const navigate= useNavigate()
// //first appproach
//     const [productImage,setProductImage] = useState("")
//     const [productName,setProductName] = useState("")
//     const [productDescription,setProductDescription] = useState("")
//     const [productMaterial,setProductMaterial] = useState("")

    // const addProduct = async (e) =>{
    //     e.preventDefault()
    //     const response = await axios.post("https://67af2bdf9e85da2f020fc44f.mockapi.io/products",{
    //         productImage : productImage,
    //         productMaterial : productMaterial,
    //         productDescription : productDescription,
    //         productName : productName
    //     })
    //     console.log(response)
    // }


    //Second Approach
    // const addProduct = async(e) =>{
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget)
    //     const data= Object.fromEntries(formData)
    //     const response = await axios.post("https://67af2bdf9e85da2f020fc44f.mockapi.io/products",data)
    //     console.log(response)
    // }


    //Third Approach
    const [data, setData]= useState({
        productName:"",
        productDescription:"",
        productMaterial:"",
        productImage:""
    })

    const handleChange = (e)=> {
        // console.log(e.target.name,e.target.value)
        const {name,value}=e.target
            setData({
                ...data,
                [name]: value
            })
    }
    const addProduct= async(e)=>{
        e.preventDefault() 
        const response= await axios.post("https://67af2bdf9e85da2f020fc44f.mockapi.io/products")
        if(response.status==201){
            navigate("/")
        }else{
            alert("Something Went wrong!. Try Again")
        }
    }
  return (
    <>
    <Navbar/>
    <div className="form-container">
        <h2>Product Form</h2>
        <form onSubmit={addProduct}>
            {/* <div className="form-group">
                <label htmlFor="productImage">Product Image</label>
                <input type="text" id="productImage" name="productImage" onChange={(e)=>{setProductImage(e.target.value)}} />
            </div>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="productName" onChange={(e)=>{setProductName(e.target.value)}} required />
            </div>
            <div className="form-group">
                <label htmlFor="ProductDescription">Product Description</label>
                <textarea id="ProductDescription" name="ProductDescription" rows="4" onChange={(e)=>{setProductDescription(e.target.value)}} required ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="ProductMaterial">Product Material</label>
                <input type="text" id="ProductMaterial" name="ProductMaterial" onChange={(e)=>{setProductMaterial(e.target.value)}} required />
            </div> */}


            {/* <div className="form-group">
                <label htmlFor="productImage">Product Image</label>
                <input type="text" id="productImage" name="productImage" />
            </div>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="productName"   />
            </div>
            <div className="form-group">
                <label htmlFor="ProductDescription">Product Description</label>
                <textarea id="ProductDescription" name="ProductDescription" rows="4"  ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="ProductMaterial">Product Material</label>
                <input type="text" id="ProductMaterial" name="ProductMaterial" />
            </div>
            <button type="submit">Submit</button> */}

            
            <div className="form-group">
                <label htmlFor="productImage">Product Image</label>
                <input type="text" id="productImage" name="productImage" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="productName" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="ProductDescription">Product Description</label>
                <textarea id="ProductDescription" name="ProductDescription" rows="4" onChange={handleChange} ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="ProductMaterial">Product Material</label>
                <input type="text" id="ProductMaterial" name="ProductMaterial" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Addproduct
