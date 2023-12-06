import { Image } from 'antd';
import PurpleTripLayout from "@/components/shared/purple-trip-layout";
import CarouselLayout from '@/components/shared/carousel';
  const featureSlider=[
    {
        id:1,
        label:'Pilgrim',
        logo:'/purpleTrip/trip-pune/pilgrim/Pilgrim.png',
        data:[
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/11-Maruti.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'4500',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:2,
                image:'/purpleTrip/trip-pune/pilgrim/Ashtavinayak.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/Bhimshankar-Temple.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/Kolhapur.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/Mahurgadh.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/11-Maruti.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            }
        ]
    },
    {
        id:2,
        label:'Konkan',
        logo:'/purpleTrip/trip-pune/konkan/Konkan.png',
        data:[
            {
                id:1,
                image:'/purpleTrip/trip-pune/konkan/alibag-nagaon_beach.jpg',
                link:'Konkan - Dapoli - Kelshi | 2D / 1D',
                price:'4500',
                desc:'Konkan-Dapoli-Kelshi',
            },
            {
                id:2,
                image:'/purpleTrip/trip-pune/konkan/Alibag-Nagaon-Beach.jpg',
                link:'Harihareshwar–Diveagar| 2D / 1N',
                price:'2800',
                desc:'Harihareshwar–Diveagar',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/konkan/Chiplun1.jpg',
                link:'Tarkarli – Sindhudurga - Vijaydurga | 3D / 3N',
                price:'8500',
                desc:'Tarkarli - Malvan',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/konkan/Dapoli-Beach.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/konkan/ganpatipule-2.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            }
        ]
    },
    {
        id:3,
        label:'Leisure',
        logo:'/purpleTrip/trip-pune/leisure/leisure.png',
        data:[
            {
                id:1,
                image:'/purpleTrip/trip-pune/leisure/01_AurangabadAjantaEllora.jpg',
                link:'Matheran Trip',
                price:'2000',
                desc:'Matheran',
            },
            {
                id:2,
                image:'/purpleTrip/trip-pune/leisure/Mahabaleshwar_OneDay.jpg',
                link:'Mahabaleshwar-Pratapgad 2D/1N',
                price:'5000',
                desc:'Mahabaleshwar-Pratapgad 2D/1N',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/leisure/Matheran-1.jpg',
                link:'Aurangabad-Ajanta–Ellora-Ghrishneshwar–Bhadra',
                price:'5500',
                desc:'Aurangabad-Ajanta–Ellora-Ghrishneshwar–Bhadra',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/leisure/Rajgad.jpg',
                link:'Raigad Trip',
                price:'2000',
                desc:'Raigad',
            }
        ]
    },
    {
        id:4,
        label:'Pilgrim',
        logo:'/purpleTrip/trip-pune/pilgrim/Pilgrim.png',
        data:[
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/11-Maruti.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'4500',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:2,
                image:'/purpleTrip/trip-pune/pilgrim/Ashtavinayak.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/Bhimshankar-Temple.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/Kolhapur.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/Mahurgadh.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            },
            {
                id:1,
                image:'/purpleTrip/trip-pune/pilgrim/11-Maruti.jpg',
                link:'Akara Maruti– Kolhapur- Nrusinh Wadi  | 2D/1N',
                price:'2800',
                desc:'Ashtavinayak Darshan - Daily',
            }
        ]
    }
  ]
const TriptoPune = ()=>{
    
    return(
        <>
            <PurpleTripLayout>
                {
                    featureSlider.map((tripItem,tripIndex)=>
                    <div>
                        <div className='flex items-center py-1'>
                            <Image src={tripItem.logo} width={114} height={46} preview={false}/>
                            <div className='w-full py-1 bg-[#F3F3F3] border border-zinc-200 px-1'>
                                <h1>Deeply connect with most sacred and holy places to unfold your inner journey !!</h1>
                            </div>
                        </div>
                        <div className='py-1'>
                            <CarouselLayout data={tripItem.data}/>
                        </div>
                    </div>
                    )
                }
            </PurpleTripLayout>
        </>
    );
};
export default TriptoPune;