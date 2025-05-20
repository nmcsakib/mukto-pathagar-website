import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImage from '../assets/banner-circle-image.png'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
    
    navigate(path);
  };

    const AboutContent = ({direction, details}) => {
        return(

           <section>
             <div className={`flex justify-center ${direction && 'flex-row-reverse'} items-center`}>
                <div className='w-1/2 pl-10'>
                    <p className='text-lg leading-relaxed'>{details}</p>
                    <div className='flex items-center gap-5 pt-5'>
            <button onClick={() => handleNavigation('/about')} className="btn bg-[#47698F] text-white border-[#35567b]">Read more
            </button>
            <button className="btn text-[#47698F] border-[#35567b]">Read more
            </button>
                    </div>
                </div>
               <div className="w-1/2 flex justify-center items-center">
                    <div className="mask mask-hexagon-2 shadow-2xl">
                        <img className='mask mask-hexagon-2 shadow-2xl' src={AboutImage} alt="" />
                        </div>
               </div>
                
            </div>
           </section>
        )

    }
    return (
        <div  className='container mx-auto px-8'>
            <SectionTitle title={'About US'} descrition={'lorem ipmus doler sit, amet. lorem ipmus doler sit, amet lorem ipmus doler sit, amet lorem ipmus doler sit, amet'}></SectionTitle>
           <AboutContent direction={''} details={'vLorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat numquam temporibus. Vel error quisquam animi, quis porro eos optio officiis blanditiis iste iusto praesentium ex dolor odio doloremque ipsa deserunt, maiores ducimus, consequatur quaerat. Sint at eaque dicta tempore natus hic exercitationem, culpa, et qui delectus vitae minus accusantium!'} /> 
           <AboutContent direction={true} details={'vLorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat numquam temporibus. Vel error quisquam animi, quis porro eos optio officiis blanditiis iste iusto praesentium ex dolor odio doloremque ipsa deserunt, maiores ducimus, consequatur quaerat. Sint at eaque dicta tempore natus hic exercitationem, culpa, et qui delectus vitae minus accusantium!'} /> 
           <div>
           <div className="absolute top-0 left-0  flex place-items-center  before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']  after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-pink-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-600 before:dark:opacity-10 after:dark:from-pink-700 after:dark:via-[#f64dfc] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
           </div>
           
           </div>
    );
};

export default About;