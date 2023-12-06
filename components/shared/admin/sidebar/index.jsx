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
        subheading:'GENERAL',
        List:[
            {
                id:4,
                label:'Product',
                icon:'shopping-bag',
                dropdown:true,
                dropdownMenu:[
                    {
                        id:5,
                        label:"Add Product",
                        link:"admin/product/add-product",
                        icon:"add-to-queue"
                    },
                    {
                        id:6,
                        label:"Show Product",
                        link:"admin/product/show-product",
                        icon:"show"
                    }
                ]
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
                                menuList.link && <span  name={menuList.label} onClick={()=>checkActivemenu(menuList.label)}  className={` ${menuList.label==='Dashboard'?'text-[#03A9F5]':null} 
                                rounded flex items-center gap-2
                                    mb-1 rounded-[8px] hover:text-[#03A9F5] 
                                    text-[#8499A8] px-4 py-2 text-[13px]`} key={index}>
                                        <i name={menuList.label} className={`bx bx-${menuList.icon} text-[14px]`}/>
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

                    <div className='flex flex-col px-2'>
                        <List
                            itemLayout="horizontal"
                        >
                            {
                                data.map((items,index)=><MenuList data={items} key={index}/>)
                            }
                        
                        </List>
                    </div></>
    );
}
export default Sidebar;