import React, { useState } from 'react';
import { Dropdown, DatePicker, Button, Input } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import BigCarousel from '@/components/shared/big-carousel';
import Link from 'next/link';
const cities =[
  {
    state: "Andhra Pradesh",
    cities: [
      {id: 1, label: "Visakhapatnam"},
      {id: 2, label: "Vijayawada"},
      {id: 3, label: "Guntur"}
    ]
  },
  {
    state: "Telangana",
    cities: [
      {id: 4, label: "Hyderabad"},
      {id: 5, label: "Warangal"}
    ]
  },
  {
    state: "Karnataka",
    cities: [
      {id: 6, label: "Bengaluru"},
      {id: 7, label: "Mysuru"},
    ]
  },
  {
    state: "Tamil Nadu",
    cities: [
      {id: 8, label: "Chennai"},
      {id: 9, label: "Coimbatore"},
    ]
  },
  {
    state: "Maharashtra",
    cities: [
      {id: 10,label: "Mumbai"},
      {id: 11,label: "Pune"},
    ]
  },
  {
    state: "Uttar Pradesh",
    cities: [
      {id: 12,label: "Lucknow"},
      {id: 13,label: "Kanpur"},
    ]
  },
  {
    state: "Rajasthan",
    cities: [
      {id: 14,label: "Jaipur"},
      {id: 15,label: "Jodhpur"},
    ]
  },
  {
    state: "Punjab",
    cities: [
      {id: 16,label: "Amritsar"},
      {id: 17,label: "Ludhiana"},
    ]
  }
  // Add more states and cities as needed
]

const BigsliderImage = [
  {
    id: 1,
    image: '/header/Bigslider/girl.jpg',
  },
  {
    id: 2,
    image: '/header/Bigslider/bus2.jpg',
  },
  {
    id: 3,
    image: '/header/Bigslider/travel.jpg',
  },
  {
    id: 4,
    image: '/header/Bigslider/temple.jpg',
  },
  {
    id: 5,
    image: '/header/Bigslider/bus.jpg',
  },
];

const items = [
  {
    key: '1',
    label: 'Andhra Pradesh',
  },
  {
    key: '2',
    label: 'Visakhapatnam',
  },
  {
    key: '3',
    label: 'Guntur',
  },
  {
    key: '4',
    label: 'Telangana',
  },
  {
    key: '5',
    label: 'Vijayawada',
  },
  {
    key: '6',
    label: 'Hyderabad',
  },
];

const Hero = () => {
  const currentDate = new Date();
  
  const [selectedItem, setSelectedItem] = useState({
    startState:null,
    returnState:null
  });
  const handleChooseState = (prop,label) => {
    return(
      setSelectedItem({
        ...selectedItem,
        [prop]:label,
      })
    )
  };

const Dropdowns = ({prop}) => {

    return(
      <Dropdown
      trigger={['click']}
      overlay={
        <div className='p-4 bg-white'>
          <Input placeholder='Search city...' onChange={(e) => handleSearch(e.target.value)} />
          <div className='mt-2'>
            {items.map(({ key, label }) => (
              <div key={key} className='mb-2' onClick={()=>handleChooseState(prop,label)}>
                {label}
              </div>
            ))}
          </div>
        </div>
      }
      className='bg-white font-bold text-[16px] rounded-[2px] border'
      onVisibleChange={(visible) => {
        if (!visible) {
          setSelectedItem(null); // Clear selected item when dropdown is closed
        }
      }}
    >
      <a onClick={(e) => e.preventDefault()} className='flex items-center justify-between p-2 gap-2 w-[210px]'>
        <h1 className='px-2'>{selectedItem.startState ? `- ${selectedItem.startState}` : '- Select From City -'}</h1>
        <CaretDownOutlined className='text-[12px] text-gray-500' />
      </a>
    </Dropdown>
    );
  }

  return (
    <div className='pb-1 bg-white'>
      {/*Big slider*/}
      <BigCarousel data={BigsliderImage}/>

      {/*Dashed & animated border button*/}
      <div className='text-center py-[1.5px]'>
        <span className='border-2 border-dashed border-[#8849A2]
         hover:underline hover:text-[#2A6496] p-1 px-2 font-semibold text-[#8849A2]'>
          Prasanna Purple's 6 Safety Check Points for reliable Bus Journey
        </span>
      </div>

      {/*Ticket search code */}
      <div className='mt-1 py-1' style={{ backgroundImage: 'url("/bg.png")' }}>
        <div className='grid grid-cols-12'>
          {/*text*/}
          <div className='px-4 flex items-center
            lg:col-span-4 lg:justify-end
            md:col-span-12 md:justify-center
          '>
            <h1 className='text-[25px] font-bold text-white'>CHOOSE YOUR JOURNEY</h1>
          </div>

          {/*search ticket*/}
          <div className='
          lg:col-span-8 lg:pl-0
          md:flex md:col-span-12 md:justify-center md:pl-4 md:py-2
          '>
            <div className='md:flex md:gap-10 lg:gap-2 sm:gap-2 relative'>
              <Dropdowns prop='startState' className=""/>
              <img src="/swapicon.png" className='md:absolute md:left-[47.5%] md:top-[16%] w-[30px]'/>
              <Dropdowns prop='returnState'/>
            </div>

            <div className='mx-2 flex gap-2'>
              <DatePicker className='rounded-[2px] h-full'/>
              <DatePicker className='rounded-[2px] h-full'/>
              <Button className='bg-[#6500ed] h-full text-white border-0 rounded-[2px] px-2'>Search</Button>
            </div>
          </div>
        </div>
      </div>

      {/*cancellation and print ticket*/}
      <div className='bg-[#E7E7E7] my-1 py-4 
       text-[14px] font-lighter
       lg:px-8
       '>
        <Link href="/" className='ml-4'>
          <a className=' px-4 border-r-2 border-gray-900 hover:text-[#6500ED] hover:underline text-[12px]'>PRINT E-TICKET</a>
        </Link>
        <Link href="/">
          <a className='px-4 hover:text-[#6500ED] hover:underline text-[12px]'>CANCELLATION</a>
        </Link>
      </div>
      {/* <h1 className='h-[600px]'></h1> */}
    </div>
  );
};

export default Hero;
