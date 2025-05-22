import banner from '../assets/banner-circle-image.png';
import logo from '../assets/logo.jpeg';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t} = useTranslation();
    return (
      <section className='container px-8 mx-auto'>
          <div className='w-full h-[500px] flex justify-around items-center pt-20 ' >
            <div className='flex-1 h-full flex justify-center md:items-center flex-col'>
                <img className='w-1/4 rounded-full' src={logo} alt="logo" />
                <h1 className='text-5xl font-bold'>{t('bannerTitle')}</h1>
                <p className="text-lg text-gray-500 py-3">({t('bannerSubTitle')})</p>
            </div>
            <div className='w-1/2 -mt-10'>
                <img className='animate-spin spin-slow rounded-full'  src={banner} alt="" />
            </div>
            
        </div>
        
      </section>
    );
};

export default Banner;