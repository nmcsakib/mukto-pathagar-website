import { useLocation } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImage from '../assets/banner-circle-image.png'
import { useTranslation } from 'react-i18next';

const About = () => {
   
  const link = useLocation();

  const { t } = useTranslation();
  const { content1, content2 } = t('aboutContent');

  const AboutContent = ({ direction, details }) => {
    return (

      <section className=''>
        <div className={`flex justify-center flex-col md:flex-row ${direction && 'md:flex-row-reverse'} items-center`}>
          <div className='md:w-1/2 md:pl-10'>
            <p className='text-lg leading-relaxed'>{details}</p>
            <div className='flex items-center gap-5 pt-5'>
              {/* <button

              }
                className="btn bg-[#fc8787f3] text-white border-[#fc8787f3]">Read more
              </button> */}

                
<button  onClick={() => { document.getElementById('my_modal_2').showModal() }}
    className="relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-base-content border-2 border-[#fc8787f3] rounded-full hover:text-black group hover:bg-lime-400 cursor-pointer">
      <span
          className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span
        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
    <span className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">Read more</span>
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
    <div className='container mx-auto px-8'>
    
      <SectionTitle pathname={link.pathname} title={t('aboutUs')} />
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