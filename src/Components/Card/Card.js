import React from 'react'
import "./Card.css"
import dog from "../../img/dog.jpg"
import {Link} from "react-router-dom"

function Card() {
  return (
    <div className='card'>
        <div className='imgBx'>
            <img src={dog} alt="" />
        </div>
        <div className='content'>
            <div className='details'>
                <h2>Pet Store<br/><span>Pet Store</span></h2>
                <div className='data'>
                    <div className='info'>
                        <h3>351<br/><span>Following</span></h3>
                        <h3>580K<br/><span>Followers</span></h3>
                        <h3>785<br/><span>Post</span></h3>
                    </div>    
                    <div className='actionBtn'>
                        <button>Follow</button>
                       <Link to='/aaa'><button>Message</button></Link> 
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Card