import Meta from '../shared/meta';
import HomeLayout from '../shared/layout/homeLayout';
import Hero from "./hero";
import Facilities from './facilities';
import ShortTrip from './short-trip';
import Rating from './rating';

const Home = () => {
  return (
      <HomeLayout>
        {/*Meta Tag*/}
        <Meta title='Online Bus Tickets | Online Bus Reservation | Bus Booking Online' 
        description='i am description' 
        keywords='testing keywords'/>
          <Hero />
          <Facilities/>
          <ShortTrip/>
          <Rating/>
      </HomeLayout>
  );
};

export default Home;
