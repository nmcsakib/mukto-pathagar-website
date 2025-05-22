import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImage from '../assets/banner-circle-image.png'
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t} = useTranslation();
    const {content1, content2} = t('aboutContent');
 

    const AboutContent = ({direction, details}) => {
        return(

           <section className=''>
             <div className={`flex justify-center flex-col ${direction && 'md:flex-row-reverse'} items-center`}>
                <div className='w-1/2 md:pl-10'>
                    <p className='text-lg leading-relaxed'>{details}</p>
                    <div className='flex items-center gap-5 pt-5'>
            <button onClick={() => { document.getElementById('my_modal_2').showModal() }
            
            } 
            className="btn bg-[#fc8787f3] text-white border-[#fc8787f3]">Read more
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
            <SectionTitle title={t('aboutUs')} />
           <AboutContent direction={''} details={content1} /> 
           <AboutContent direction={true} details={content2} /> 
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hi there</h3>
    <p className="py-4">Sorry! No details Available now.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>  
           
           </div>
    );
};

export default About;