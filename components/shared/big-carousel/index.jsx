import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigCarousel = ({data,speed}) =>{
    const transitionSpeed = speed ?500:0;
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: transitionSpeed,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      // Carousel controller
      const sliderRef = useRef(null);
      const goToNextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
      };
    
    return(
            <div className="relative p-0 m-0 overflow-x-hidden ">
                <Slider ref={sliderRef} {...settings}>
                {data.map((items, index) => (
                    <div key={index}>
                    <img src={`${items.image}`} alt={`slide-${index}`} />
                    </div>
                ))}
                </Slider>
                <i
                className='bx bx-chevron-left text-[60px] cursor-pointer absolute top-[35%] left-[-5px] text-[#FFFFFF70] hover:text-white'
                style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}
                onClick={goToPrevSlide}
                />
                <i
                className='bx bx-chevron-right text-[60px] cursor-pointer absolute top-[35%] right-[5px] text-[#FFFFFF70] hover:text-white'
                style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}
                onClick={goToNextSlide}
                />
        </div>
    )
}
export default BigCarousel;