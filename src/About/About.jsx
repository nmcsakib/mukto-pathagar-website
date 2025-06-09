import { useLocation } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImage from '../assets/banner-circle-image.png'
import { useTranslation } from 'react-i18next';
import { aboutContent } from '../contents/content';
import { useState } from 'react';

const About = () => {
  const [full, setFull] = useState(false)
  const {t} = useTranslation();
   
  const link = useLocation();
  const AboutContent = ({ direction, details }) => {
    return (

      <section>
        <div className={`flex justify-center flex-col md:flex-row ${direction && 'md:flex-row-reverse'} items-center`}>
          <div className='md:w-1/2 md:pl-10'>
            <p dangerouslySetInnerHTML={{__html: full ? details : details.slice(0, 248) + '...'}} className='text-lg leading-relaxed inline'></p> <span className={`${full === true ? 'hidden' : 'font-bold inline cursor-pointer'}`} onClick={() => setFull(true)}>Read More</span>
            <div className='flex items-center gap-5 pt-5'>
              
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
    <div className='container mx-auto px-8'>
    
      <SectionTitle pathname={link.pathname} title={t('aboutUs')} />
      <AboutContent direction={''} details={aboutContent}/>

    </div>
  );
};

export default About;