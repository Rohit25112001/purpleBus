import React, { useState, useEffect } from 'react';
// import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Tabs } from 'antd';
import BusHiring from './bus-hiring';
import CarouselLayout from '@/components/shared/carousel';
const ShortTrip = () => {
  const [value, setValue] = useState(0);
  const [activechildLevelTab, setActivechildLevelTab] = useState(2);
  // const formData = [
  //   {
  //     label:'Vehicle Hire',
  //     children:<div>Hello</div>,
  //     bgColor:'#6500EE',
  //     textColor:'#fff',
  //     form:true,
  //     key:1
  //   },
  //   {
  //     label:'Bus Parcel Seva',
  //     children:<div>Hello</div>,
  //     bgColor:'#6500EE',
  //     textColor:'#fff',
  //     form:true,
  //     key:2
  //   }
  // ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChange = (key) => {
    setActivechildLevelTab(key);
  };

  const TabMenuList = [
    {
      id:1,
      label:'PUNE',
      children:[
        {
          id:2,
          label:'pilgrim',
          children:[
            {
              'id':1,
              'image':'/purpleTrip/trip-pune/pilgrim/11-Maruti.jpg',
              'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
              'price':'4500',
              'desc':'Ashtavinayak Darshan - Daily',
          },
          {
              'id':2,
              'image':'/purpleTrip/trip-pune/pilgrim/Ashtavinayak.jpg',
              'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
              'price':'2800',
              'desc':'Ashtavinayak Darshan - Daily',
          },
          {
              'id':1,
              'image':'/purpleTrip/trip-pune/pilgrim/Bhimshankar-Temple.jpg',
              'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
              'price':'2800',
              'desc':'Ashtavinayak Darshan - Daily',
          },
          {
              'id':1,
              'image':'/purpleTrip/trip-pune/pilgrim/Kolhapur.jpg',
              'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
              'price':'2800',
              'desc':'Ashtavinayak Darshan - Daily',
          },
          {
              'id':1,
              'image':'/purpleTrip/trip-pune/pilgrim/Mahurgadh.jpg',
              'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
              'price':'2800',
              'desc':'Ashtavinayak Darshan - Daily',
          },
          {
              'id':1,
              'image':'/purpleTrip/trip-pune/pilgrim/11-Maruti.jpg',
              'link':'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
              'price':'2800',
              'desc':'Ashtavinayak Darshan - Daily',
          }
          ]
        },
        {
          id:3,
          label:'Hello',
          children:[]
        },
        {
          id:4,
          label:'Testing',
          children:[]
        }
        
      ]
    },
    {
      id:2,
      label:'Testt',
    }
  ]

  const TabsMenu = ({data}) => {
    return(
      <Tabs
      className='pb-4'
        type="card"
        items={data.map((list,i)=>{
          return{
            key:list.id,
            label:list.label,
            children:(
              <div className='px-8'>
                  <Tabs
                  onChange={onChange}
                  type="card"
                  activeKey={activechildLevelTab}
                  items={list.children && list.children.map((subTab,i)=>{
                    return{
                      key:subTab.id,
                      label:subTab.label,
                      children:(
                        <CarouselLayout data={subTab.children} extraInfo='homeBook'/>
                      )
                    }
                  })}
                  />
              </div>
            )
          }
        })}
      />
    )
  }

  return (
    <>
      <div className='py-1 px-8'>
        <h1 className='py-4 text-[30px] font-bold text-[#555555]'>SHORT TRIPS</h1>
        <TabsMenu data={TabMenuList}/>
        <BusHiring/>
      </div>
    </>
  );
};

export default ShortTrip;
