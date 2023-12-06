import React, { useRef,useState } from 'react';
import { Card, Image, Button } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import { useRouter } from 'next/router';
const CarouselLayout = ({data,extraInfo})=>{
  const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const settings = {
        beforeChange: (current, next) => {
            setCurrentSlide(next);
          },
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      //carousel controller
      const sliderRef = useRef(null);
        const goToNextSlide = () => {
            sliderRef.current.slickNext();
        };

        const goToPrevSlide = () => {
            sliderRef.current.slickPrev();
        };
    return(
        <div className="w-full relative pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
                <Slider ref={sliderRef} {...settings}>
                {data.map((items, index) => (
                    <div key={index}>
                        <div className="w-[90%]">
                            <Card 
                            cover={<Image src={items.image} preview={false}/>}
                            className="rounded-0 relative bg-[#F5F5F5] p-0 m-0"> 
                               <h1 className='text-black text-[14px] font-bold pb-2'>{items.link}</h1>
                               <p className='text-xs text-zinc-400'>{items.desc}</p>
                               <div className='flex justify-between items-center mt-5'>
                                {extraInfo && extraInfo=='homeBook' ? 
                                  <Button type='text'  className='cursor-text bg-[#F0F0F0] px-5 py-2 
                                  border-0 h-auto' style={{color:'#000'}}>Rs {items.price}</Button> 
                                  : <p className='text-[18px] text-[#764F9E] font-semibold'>Rs {items.price}</p>}
                                  
                                  {extraInfo && extraInfo=='homeBook' ? 
                                  <Button  className='bg-[#6500EE] px-8 py-2 
                                  border-0 h-auto hover:bg-red-500' style={{color:'#fff'}} onClick={()=> {
                                    const url = items.link.split('%').join('-');
                                    router.push(`/bustours/${encodeURIComponent(url)}`);
                                    
                                  }}>Book</Button> 
                                  : <Image src='/purpleTrip/book-button.png'
                                  className='cursor-pointer'
                                    onClick={()=> {
                                      const url = items.link.split('%').join('-');
                                      router.push(`/bustours/${encodeURIComponent(url)}`);
                                      
                                    }}
                                  preview={false}/>}
                               </div>
                             </Card>
                        </div>
                    </div>
                    ))}
                </Slider>
                <button  className={`bg-white border border-zinc-300  w-[40px] h-[40px] rounded-full text-white absolute top-[42%] left-[-15px] ${isHovered ? 'block':'hidden'}`} onClick={goToPrevSlide}>
                    <i className='text-black bx bx-chevron-left text-4xl'/>
                </button>
                <button className={`bg-white border border-zinc-300  w-[40px] h-[40px] rounded-full text-white absolute top-[42%] right-[15px] ${isHovered ? 'block':'hidden'}`} onClick={goToNextSlide}>
                    <i class='bx bx-chevron-right text-4xl text-black' ></i>
                </button>
        </div>
    )
}
export default CarouselLayout;