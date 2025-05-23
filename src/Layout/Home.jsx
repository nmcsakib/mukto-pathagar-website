import About from '../About/About';
import Album from '../Album/Album';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import FAQ from '../FAQ/FAQ';
import Feedbacks from '../Feedbacks/Feedbacks';
import Map from '../Map/Map';
import OurActivities from '../OurActivities/OurActivities';
import Canvas from '../Wave/Canvas';
const Home = () => {
    return (
       <>
        <Banner/>
        <div className='-mt-56'>
        <Canvas/>
        </div>
        <OurActivities/>
        <Counter/>
        <About/>
        <Album/>
        <Map/>
        <FAQ/>
        <Feedbacks/>
    </>
    );
};

export default Home;