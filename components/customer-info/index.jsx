import HomeLayout from "../shared/layout/homeLayout";
import { Form, Input, Button } from 'antd';
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
const formField = [
    {
        id:1,
        label:'Passanger'
    },
    {
        id:2,
        label:'Seat'
    },
    {
        id:3,
        label:'Age'
    },
    {
        id:4,
        label:'Gender'
    },
    {
        id:5,
        label:'Phone'
    }
]

// const data ={
//     name:'Rohit',
//     amount:2000,
//     mobile:9899099999
// }

const Customer = () => {
    const router = useRouter();
    const pay = async() =>{
        const response = await axios.post('http://localhost:8080/auth/phonepe',data)
        const redirectUrl = response.data.instrumentResponse.redirectInfo.url;
        router.push(redirectUrl)
    }
    const receivedData = router.query.data;
    useEffect(() => {
        if (!receivedData) {
            router.push('/AvailableRoute');
        }
    }, [receivedData]);
    if(!receivedData){
        return <HomeLayout>
            <h1>404 UnAuthorized Access</h1>
        </HomeLayout>
    }
    else{
        receivedData = JSON.parse(receivedData);
    }
    console.log(receivedData)
    const selectedSeat = receivedData.selectedSeat.split(',')

    const test = async (e) =>{
        e['price']=receivedData.price;
        e.totalSeat = selectedSeat.length;
        console.log(e);
        const response = await axios.post('http://localhost:8080/auth/phonepe',e)
        const redirectUrl = response.data.instrumentResponse.redirectInfo.url;
        router.push(redirectUrl)
        passangerInfo();
    }

    const passangerInfo = (e) =>{
        console.log(e);
    }
    
    const couponRedeem = () =>{}

    return(
        <HomeLayout>
            <Button onClick={pay}>Pay</Button>
           <div className="px-12 flex flex-col gap-2">

                <div className="bg-[#0B3C64] flex justify-between text-[15px] text-white px-3 py-2">
                        <h1>YOUR JOURNEY INFORMATION</h1>
                        <h1>Your Transaction ID : 1600621546</h1>
                </div>

                <div className="bg-[#F4EBFE] px-3 py-3 flex  justify-between ">
                    <span>
                        <h1>Prasanna Purple</h1>
                        <p className="flex text-xs gap-1 text-gray-500">Bus Type :<h1 className="text-[15px] text-black">2x2 AC Seater</h1></p>
                    </span>
                    <span>
                        <h1>Pune</h1>
                        <p className="flex gap-1">10-12-2023 <h1 className="text-[15px] text-[red]">6:55 AM</h1></p>
                    </span>
                    <span>
                        <h1>Trip-M-Raigad-Ropeway</h1>
                        <p className="flex gap-1 text-gray-500">10:00 PM</p>
                    </span>
                    <span>
                        <h1>Seat</h1>
                        <p className="flex gap-1 text-gray-500">26</p>
                    </span>
                    <span>
                        <h1>Fare Details</h1>
                        <p className="flex text-lg gap-1 text-gray-500">Rs. 2121</p>
                    </span>
                </div>

                <Form onFinish={test}>

                <div className="border border-zinc-500 p-2">
                    <h1 className="text-[18px]">Journey Members</h1>
                    <div className="px-4 flex-col">
                        {
                            <div className="flex justify-between py-1">
                                {
                                    formField.map((formLabelItem,formLabelIndex) =>
                                        <label key={formLabelIndex}>
                                            {formLabelItem.label}
                                        </label>
                                    )
                                }
                            </div>
                        }
                            <div className="flex flex-col">
                                {
                                    selectedSeat.map((items,index)=>
                                    <Form onFinish={passangerInfo}>
                                       <div className="flex gap-2  justify-between">
                                        
                                            {
                                                formField.map((formFieldItem,index) =>{
                                                    return <Form.Item name={formFieldItem.label}>
                                                                <div className='flex flex-col mt-2'>
                                                                    <Input type="text" className="w-[200px]" placeholder={formFieldItem.label =='Seat' ? items : formFieldItem.label}  disabled={formFieldItem.label=='Seat' ? true:false}
                                                                    />
                                                                </div>
                                                            </Form.Item>
                                                
                                                    }
                                                )
                                            }
                                       </div>
                                       </Form>
                                    )
                                }
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 border border-zinc-500 w-full px-2">
                    <div className="col-span-12 flex flex-col pb-2">
                        <span className="flex items-center gap-1 py-2">
                            <i class='bx bxs-user-circle text-[35px]'/>
                            <label className="text-[15px]">PRIMARY PASSANGER <span className="text-red-500">*</span></label>
                        </span>
                        <Form.Item name="fullname"
                        >
                            <Input name="primaryPassanger" className="w-[500px]"
                            />
                        </Form.Item>
                    </div>
                    <div className="col-span-6 flex flex-col pb-2">
                        <span className="flex items-center gap-1 py-2">
                            <i class='bx bx-envelope text-[35px]'/>
                            <label className="text-[15px]">CONTACT DETAILS <span className="text-red-500">*</span><span className="mx-1">Your Ticket Will Be Sent To These Details</span></label>
                        </span>
                        <Form.Item name="email" className="flex-col flex">
                            <Input className="w-[500px]"/>
                            {/* <br/>
                            <div className="pt-2">
                                <input type='checkbox' className="mx-1"/>GST Details
                            </div> */}
                        </Form.Item>
                    </div>
                    <div className="col-span-6 flex flex-col justify-center px-2">
                    <Form.Item name='mobile' className="pt-4">
                        <span className="flex pt-3">
                        {/* items-center justify-center gap-1 py-2 */}
                            
                                <label className="bg-white p-2 rounded bg-[#ddd] mx-1">+91</label>
                                <Input className="w-[500px]"/>
                        </span>
                        </Form.Item>
                    </div>
                </div>

                <div className="grid grid-cols-12 w-full py-2 flex gap-1">
                    <div className="col-span-6 px-2 border border-zinc-500 py-2">
                        <div className="flex items-center gap-2">
                            <i class='bx bxs-offer  text-[30px]'></i><span className="py-2 bg-[#E4E4FD] px-2 w-full"><h1 className="text-[15px]">GET DISCOUNT</h1></span>
                        </div>
                        <p className="text-red-500 pl-8 py-2 text-xs">Please Note: You can either use the Coupon Code Or Wallet to avail Discount/Cashback.</p>
                        <div className="px-8">
                            <Form onFinish={couponRedeem}>
                                <label>Coupon Code Discount</label>
                                <Form.Item name='coupon' className="flex gap-6">
                                    <input type='checkbox' /> <Input/> <Button htmlType="couponfun" className='bg-orange-500 h-auto px-9'>Redeem</Button>
                                </Form.Item>
                                <label>Coupon Code Discount</label>
                                <Form.Item name='wallet' className="flex gap-6">
                                    <input type='checkbox' /><Input/> <Button htmlType="walletfun" className='bg-orange-500 h-auto px-4'>Generate OTP</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                    <div className="col-span-6 border border-zinc-500">
                        <div className="flex items-center gap-2 px-2">
                                <i class='bx bxs-offer  text-[30px]'></i><span className="py-4 px-2  w-full"><h1 className="text-[15px]">FARE SUMMARY</h1></span>
                        </div>
                        <div className="bg-[#60489D] px-4 py-2">
                            <div className="border-b border-zinc-300 ">
                                <div className="flex justify-between text-white">
                                    <span>Seat</span> <span>INR  2020</span>
                                </div>
                                <div className="flex justify-between text-white">
                                    <span>Seat</span> <span>INR  2020</span>
                                </div>
                                <div className="flex justify-between text-white">
                                    <span>Seat</span> <span>INR  2020</span>
                                </div>
                            </div>

                            <div>
                                <div className="py-2">
                                    <div className="flex justify-between text-white text-[16px]">
                                        <span>TOTAL PAYABLE:</span> <span>INR  2121</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-white text-xs"
                                 rules={[
                                    {
                                        required: true,
                                        message: 'please agree t&c',
                                    },
                                    ]}>
                                    <input type='checkbox' 
                                    />I Agree To All Terms & Conditions.
                                </div>
                                <div className="flex gap-2 py-3">
                                    <Button className="bg-red-500 text-white border-0 rounded-0 w-[63%] h-auto" htmlType="submit">Make Payment</Button>
                                    <Button className="bg-black text-white border-white rounded-0 w-[30%]">Cancel Payment</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Form>
           </div>
        </HomeLayout>
    );
}
export default Customer;