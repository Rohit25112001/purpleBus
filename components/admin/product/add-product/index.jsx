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
    Select,
    Divider,
    Space
 } from "antd";
import Admin from "@/components/shared/admin";
import { useState, useRef, useEffect } from "react";
import { PlusOutlined } from '@ant-design/icons';
import axios from "axios";

const { TextArea } = Input;

const addProduct = ()=>{
    const [messageApi, contextHolder] = message.useMessage();
    const [open, setOpen] = useState(false);
    // const [updateData,setupdateData] = useState(null);
    const [nameField,setNameField] = useState();
    const [Route,setRoute] = useState([
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
            }
    ]);
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

    //product card component
    // const Cards = ({data})=>{
    //     {console.log(data)}
    //     return(
    //         <h1>Hello Card</h1>
    //     )
    // }

    /////FNWEKNFJ
    // const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    useEffect(()=>{console.log(Route)},[nameField])

    const onNameChange = (e) => {
        setName(e.target.value);
        console.log('Name',name)
  };

  const addItem = (e) => {
    setRoute([
        ...Route,
        {
            label:name,
            value:name
        }
    ])
    console.log(e.target);
  };
    
    return(
        <Admin>
            {contextHolder}
            <Drawer title="Add Product" placement="right" closable={true} onClose={onClose} open={true}>
                
                <Form form={form} onFinish={AddBusForm}>
                    <Form.Item name="busName">
                        <Input placeholder="Bus Name" className="py-2" />
                    </Form.Item>
                    <div className='flex gap-4'>
                        <Form.Item name="originCity" className="w-full">
                            
                             <Select
                                name='origin-city'
                                className='w-full'
                                placeholder="custom dropdown render"
                                dropdownRender={(menu) => (
                                    <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Input
                                        placeholder="Please enter item"
                                        ref={inputRef}
                                        value={name}
                                        onChange={onNameChange}
                                        onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                            Add item
                                        </Button>
                                    </Space>
                                    </>
                                )}
                                onChange={handleChange}
                                options={Route}
                                />
                            
                        </Form.Item>
                        <Form.Item name="destinationCity" className="w-full">
                            <Select
                                className='w-full'
                                placeholder="custom dropdown render"
                                dropdownRender={(menu) => (
                                    <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Input
                                        placeholder="Please enter item"
                                        ref={inputRef}
                                        value={name}
                                        onChange={onNameChange}
                                        onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                            Add item
                                        </Button>
                                    </Space>
                                    </>
                                )}
                                onChange={handleChange}
                                options={Route}
                                />
                        </Form.Item>
                    </div>
                    
                    {/* <div className='flex gap-4'>
                        <Form.Item name="category">
                            <Input type='text' placeholder="Category" className="py-2" />
                        </Form.Item>
                        <Form.Item name="quantity">
                            <Input type='number' placeholder="Quantity" className="py-2" />
                        </Form.Item>
                    </div> */}
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
export default addProduct;