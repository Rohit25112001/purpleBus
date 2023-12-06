import React, { useRef, useState } from 'react';
import { Layout, Image, Card, Button, Input, DatePicker, Modal, Form } from 'antd';
import DropdownLink from '../shared/dropdown-link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import CarouselLayout from '../shared/carousel';
import BigCarousel from '../shared/big-carousel';
import Link from 'next/link';
import FooterLayout from "../home/footer"
import Meta from '../shared/meta';
// import FooterLayouts from '../home/'
const { TextArea } = Input;

const LoginsLink = [
    {
        id:1,
        label:'Agent Login'
    },
    {
        id:2,
        label:'Purple Email'
    },
    {
        id:3,
        label:'Tours Email'
    },
    {
        id:4,
        label:'Agent Registration'
    }
    
]

const { Header, Footer, Content } = Layout;


const BigsliderImage = [
    {
      id: 1,
      image: '/slug/Raigad_fort.jpg',
    },
    {
      id: 2,
      image: '/slug/Raigad_Fort1.jpg',
    },
    {
      id: 3,
      image: '/slug/Raigad_Fort2.jpg',
    }
  ];

  const footerData = [
    {
        id:1,
        heading:'Company',
        moreLink:[
            {
                id:2,
                label:'Overview'
            },
            {
                id:3,
                label:'Corporate Profile'
            },
            {
                id:4,
                label:'Directors'
            },
            {
                id:5,
                label:'Management'
            },
            {
                id:6,
                label:'CRS'
            },
            {
                id:7,
                label:'Milestones'
            },
            {
                id:8,
                label:'Milestones'
            },
            {
                id:9,
                label:'Awards'
            },
            {
                id:10,
                label:'Branding'
            }
        ]
    },
    {
        id:11,
        heading:'Our Offerings',
        moreLink:[
            {
                id:12,
                label:'City Bus'
            },
            {
                id:13,
                label:'Intercity Bus'
            },
            {
                id:14,
                label:'Bus Tours'
            },
            {
                id:15,
                label:'Holidys'
            },
            {
                id:16,
                label:'MICS'
            },
            {
                id:17,
                label:'HOHO'
            },
            {
                id:18,
                label:'Rentals'
            }
        ]
    },
    {
        id:19,
        heading:'Opportunities',
        moreLink:[
            {
                id:20,
                label:'Career'
            },
            {
                id:21,
                label:'Currently Openings'
            },
            {
                id:22,
                label:'Growth Opportunities'
            },
            {
                id:23,
                label:"Employee's Speak"
            }
        ]
    },
    {
        id:24,
        heading:'Routes',
        moreLink:[
            {
                id:25,
                label:'Pune to Nagpur'
            },
            {
                id:26,
                label:'Nagpur to Pune'
            },
            {
                id:27,
                label:'Pune to Mumbai'
            },
            {
                id:28,
                label:'Mumbai to Pune'
            },
            {
                id:29,
                label:'Pune to Goa'
            },
            {
                id:30,
                label:'Goa to Pune'
            },
            {
                id:31,
                label:'Pune to Nasik'
            },
            {
                id:32,
                label:'Nasik to Pune'
            }
        ]
    },
    {
        id:33,
        heading:'Address',
        moreLink:[
            {
                id:34,
                label:'Prasanna Purple Mobility Solutions Pvt. Ltd.'
            },
            {
                id:35,
                label:'Karve Road Saiprasad 8/12,'
            },
            {
                id:36,
                label:'Historian Joshi Marg, Nisarg Hotel Lane,'
            },
            {
                id:37,
                label:"Erandwane,"
            },
            {
                id:38,
                label:"Pune – 411004"
            },
            {
                id:39,
                label:'Tel : (020) 67186800'
            }
        ]
    }
];

  const carouselData = [
    { id: 5, image: '/slug/Testimonial/hqdefault (1).jpg' },
    { id: 6, image: '/slug/Testimonial/hqdefault (2).jpg' },
    { id: 7, image: '/slug/Testimonial/hqdefault (3).jpg' },
    { id: 8, image: '/slug/Testimonial/hqdefault (4).jpg' },
    { id: 9, image: '/slug/Testimonial/hqdefault.jpg' }
]

const MenuList = [
    {
        id:1,
        label:'Bus Tickets',
        link:'/'
    },
    {
        id:2,
        label:'Pilgrimage Tours',
        dropdown:true,
        dropdownMenu:[
            {
                id:7,
                label:'Akaram Murti',
                link:'/'
            },
            {
                id:8,
                label:'Kholaput-Panhala-Jyotiba',
                link:'/'
            },
            {
                id:9,
                label:'Panch Joytiling Tours',
                link:'/'
            },
            {
                id:10,
                label:'Nashik Trimbakeshwar',
                link:'/'
            },
            {
                id:11,
                label:'Pandharpur-Gangapur',
                link:'/'
            }
        ]
    },
    {
        id:3,
        label:'Konkan Tours',
        dropdown:true,
        dropdownMenu:[
            {
                id:7,
                label:'Akaram Murti',
                link:'/'
            },
            {
                id:8,
                label:'Kholaput-Panhala-Jyotiba',
                link:'/'
            },
            {
                id:9,
                label:'Panch Joytiling Tours',
                link:'/'
            },
            {
                id:10,
                label:'Nashik Trimbakeshwar',
                link:'/'
            },
            {
                id:11,
                label:'Pandharpur-Gangapur',
                link:'/'
            }
        ]
    },
    {
        id:4,
        label:'Leisure Tours',
        dropdown:true,
        dropdownMenu:[
            {
                id:7,
                label:'Akaram Murti',
                link:'/'
            },
            {
                id:8,
                label:'Kholaput-Panhala-Jyotiba',
                link:'/'
            },
            {
                id:9,
                label:'Panch Joytiling Tours',
                link:'/'
            },
            {
                id:10,
                label:'Nashik Trimbakeshwar',
                link:'/'
            },
            {
                id:11,
                label:'Pandharpur-Gangapur',
                link:'/'
            }
        ]
    },
    {
        id:5,
        label:'Premium Tours',
        link:'/'
    },
    {
        id:6,
        label:'Bus Hire',
        link:'/'
    },
]

const card_trip_detail = {
    price:2000,
    destination:'Raigad',
    no_of_day:1,
    start_from:'Pune',
    frequecy:'Saturday & Sunday',
    hotal:'N A',
    includes:'Travel + Tea + Breakfast + Lunch + Tour Guide',
    rate_card:'Click here',

}

const mapStyles = {
    height: '200px',
    width: '80%',
    position:'absolute',
    right:'10%',
    top:'-70px'
  };
  
const TripList = [
    {
        'id':1,
        'image':'/slug/TripList/01_AurangabadAjantaEllora.jpg',
        'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
        'price':'4500',
        'desc':'Ashtavinayak Darshan - Daily',
    },
    {
        'id':2,
        'image':'/slug/TripList/Bhimashankar1.jpg',
        'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
        'price':'2800',
        'desc':'Ashtavinayak Darshan - Daily',
    },
    {
        'id':1,
        'image':'/slug/TripList/Mahabaleshwar_OneDay.jpg',
        'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
        'price':'2800',
        'desc':'Ashtavinayak Darshan - Daily',
    },
    {
        'id':1,
        'image':'/slug/TripList/Matheran-1.jpg',
        'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
        'price':'2800',
        'desc':'Ashtavinayak Darshan - Daily',
    },
    {
        'id':1,
        'image':'/slug/TripList/Rajgad.jpg',
        'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
        'price':'2800',
        'desc':'Ashtavinayak Darshan - Daily',
    },
    {
        'id':1,
        'image':'/slug/TripList/tarkarliscubadiving_02.jpg',
        'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
        'price':'2800',
        'desc':'Ashtavinayak Darshan - Daily',
    }
]

const BrandList = [
    {
        id:1,
        image:'/slug/brand/04-tourism-logo.png'
    },
    {
        id:2,
        image:'/slug/brand/05-delhi-tourism-logo.png'
    },
    {
        id:3,
        image:'/slug/brand/06-tn-nurm.png'
    },
    {
        id:4,
        image:'/slug/brand/07-bcll.png'
    },
    {
        id:5,
        image:'/slug/brand/08-ral.png'
    },
    {
        id:6,
        image:'/slug/brand/09-ral.png'
    },
    {
        id:7,
        image:'/slug/brand/10-pmpml.png'
    }
]

const EnquieryForm = [
    {
        id:1,
        label:'Name',
    },
    {
        id:2,
        label:"Mobile"
    },
    {
        id:3,
        children:[
            {
                id:4,
                label:'Adult'
            },
            {
                id:5,
                label:'Child'
            },
            {
                id:6,
                label:'Infant'
            }
        ]
    },
    {
        id:7,
        label:'Comments',
        textarea:true
    },
    {
        id:8,
        label:'Security Code'
    }
]

const Slug = () => {
    const FooterLayouts = () => {
        return(
            <>
            <div className="flex w-full">
                {
                    footerData.map((footerItem)=>
                        <div className="w-full px-6 mx-2 text-white" key={footerItem.id}>
                            <h1 className="my-3 text-[16px]">{footerItem.heading}</h1>
                            {
                                footerItem.moreLink.map((linkItems)=>
                                <span className="flex flex-col  text-[14px] py-1" key={linkItems.id}>
                                    <Link href='/'>
                                        <a className="hover:text-white text-zinc-500 font-light hover:underline">{linkItems.label}</a>
                                    </Link>
                                </span>)
                            }
                        </div>
                        )
                }
            </div>
             <div className="w-full">
                <div className="flex gap-5 px-8 pt-8 pb-6">
                    <h1 className="text-white">Logins :</h1>
                    <div className="flex gap-5">
                        {
                            LoginsLink.map((LinkItem,LinkIndex)=>
                                <Link href='/'>
                                    <a className="hover:text-white text-zinc-500 font-light hover:underline">{LinkItem.label}</a>
                                </Link>
                            )
                        }
                    </div>
                </div>
             </div>
             <div className="flex items-center  justify-between w-full pt-6 pb-4 border-t border-zinc-500 px-4">
                <div className="col-span-6 text-xs flex items-center text-gray-600">© Prasanna Purple 2023. All rights reserved.</div>
                <div className="col-span-6 flex justify-end items-center text-[26px] text-white gap-5">
                    <i className='bx bxl-facebook hover:text-blue-500'></i>
                    <i className='bx bxl-twitter hover:text-blue-500' ></i>
                </div>
            </div>
         </>
        )
    }
      const defaultCenter = {
        lat: -34.397,
        lng: 150.644,
      };
    
      // Carousel controller
    //   const sliderRef = useRef(null);
    //   const goToNextSlide = () => {
    //     sliderRef.current.slickNext();
    //   };
    
    //   const goToPrevSlide = () => {
    //     sliderRef.current.slickPrev();
    //   };
      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };


      //small or product carousel
      const CarouselSmallLayout = ({data}) => {
        console.log(data);
        const autoplaySpeed = data.slidesToShow ? 2000:5000;
        const slidesToShow = data.slidesToShow ? 6: 4;
        const smallCarousel = {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed,
          slidesToShow,
          slidesToScroll: 1,
        };
      
        const smallSliderRef = useRef(null);
      
        const smallGoToNextSlide = () => {
          smallSliderRef.current.slickNext();
        };
      
        const smallGoToPrevSlide = () => {
          smallSliderRef.current.slickPrev();
        };
      
        return (
          <>
            <Meta
            title='Online Bus Tickets | Online Bus Reservation | Bus Booking Online' 
            description='i am description' 
            keywords='testing keywords'
            />
             {data.controller ? <div className='relative h-[120px] flex justify-between items-center px-4' style={{ backgroundImage: `url(${data.image})` }}>
              <h1 className={`text-[32px] text-${data.color}`}>{data.heading}</h1>
            <div className={`flex gap-2 px-12`} style={{color:`${data.controller}`}}>
                <i className={`bx bx-left-arrow-alt cursor-pointer text-[30px]`} style={{border:`1px solid ${data.controller}`}} onClick={smallGoToPrevSlide} />
                <i className={`bx bx-right-arrow-alt cursor-pointer text-[30px]`} style={{border:`1px solid ${data.controller}`}} onClick={smallGoToNextSlide} />
              </div>
            </div>:null}

                <div className="relative overflow" style={{width:'100%'}}>
                    {
                        data.productCarousel ? <div className='overflow-x-hidden'><CarouselLayout data={data && data.data} extraInfo='homeBook'/></div>
                        :
                        <Slider ref={smallSliderRef} {...smallCarousel}>
                            {
                                data && data.data.map((items, index) => (
                                <div key={index} className='relative'>
                                    <Image src={items.image} alt={`slide-${index}`} preview={false} />

                                { data.playicon ? <div className='flex justify-center items-center text-[25px] text-white'
                                    style={{
                                        position: 'absolute',
                                        top: '0px',
                                        zIndex: 100000,
                                        width: '100%',
                                        height: '97%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    }}>
                                    <i className='bx bxs-right-arrow' />
                                    </div>:null
                                    }
                                    
                                </div>
                                ))
                            }
                        </Slider>
                    }
                </div>

          </>
        );
      };

      //Modal Code
      const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
            setIsModalOpen(true);
        };
        const handleOk = () => {
            setIsModalOpen(false);
        };
        const handleCancel = () => {
            setIsModalOpen(false);
        };
      const ModalComponent = () => {
        return(
            <Modal title="Enquiry Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='grid grid-cols-12 flex gap-3 text-[15px]'>
                    <Form>
                        {
                            EnquieryForm.map((enqueryItem,eqIndex)=>
                                enqueryItem.children ? 
                                <>
                                    {
                                        enqueryItem.children.map((item,index)=>
                                        <div className='border borde-zinc-600 col-span-4 text-center'>
                                            <h1>{item.label}</h1>
                                            <Input/>
                                        </div>)
                                        
                                    }
                                    <div className='border borde-zinc-600 col-span-12 py-3 text-center text-[20px] text-[red] '>
                                        <h1>532419</h1>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='col-span-4 border borde-gray-200'>
                                        <h1 className='p-1'>{enqueryItem.label} :</h1>
                                    </div>
                                    <div className='col-span-8'>
                                    {enqueryItem.textarea ? <TextArea rows={2} placeholder="Comment" maxLength={1} />:<Input placeholder={`${enqueryItem.label}`}/>}
                                    </div>
                                </>
                            )
                        }
                    </Form>
                </div>
            </Modal>
        )
      }

    return(
        <Layout>
            <ModalComponent/>
            {/*header*/}
            <nav className='grid grid-cols-12 h-auto p-0 m-0 py-5 pb-8 relative'>
                <div className='col-span-2 flex items-center justify-center '>
                    <Image src="/slug/02-logo.png" preview={false}/>
                </div>
                <div className='col-span-10 flex justify-center'>
                    <div className='flex text-center items-center gap-3 border-r border-zinc-300 px-4'>
                        <span>
                            <h1 className='text-[#B4376F] font-bold text-[15px]'>1,00,000+</h1>
                            <p className='text-[14px] text-zinc-500'>Happy Customer</p>
                        </span>
                        
                        <span className='rounded-full w-[12px] h-[12px]'></span>
                        
                        <span>
                            <h1 className='text-[#B4376F] font-bold text-[15px]'>Food + Stay + Travel</h1>
                            <p className='text-[14px] text-zinc-500'>Our Price are Inclusive</p>
                        </span>

                        <span className='rounded-full w-[12px] h-[12px]'></span>

                        <span className='pr-2'>
                            <h1 className='text-[#B4376F] font-bold text-[15px]'>Tour Guides</h1>
                            <p className='text-[14px] text-zinc-500'>Trained & Expirenced</p>
                        </span>
                    </div>

                    <div className='flex items-center'>
                        <div className='flex'>
                            <div className='flex items-center border-r border-zinc-300 pl-6 pr-2'>
                                <i className='bx bxs-phone text-[20px] p-[2px] ml-1 bg-[#863A8D] text-white rounded mx-1'/>
                                <h1 className='text-[18px] font-bold text-[#863A8D]'>020-67186800</h1>
                            </div>
                            <p className='px-3'>helpdesk@prasannapurple.com</p>
                        </div>
                    </div>
                </div>
                <div className='absolute w-full flex items-center px-4' style={{bottom:'-22px',zIndex:'1000'}}>
                    <div className='p-2 bg-[#5325A2] border border-white flex justify items-center'>
                        <Image src='/slug/home-menu.png' width={26} height={24} preview={false}/>
                    </div>
                    {
                            MenuList.map((menuItem)=>{
                                return <span className='hover:bg-[#5325A2] hover:text-white cursor-pointer text-zinc-600 font-light w-[30%] h-[41px] border border-white bg-[#DBCFEE] 
                                text-center flex capitalize flex gap-3 items-center justify-center' 
                                >{menuItem.dropdown && menuItem.dropdownMenu ? 
                                (<><DropdownLink data={menuItem}/><i className='bx bxs-down-arrow text-[9px] text'/></>) : 
                                (menuItem.label)}</span>
                            })
                    }   
                </div>
            </nav>
            
            {/*content */}
            <Content className='h-auto'>

                {/*Big Slider*/}
                <BigCarousel data={BigsliderImage} speed={true}/>


                <div className='px-4 h-[470px]'>
                    <div className='relative grid grid-cols-12'>
                        <div className='col-span-8'>
                            
                            <div className='absolute top-[-60px]'>
                                <Image src="/slug/itinerary-side-img.png"/>
                            </div>
                            
                            <div className='mt-10 px-6'>
                                <h1 className='text-[25px] text-[#5325A2]'>Raigad</h1>
                                <p className='text-[15px] text-zinc-600 tracking-[1px] text-justify py-5'>
                                    The <span className='font-bold text-black'>Raigad Fort</span> was built by Chhatrapati Shivaji Maharaj and 
                                    the chief architect/engineer was Hiroji Indulkar. The main 
                                    palace was constructed using wood, of which only the base 
                                    pillars remain. The main fort ruins consist of the queen's 
                                    quarters, six chambers, with each chamber having its own 
                                    private restroom. In addition, ruins of three watch towers 
                                    can be seen directly in front of the palace grounds out of 
                                    which only two remain as the third one was destroyed during a 
                                    bombardment. The Raigad Fort also has ruins of a market which 
                                    was accessible to horseback riders. The fort also overlooks an 
                                    artificial lake known as the Ganga Sagar Lake.
                                </p>
                            </div>
                        </div>

                        <div className='col-span-4'>

                            {/*Card content*/}
                            <div style={{borderTopLeftRadius:'12px'}}
                            className=' gap-2 text-[20px] absolute top-[-110%] right-[13%] text-white w-[142px] 
                            flex justify-center items-center py-2 bg-[#5325A2]'>
                                <i class='bx bx-bus'/>
                                <span>BUS</span>
                            </div>
                            <Card
                                className='absolute top-[-95%] w-[380px] shadow-lg'
                                >
                                    {
                                        Object.keys(card_trip_detail).map((cardItem,cardIndex)=>
                                            <div className='flex items-center grid grid-cols-12 border-b-2 border-dotted h-[50px]'>
                                                <span className='col-span-4'>
                                                    <h1 className='text-[15px] capitalize text-zinc-400'>
                                                        {cardItem.split('_').join(" ")}
                                                    </h1>
                                                </span>
                                                <span className='col-span-8'>
                                                    <h1 className={`${cardItem == "price" ? "font-bold text-[30px]":null}`}>
                                                        {cardItem == "price" ? 
                                                        <div className='flex items-center jsutify-center'>
                                                            <i className='bx bx-rupee text-zinc-400 text-[25px]'/>
                                                            <span>{card_trip_detail[cardItem]}</span>
                                                            <span>/-</span>
                                                            <span className='text-[15px] text-zinc-400 mx-1'> Per Adult</span>
                                                        </div>
                                                        :<span className='text-justify text-zinc-400 px-1'>{card_trip_detail[cardItem]}</span>}
                                                    </h1>
                                                </span>
                                            </div>
                                        )
                                    }
                                    {/*Card extra info booking related */}
                                    <div className='text-zinc-500 p-2 border-b-2 border-dotted '>
                                        Goods & Services Tax (GST) of 5% will be applicable.*
                                    </div>
                                    <Button onClick={showModal} 
                                    className='my-4 bg-red-500 border-0 w-full py-2 hover:bg-[#5325A2] h-auto text-[20px] text-white'>
                                        ENQUIRY NOW
                                    </Button>
                                    <div className='flex'>
                                        <DatePicker onChange={onChange} className='w-full'/>
                                        <Button className='text-[16px] flex mx-2 w-[134px] h-auto py-2 hover:bg-[red] bg-[#5325A2] border-0 text-white'>
                                            BOOK NOW
                                        </Button>
                                    </div>
                                    <Button type='text' className='mt-4 bg-[#F5F5F5] text-[#8D4794] border-0 w-full py-2 h-auto 
                                    text-[20px] text-white flex items-center justify-center gap-2'>
                                        <i className='bx bxs-phone-call text-[23px]'/>020-67186800
                                    </Button>
                            </Card>
                        </div>
                    </div>
                </div>
                
                {/*Tour Program*/}
                <div>
                    <div className='flex items-center grid grid-cols-12' style={{backgroundImage:'url(/slug/itinerary-pro-img.jpg)',height:'100px'}}>
                        <h1 className='text-[30px] col-span-2 text-white px-3'>Tour Program</h1>
                        {/* <div className='flex justify-center items-center col-span-10 pt-1' >
                            <span><Image src='/slug/download-pdf.png'/></span>
                            <span className='px-2 pr-12'><a className='pr-12 underline' style={{color:'#3DF26B'}}>Download ltinerary</a></span>
                        </div> */}
                        {/* <Image src='/slug/itinerary-pro-img.jpg' height='80px' preview={false}/> */}
                    </div>
                    
                    <div className='grid grid-cols-12'>
                        <div className='col-span-7'>

                            <div className='grid grid-cols-12 border-b border-zinc-300 py-4'>
                                {/*Date*/}
                                <div className='col-span-2 flex justify-center items-center p-2'>
                                    <div className='border border-[#3498DB] w-[65px] flex flex-col'>
                                        <span className='bg-[#3498DB] h-[33px] flex items-center justify-center text-white font-bold text-[16px]'>DAY</span>
                                        <span className='text-[30px] flex justify-center items-center'>01</span>
                                    </div>
                                </div>

                                <div className='p-2 text-zinc-500 col-span-10 text-[15px] text-justify flex items-center'>
                                    <span>
                                        Morning departure . Breakfast at Mulshi. Arrival at Raigad . Enjoy ropeway at 
                                        Raigad. Fort. Visit Raigad Fort, Jagdishwar Temple, Shri Shivaji Maharaj Smarak , 
                                        Shirkai Temple, Meghdambari , Maha darwaja, Takmak Point , Bajarpeth. Lunch at 
                                        Raigad. Proceed to Pune. Evening arrival at Pune. (B.L)
                                    </span>
                                </div>
                            </div>

                            {/*Notes*/}
                            <div className='grid grid-cols-12 border-b border-zinc-300 py-4'>
                                {/*Date*/}
                                <div className='col-span-2 flex justify-center items-center p-2'>
                                    <div className='border border-black w-[65px] flex flex-col'>
                                        <span className='bg-black h-[33px] flex items-center justify-center text-white font-bold text-[16px]'>DAY</span>
                                        <span className='text-[30px] flex justify-center items-center p-2 px-4'>
                                            <i class='bx bxs-edit'/>
                                        </span>
                                    </div>
                                </div>

                                <div className='p-2 text-zinc-500 col-span-10 text-[15px] text-justify flex items-center'>
                                    <span>
                                        Morning departure . Breakfast at Mulshi. Arrival at Raigad . Enjoy ropeway at 
                                        Raigad. Fort. Visit Raigad Fort, Jagdishwar Temple, Shri Shivaji Maharaj Smarak , 
                                        Shirkai Temple, Meghdambari , Maha darwaja, Takmak Point , Bajarpeth. Lunch at 
                                        Raigad. Proceed to Pune. Evening arrival at Pune. (B.L)
                                    </span>
                                </div>
                            </div>

                            {/*t&c*/}
                            <div className='grid grid-cols-12 border-b border-zinc-300 py-4'>
                                {/*Date*/}
                                <div className='col-span-2 flex justify-center items-center p-2'>
                                    <div className='border border-[#D45C9E] w-[65px] flex flex-col'>
                                        <span className='bg-[#D45C9E] h-[33px] flex items-center justify-center text-white font-bold text-[16px]'>DAY</span>
                                        <span className='text-[30px] flex justify-center items-center p-2 px-4'>
                                            <i className='bx bxs-edit text-[#D45C9E]'/>
                                        </span>
                                    </div>
                                </div>

                                <div className='p-2 text-zinc-500 col-span-10 text-[15px] text-justify flex items-center'>
                                    <span>
                                        Morning departure . Breakfast at Mulshi. Arrival at Raigad . Enjoy ropeway at 
                                        Raigad. Fort. Visit Raigad Fort, Jagdishwar Temple, Shri Shivaji Maharaj Smarak , 
                                        Shirkai Temple, Meghdambari , Maha darwaja, Takmak Point , Bajarpeth. Lunch at 
                                        Raigad. Proceed to Pune. Evening arrival at Pune. (B.L)
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/*Map*/}
                        <div className='col-span-5 relative'>
                            <div>
                                <LoadScript
                                googleMapsApiKey="AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI"
                                >
                                    <GoogleMap
                                        mapContainerStyle={mapStyles}
                                        zoom={8}
                                        center={defaultCenter}
                                    />
                                </LoadScript>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Testimonial*/}
                <div>
                    <div className="mb-12 w-full">
                        <CarouselSmallLayout data={{
                            image:'/slug/testimonial-banner.jpg',
                            color:'white',
                            controller:'white',
                            heading:'Testimonial',
                            data:carouselData,
                            playicon:true
                        }}/>
                    </div>
                    <div className='p-0 m-0'>
                        <div className='relative'>
                            <Image src="/slug/testimonial-explore-head.jpg" height={112} width="100%" preview={false}/>
                            <h1 style={{position:'absolute',bottom:0,top:'22%',left:'35%',fontSize:'40px'}} 
                            className='text-white italic'>Explore More Packages !!</h1>
                        </div>
                        <div className='pl-4'>
                            <CarouselSmallLayout data={{
                                image:'/slug/02-testimonial-banner.jpg',
                                color:'black',
                                controller:'red',
                                heading:'Package',
                                productCarousel:true,
                                data:TripList
                            }}/>
                        </div>
                        <div className='h-[150px] flex items-center justify-center' style={{backgroundImage:'url(/slug/experiences-banner.jpg)'}}>
                            <h1 className='text-[35px] text-white'>Provides some of the Most Exclusive Travel Experience</h1>
                        </div>
                    </div>
                </div>

                {/*Our Brand */}
                <div>
                    <div>
                        <h1 className='text-center py-4 font-bold text-[40px]'>Our Brands</h1>
                    </div>
                    <div className='py-2 pb-6'>
                        <CarouselSmallLayout data={{data:BrandList,slidesToShow:true}}/>
                    </div>
                </div>
            </Content>
            
            <Footer className='p-0 m-0'>
                <div className='bg-[#474544] flex flex-col items-center pt-8'>
                    <FooterLayouts/>
                </div>
            </Footer>
        </Layout>
    );
}
export default Slug;