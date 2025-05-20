import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurActivities from '../OurActivities/OurActivities';
import SectionTitle from '../SectionTitle/SectionTitle';
import Canvas from '../Wave/Canvas';
const Home = () => {
    return (
       <>
        <Banner/>
        <div className='-mt-56'>
            <Canvas/>
        </div>
        <OurActivities/>
        <About/>
       
    </>
    );
};

export default Home;