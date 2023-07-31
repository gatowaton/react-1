import React from 'react'
import './ProductCard.css'

function ProductCard({products}) {
  return (
    <div className='product_card_container' >
        {
        Object.entries(products).map(([id, {title,price,image,description}])=>(
            <div key={id} className='product_card'>
            <div className='imgBx'>
                <img src={image} alt="aaa" />
            </div>
            <div className='content'>
                <div className='detailsP'>
                    <h2>{title}<br/></h2>
                    <div className='data'>
                        <div className='info'>
                            <h3>${price}<br/><span>Description</span><i id='down' className="fas fa-angle-double-down"></i></h3>
                        </div>
                        <div className='desc'>{description}</div>    
                        <div className='actionBtn'>
                            <button><a href="https://www.amazon.com/s?k=dog+food&sprefix=do%2Caps%2C165&ref=nb_sb_ss_retrain-deeppltr_1_2">Buy Now</a></button>
                            <button>Details</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default ProductCard