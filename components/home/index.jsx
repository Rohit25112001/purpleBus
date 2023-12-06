import Meta from '../shared/meta';
import HomeLayout from '../shared/layout/homeLayout';

const Home = () => {
  return (
      <HomeLayout>
        {/*Meta Tag*/}
        <Meta title='Online Bus Tickets | Online Bus Reservation | Bus Booking Online' 
        description='i am description' 
        keywords='testing keywords'/>
          
      </HomeLayout>
  );
};

export default Home;
