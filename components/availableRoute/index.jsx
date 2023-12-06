import HomeLayout from "../shared/layout/homeLayout";
import { Button, Checkbox, Popover } from 'antd';
import { useEffect, useState } from "react";

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
    const [filter,setFilter] = useState(false);
    //filter option key
    const [filtered,setFiltered] = useState([]);
    
    useEffect(()=>{
        console.log(filtered);
    },[filtered])
    
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
    const handleHover = (facilityLabel) => {
        setPopoverContent(facilityLabel);
    };

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

    return(
        <HomeLayout>
            {/* <Popover content={content} title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover> */}
            <div className="px-11">
                <div className="h-[124px] flex flex-col justify-center px-8" style={{backgroundImage:'url(/location-img.jpg)'}}>
                    <h1 className="font-bold  text-[25px]">PUNE - TRIP-M-HIWAREBAZAR</h1>
                    <span className="text-[16px]">10-12-2023</span>
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
                        busList.map((busItem,busIdex)=>
                        <div className="flex items-center bg-[#F4EBFE] hover:bg-yellow-100 
                        transition duration-300 ease-in-out grid grid-cols-12 border-t border-zinc-600">
                            <span className="col-span-2 p-2">
                                <h1>{busItem.label}</h1>
                                <p className="text-zinc-500 text-xs py-1">{busItem.busFeature}</p>
                                <Popover content={Contents} title="Amenities">
                                    <div className="flex gap-1 pt-1" onMouseEnter={() => handleHover(busItem?.facility.map(item => item.label).join(', '))}>
                                        {busItem &&
                                        busItem.facility.map((iconItem, iconIndex) => (
                                            <i key={iconIndex} className={`text-zinc-500 text-[16px] bx bx-${iconItem.icon}`} />
                                        ))}
                                    </div>
                                </Popover>
                            </span>
                            <span className="col-span-2 p-2">
                                {busItem.departure}
                                <p className="text-zinc-500 text-xs font-bold">Boarding</p>
                            </span>
                            <span className="col-span-2 p-2">
                                {busItem.arrival}
                                <p className="text-zinc-500 text-xs font-bold">Dropping</p>
                            </span>
                            <span className="col-span-2 p-2">
                                {busItem.seat}
                                <p className="text-zinc-500">Left</p>
                            </span>
                            <span className="col-span-2 p-2 flex gap-1">
                            <p className="font-bold">Seating Rs</p>{busItem.price}
                            </span>
                            <span className="col-span-2 p-2">
                                <Button className="bg-[#60489D] rounded-0 text-white hover:bg-orange-400">Select Seat</Button>
                            </span>
                        </div>
                        )
                    }
                </div>
            </div>
        </HomeLayout>
    );
}
export default AvilableRoute;