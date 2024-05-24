import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeauturedProd from '../FeauturedProd';
import Sections from '../Sections';
const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
           <Slider {...settings}>
      <div className='slider1'>
      <img src="https://preview.colorlib.com/theme/fashe/images/master-slide-03.jpg" alt="" />
      </div>
      <div>
     <img src="https://preview.colorlib.com/theme/fashe/images/master-slide-02.jpg" alt="" />
      </div>
      <div>
      <img src="https://preview.colorlib.com/theme/fashe/images/master-slide-04.jpg" alt="" />
      </div>

    </Slider>
    <FeauturedProd/>
    <Sections/>
    </div>
  )
}

export default Home