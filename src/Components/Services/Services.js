import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Services.css'
import groomercat from "../../img/groomercat.png"

function Services() {
  return (
    <div className="slider_service">
    <Carousel
    swipeable
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    showIndicators={false}
    interval={2000}
    autoPlay={true}
    

    >
        <div >
              <img  src={groomercat} alt="" />
              <p>sadsadasd</p>
        </div>
    </Carousel>
</div>
  )
}

export default Services