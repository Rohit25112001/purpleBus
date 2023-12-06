import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Input, Form, Image, Button, InputNumber } from 'antd';
const { TextArea } = Input;

const BusHiring = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        suppressHydrationWarning={true}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const tabsData = [
    { label: 'Vehicle Hire', textColor: '#fff', bgColor: '#6500EE', key: '1' },
    { label: 'Bus Parcel Seva', textColor: '#fff', bgColor: '#6500EE', key: '2' },
  ];

  const tabStyle = {
    position: 'relative',
    fontWeight: 'bold',
    padding: '25px',
    padding: '25px 60px',
    fontSize: '16px',
    margin: '0 5px',
  };

  const formData1 = [
    {
        id:1,
        label:'Departure Date',
        count:false
    },
    {
        id:2,
        label:'Arrivel Date',
        count:false
    },
    {
        id:3,
        label:'Name',
        count:false
    },
    {
        id:4,
        label:'Contact No',
        count:false
    },
    {
        id:5,
        label:'Email',
        count:false
    },
    {
        id:6,
        label:'count',
        count:true
    },
    {
        id:7,
        label:'Source City',
        count:false
    },
    {
        id:8,
        label:'Destination City',
        count:false
    },
    {
        id:9,
        dropdown:true,
        dropdownMenu:[
            {
                id:10,
                label:'AC Car'
            },
            {
                id:11,
                label:'Non AC Car'
            },
            {
                id:12,
                label:'AC Bus'
            },
            {
                id:13,
                label:'Non AC Bus'
            }
        ],
        count:false
    },
    {
        id:14,
        dropdown:true,
        dropdownMenu:[
            {
                id:15,
                label:'Pickup-Drop'
            },
            {
                id:16,
                label:'Only Pickup'
            },
            {
                id:17,
                label:'Only Drop'
            },
            {
                id:18,
                label:'Pickup-Drop with Sigthseeing'
            }
        ],
        count:false
    },
    {
        id:19,
        label:'Pickup Address',
        count:false,
        address:true
    },
    {
        id:20,
        label:'Remark',
        count:false,
        address:true
    }
  ]
  const formData2 = [
    {
        id:1,
        label:'Name'
    },
    {
        id:2,
        label:'Phone'
    },
    {
        id:3,
        label:'Email'
    },
    {
        id:4,
        label:'Date'
    },
    {
        id:5,
        dropdown:true,
    },
    {
        id:6,
        dropdown:true
    },
    {
        id:7,
        dropdown:true
    }
  ]
  
  const ViewGallery = [
    {
        id:1,
        image:'/ViewImage/celebritythum01.jpg'
    },
    {
        id:2,
        image:'/ViewImage/celebritythum02.jpg'
    },
    {
        id:3,
        image:'/ViewImage/celebritythum03.jpg'
    },
    {
        id:4,
        image:'/ViewImage/celebritythum04.jpg'
    },
    {
        id:5,
        image:'/ViewImage/celebritythum05.jpg'
    },
    {
        id:6,
        image:'/ViewImage/celebritythum06.jpg'
    }
  ]

  const FormInput = ({data}) =>{
    // console.log(data.count);
    return(
        <Form.Item className='md:col-span-6 xs:col-span-12 md:px-4'>
            {(() => {
                if (data.count) {
                    return (
                        <div className='w-full gap-1 flex justify-center'>
                        <Button onClick={handleDecrement} className="border-0 font-bold text-xl bg-[#ddd] h-auto rounded-[2px]">-</Button>
                        <InputNumber value={count} onChange={setValue} className="text-center w-full py-2 border-0 border-b" style={{ borderRadius: 0 }} />
                        <Button onClick={handleIncrement} className="border-0 font-bold text-xl bg-[#ddd] h-auto rounded-[2px]">+</Button>
                        </div>
                    );
                }
                else if(data.address){
                    return <TextArea rows={2} placeholder={data.label} className="bg-[#ECEEF0]"/>
                }
                else{
                    return <Input className='rounded-[2px] py-2' placeholder={`${data.label}`}/>
                }
            })()}
        </Form.Item>
    );
  }

  return (
    <>
        <div style={{ backgroundImage: 'url("/hirebusbg.jpg")',
        backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
        backgroundPosition: 'center center' }} className='pt-12'>
        <Box className='flex justify-center' sx={{ position: 'relative' }}>
            <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
                sx: { background: '#5A499C' },
            }}
            className='py-8'
            >
            {tabsData.map((item, index) => (
                <Tab
                key={item.key}
                label={item.label}
                sx={{
                    ...tabStyle,
                    color: value === index ? `${item.textColor} !important` : '#666666',
                    background: value === index ? `${item.bgColor} !important` : '#fff !important',
                }}
                />
            ))}
            </Tabs>
        </Box>

        <CustomTabPanel className='flex justify-center' value={value} index={0} sx={{ backgroundColor: '#ff0000' }}>
            <div className='flex justify-center flex-col'>
                <div className='flex justify-center'>
                <Image src="/hirebus01.jpg" preview={false}/>
                </div>
                <h1 className='text-center text-[20px] text-[#00EECA] py-4'>INDICA TO VOLVO</h1>
                <div className='pb-4'>
                    <p className='lg:w-[800px]
                    md:w-[500px]
                    sm:w-[100%]
                    px-2 text-center text-white text-[15px] py-1'>
                        Our fleet consists of wide range of cars like Indica, Innova to Volvo & Multi-axle Mercedez Luxury Buses. Well trained, well-mannered chauffeurs, timely delivery, high class and well maintained vehicles are few of the factors that lead us in the corporate world.
                    </p>
                </div>
                <Form className='grid grid-cols-12'>
                    {
                        formData1.map((formItem,formIndex)=><FormInput  data={formItem}/>)
                    }
                    <Form.Item className='col-span-6 px-4'>
                        <Input type="submit" value="Submit" style={{background:'#3B82F6',border:0,color:'white'}} className='rounded-[2px] py-3  h-auto'/>
                    </Form.Item>
                    <Form.Item className='col-span-6 px-4 text-center'>
                        {/* <Input className='rounded-[2px] py-2'/> */}
                        <div className='text-[17px] font-bold text-[#00EECA]'>
                            <h1>OR Call us :</h1>
                            <p>+91 9899080899</p>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </CustomTabPanel>


        <CustomTabPanel className='flex justify-center' value={value} index={1} sx={{ backgroundColor: '#ff0000' }}>
            <div className='flex justify-center flex-col'>
                <div className='flex justify-center'>
                <Image src="/hire-bus.jpg" preview={false}/>
                </div>
                <h1 className='text-center text-[18px] text-[#EEE600] py-4'>BUS PARCEL SERVICE @ RS. 99</h1>
                <div className='pb-4'>
                    {/* <p className='lg:w-[800px]
                    md:w-[500px]
                    sm:w-[100%]
                    px-2 text-center text-white text-[15px] py-4'>
                        Our fleet consists of wide range of cars like Indica, Innova to Volvo & Multi-axle Mercedez Luxury Buses. Well trained, well-mannered chauffeurs, timely delivery, high class and well maintained vehicles are few of the factors that lead us in the corporate world.
                    </p> */}
                    <ul className='text-center text-white text-[15px] py-4 w-[800px]'>
                        <li>Best Lowest Price</li>
                        <li>Next Day Delivery (Mumbai same day)</li>
                        <li>Send – Documents, Gifts, Flower & Fruit Box</li>
                        <li>Tracking your Parcel.</li>
                    </ul>
                </div>
                <Form className='grid grid-cols-12'>
                    {
                        formData2.map((formItem,formIndex)=><FormInput  data={formItem}/>)
                    }
                    <Form.Item className='col-span-6 px-4'>
                        <Input type="submit" value="Submit" style={{background:'#3B82F6',border:0,color:'white'}} className='rounded-[2px] py-3  h-auto'/>
                    </Form.Item>
                </Form>
            </div>
        </CustomTabPanel>
        </div>

        <div className='bg-[#282828] grid grid-cols-12'>

            <div className='lg:col-span-4 md:col-span-12 lg:p-9'>
                <h1 className='text-[27px] text-white font-bold'>TRAVEL WITH CELEBRITY</h1>
                <div className='text-[17px]  text-white'>
                    <p className='py-3'>
                        Apart from our Star customers, we do have some known celebrities who prefer to travel with Prasanna Purple.
                    </p>
                    <ul style={{listStyleType: 'disc'}} className='px-9'>
                        <li>Cricketer</li>
                        <li>Film Star</li>
                        <li>TV Actors</li>
                        <li>Social Leaders</li>
                    </ul>
                    <p className='py-3'>
                        Prasanna Purple is the official travel partner of Indian Cricket Team for all their matches at Nagpur. It is our privilege that we are serving BCCI for the past 20 years.
                    </p>
                    <div className='flex justify-end items-end'>
                        <Button type="text" className='rounded-[1px] p-4 px-12 bg-[#000] 
                        border-0 h-auto my-6' 
                        style={{color:'#fff',borderLeft:'2px solid gray',borderTop:'2px solid gray'}}>View Gallery</Button>
                    </div>
                </div>
            </div>

            <div className='lg:col-span-8 md:col-span-12 py-6 pb-10'>
                <div className='flex flex-wrap justify-center pt-10'>
                    {
                        ViewGallery.map((viewImage,viewIndex)=><div className='m-2 col-span-4'>
                                <Image src={viewImage.image} key={viewImage.id} preview={false} style={{width:'100% !important'}}/>
                            </div>)
                    }
                </div>
            </div>
        </div>

    </>
  );
};

export default BusHiring;
