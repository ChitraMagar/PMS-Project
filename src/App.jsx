import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Addproduct from './pages/Addproduct/Addproduct'
import SingleProduct from './pages/Singleproduct/SingleProduct'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addProduct" element={<Addproduct/>} />
        <Route path="/singleProduct/:id" element={<SingleProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
