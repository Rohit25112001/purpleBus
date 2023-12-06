import Link from "next/link";
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
const Footer = () => {
    const FooterLayouts = () => {
        return(
            <>
            <div className="flex w-full">
                {
                    footerData.map((footerItem)=>
                        <div className="w-full px-6 mx-2 text-white" key={footerItem.id}>
                            <h1 className="my-3">{footerItem.heading}</h1>
                            {
                                footerItem.moreLink.map((linkItems)=>
                                <span className="flex flex-col  text-[12.5px] py-1" key={linkItems.id}>
                                    <Link href='/'>
                                        <a className="hover:text-white text-zinc-500 font-light hover:underline">{linkItems.label}</a>
                                    </Link>
                                </span>)
                            }
                        </div>
                        )
                }
            </div>
             <div className="col-span-12">
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
             <div className="grid grid-cols-12 pt-6 pb-4 border-t border-zinc-500 px-4">
                <div className="col-span-6 text-xs flex items-center text-gray-600">© Prasanna Purple 2023. All rights reserved.</div>
                <div className="col-span-6 flex justify-end items-center text-[26px] text-white gap-5">
                    <i className='bx bxl-facebook hover:text-blue-500'></i>
                    <i className='bx bxl-twitter hover:text-blue-500' ></i>
                </div>
            </div>
         </>
        )
    }
    return (
        <div className="p-0 m-0 flex flex-col justify-center">
            <div className="grid grid-cols-12 ">
                {/* <div className="col-span-12 bg-green-500 flex justify-around"> */}
                    <div className="col-span-12">
                        <FooterLayouts/>
                    </div>
                {/* </div> */}
               
            </div>
        </div>
    );
}
export default Footer;