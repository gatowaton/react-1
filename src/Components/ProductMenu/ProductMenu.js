import React from 'react'
import {Link} from "react-router-dom"
import "./ProductMenu.css"

function ProductMenu() {
  return (
    <div className='ProductMenu'>
       <Link to='/'>
            <h4>Pet Food</h4>
       </Link> 
       <Link to='/'>
            <h4>Accessories</h4>     
       </Link>
       <Link to='/'>
            <h4>Pet Food</h4>
       </Link> 
       <Link to='/'>
            <h4>Accessories</h4>     
       </Link>
       <Link to='/'>
            <h4>Pet Food</h4>
       </Link> 
       <Link to='/'>
            <h4>Accessories</h4>     
       </Link>
    </div>
  )
}

export default ProductMenu