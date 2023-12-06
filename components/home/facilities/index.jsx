import { Tabs, Image } from 'antd';

const { TabPane } = Tabs;

const sleeping = [
    {
        id:1,
        image:"/facilities/sleepingtab/readinglight.jpg",
        heading:'Reading Lights'
    },
    {
        id:2,
        image:"/facilities/sleepingtab/bedsheet.jpg",
        heading:'Bedsheet Blanket'
    },
    {
        id:3,
        image:"/facilities/sleepingtab/sofa.jpg",
        heading:'Sofa cum bed'
    },
    {
        id:4,
        image:"/facilities/sleepingtab/privacy.jpg",
        heading:'privecy',
    },
    {
        id:5,
        image:"/facilities/sleepingtab/callbell.jpg",
        heading:'Attendant call bell'
    },
    {
        id:6,
        image:"/facilities/sleepingtab/clock.jpg",
        heading:'Timely Departure'
    },
    {
        id:7,
        image:"/facilities/sleepingtab/person.jpg",
        heading:'Personal Entertaiment'
    },
    {
        id:8,
        image:"/facilities/sleepingtab/clean.jpg",
        heading:'Cleanliness'
    }
]
const seating = [
    {
        id:2,
        image:"/facilities/seating/clock.jpg",
        heading:'Timely Departure'
    },
    {
        id:1,
        image:"/facilities/seating/clean.jpg",
        heading:'Cleanliness'
    },
    {
        id:8,
        image:"/facilities/seating/anouncement.jpg",
        heading:'Auto Announcement'
    },
    {
        id:3,
        image:"/facilities/seating/gps.jpg",
        heading:'GPS Tracking'
    },
    {
        id:5,
        image:"/facilities/seating/poilet.jpg",
        heading:'Experienced Pilot'
    },
    {
        id:4,
        image:"/facilities/seating/insurance.jpg",
        heading:'Passenger Insurance',
    },
    {
        id:7,
        image:"/facilities/seating/senitaized.jpg",
        heading:'Fully Sanitized Interior'
    },
    {
        id:6,
        image:"/facilities/seating/bus.jpg",
        heading:'Bus age Less than 3 years'
    }
]

const benefits=[
    {
        id:1,
        image:'/facilities/grid/toptrackbg01.jpg'
    },
    {
        id:2,
        image:'/facilities/grid/toptrackbg02.jpg'
    },
    {
        id:1,
        image:'/facilities/grid/toptrackbg03.jpg'
    }
]

const FacilitiesList = ({data}) => {
    return(
        <>
            {
                data.map((tabItem,tabIndex)=><div className='
                
                md:col-span-3 md:justify-center md:items-center
                sm:col-span-6 sm:justify-around sm:items-center
                md:mb-2
                p-2
                flex   flex-col '>
                    <img src={tabItem.image}/>
                    <p className='text-[16px] py-2'>{tabItem.heading}</p>
                </div>)
            }
        </>
    );
}

const Facilities = () => {
  const items = [
    {
      key: '1',
      label: 'Sleeper',
      children: <div className='text-center grid grid-cols-12 
      '>
        <FacilitiesList data={sleeping}/>
      </div>,
    },
    {
      key: '2',
      label: 'Seating',
      children: <div className='grid grid-cols-12 
      '>
        <FacilitiesList data={seating}/>
      </div>,
    },
  ];

  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <>
        <div className="grid grid-cols-12">
            <div className="
            lg:col-span-7 lg:px-11
            md:col-span-12 md:px-2
            
            ">
                <h1 className='text-[28px] font-bold text-[#555555] pt-4'>FACILITIES IN BUS</h1>
                <Tabs defaultActiveKey="1"
                onChange={onChange}
                tabBarStyle={{ borderBottom: '1.5px solid gray',fontWeight:'bold',color:'red'}}
                >
                {items.map((item) => (
                    <TabPane tab={<span className='text-[20px] px-4'>{item.label}</span>} key={item.key}>
                    {item.children}
                    </TabPane>
                ))}
                </Tabs>
            </div>
            <div className="
                flex
                lg:col-span-5  lg:items-end lg:pr-4
                md:col-span-12 md:justify-center
            ">
                <Image src="/facilities/fecilityimg.jpg" preview={false}/>
            </div>
        </div>
        <div>
            <div>
                <Image src="/facilities/phoneimage.jpg" preview={false}/>
            </div>
            <div className='grid grid-cols-12 bg-[#F5F5F5] p-4 px-10'>
                {benefits.map((benefitsItem,benefitsIndex)=><div className='
                lg:col-span-4
                md:col-span-12 md:my-4
                 flex justify-center'>
                    <Image src={benefitsItem.image} preview={false}/>
                </div>)}<div className='col-span'></div>
            </div>
        </div>
    </>
  );
};

export default Facilities;
