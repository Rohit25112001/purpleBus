import HomeLayout from "../shared/layout/homeLayout";
import { Button, Checkbox, Popover, Image, Form, Input, Select } from 'antd';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';
import axios from 'axios';
const jwt = require('jsonwebtoken');

const FilterMenu = [
    {
        id:1,
        label:'FILTER'
    },
    {
        id:2,
        label:'OPERATOR',
        filterIcon:true,
        filterCat:[
            {
                id:3,
                label:'Prasanna Purple'
            }
        ]
    },
    {
        id:4,
        label:'BUS TYPES',
        filterIcon:true,
        filterCat:[
            {
                id:5,
                label:'AC Sleeper'
            },
            {
                id:6,
                label:'Non-AC Sleeper'
            },
            {
                id:7,
                label:'AC Seater'
            },
            {
                id:8,
                label:'Non-AC Seater'
            }
        ]
    },
    {
        id:9,
        label:'DEPARTURE TIME',
        filterIcon:true,
        filterCat:[
            {
                id:10,
                label:'00:00 to 05:59'
            },
            {
                id:11,
                label:'06:00 to 11:59'
            },
            {
                id:12,
                label:'12:00 to 17:59'
            },
            {
                id:13,
                label:'18:00 to 23:59'
            }
        ]
    }

]


const busList = [
    {
        id:1,
        label:'Prasanna Purple',
        busFeature:'47 seater 2x2 Ac Volvo Push Back',
        facility:[
            {
                id:3,
                label:'Track My Bus',
                icon:'map-alt'
            },
            {
                id:4,
                label:'Movie Show In The Bus',
                icon:'movie-play'
            },
            {
                id:5,
                label:'emergency exit',
                icon:'exit'
            },
            {
                id:6,
                label:'fire extinguisher',
                icon:'water'
            },
            {
                id:7,
                label:'reading light',
                icon:'bulb'
            },
            {
                id:8,
                label:'charging point',
                icon:'plug'
            },
            {
                id:9,
                label:'dropping point anouncement',
                icon:'speaker'
            }
        ],
        departure:'07:00 AM',
        arrival:'10:00 PM',
        seat:26,
        price:'2020/2000'
    },

    {
        id:12,
        label:'Dinasure Purple',
        busFeature:'27 seater 2x2 Ac',
        facility:[
            {
                id:14,
                label:'Track My Bus',
                icon:'map-alt'
            }
        ],
        departure:'10:00 AM',
        arrival:'08:00 PM',
        seat:17,
        price:'2020/2000'
    }
]

const AvilableRoute = () => {
    const router = useRouter();
    // const [selectedBus , setSelectedBus] = useState();
    const [filter,setFilter] = useState(false);
    //filter option key
    const [filtered,setFiltered] = useState([]);
    
    const onChange = (e,filteredItem) => {
        const checked = e.target.checked;
        const existingIndex = filtered.findIndex(item => Object.keys(item)[0] === filteredItem);
    
        if (checked && existingIndex === -1) {
            setFiltered([...filtered, { [filteredItem]: true }]);
        } 
        else if (!checked && existingIndex !== -1) {
            const newFiltered = [...filtered];
            newFiltered.splice(existingIndex, 1);
            setFiltered(newFiltered);
        }
    }

    //popover code & menu
    const [popoverContent, setPopoverContent] = useState(null);

    // const handleHover = (facilityLabel) => {
    //     setPopoverContent(facilityLabel);
    // };

    const Contents = () =>{
        const List = popoverContent.split(',');
        return(
            <ul className="list-disc px-2 capitalize">
                {
                    List.map((listItem,listIndex)=><li className="py-1">{listItem}</li>)
                }
            </ul>
        )
    }

    

    const [selectedBus, setSelectedBus] = useState(null); // select bus

    // const SelectedBus =(e)=>{
    //     console.log(e);
    // }

    const handleSelectBus = (busItem) => {
        setSelectedBus(busItem);
        setColorSeat({
            selectedSeat:[],
            seatNo:0,
            price:0,
            gst:0
        })
      };
    
      const clearSelectedBus = () => {
        setSelectedBus(null);
      };


      //seat icon
      const [colorSeat,setColorSeat] = useState({
        selectedSeat:[],
        seatNo:0,
        price:0,
        gst:0
      });
    //   const [selected,setColorSeat] = useState(0);
      const SVGICON = ({data,onClick,selectedSeat}) =>{
        const isSelected = selectedSeat.includes(data);
      return(
          <Popover content = {<div>
              <h1>Seat No - {data}</h1>
              <h1>Base Fare - 2000</h1>
              <h1>GST - 100</h1>
              <h1>Seat Rate - 2100</h1>
              <h1>Seat Status - {isSelected ? 'Selected':'Available'}</h1>
          </div> } 
          title="Seat Information">

              <svg style={{cursor:'pointer'}} onClick={()=>onClick(data)} version="1.0" xmlns="http://www.w3.org/2000/svg" width="33.000000pt" height="22.000000pt" viewBox="0 0 33.000000 35.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)" fill="none" stroke="none">
              <path
                  d="M120 305 c0 -11 -11 -15 -38 -15 -64 0 -82 -26 -82 -120 0 -94 18 -120 82 -120 27 0 38 -4 38 -15 0 -12 18 -15 100 -15 l100 0 0 150 0 150 -100 0 c-82 0 -100 -3 -100 -15z m3 -45 c4 -17 14 -20 66 -20 l61 0 0 -70 0 -70 -61 0 c-52 0 -62 -3 -66 -20 -7 -27 -66 -27 -93 0 -16 16 -20 33 -20 90 0 83 18 110 74 110 25 0 35 -5 39 -20z"
                  style={{ stroke: "#000", fill: `${ isSelected ? "green" : '#fff'}`, strokeWidth: 5 }}
              />
              
              <text x="380%" y="-380%" transform="scale(-1, 1) rotate(180)" textAnchor="middle" fontSize="100" fill="#000">
                  {data}
              </text>
              </g>
          </svg>
        </Popover>


          )
      }


      const selectSeats = (e) =>{
        if(colorSeat.selectedSeat.length>=10)return alert("can't select seat more then 10");
        if (colorSeat.selectedSeat.includes(e)){
            const updateSeat = colorSeat.selectedSeat.filter(seat=>seat!==e);
            return setColorSeat((prevSeat)=>({
                ...prevSeat,
                selectedSeat:updateSeat,
                seatNo:0,
                price:colorSeat.price-2000,
                gst:colorSeat.gst-101
            }))
        }
        
          setColorSeat({
            selectedSeat:[
                ...colorSeat.selectedSeat,
                e
            ],
            seatNo:e,
            price:colorSeat.price+2000,
            gst:colorSeat.gst+101
          })
      }

      const options=[
        {
            value: 'Mumbai',
            label: 'Mumbai',
        },
        {
            value: 'Delhi',
            label: 'Delhi',
        },
        {
            value: 'Tamil Nadu',
            label: 'Tamil Nadu',
        },
        {
            value: 'Goa',
            label: 'Goa',
        },
        {
            value: 'Karnatka',
            label: 'Karnatka',
        },
        {
            value: 'Chennai',
            label: 'Chennai',
        },
        {
            value: 'Agra',
            label: 'Agra',
        }
    ]

        const proceedBooking = (e) => {
            
            // const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
            e['selectedSeat'] = colorSeat.selectedSeat.toString();
            e['price'] = colorSeat.price;
            e['gst'] = colorSeat.gst;
            const data = JSON.stringify(e);
            router.push({
                pathname: '/Customer_info',
                query: { data: data },
            })
            // const secretKey = '2iere2gedewgfty2'; // Confirm this is a valid string

            // const token = jwt.sign({
            // name: 'Rohit',
            // test: 'test'
            // }, secretKey, { expiresIn: '7d' });
            // console.log(token);
        }
      
      //selected bus component
      const SelectedSeatData = ({data}) =>{
        return(
            <div  className='grid grid-cols-12 border-t border-zinc-500 '>
                <div className="col-span-1 border-r border-zinc-500 text-center flex flex-col justify-center items-center px-2 py-4 pb-8 gap-4">
                    <h1>SEAT LEGEND</h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="mb-1">Available Seats</p>
                        <span style={{width:'70px',height:'25px',display:'block'}} className="border border-zinc-500 rounded-full bg-white"></span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="mb-1">Booked Seats</p>
                        <span style={{width:'70px',height:'25px',display:'block'}} className="border border-zinc-400 bg-gray-400 rounded-full"></span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="mb-1">Selected Seats</p>
                        <span style={{width:'70px',height:'25px',display:'block'}} className="border border-zinc-400 bg-green-400 rounded-full"></span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="mb-1">Female Seats</p>
                        <span style={{width:'70px',height:'25px',display:'block'}} className="border border-zinc-400 bg-pink-400 rounded-full"></span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="mb-1">Social Block Seats</p>
                        <span style={{width:'70px',height:'25px',display:'block'}} className="border border-zinc-400 bg-yellow-200 rounded-full"></span>
                    </div>
                </div>

                {/*main body*/}
                <div className="col-span-8 px-8">

                    <div className="flex py-3 border-b border-gray-400">
                        <div className="w-[30%] border-r border-zinc-500">
                            <h1 className="text-[18px]">26 Seats Available</h1>
                            <p className="text-[#9CA3AF]">Click on Seat to select/ deselect</p>
                        </div>
                        <div className="w-[70%] flex items-center px-4 gap-2">
                            <Image src="/Purple-Trips.png" preview={false}/>
                            <div className='text-[18px] font-bold pt-1 items-center flex px-1'>
                                <span>PURPLE HELPDESK -</span>
                                <span className='text-[22px] text-[#60489D] mx-1'>020 6718 6800</span>
                            </div>
                        </div>
                    </div>

                    <Button className="mt-12 bg-[#FCCA00]">Amenities</Button>
                    <h1 className="text-[16px] text-[#444444] font-bold">LOWER DECK</h1>
                    <div className="border border-zinc-500 w-[90%] h-[200px] grid grid-cols-12 p-2">
                        <div className="col-span-1">
                            <Image src="/iconsteering.png"/>
                        </div>
                        
                        <div className="col-span-11">
                        
                            <div className=" flex flex-wrap flex-col justify-center  h-[60px] w-[300px] ">
                                {
                                    (data.totalSeat/2)%2== 0 ? 
                                        Array((data.totalSeat/2)+2).fill().map((item,index)=> 
                                            <SVGICON  data={index+1} onClick={selectSeats} selectedSeat={colorSeat.selectedSeat}/>
                                        )
                                    : 
                                    Array(Math.round((data.totalSeat/2))+1).fill().map((item,index)=> 
                                            <SVGICON  data={index+1} onClick={selectSeats} selectedSeat={colorSeat.selectedSeat}/>
                                        )
                                }
                            </div>


                            <div className="pl-10 my-8 flex flex-wrap flex-col justify-center  h-[60px] w-[300px] ">
                                {console.log(19/2)}
                            {
                                    (data.totalSeat/2)%2== 0 ? 
                                        Array((data.totalSeat/2)-2).fill().map((item,index)=> 
                                            <SVGICON  data={index+((data.totalSeat/2)+3)} onClick={selectSeats} selectedSeat={colorSeat.selectedSeat}/>
                                        )
                                    : 
                                    Array(Math.round((data.totalSeat/2))-3).fill().map((item,index)=> 
                                            <SVGICON  data={(index+Math.round((data.totalSeat)/2))+3} onClick={selectSeats} selectedSeat={colorSeat.selectedSeat}/>
                                        )
                                }
                            </div>
                        </div>
                    </div>

                </div>

                {/*contact from*/}
                <div className="col-span-3 py-7 px-3">
                    <div>
                        <Image src="/form-top.png" preview={false}/>
                    </div>
                    <div className="border border-zinc-500 py-4 px-4">
                        <Form onFinish={proceedBooking}>
                        <Form.Item
                                name="boardingPoint"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please select a Boarding Point!',
                                },
                                ]}
                            >
                                <Select
                                className="w-full h-[40px]"
                                placeholder="Boarding Point"
                                options={options}
                                />
                            </Form.Item>
                            <Form.Item
                                name="droppingPoint"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please select a Dropping Point!',
                                },
                                ]}
                            >
                                <Select
                                className="w-full h-[40px]"
                                placeholder="Dropping Point"
                                options={options}
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className="flex flex-col justify-between ">
                                    <span className="flex justify-between pb-1">
                                        <p>Seat(s)</p>
                                        <p>
                                            {
                                                colorSeat.selectedSeat.map(seat => seat).join(', ')
                                            }
                                        </p>
                                    </span>
                                    <span className="flex justify-between pb-1">
                                        <p>Base Fare</p>
                                        <p>{colorSeat.price}</p>
                                    </span>
                                    <span className="flex justify-between pb-1">
                                        <p>GST</p>
                                        <p>{colorSeat.gst}</p>
                                    </span>
                                    <span className="flex justify-between text-[16px] font-semibold">
                                        <h1>Total Price</h1>
                                        <p className="flex items-center"><i className='bx bx-rupee'/>{colorSeat.price}</p>
                                    </span>
                                </div>
                            </Form.Item>
                            <div className="flex justify-center">
                                <Button htmlType="submit" className="bg-orange-500 text-white">Complete / Book 0 Seat</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }

    const fetcher = async(url) =>{
        try{
            const {data} = await axios.get(url);
            return data;
        }
        catch(err){
            return err;
        }
      }

      //Bus lIst fetch
    const {data:BusList,isLoading,error:productsError} = useSWR('http://localhost:8080/bus/',fetcher);
    
    return(
        <HomeLayout>
            <div className="px-11">
                <div className="h-[124px] flex flex-col justify-center px-8" style={{backgroundImage:'url(/location-img.jpg)'}}>
                    {
                        (BusList && BusList.length) ?
                            <div>
                                <h1 className="font-bold  text-[25px]">{BusList[0].originCity} - {BusList[0].destinationCity}</h1>
                                <span className="text-[16px]">{BusList[0].dateofDeparture.split('T')[0]}</span>
                                {/* BusList[0].originCity + ' - ' + BusList[0].destinationCity */}
                            </div>
                        :null
                        // BusList.map((busItem,busIndex)=>
                        // <>
                        //     <h1 className="font-bold  text-[25px]">{busItem.originCity} - {busItem.destinationCity}</h1>
                        //     <span className="text-[16px]">{busItem.dateofDeparture.split('T')[0]}</span>
                        // </>):console.log(BusList)
                    }
                </div>
                <div></div>
            </div>

            {/*Filter menu*/}
            <div className="bg-[#60489D]">
                <div className='grid grid-cols-12 text-white'>
                    {
                        FilterMenu.map((filterItem,filterIndex)=>
                            <div key={filterIndex} className={`col-span-${12/FilterMenu.length} px-12 flex flex-col `}>
                                <div className="flex items-center gap-2 " onClick={()=>setFilter(!filter)}>
                                    <i className='cursor-pointer bx bx-filter-alt text-[16px]'/>
                                    <h1 className="my-2 cursor-pointer">{filterItem.label} :</h1>
                                </div>
                                {
                                   filter && filterItem.filterCat && filterItem.filterCat.map((filterSubMenuItem,filterSubMenuIndex)=>
                                        <Checkbox className="text-white" onChange={(e)=>onChange(e,filterSubMenuItem.label)}>{filterSubMenuItem.label}</Checkbox>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            
            {/*Bus list box*/}
            <div className="bg-white px-9 py-2">
                {/*Discount banner*/}
                <div className="py-1 bg-yellow-300 font-bold text-center mb-2">
                    Exclusive Offer : Get Flat Rs.100 Off For All Women Traveller MUMBAI - PUNE - MUMBAI !
                </div>

                {/* Bus list */}
                <div className="border border-zinc-600">
                    <div className="bg-white grid grid-cols-12">
                        <span className="col-span-2 p-2">Bus Operator</span>
                        <span className="col-span-2 p-2">Departure</span>
                        <span className="col-span-2 p-2">Arrival</span>
                        <span className="col-span-2 p-2">Seat</span>
                        <span className="col-span-2 p-2">Price</span>
                        <span className="col-span-2 p-2">Select</span>
                    </div>
                    {
                        (BusList && BusList.length) ? BusList.map((busItem,busIdex)=>
                        <>
                            <div className="flex items-center bg-[#F4EBFE] hover:bg-yellow-100 
                                transition duration-300 ease-in-out grid grid-cols-12 border-t border-zinc-600">
                                <span className="col-span-2 p-2">
                                    <h1>{busItem.busName}</h1>
                                    <p className="text-zinc-500 text-xs py-1">{busItem.busFeature}</p>
                                    {/* <Popover content={Contents} title="Amenities">
                                        <div className="flex gap-1 pt-1" onMouseEnter={() => handleHover(busItem?.facility.map(item => item.label).join(', '))}>
                                            {busItem &&
                                            busItem.facility.map((iconItem, iconIndex) => (
                                                <i key={iconIndex} className={`text-zinc-500 text-[16px] bx bx-${iconItem.icon}`} />
                                            ))}
                                        </div>
                                    </Popover> */}
                                </span>
                                <span className="col-span-2 p-2">
                                    {
                                         busItem.timeofDropping && (busItem.timeofBoarding.split('T')[1].split('.')[0])
                                    }
                                    <p className="text-zinc-500 text-xs font-bold">Boarding</p>
                                </span>
                                <span className="col-span-2 p-2">
                                    {
                                        busItem.timeofDropping && (busItem.timeofDropping.split('T')[1].split('.')[0])
                                    }
                                    <p className="text-zinc-500 text-xs font-bold">Dropping</p>
                                </span>
                                <span className="col-span-2 p-2">
                                    {busItem.totalseatLeft}
                                    <p className="text-zinc-500">Left</p>
                                </span>
                                <span className="col-span-2 p-2 flex gap-1">
                                <p className="font-bold">Seating Rs</p>{busItem.perSeatPrice}
                                </span>
                                <span className="col-span-2 p-2">
                                    <Button onClick={() => handleSelectBus(busItem)} className="bg-[#60489D] rounded-0 text-white hover:bg-orange-400">
                                        Select Seat
                                    </Button>
                                </span>
                            </div>
                            {selectedBus === busItem && <SelectedSeatData data={busItem} onClose={clearSelectedBus} />}
                        </>
                        ) :
                        <div className="flex items-center justify-center bg-[#F4EBFE] hover:bg-yellow-100 
                                transition duration-300 ease-in-out font-bold border-t border-zinc-600">
                                    <h1 className="py-2">No Routing Found</h1> 
                        </div>
                    }
                </div>
            </div>
        </HomeLayout>
    );
}
export default AvilableRoute;