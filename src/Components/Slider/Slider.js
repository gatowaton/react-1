import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css"
import dog from "../../img/dog.jpg"
import gat1 from "../../img/gat1.jpg"
import dogg2 from "../../img/dogg2.jpg"
import vet from "../../img/vet.jpg"

function Slider() {
  return (
    <div className="slider">
    <Carousel
    swipeable
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    showIndicators={false}
    interval={1300}
    autoPlay={true}
    

    >
        <div className='sliders'>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={dog} alt=""   />
            </div>
            <p>All for pets</p>
           
          </div>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={vet} alt=""   />
            </div>
            <p>Pet medications</p>
           
          </div>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={dogg2} alt=""   />
            </div>
            <p>Grooming pets services</p>
           
          </div>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={gat1} alt=""  />
            </div>
            <p>Pet experts</p>
           
          </div>
        </div>

        <div className='sliders'>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={gat1} alt=""   />
            </div>
            <p>Pet experts</p>
           
          </div>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={dog} alt=""   />
            </div>
            <p>All for pets</p>
           
          </div>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={dogg2} alt=""   />
            </div>
            <p>Grooming pets services</p>
           
          </div>
          <div className='sliders_item'>
            <div className='sliders_img'>
              <img className="img_slider" src={vet} alt=""   />
            </div>
            <p>pet medications</p>
           
          </div>
        </div>
    </Carousel>
</div>
  )
}

export default Slider