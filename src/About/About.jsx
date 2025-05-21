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
          
           
           </div>
    );
};

export default About;