import React from 'react'
import ProductCard from '../Components/productCard/ProductCard'
import data from "../Components/data.json"
import "./Products.css"
import ProductMenu from '../Components/ProductMenu/ProductMenu'

function Products() {
  return (
    <div className='products'>
        <ProductCard products={data.products}/>
        <ProductMenu/>
    </div>
  )
}

export default Products