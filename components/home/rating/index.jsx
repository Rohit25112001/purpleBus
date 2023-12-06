import { useRef, useState } from 'react';
import { Image } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const rating = [
  {
    id: 1,
    label: 'Redbus',
    rate: '4.0',
    outofrating: '(Ratings are Out of 5.)'
  },
  {
    id: 2,
    label: 'Paytm Bus',
    rate: '4.1',
    outofrating: '(Ratings are Out of 5.)'
  },
  {
    id: 3,
    label: 'Abhi Bus',
    rate: '4.7',
    outofrating: '(Ratings are Out of 5.)'
  },
  {
    id: 4,
    label: 'MakMy Trip',
    rate: '4.0',
    outofrating: '(Ratings are Out of 5.)'
  }
];

const award = [
  { id: 5, image: '/rating/awardimg01.jpg' },
  { id: 6, image: '/rating/awardimg02.jpg' },
  { id: 7, image: '/rating/awardimg03.jpg' },
  { id: 8, image: '/rating/awardimg04.jpg' },
  { id: 9, image: '/rating/awardimg05.jpg' },
  { id: 10, image: '/rating/awardimg06.jpg' },
  { id: 11, image: '/rating/awardimg08.jpg' }
];

const Rating = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    customPaging: (i) => {
      const groupNumber = Math.floor(i / 4);
      const showIndicator = currentSlide >= i && currentSlide < i + 4;
      return (
        <span
          className={`my-9 block w-3 h-3 rounded-full ${showIndicator ? 'bg-white' : 'bg-[#0000001a]'}`}
        ></span>
      );
    },
  };

  const sliderRef = useRef(null);
  
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <h1 className="text-[30px] text-[#555555] text-center font-bold pt-4 pb-2">RATING</h1>
        <div className="flex justify-around py-4 pb-10">
          {rating.map((ratingItem, ratingIndex) => (
            <div className="text-center" key={ratingItem.id}>
              <h1 className="text-[18px] font-bold">{ratingItem.label}</h1>
              <span className="flex items-center gap-1 font-bold text-xs">
                <h4 className="text-[#60489D] text-[18px]">{ratingItem.rate}</h4>
                {ratingItem.outofrating}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/*Award Carousel and div */}
      <div className="col-span-12 px-12 pt-6 pb-12" style={{ backgroundImage: 'url("/rating/awardbg.jpg")' }}>
            <h1 className="text-[25px] font-bold text-white">Awards & Recognition</h1>
            <div className="relative py-4">
                <Slider ref={sliderRef} {...settings}>
                    {award.map((items, index) => (
                    <div key={index}>
                        <Image src={items.image} alt={`slide-${index}`} preview={false} />
                    </div>
                    ))}
                </Slider>
            </div>
      </div>

      <div className='col-span-12 py-10'>
        <h1 className='text-[#555555] text-[27px] ml-12 font-bold'>OUR BRANDS</h1>
        <div className='py-6 flex justify-center'>
            <Image src="/rating/clientlogos02.jpg" width={1100} className='w-[1000px] h-auto' preview={false}/>
        </div>
      </div>
    </div>
  );
};

export default Rating;
