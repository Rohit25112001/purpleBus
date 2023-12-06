import { 
    Drawer,
    Form,
    Input,
    Button,
    message,
    Empty,
    Row,
    Col,
    Card,
    Menu,
    Dropdown,
    Image
 } from "antd";
import Admin from "@/components/shared/admin";
import { useState } from "react";
import axios from "axios";

const { TextArea } = Input;

const addProduct = ()=>{
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
            <Drawer title="Add Product" placement="right" closable={true} onClose={onClose} open={open}>
                
                <Form form={form}>
                    <Form.Item name="productName">
                        <Input placeholder="Product Name" className="py-2" />
                    </Form.Item>
                    <Form.Item name="price">
                        <Input placeholder="Price" className="py-2"/>
                    </Form.Item>
                    <Form.Item name="productDesc">
                        <TextArea rows={4} placeholder="Product Description" className="py-2" />
                    </Form.Item>
                    <div className='flex gap-4'>
                        <Form.Item name="category">
                            <Input type='text' placeholder="Category" className="py-2" />
                        </Form.Item>
                        <Form.Item name="quantity">
                            <Input type='number' placeholder="Quantity" className="py-2" />
                        </Form.Item>
                    </div>
                    <Button
                    className={`w-full font-bold h-full py-2 bg-blue-500' cursor-pointer text-white`} 
                    htmlType='submit' >
                        Add Product
                    </Button>
                    
                </Form>
            </Drawer>

            <div>
                    {/*header where search and add product button define*/}
                    <div className="bg-white flex px-4 justify-between items-center border-b border-zinc-400">

                        <button onClick={AddproductButton} className="bg-blue-500 my-2 text-white p-2 rounded flex items-center gap-1 font-bold">
                            <i class='bx bx-plus text-xl'/> 
                            Add Product
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
                        <h1>hello</h1>
                    </div>
            </div>
        </Admin>
    );
}
export default addProduct;