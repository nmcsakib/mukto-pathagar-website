import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import EventImage1 from '../assets/banner-circle-image.png'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Events = () => {

  const { t} = useTranslation();
  const {year} = useParams();
  const nums = [1,2,3,4,5,6,7];
    return (
        <section className='container mx-auto px-8'>
        <SectionTitle title={t("Events")} descrition={`Events of ${year}`} />
        
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

          {
            nums.map(num => {
            if(num % 2 == 0){
              return(
                 <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic">{year}</time>
      <div className="text-lg font-black">iMac</div>
      মানব জীবনের প্রথম পর্যায় হলো শৈশব। আর শৈশবই হল মানব জীবনের অন্যতম অধ্যায়। প্রত্যক্ষ দৃষ্টিতে একটি শিশুকে নির্ভরশীল বলে মনে হলেও কিন্তু একটি দেশের ভবিষ্যৎ গড়ে ওঠে ওই দেশের শিশুদের উপর। তাই ইংরেজিতে একটি প্রবাদ বাক্য আছে “today’s child is tomorrow’s citizen” অর্থাৎ আজকের শিশু কালকের নাগরিক। কিন্তু দুর্ভাগ্যবশত প্রত্যেকটি শিশু প্রাথমিক সুযোগ সুবিধা, শিক্ষা ইত্যাদি পায় না। ওরা শিকার হয় বিভিন্ন অপব্যবহারের। আর তার মধ্যে অন্যতম একটি অপব্যবহার হল শিশুশ্রম।
    </div>
    <hr />
  </li>
              )
            } else{
              return(
                <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">01 April {year}</time>
      <div className="text-lg font-black">First Macintosh computer</div>
      <p className="text-lg">
        মানব জীবনের প্রথম পর্যায় হলো শৈশব। আর শৈশবই হল মানব জীবনের অন্যতম অধ্যায়। প্রত্যক্ষ দৃষ্টিতে একটি শিশুকে নির্ভরশীল বলে মনে হলেও কিন্তু একটি দেশের ভবিষ্যৎ গড়ে ওঠে ওই দেশের শিশুদের উপর। তাই ইংরেজিতে একটি প্রবাদ বাক্য আছে “today’s child is tomorrow’s citizen” অর্থাৎ আজকের শিশু কালকের নাগরিক। কিন্তু দুর্ভাগ্যবশত প্রত্যেকটি শিশু প্রাথমিক সুযোগ সুবিধা, শিক্ষা ইত্যাদি পায় না। ওরা শিকার হয় বিভিন্ন অপব্যবহারের। আর তার মধ্যে অন্যতম একটি অপব্যবহার হল শিশুশ্রম।
      </p>
      <div className="grid grid-cols-3 gap-10">
        <img className='' src={EventImage1} alt="" />
        <img className='' src={EventImage1} alt="" />
        <img className='' src={EventImage1} alt="" />
      </div>
    </div>
    <hr />
  </li>
              )
            }
            
})
          }
  
  
</ul>
        </div>
          </section>
    );
};

export default Events;