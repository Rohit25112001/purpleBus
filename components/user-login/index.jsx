import { Button, Form, Input, InputNumber, Image } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const Login = ({children})=>{
    const [LoginFrom]=Form.useForm();
    const LoginUser = async(values) => {
        try{
            const encryptedData = jwt.sign(
                values,
                process.env.NEXT_PUBLIC_SECRET_KEY_DATA,
                {expiresIn:'15m'}
                )
            
            const {data} = await axios.post(`http://localhost:8080/auth/user`,{token:encryptedData});
            const allCookies = Cookies.get();
            console.log('All Cookies:', allCookies);
        }
        catch(err){
            console.log(err );
        }
        // try{
        //     await axios.post('/api/auth/login',values);
        //     router.push('/admin')
        // }
        // catch(err){}
        // LoginFrom.resetFields();
    }
    return(
        <div className='bg-gray-200 h-screen flex justify-center items-center relative'>
            <div className='fixed left-0 top-10'>
                <Image src="/left.png" width={100} height={180} preview={false} alt='left-semicircle'/>
            </div>
            <div className='bg-slate-50 w-[500px] h-[400px] rounded'>
                
            <Form className="px-12 py-4 flex flex-col gap-1" autoComplete="off" onFinish={LoginUser} form={LoginFrom}>
                    <div className="py-4 flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-center">Signup</h1>
                        <p className="text-center">SIGN INTO YOUR ACCOUNT</p>
                    </div>
                    <Form.Item name='email' rules={[{required: true,message: 'Please input your Email !'}]}>
                        <Input type="Email" className="
                            border-0 border-b-2 py-1 rounded-none border-zinc-200 
                            focus:outline-none bg-transparent" 
                            placeholder={"Email"} 
                        />
                    </Form.Item> 
                    <Form.Item name='password' rules={[{required: true,message: 'Please input your Password !'}]}>
                        <Input type="text" className="
                            border-0 border-b-2 py-1 rounded-none border-zinc-200 
                            focus:outline-none bg-transparent" 
                            placeholder={"Password"} 
                        />
                    </Form.Item>
                    <div className="flex flex-col">
                        <div className="flex justify-between pb-6"> 
                            <div className="flex items-center gap-2"><Input type="checkbox" className="h-[20px] w-[20px]"/>Remeber me</div>
                                <Link href="#">Forgot Password</Link>
                            </div>
                            <button className="text-lg h-auto bg-[#0091E0] text-white py-2">Login</button>
                        </div>
                </Form>
                
            </div>
            <div className='fixed right-0 bottom-10'>
                <Image src="/right.png" width={100} height={180} preview={false} alt='right-semicircle'/>
            </div>
        </div>
    );
};
export default Login;