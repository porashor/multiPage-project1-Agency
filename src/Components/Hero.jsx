import React from 'react'
import HCard from './HCard'
import { slider } from '../data/Data'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from './Container';

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  return (
    <Container>
      <Slider {...settings}>
        {
            slider.map((item, index)=>(
                <HCard key={index} h1={item.header} h2={item.colorheader} p={item.para} href={``} image={item.image} btn={item.btnText}/>
            ))
        }
        </Slider>
    </Container>
  )
}

export default Hero
