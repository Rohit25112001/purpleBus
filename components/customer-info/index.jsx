import HomeLayout from "../shared/layout/homeLayout";
import { Form, Input } from 'antd';

const formField = [
    {
        id:1,
        label:'Passanger Name'
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
        label:'Phone Number'
    }
]

const Customer = () => {
    return(
        <HomeLayout>
           <div className="px-12 flex flex-col gap-2">

                <div className="bg-[#0B3C64] flex justify-between text-[15px] text-white px-3 py-2">
                        <h1>YOUR JOURNEY INFORMATION</h1>
                        <h1>Your Transaction ID : 1600621546</h1>
                </div>

                <div className="bg-[#F4EBFE] px-3 py-3 flex  justify-between ">
                    <div>
                        <h1>Prasanna Purple</h1>
                        <p className="flex text-xs gap-1 text-gray-500">Bus Type :<h1 className="text-[15px] text-black">2x2 AC Seater</h1></p>
                    </div>
                    <div>
                        <h1>Pune</h1>
                        <p className="flex gap-1">10-12-2023 <h1 className="text-[15px] text-[red]">6:55 AM</h1></p>
                    </div>
                    <div>
                        <h1>Trip-M-Raigad-Ropeway</h1>
                        <p className="flex gap-1 text-gray-500">10:00 PM</p>
                    </div>
                    <div>
                        <h1>Seat</h1>
                        <p className="flex gap-1 text-gray-500">26</p>
                    </div>
                    <div>
                        <h1>Fare Details</h1>
                        <p className="flex text-lg gap-1 text-gray-500">Rs. 2121</p>
                    </div>
                </div>
                
                <div className="border border-zinc-500 p-2">
                    <h1 className="text-[18px]">Journey Members</h1>
                    <div>
                        <Form className="flex justify-between">
                            {
                                formField.map((formFieldItem,formFieldIndex)=>
                                <Form.Item>
                                    <div className='flex flex-col mt-2'>
                                        <label className="flex">{formFieldItem.label}<p className="text-[red]">*</p></label>
                                        <Input type="text" className="w-[200px]"/>
                                    </div>
                                </Form.Item>
                                )
                            }
                        </Form>
                    </div>
                </div>

           </div>
        </HomeLayout>
    );
}
export default Customer;