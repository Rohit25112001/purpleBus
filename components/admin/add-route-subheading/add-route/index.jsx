import { 
    Drawer,
    Form,
    Input,
    Button,
    message,
    Menu,
    Dropdown,
    Image,
    TimePicker,
    Select
 } from "antd";
import Admin from "@/components/shared/admin";
import { useState } from "react";
import axios from "axios";

const { TextArea } = Input;

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];

const addRoute = ()=>{
    const [messageApi, contextHolder] = message.useMessage();
    const [open, setOpen] = useState(false);
    const [updateData,setupdateData] = useState(null);
    const [form] = Form.useForm();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    
    //add product Button
    const AddproductButton = ()=>{
        setupdateData(null);
        form.resetFields();
        showDrawer();
    }

    const AddBusForm = (e) => {
       console.log(e);
    }
    const onChange = (time, timeString) => {
        form.setFieldsValue({ 'time-of-departure': timeString });
      };

      const handleChange = (e,option) => {
        form.setFieldsValue({ [option]: e });
        // console.log(`selected ${e}`,option);
      };

      const options=[
        {
        value: 'jack',
        label: 'Jack',
        },
        {
        value: 'lucy',
        label: 'Lucy',
        },
        {
        value: 'Yiminghe',
        label: 'yiminghe',
        },
        {
        value: 'disabled',
        label: 'Disabled',
        disabled: true,
        },
    ]

    //product card component
    const Cards = ({data})=>{
        {console.log(data)}
        return(
            <h1>Hello Card</h1>
        )
    }
    
    return(
        <Admin>
            {contextHolder}
            <Drawer title="Add Product" placement="right" closable={true} onClose={onClose} open={true}>
                
                <Form form={form} onFinish={AddBusForm}>
                    <Form.Item name="placeName">
                        <Input placeholder="Place Name" className="py-2" />
                    </Form.Item>
                    <div className='flex gap-4'>
                        <Form.Item name="origin" className="w-full">
                            <Select
                                name='origin-city'
                                className="w-full h-[40px]"
                                defaultValue="lucy"
                                onChange={(e)=>handleChange(e,'origin-city')}
                                options={options}
                            />
                            
                        </Form.Item>
                        <Form.Item name="destination" className="w-full">
                            <Select
                                className="w-full h-[40px]"
                                defaultValue="lucy"
                                onChange={(e)=>handleChange(e,'destination-city')}
                                options={options}
                            />
                        </Form.Item>
                    </div>

                    <div className='flex gap-4'>
                        <Form.Item name="total-seat">
                            <Input type='Number' placeholder="Total Sheat" className="py-2" />
                        </Form.Item>
                        <Form.Item name="per-seat-price">
                            <Input type='number' placeholder="Per Seat Price" className="py-2" />
                        </Form.Item>
                    </div>
                    <div className='flex gap-4'>
                        <Form.Item name="time-of-departure">
                        <Form.Item wrap>
                            <TimePicker className="py-2" use12Hours format="h:mm:ss A" onChange={onChange} />
                        </Form.Item>
                        </Form.Item>
                        <Form.Item name="date-of-departure">
                            <Input type='date' placeholder="Date Of Departure" className="py-2" />
                        </Form.Item>
                    </div>
                    <Button
                    className={`w-full font-bold h-full py-2 bg-blue-500 cursor-pointer text-white`} 
                    htmlType='submit' >
                        Add Bus
                    </Button>
                    
                </Form>
            </Drawer>

            <div>
                    {/*header where search and add product button define*/}
                    <div className="bg-white flex px-4 justify-between items-center border-b border-zinc-400">

                        <button onClick={AddproductButton} className="bg-blue-500 my-2 text-white p-2 rounded flex items-center gap-1 font-bold">
                            <i class='bx bx-plus text-xl'/> 
                            Add Bus
                        </button>

                        <div>
                            <Form className="flex items-center gap-2" >
                                
                                <Dropdown trigger={['click']}>
                                    <Button>
                                        'Select an option'
                                    </Button>
                                </Dropdown>
                                <Input type="text" placeholder="Search product" className="py-2"/>
                                <button className="py-2 px-3 text-white bg-blue-500 rounded font-semibold">Search</button>
                            </Form>
                        </div>
                    </div>

                    {/*/check is data added or not*/}
                    <div className="bg-white mt-2 h-[420px] p-2 overflow-y-scroll">
                        <h1>lorem1000</h1>
                    </div>
            </div>
        </Admin>
    );
}
export default addRoute;