import { Image, Card, Button } from "antd";
import { useEffect, useState } from "react";
import Meta from "../shared/meta";

const AgentLogin = () => {
  const [dateTime, setDateTime] = useState({
    date: '',
    time: ''
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCurrentDateTime();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Log the updated dateTime when it changes
    console.log(dateTime);
  }, [dateTime]);

  function getCurrentDateTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    setDateTime({
      date: formattedDate,
      time: formattedTime
    });
  }

  return (
    <>
        <Meta 
        title='Infinity Travel Solutions - Online Booking Engine - Agent Login' 
        description='i am description' 
        keywords='testing keywords'
        />
        {/*Header*/}
      <nav className="flex justify-around items-end">
        <Image src="/agent/logo.png" className="p-4" preview={false} />
        <div className="text-end">
            <div className="flex gap-2">
                <Image src="/agent/ind_date_ic.png" preview={false}/>
                <p>{dateTime.date}</p>
            </div>
            <p className="text-end">{dateTime.time} IST</p>
        </div>
      </nav>

      {/*content*/}
      <div className="bg-[#65A7A0] min-h-screen flex justify-center flex-col items-center">
            <Image src="/Agent/infinity_slogan.png" preview={false}/>
            <div className="bg-white w-[408px] rounded-[10px]">
                <div className="px-2 flex items-center font-bold pb-1 text-[#65A7A0] border-b border-[#65A7A0]">
                    <Image src="/Agent/ind_icon1.png" preview={false}/>
                    <h1 className="text-[22px]" style={{textShadow: '4px 2px 4px #65A7A0'}}>Agent Login</h1>
                </div>

                <div className="px-2 py-4">
                    <form className="px-2" >
                        <div className="flex justify-between my-3">
                            <label>User Name : </label>
                            <input value="testing" type="text" className="border border-black"/>
                        </div>
                        <div className="flex justify-between items-center my-5">
                            <label>Password :</label>
                            <input value="Testings" type="password" className="border border-black"/>
                        </div>
                        <div className="flex justify-center my-5">
                            <Button className="px-6 h-auto bg-[#65A7A0] text-white">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex py-4 gap-4">
                <h1 className="text-white text-[20px]">Download iAgent Application from</h1>
                <Image src='/Agent/play_store.png' width={100} height={35}  preview={false}/>
            </div>
        
      </div>

      {/*Footer*/}
      <div className="flex justify-evenly text-xs">
        <div className="flex">
            <p>Hosted & Managed by :</p>
            <Image
            src="/Agent/logo_infinityinfoway.com.png" width={18} height={16} preview={false}/>
            <p>Infinity Infoway Pvt. Ltd</p>
        </div>
        <p>© 2011-2021 Infinity Travel Solutions</p>
      </div>
    </>
  );
};

export default AgentLogin;
