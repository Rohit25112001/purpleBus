import { Layout, Menu, Image, Button, Dropdown } from 'antd';
import FooterLayout from '@/components/home/footer';
import DropdownLink from '../../dropdown-link';
import { useRef } from 'react';
import Link from 'next/link';

const { Footer, Content } = Layout;
const MenuList = [
    {
      id: '1',
      label: 'bus tickets',
      icon: '/header/menu/ticket',
      link: '/',
    },
    {
      id: '2',
      icon: '/header/menu/globo',
      label: 'purple trips',
      link: '/',
      dropdown:true,
      dropdownMenu:[
        {
          key:'6',
          label:(
            <a target="_self"  rel="noopener noreferrer" href="/bustours/Trip-From-Pune">
              Trips from Pune
            </a>
          )
        },
        {
          key:'7',
          label:(
            <a target="_self" rel="noopener noreferrer" href="/bustours/Trip-From-Mumbai">
              Trips from Mumbai
            </a>
          )
        }
      ]
    },
    {
      id: '3',
      icon: '/header/menu/bus',
      label: 'vehicle hire',
      link: '/',
    },
    {
      id: '4',
      icon: '/header/menu/box',
      label: 'bus parcel',
      link: '/',
    },
    {
      id: '5',
      icon: '/header/menu/phone',
      label: 'contact',
      link: '/',
      dropdown:true,
      dropdownMenu:[
        {
          key:'6',
          label:(
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              020-67186800
            </a>
          )
        },
        {
          key:'7',
          label:(
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              businfo@prasannapurple.com
            </a>
          )
        }
      ]
    },
    {
      id: '6',
      icon: '/header/menu/admin',
      label: 'agent login',
      link: '/',
    },
  ];

const HomeLayout = ({children}) =>{

    return(
        <Layout>
            {/*Header*/}
            <nav className='px-12 bg-[#FFFFFF] grid grid-cols-12'>
                <div className='flex items-center
                col-span-3
                lg:col-span-3
                md:col-span-12  
                '>
                <Image src="/logo.png" width={210} height={44} preview={false} className='pr-4' />
                </div>
                <div className='flex justify-end px-5 pb-2
                col-span-9
                lg:col-span-9
                md:col-span-12
                '>
                
                {MenuList.map((menuItem, menuIndex) => (
                <div
                    key={menuIndex}
                    className='flex flex-col items-center hover:bg-[#473A6A] 
                    transition-colors duration-700 ease-in-out hover:text-white text-gray-500 
                    px-[6px] pt-4 hover:cursor-pointer'
                >
                    <span className='w-full h-full flex items-center justify-center'>
                    <img src={`${menuItem.icon}.png`} alt={menuItem.label} />
                    </span>
                    <span className=' text-center flex uppercase pb-1 flex flex-col items-center justify-center' 
                    style={{fontWeight: '400 !important' }}>{menuItem.dropdown && menuItem.dropdownMenu ? 
                    (<DropdownLink data={menuItem}/>) : 
                    (
                        <Link href='/'>
                        <a >
                            {menuItem.label}  
                        </a>
                        </Link>
                    )}</span>
                </div>
                ))}


              <div className='flex flex-col text-gray-500 pl-5 pr-0  mr-0 pt-[2px]'>
                  <span className='pb-[5px] flex justify-center gap-6 '>
                    <img src='/header/menu/googleplay.png' className='h-[30px]' />
                    <img src='/header/menu/applestore.png' className='h-[30px]' />
                  </span>
                  <Button style={{ borderColor: 'transparent', color:'white' }} 
                  className='focus:outline-none focus:border-none rounded bg-[#8849A2] text-white py-1'>
                    <Dropdown overlay={<Menu><Image src="qr.png"/></Menu>} className='hover:text-white'>
                      <a>Install Mobile App <i className='text-[7px] bx bxs-down-arrow'/></a>
                    </Dropdown>  
                  </Button>
                </div>
            </div>
          </nav>

          <Content className='bg-white'>
            {
                children
            }
          </Content>

          <Footer className='bg-[#0E0026]'>
            <FooterLayout/>
          </Footer>
        </Layout>
    )
}
export default HomeLayout;