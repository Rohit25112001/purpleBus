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
    Image,
    Select,
    TimePicker
 } from "antd";
import Admin from "@/components/shared/admin";
import { useState } from "react";
import axios from "axios";
// import AWS from "@/modules/aws.modules";

// const s3 = new AWS.S3();

const { TextArea } = Input;

const addProduct = ()=>{
    const [messageApi, contextHolder] = message.useMessage();
    const [open, setOpen] = useState(false);
    const [updateData,setupdateData] = useState(null);
    const [uploading,setUploading] = useState({
        state:null,
        progress:0
    });
    const [form] = Form.useForm();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const [isLoading,setisLoading]=useState(false);
    const [productObejct,setproductObject] = useState([]); // all product stored here
    const addProductForm = async(e)=>{
        const formData=e;
        // formData['totalSeat']=10;
        console.log(formData);
        setisLoading(!isLoading);
        try{
            if(updateData!==null){
                const {data:modifiedData} = await axios.put(`http://localhost:8080/bus/${updateData._id}`,formData);
                messageApi.success('Product updated');
                formData['_id']=productObejct[updateData.index]._id;
                productObejct[updateData.index]=formData
                onClose();
                setupdateData(null);
                console.log(modifiedData);
            }

            else{
                const {data} = await axios.post('http://localhost:8080/bus',formData);
                messageApi.success('Bus successfully added');
                if(data){
                    return setproductObject((oldData)=>{
                        return[
                            ...oldData,
                            data
                        ]
                    });
                }
            }
        }
        catch(err){
            messageApi.error("something went wrong try again !");
        }
        finally{
            setisLoading(false);
            form.resetFields();
        }
       
    }

    //add product Button
    const AddproductButton = ()=>{
        setupdateData(null);
        form.resetFields();
        showDrawer();
    }

    //image upload
    const onProductImageUpload = (id, index) =>{
        const input = document.createElement('INPUT');
        input.type = 'file';
        input.click();
        input.onchange = async () =>{
            setUploading({
                ...uploading,
                state:index
            });
            const file =input.files[0];
            input.remove();
            const uploader = s3.upload({
                Bucket : process.env.NEXT_PUBLIC_S3_BUCKET,
                Key : file.name,
                Body :file,
                ACL : 'public-read'
            });
            
            uploader.on('httpUploadProgress',({total,loaded})=>{
               const percentage =  Math.floor((loaded*100)/total); 
               setUploading({
                ...uploading,
                state:index,
                progress:percentage
               });
            })

            try{
                const {key} = await uploader.promise();
                await axios.put(`/api/product/${id}`,{image: key});
                setUploading({
                    ...uploading,
                    state:null,
                    progress:0
                   });
            }
            catch(err){
                console.log(err)
            }
            
        }
    }


    //product card component
    const Cards = ({data})=>{
        {console.log(data)}
        return(
            <div className="px-2 flex items-center justify-between bg-[#F4EBFE] hover:bg-yellow-100 col-span-12
                                transition duration-300 ease-in-out border-t border-zinc-600">
                                <span className="col-span-2 p-2">
                                    <h1>{data.busName}</h1>
                                    <p className="text-zinc-500 text-xs py-1">27 seater 2x2 Ac</p>
                                </span>
                                <span className="col-span-2 p-2">
                                    {data.destinationCity}
                                    <p className="text-zinc-500 text-xs font-bold">Boarding</p>
                                </span>
                                <span className="col-span-2 p-2">
                                    {data.originCity}
                                    <p className="text-zinc-500 text-xs font-bold">Dropping</p>
                                </span>
                                <span className="col-span-2 p-2">
                                    {data.totalSeat}
                                    <p className="text-zinc-500">Left</p>
                                </span>
                                <span className="col-span-2 p-2 flex gap-1">
                                    <p className="font-bold">Seating Rs</p>{data.perSeatPrice}
                                </span>
                                <span className="flex gap-2 text-[18px]">
                                    <i class='bx bx-edit-alt text-blue-500' onClick={()=>updateProduct(data)}/>
                                    <i class='bx bx-trash-alt text-red-500' onClick={()=>deleteData({id:data._id,index:data.index})}/>
                                </span>
                            </div>
        )
    }

    const options=[
        {
            value: 'Mumbai',
            label: 'Mumbai',
        },
        {
            value: 'Delhi',
            label: 'Delhi',
        },
        {
            value: 'Tamil Nadu',
            label: 'Tamil Nadu',
        },
        {
            value: 'Goa',
            label: 'Goa',
        },
        {
            value: 'Karnatka',
            label: 'Karnatka',
        },
        {
            value: 'Chennai',
            label: 'Chennai',
        },
        {
            value: 'Agra',
            label: 'Agra',
        }
    ]


    // const onChange = (time, timeString) => {
    //     form.setFieldsValue({ 'timeOfDeparture': timeString });
    //     console.log(timeString);
    //   };

      const handleChange = (e,option) => {
        form.setFieldsValue({ [option]: e });
        // console.log(`selected ${e}`,option);
      };

    //update
    const updateProduct =(data) =>{
        const updateInfo={
            _id:data._id,
            index:data.index
        }
        setupdateData(updateInfo);
        form.setFieldsValue(data);
        showDrawer();
    }

    //deleteData
    const deleteData = async (productDetail)=>{
        console.log(productDetail)
        try{
            const {data:deletedData} = await axios.delete(`http://localhost:8080/bus/${productDetail.id}`);
            if(deleteData){
                const updatedProductObject = productObejct.filter((item, index) => index !== productDetail.index);
                setproductObject(updatedProductObject);
                messageApi.success('Bus deleted successfully !');
            }
        }
        catch(err){
            messageApi.warning('something went wrong try again !');
        }
    };

    //search Data
    const searchData =() =>{
        alert();
    };

    const [selectedValue, setSelectedValue] = useState();
    const menu = (
        <Menu onClick={(e)=>console.log(e.key)}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
      );
    return(
        <Admin>
            {contextHolder}
            <Drawer title="Add Product" placement="right" closable={true} onClose={onClose} open={open}>
                <Form form={form} onFinish={addProductForm}>
                    <Form.Item name="busName">
                        <Input placeholder="Bus Name" className="py-2" />
                    </Form.Item>
                    <div className='flex gap-4'>
                        <Form.Item name="originCity" className="w-full">
                            <Select
                                name='origin-city'
                                className="w-full h-[40px]"
                                defaultValue="lucy"
                                onChange={(e)=>handleChange(e,'origin-city')}
                                options={options}
                            />
                            
                        </Form.Item>
                        <Form.Item name="destinationCity" className="w-full">
                            <Select
                                className="w-full h-[40px]"
                                defaultValue="lucy"
                                onChange={(e)=>handleChange(e,'destination-city')}
                                options={options}
                            />
                        </Form.Item>
                    </div>

                    <div className='flex gap-4'>
                        <Form.Item name="totalSeat">
                            <Input type='Number' placeholder="Total Sheat" className="py-2" />
                        </Form.Item>
                        <Form.Item name="perSeatPrice">
                            <Input type='number' placeholder="Per Seat Price" className="py-2" />
                        </Form.Item>
                    </div>
                    <div className='flex gap-5'>
                            <Form.Item wrap name='timeofBoarding'>
                                <TimePicker className="py-2" use12Hours format="h:mm:ss A" />
                            </Form.Item>

                            <Form.Item wrap name='timeofDropping'>
                                <TimePicker className="py-2" use12Hours format="h:mm:ss A" />
                            </Form.Item>
                    </div>
                    <div>
                        <Form.Item name="dateofDeparture">
                            <Input type='date' placeholder="Date Of Departure" className="py-2" />
                        </Form.Item>
                    </div>
                    <Button
                    className={`w-full font-bold h-full py-2 bg-blue-500 cursor-pointer ${updateData!=null ? 'bg-pink-500':'bg-blue-500'} text-white`} 
                    htmlType='submit' loading={isLoading}>
                        {updateData!=null ? 'Update Bus' : 'Add Bus'}
                    </Button>
                    
                </Form>
            </Drawer>

            {/*header where search and add product button define*/}
            <div className="flex px-4 justify-between items-center border-b border-zinc-400">

                <button onClick={AddproductButton} className="bg-blue-500 my-2 text-white p-2 rounded flex items-center gap-1 font-bold">
                    <i class='bx bx-plus text-xl'/> 
                    Add Product
                </button>

                <div>
                    <Form className="flex items-center gap-2" onFinish={searchData}>
                        
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button>
                                {selectedValue || 'Select an option'}
                            </Button>
                        </Dropdown>
                        <Input type="text" placeholder="Search product" className="py-2"/>
                        <button className="py-2 px-3 text-white bg-blue-500 rounded font-semibold">Search</button>
                    </Form>
                </div>
            </div>

            <div className="p-2 grid grid-cols-4 gap-6 items-center">
                {/*/check is data added or not*/}
                {!productObejct.length && <Empty/> }

                {/*/display data if added*/}
                {productObejct && productObejct
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((items, index) => {
                        items['index'] = index;
                            return <Cards data={items} key={index} />;
                        })}

            </div>
        </Admin>
    );
}
export default addProduct;