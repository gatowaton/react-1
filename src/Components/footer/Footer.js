import React from 'react'
import "./Footer.css"
import catblack from "../../img/catblack.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footermid'>
         
          <p>Copyrights 2022 &copy; Gato Web Developer.</p>
          <img src={catblack} alt="" />
        </div>
    </div>
  )
}

export default Footer