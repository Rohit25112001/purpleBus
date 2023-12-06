import Admin from "@/components/shared/admin";
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
    Skeleton,
    Pagination,
    Progress,
    Image
 } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import AWS from '@/modules/aws.modules';

const s3 = new AWS.S3();
const fetcher = async(url)=>{
    try{
        const {data} = await axios.get(url);
        return data;
    }
    catch(err){
        return err;
    }
}

const { TextArea } = Input;

const ShowProduct = ()=>{
    const [uploading,setUploading] = useState({
        state:null,
        progress:0
    });
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    //open Drawer
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //product delete 
    const deleteData = async(id)=>{
        try{
            const del  = await axios.delete(`/api/product/${id}`);
            mutate('/api/product');
        }
        catch(err){
            messageApi.error('Deletion failed !');
        }
    }


    //update value
    const [id,setId]=useState(null);
    const updateProduct = async(updatedData) =>{
        try{
            const {data} = await axios.put(`/api/product/${id}`,updatedData);
            mutate('/api/product/')
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }
    
    //set value in form of product
    const setvalueinForm =(Productdata) =>{
        form.setFieldsValue(Productdata); 
        setId(Productdata._id)
        showDrawer();
    }

    const [currentPage,setcurrentPage] = useState(1);
    const [pageSize,setpageSize] = useState(12);

     //product  fetch amd sort
    const {data:products,isLoading,error:productsError}=useSWR(`/api/product?page=${currentPage}&limit=${pageSize}`,fetcher,{refreshInterval:3000});

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
                console.log(id);
                const {key} = await uploader.promise();
                await axios.put(`/api/product/${id}`,{image: key});
                console.log(key)
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
        {contextHolder}
        return(
            <Card className=" p-0 m-0" key={data.index} cover={
                (uploading.state === data.index) ? <Progress type="circle" percent={uploading.progress} size={80} />:
                <Image width={220} height={220} preview={false} alt='example' src={
                    data.image ? process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+data.image : '/image/add-photo.png'
                } onClick={()=>onProductImageUpload(data._id,data.index)}
            />}>
                <Row>
                
                    {/* <Col span={24} className="flex justify-center bg-red-500">
                        <img src='/image/add-photo.png' width='150px' height='150px'/>
                    </Col> */}
                    <Col span={24} className="p-0">
                        <h1 className="text-xl font-bold">{data.productName}</h1>
                        <p className="py-1 text-justify">{data.productDesc}</p>
                    </Col>
                    <Col span={24}>
                        <h1 className="font-bold text-xs text-zinc-400 py-1">Category : <span className="text-black">{data.category}</span></h1>
                        <div className="flex justify-between text-xs">
                            <p className="font-bold text-zinc-400">Price : <span className="text-black">${data.price}</span></p>
                            <p className="font-bold text-zinc-400">Quantity : <span className="text-black">{data.quantity}</span></p>
                        </div>
                    </Col>
    
                    <Col span={24} className="text-white flex gap-4 justify-end mt-2 border-t border-zinc-400 pt-3">
                            <i className='bx bx-edit-alt bg-blue-500 text-[18px] px-4 py-1 rounded cursor-pointer' onClick={()=>setvalueinForm(data)}/>
                            <i class='bx bx-trash-alt bg-red-500 text-[18px] px-4 py-1 rounded cursor-pointer' onClick={()=>deleteData(data._id)}/>
                    </Col>
                </Row>
            </Card>
        )
    }

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      };

    const onPagination = (value,limit) =>{
        setcurrentPage(value);
        setpageSize(limit);
    }

    return (
        <Admin>
             <Drawer title="Update Product" placement="right" closable={true} onClose={onClose} open={open}>
                
                <Form form={form} onFinish={updateProduct}>
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
                    className={`w-full font-bold h-full py-2 cursor-pointer text-white bg-pink-500`} 
                    htmlType='submit' >
                        Update Product
                    </Button>
                    
                </Form>
            </Drawer>

            {/*header where search and add product button define*/}
            
            <div className="flex px-4 py-2 justify-end items-center border-b border-zinc-400">

                {/* <button className="bg-blue-500 my-2 text-white p-2 rounded flex items-center gap-1 font-bold">
                    <i class='bx bx-plus text-xl'/> 
                    Add Product
                </button> */}

                <div>
                    <Form className="flex items-center gap-2">
                        <Input type="text" placeholder="Search product" className="py-2"/>
                        <button className="py-2 px-3 text-white bg-blue-500 rounded font-semibold">Search</button>
                    </Form>
                </div>
            </div>

            <div className="p-2 grid grid-cols-4 gap-6 justify-center">
                {/*/check is data added or not*/}
                 { isLoading && <Skeleton active/> }

                 {products && !products.total && <Empty/>}
                {/*/display data if added*/}
                {products && products.product.map((items,index)=>{
                    items['index']=index;
                    
                    return <Cards data={items} key={index}/>
                })}
                <div className="flex justify-center w-full">
                    {
                        products && products.total  && <Pagination pageSizeOptions={[
                            (12*1),
                            (12*2),
                            (12*3),
                            (12*4),
                            (12*5),
                            (12*6),
                            (12*7),
                            (12*8),
                        ]} pageSize={pageSize} total={products.total} itemRender={itemRender} onChange={onPagination} current={currentPage} />
                    }
                </div>
            </div>
        </Admin>
    );
}
export default ShowProduct;