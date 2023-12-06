import { Layout, Image, Button, Collapse, Dropdown } from 'antd';
import { useRef, useState } from 'react';
import Link from 'next/link';
import FooterLayout from '@/components/home/footer';
import DropdownLink from '../dropdown-link';
import Meta from '../meta';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MenuList = [
    {
        id:1,
        label:'Bus Ticket',
        color:'#C13117'
    },
    {
        id:2,
        label:'Weekend Bus Tour',
        color:'orange',
        dropdown:true,
        dropdownMenu:[
            {
                key:'11',
                label:(
                  <a target="_self"  rel="noopener noreferrer" href="/bustours/Trip-From-Pune">
                    Trips from Pune
                  </a>
                )
              }
        ]
    },
    {
        id:3,
        label:'Bus Hire',
        color:'#E2B61F',
        dropdown:true,
        dropdownMenu:[
            {
                key:'7',
                label:(
                  <a target="_self"  rel="noopener noreferrer" href="/bustours/Trip-From-Pune">
                    Regular Bus Hire
                  </a>
                )
              },
              {
                key:'8',
                label:(
                  <a target="_self" rel="noopener noreferrer" href="/bustours/Trip-From-Mumbai">
                    Weekend Special bus Hire
                  </a>
                )
              }
        ]
    },
    {
        id:4,
        label:'Holiday Package',
        color:'purple'
    },
    {
        id:5,
        label:'City Bus Operations',
        color:'indigo',
        dropdown:true,
        dropdownMenu:[
            {
                key:'9',
                label:(
                  <a target="_self"  rel="noopener noreferrer" href="/bustours/Trip-From-Pune">
                    City Bus Operations
                  </a>
                )
              },
              {
                key:'10',
                label:(
                  <a target="_self" rel="noopener noreferrer" href="/bustours/Trip-From-Mumbai">
                    Employee Mobility
                  </a>
                )
              }
        ]

    }
]

const award = [
    { id: 1, image: '/purpleTrip/trip-pune/pilgrim/Header-3.jpg' },
    { id: 2, image: '/purpleTrip/trip-pune/pilgrim/Header-4.jpg' },
    { id: 3, image: '/purpleTrip/trip-pune/pilgrim/Header-5.jpg' },
  ];

  const items = [
    {
      key: '1',
      label:(
        <a target="_self"  rel="noopener noreferrer" href="/bustours/Trip-From-Pune">
          Pune
        </a>
      ),
    },
    {
      key: '2',
      label:(
        <a target="_self"  rel="noopener noreferrer" href="/bustours/Trip-From-Mumbai">
          Mumabi
        </a>
      ),
    },
  ];

const { Footer, Content } = Layout;
const PurpleTripLayout = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
      beforeChange: (current, next) => {
        setCurrentSlide(next);
      },
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: (i) => {
        const groupNumber = Math.floor(i / 4);
        const showIndicator = currentSlide >= i && currentSlide < i + 4;
        return (
          <span
            className={`my-[-50px] block w-3 h-3 rounded-full ${showIndicator ? 'bg-white' : 'border border-white'}`}
          ></span>
        );
      },
    };

    const [selectedMenu, setSelectedMenu] = useState(null);
    const handleClickMenu = (e) => {
      e && setSelectedMenu(e.key);
    };
    const selectedMenuItem = items.find(item => item.key === selectedMenu);

    const sliderRef = useRef(null);



    const MenuTop = ({menuListData}) => {
        return(
            <span className={`text-xs bg-blue-500 px-2 mx-1 py-1 text-white `} 
            style={{background:`${menuListData.color}`}}>
                { menuListData && menuListData.dropdown ? (<DropdownLink data={menuListData}/>) : 
                (<Link href='/'>{menuListData.label}</Link>)}
            </span>
        );
    }

    return (
            <Layout className='px-[142px] bg-[#FFFFFF]'>
                <Meta 
                title="Trip From Pune | Weekend Gateways Near Pune | Purple Trips"
                keyword="testing keyword"
                description='i am description'
                />
                <nav className='px-4 bg-white'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3'>
                            <Image src="/purpleTrip/Purple-Trips.png" preview={false} className='pt-11'/>
                        </div>
                        <div className='col-span-9 flex justify-end'>

                            <div className='flex pt-6 pl-2'>
                                <Image src="/purpleTrip/busheader.jpg" preview={false} className='w-[208px] height-[58px] lg:w-[307px] lg:h-[85px]'/>
                                <div className='text-[13px] py-2 px-1'>
                                    <span className='flex mt-1 px-1 text-[#B4376F]'>
                                        <Image src="/purpleTrip/phoneicontop.png" preview={false} className='pl-3 pr-[5px]'/>
                                        <span className='flex mt-1'>
                                            <p className='pr-1'>020-67186800</p>
                                            <Link href="/">helpdesk@prasannapurple.com</Link>
                                        </span>
                                    </span>
                                    <span className='flex justify-end text-[22px] gap-1'>
                                        <i className='cursor-pointer bx bxl-facebook bg-blue-500 text-blue-50 text-white  rounded'/>
                                        <i className='cursor-pointer bx bxl-twitter bg-[skyblue] text-white  rounded'/>
                                        <i className='cursor-pointer bx bx-rss bg-orange-500 text-white  rounded'/>
                                        <i className='cursor-pointer bx bxl-linkedin bg-blue-500 text-white  rounded'/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            MenuList.map((menuItem,menuIndex)=><MenuTop menuListData={menuItem}/>)
                        }
                    </div>
                    <div className='flex justify-between items-center pb-4 border-b border-zinc-500'>
                        <h1 className='text-[#6652A1]'>Home</h1>
                        <div className='flex text-center items-center gap-3 py-2'>
                            <span>
                                <h1 className='text-[#B4376F] font-bold'>1,00,000+</h1>
                                <p className='text-xs text-zinc-500'>Happy Customer</p>
                            </span>
                            <span className='rounded-full w-[10px] h-[10px] bg-green-500'></span>
                            <span>
                                <h1 className='text-[#B4376F] font-bold'>Food + Stay + Travel</h1>
                                <p className='text-xs text-zinc-500'>Our Price are Inclusive</p>
                            </span>
                            <span className='rounded-full w-[10px] h-[10px] bg-green-500'></span>
                            <span>
                                <h1 className='text-[#B4376F] font-bold'>Tour Guides</h1>
                                <p className='text-xs text-zinc-500'>Trained & Expirenced</p>
                            </span>
                        </div>
                    </div>



                    <div className="relative py-2">
                    <Slider ref={sliderRef} {...settings}>
                        {award.map((items, index) => (
                        <div key={index}>
                            <Image src={items.image} alt={`slide-${index}`} preview={false} />
                        </div>
                        ))}
                    </Slider>
                </div>

                {/* dropdown menu for select city */}
                <div className='border-y border-zinc-300 py-4 flex gap-3'>
                    <h1 className='font-bold'>Select City</h1>
                    <Dropdown
                    trigger="click"
                    className='border border-black pr-6 rounded'
                        menu={{
                        items,
                        onClick:handleClickMenu
                        }}
                    >
                        <a>
                            {selectedMenuItem ? selectedMenuItem.label : 'Select City'}
                        </a>
                    </Dropdown>
                </div>

                </nav>


                {/* Children */}
                <Content>
                    {children}
                </Content>
                

                <Footer className='p-0 m-0 bg-[#FFFFFF]'>
                    <div className='py-4'>
                        <Image src="/PurpleTrip/WeWork.jpg" preview={false}/>
                    </div>
                        <div className='bg-[#40187B] py-2'>
                            <span >
                                <h1 className='text-white font-bold mx-3'>About Us<i className='bx bxs-down-arrow mx-2 text-[12px]'/></h1>
                            </span>
                            <div className='border-b border-white px-3'>
                                <p className='rounded-0 bg-[#3F1879] p-0 m-0 pb-4 pt-2 text-[#CABFBB] text-xs'>
                                    Prasanna Purple has a long history of more than 25 years in passenger mass transit operation and has pioneered the art of surface mobility solutions. We have highly trained and motivated team of professionals handling the operations 24 / 7. We have an array of mobility solutions like City and Intercity buses, Bus and Car rentals, Corporate and school bus services , Hop on Hop off city sight seeing services, Corporate MICE movement, Individual and group tours.
                                </p>
                            </div>
                            <div className='px-3'>
                                <FooterLayout/>
                            </div>
                        </div>
                </Footer>
            </Layout>
    );
}
export default PurpleTripLayout;