import {List} from "antd";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

const data=[
    {
        id:1,
        subheading:'MAIN',
        List:[
            {
                id:2,
                label:'Dashboard',
                icon:'home',
                link:'/admin/dashboard',
                dropdown:false
            }
        ]
    },
    {
        id:3,
        subheading:'BUS CONTROL',
        List:[
            {
                id:4,
                label:'Add Bus',
                icon:'bus',
                link:"admin/product/add-product",
            },
            {
                id:5,
                label:"Show Bus",
                link:"admin/product/add-product",
                icon:"add-to-queue"
            },
            {
                id:5,
                label:"Add Trip",
                link:"admin/product/add-product",
                icon:"trip",
                iconCheck:true
            }
        ]
    },
    {
        id:9,
        subheading:'ADD ROUTE',
        List:[
            {
                id:2,
                label:'Add Place',
                icon:'home',
                link:'/admin/dashboard',
                dropdown:false
            }
        ]
        
    },
    {
        id:6,
        subheading:'ACTIVITY',
        List:[
            {
                id:4,
                label:'Enquiries',
                icon:'megaphone',
                link:"admin/product/add-product",
            },
            {
                id:5,
                label:"Payments",
                link:"admin/product/add-product",
                icon:"wallet"
            },
            {
                id:5,
                label:"Track Bus",
                link:"admin/product/add-product",
                icon:'location-plus'
            },
            {
                id:6,
                label:"Reports",
                link:"admin/product/add-product",
                icon:"file"
            }
        ]
        
    },
    {
        id:7,
        subheading:'SETTING',
        List:[
            {
                id:8,
                label:'Setting',
                icon:'cog',
                link:"admin/product/add-product",
            }
        ]
        
    }
];

const Sidebar = ()=>{
    const [dropdown,setDropdown] = useState(false);
    const router = useRouter();
    const MenuList = ({data}) =>{

        const checkActivemenu = (e)=>{
            const activeMenu=e.split(' ').join('-').toLowerCase();
            router.push(`/admin/product/${activeMenu}`);
        }

        return(
            <div className='px-2 mb-3'>
                <h1 className='text-[10px] p-1 tracking-widest text-[#03A9F5]'>{data.subheading}</h1>
                
                {
                    data.List.map((menuList,index)=>
                    <>
                        {
                            //menu without dropdown
                                menuList.link && <span  name={menuList.label} onClick={()=>checkActivemenu(menuList.label)}  
                                className={`cursor-pointer ${menuList.label==='Dashboard'?'text-[#03A9F5]':null} 
                                rounded flex items-center gap-2
                                    mb-1 rounded-[8px] hover:text-[#03A9F5] 
                                    text-[#8499A8] px-4 py-2 text-[13px]`} key={index}>
                                        {menuList.iconCheck ? 
                                        <i name={menuList.label} className={`bx bx-${menuList.icon} text-[14px]`}/> 
                                        : 
                                        <i name={menuList.label} className={`bx bxs-${menuList.icon} text-[14px]`}/>}
                                        {menuList.label}
                                    </span>
                        }
                        {

                            //menu with dropdown
                                !menuList.link && <span name={menuList.label}  className={`rounded flex flex-col justify-center
                                    rounded-[8px]  hover:text-[#03A9F5] 
                                    px-4 py-2 text-[13px]`} key={index}>
                                        <div onClick={()=>setDropdown(!dropdown)} className={`flex items-center justify-between ${dropdown && 'mb-1'}`}>
                                            <span className='flex items-center gap-2'>
                                                <i className={`bx bx-${menuList.icon} text-[14px]`}/>
                                                {menuList.label}
                                            </span>
                                            <span className='flex items-center'>
                                                {menuList.dropdown && <i className={`bx bx-chevron-right text-[16px]`}/>}
                                            </span>
                                        </div>
                                        {dropdown && menuList.dropdownMenu.map((dropdownList,dropdownIndex)=>
                                        <div className='text-justify py-1' key={dropdownIndex}>
                                            <div name={dropdownList.label} onClick={()=>checkActivemenu(dropdownList.label)} className='px-2 hover:bg-[#264E6B] rounded-[8px] 
                                                py-1 flex items-center gap-2'>
                                                <i name={dropdownList.label} className={`bx bx-${dropdownList.icon}`}/>
                                                <span className='' name={dropdownList.label}>{dropdownList.label}</span>
                                            </div>
                                        </div>)}
                
                                    </span>
                        }

                    </>
                    )
                }
            </div>
        );
    }
    return(
        <>
        {/* <div className='flex items-center px-6  h-[63px]'>
                        <img width={160} src={"/image/brand.png"} />
                    </div> */}

                    <div className='flex flex-col px-2  h-[485px] overflow-y-scroll'>
                        <List
                            itemLayout="horizontal"
                            className=""
                        >
                            {
                                data.map((items,index)=><MenuList data={items} key={index}/>)
                            }
                        
                        </List>
                    </div></>
    );
}
export default Sidebar;