import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng:"bn",
   resources: {
  en: {
    translation: {
      bannerTitle: 'Mukto Pathagar',
      bannerSubTitle: 'Let the world for books',
      aboutUs: 'About US',
      detailsAboutUs: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat numquam temporibus. Vel error quisquam animi, quis porro eos optio officiis blanditiis iste iusto praesentium ex dolor odio doloremque ipsa deserunt, maiores ducimus, consequatur quaerat. Sint at eaque dicta tempore natus hic exercitationem, culpa, et qui delectus vitae minus accusantium!',
      OurActivities: 'Our Activities'
    }
  },
  bn: {
    translation: {
      bannerTitle: 'মুক্ত পাঠাগার ',
      bannerSubTitle: 'পৃথিবী বইয়ের হোক',
      aboutUs: 'আমাদের সম্পর্কে',
      detailsAboutUs: 'মানব জীবনের প্রথম পর্যায় হলো শৈশব। আর শৈশবই হল মানব জীবনের অন্যতম অধ্যায়। প্রত্যক্ষ দৃষ্টিতে একটি শিশুকে নির্ভরশীল বলে মনে হলেও কিন্তু একটি দেশের ভবিষ্যৎ গড়ে ওঠে ওই দেশের শিশুদের উপর। তাই ইংরেজিতে একটি প্রবাদ বাক্য আছে “today’s child is tomorrow’s citizen” অর্থাৎ আজকের শিশু কালকের নাগরিক। কিন্তু দুর্ভাগ্যবশত প্রত্যেকটি শিশু প্রাথমিক সুযোগ সুবিধা, শিক্ষা ইত্যাদি পায় না। ওরা শিকার হয় বিভিন্ন অপব্যবহারের। আর তার মধ্যে অন্যতম একটি অপব্যবহার হল শিশুশ্রম।' ,
      OurActivities: 'আমাদের কার্যক্রম',
    }
  }
}
})

export default i18n
