import About from '../About/About';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Feedbacks from '../Feedbacks/Feedbacks';
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
        <Counter/>
        <Feedbacks/>
        
       
    </>
    );
};

export default Home;