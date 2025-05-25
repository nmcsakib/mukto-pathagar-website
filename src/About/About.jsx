import { useLocation } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImage from '../assets/banner-circle-image.png'
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation();
   
  const link = useLocation();
  const AboutContent = ({ direction, details }) => {
    return (

      <section className=''>
        <div className={`flex justify-center flex-col md:flex-row ${direction && 'md:flex-row-reverse'} items-center`}>
          <div className='md:w-1/2 md:pl-10'>
            <p className='text-lg leading-relaxed'>{details}</p>
            <div className='flex items-center gap-5 pt-5'>

                
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
      <AboutContent direction={''} details="পৃথিবী বইয়ের হোক এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয়।..." />
     
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">মুক্ত পাঠাগার</h3>
          <p className="py-4">“পৃথিবী বইয়ের হোক” এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয়।

নোয়াখালী জেলার স্বনামধন্য তিনটি উপজেলা (বেগমগঞ্জ, সোনাইমুড়ী ও সেনবাগ) এর প্রায় ২০এর অধিক শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীদের নিয়ে আমরা কাজ করে যাচ্ছি। বই পড়ার পাশাপাশি বিভিন্ন দিবস উপলক্ষ্যে কুইজ প্রতিযোগিতা, চিত্রাঙ্কন প্রতিযোগিতা, বানানবিদ প্রতিযোগিতা, আবৃত্তি, দেয়ালিকা, বুক রিভিউ প্রতিযোগিতা, বই আড্ডা, গ্রামার আড্ডা, ফ্রি কম্পিউটার কোর্স, ইংলিশ স্পোকেন ক্লাব, ক্লাসের ফাঁকে বই পড়া, বৃক্ষ রোপন কর্মসূচি, পরিষ্কার-পরিচ্ছন্নতা ,ইফতার মাহফিল কার্যক্রম সহ আরো বিভিন্ন কর্মসূচি পালন করে যাচ্ছি।

পাঠ্যপুস্তকের বাইরে জ্ঞান অর্জন, সাহিত্যের প্রতি আগ্রহ সৃষ্টি, দেশ এবং বিশ্ব সম্পর্কে জানানোর জন্য সাহিত্যের বিকল্প আর কিছু নেই। নতুন প্রজন্মকে জ্ঞানে বিজ্ঞানে গড়ে তুলতে, সাহিত্য সমৃদ্ধির বিকাশ ঘটাতে, সর্বোপরি নতুন পাঠক এবং লেখক তৈরিতে আমাদের চেষ্টা অব্যাহত আছে।</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

    </div>
  );
};

export default About;