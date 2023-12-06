import { 
    Layout,
    Input, 
    Button
} from 'antd';
import { useState } from 'react';
import Sidebar from './sidebar';
import { useRouter } from 'next/router';

const { TextArea } = Input;
const { Header, Sider, Content } = Layout;

const Admin=({children})=>{
    const [nav,setNav] = useState(240);
    const router = useRouter();
    
    return(
        <>
            <Layout className='h-screen bg-[#EEF1F6]' style={{overflow:"hidden"}}>
                <Header className='bg-zinc-50 text-black p-0 px-4 shadow-md mb-3'>
                    {/* <h1>jbver</h1> */}
                    <div className='flex items-center justify-between'>
                        
                        <i className='bx bx-menu-alt-left cursor-pointer' 
                        onClick={() => { setNav(nav ? 0 : 220) }} style={{ fontSize: "25px" }}></i>
                        <h1 className='text-[16px] cursor-pointer'>Logged Client</h1>
                    </div>
                </Header>
                <Layout hasSider className='bg-[#EEF1F6]'>
                    <Sider className='min-h-screen mr-3'  width={nav} style={{background:"white"}}>
                        <Sidebar/>
                    </Sider>
                    <Content className='bg-[#EEF1F6] overflow-y-scroll' >
                        <Header className='bg-white text-black p-0 px-4 shadow-md mb-3 flex items-center'>
                            <button  className=" px-2 bg-blue-500 h-[40px] text-white rounded flex items-center gap-1 font-bold">
                                <i class='bx bx-plus text-xl'/> 
                                Add Product
                            </button>
                            {/* <h1>jbver</h1> */}
                            {/* <div className='flex items-center justify-between'>
                                
                                <i className='bx bx-menu-alt-left cursor-pointer' 
                                onClick={() => { setNav(nav ? 0 : 220) }} style={{ fontSize: "25px" }}></i>
                                <h1 className='text-[16px] cursor-pointer'>Logged Client</h1>
                            </div> */}
                        </Header>
                        <Content className='bg-[#FFFFFF]'>
                            {
                                children
                            }
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}
export default Admin;