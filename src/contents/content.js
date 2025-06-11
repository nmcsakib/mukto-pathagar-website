// Our Activities

const activitiesContent = [ "Books", "Society", "Climate", 'Studens', 'Womens']

// Our Activities

// Counter in Homepage
const homepageData = {
    memberCount: 500,
    booksCount: 5000,
    eventsCount: 300
}
// Counter in Homepage

// About US

const aboutContent = "পৃথিবী বইয়ের হোক” এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয় নোয়াখালী জেলার স্বনামধন্য তিনটি উপজেলা (বেগমগঞ্জ, সোনাইমুড়ী ও সেনবাগ) <br/> এর প্রায় ২০এর অধিক শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীদের নিয়ে আমরা কাজ করে যাচ্ছি। বই পড়ার পাশাপাশি বিভিন্ন দিবস উপলক্ষ্যে কুইজ প্রতিযোগিতা, চিত্রাঙ্কন প্রতিযোগিতা, বানানবিদ প্রতিযোগিতা, আবৃত্তি, দেয়ালিকা, বুক রিভিউ প্রতিযোগিতা, বই আড্ডা, গ্রামার আড্ডা, ফ্রি কম্পিউটার কোর্স, ইংলিশ স্পোকেন ক্লাব, ক্লাসের ফাঁকে বই পড়া, বৃক্ষ রোপন কর্মসূচি, পরিষ্কার-পরিচ্ছন্নতা ,ইফতার মাহফিল কার্যক্রম সহ আরো বিভিন্ন কর্মসূচি পালন করে যাচ্ছি <br/> পাঠ্যপুস্তকের বাইরে জ্ঞান অর্জন, সাহিত্যের প্রতি আগ্রহ সৃষ্টি, দেশ এবং বিশ্ব সম্পর্কে জানানোর জন্য সাহিত্যের বিকল্প আর কিছু নেই। নতুন প্রজন্মকে জ্ঞানে বিজ্ঞানে গড়ে তুলতে, সাহিত্য সমৃদ্ধির বিকাশ ঘটাতে, সর্বোপরি নতুন পাঠক এবং লেখক তৈরিতে আমাদের চেষ্টা অব্যাহত আছে "

// About US

// Upcoming events

const UpcomingEventData = {
    title: 'Lekhok Adda',
    guest: 'asif mahmud sojib vuia',
    date: '15-Dec-2020',
    time: '4.00 PM',
    location: 'Mukto Pathagar, Kazirhaat',
    price: 'Free'
}

// Upcoming events

// FAQ

const faqData = [
    {
        question: 'পাঠাগারের সদস্য হবো কিভাবে?',
        answer: 'পৃথিবী বইয়ের হোক” এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয়।'
    },
    {
        question: 'পাঠাগারের সদস্য হবো কিভাবে?',
        answer: 'পৃথিবী বইয়ের হোক” এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয়।'
    },
    {
        question: 'পাঠাগারের সদস্য হবো কিভাবে?',
        answer: 'পৃথিবী বইয়ের হোক” এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয়।'
    },
    {
        question: 'পাঠাগারের সদস্য হবো কিভাবে?',
        answer: 'পৃথিবী বইয়ের হোক” এই স্লোগানকে সামনে রেখে নোয়াখালী জেলার বেগমগঞ্জ উপজেলার অধিনস্ত আলাইয়ারপুর কাজিরহাট গ্রামে ২০২২ সালের ১লা এপ্রিল কয়েকজন বিশ্ববিদ্যালয় ও কলেজ পড়ুয়া শিক্ষার্থী মিলে ‘মুক্ত পাঠাগার’ নামে একটি উন্মুক্ত পাঠাগারের কার্যক্রম শুরু করা হয়।'
    },
   
]

// FAQ

// Partners

const partnersData = [
  
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },
    {
        title: "OTP Input",
        image: "https://i.ibb.co/3Yf8R2Fg/download.png",
        url: "/components/otp-input",
        groupName: "input",
    },

]

// Partners


// Testimonial

const testimonialData = [
  {
    "_id": "1",
    "thumbExpression": "Incredible Experience!",
    "details": "The classes were engaging and practical. I learned a lot in a short time. Highly recommend to anyone serious about improving their skills.",
    "userName": "Ayesha Khan",
    "image": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "_id": "2",
    "thumbExpression": "Amazing Support!",
    "details": "The instructors were very supportive. They were always ready to help and explain every concept clearly.",
    "userName": "Rahim Uddin",
    "image": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "_id": "3",
    "thumbExpression": "Transformed My Learning",
    "details": "This platform changed the way I study. The interactive sessions and practical examples helped me grasp difficult concepts easily.",
    "userName": "Nusrat Jahan",
    "image": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "_id": "4",
    "thumbExpression": "Truly Empowering",
    "details": "Every lesson felt valuable. The learning environment was positive, and the feedback system helped me grow.",
    "userName": "Sabbir Ahmed",
    "image": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "_id": "5",
    "thumbExpression": "Exceeded Expectations",
    "details": "I was skeptical at first, but this course exceeded my expectations. The instructors were well-prepared and passionate.",
    "userName": "Fatima Noor",
    "image": "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    "_id": "6",
    "thumbExpression": "Fantastic Journey",
    "details": "Great content, great instructors, and a great experience overall. I feel much more confident now.",
    "userName": "Tanvir Hasan",
    "image": "https://randomuser.me/api/portraits/men/6.jpg"
  }
]


// Testimonial


// Events ( ! Do not add more than 3 pictures)

const eventsData = [
    {
        id: 1,
        title: 'With Abu naser Tipu',
        description: '“জীবনের সকল স্তরের প্রাতিষ্ঠানিক শিক্ষা সাধারণত ৩০ থেকে ৩৫ বছরের মধ্যেই সম্পন্ন করা উচিত। এই সময়ের পর পড়ালেখার চাপ বহন করা সহজ হয় না।” — বিদেশে উচ্চশিক্ষা বিষয়ক সেমিনারে এমন বাস্তবধর্মী পরামর্শ দেন মোঃ আবু নাছের টিপু, উপসচিব, তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ। পাঠক ও লেখকের মধ্যে সম্পর্কের সেতুবন্ধন গড়ে তোলার লক্ষ্যে আয়োজিত ধারাবাহিক আয়োজন ‘লেখকের গল্প, গল্পের লেখক’-এর ৪র্থ পর্বে উপস্থিত ছিলেন লেখক মোঃ আবু নাছের টিপু। এই আয়োজনে তিনি বিদেশে উচ্চশিক্ষা, জনপ্রশাসনের প্রতিশ্রুতি ও পারফরম্যান্স, এবং প্রশাসনের সঙ্গে জনগণের পারস্পরিক আস্থার গুরুত্ব নিয়ে আলোচনা করেন। অনুষ্ঠানে আরও বক্তব্য প্রদান করেন লেখক ও সংগঠক গিয়াস উদ্দিন পিয়াস, লেখক ও ব্যাংকার কামরুজ্জামান মোহন, সুলতান মাহমুদ ডিগ্রি কলেজের সহকারী অধ্যাপক মোঃ মমিন উল্যাহ এবং লেখক ও রাষ্ট্রচিন্তক আসাদ পারভেজ। তাঁরা লেখালেখির তাৎপর্য, সমাজে লেখকের ভূমিকা এবং ব্যক্তিগত অভিজ্ঞতা তুলে ধরেন। অনুষ্ঠানের দ্বিতীয় পর্বে ২০২৪-২৫ শিক্ষাবর্ষে পাবলিক বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের সম্মাননা স্মারক প্রদান করা হয়। এরপর মনোজ্ঞ সাংস্কৃতিক পরিবেশনার মাধ্যমে আয়োজনের সমাপ্তি ঘোষণা করা হয়।',
        date: '8 June 2025',
        pictures: ['https://i.ibb.co/gLYLCQfw/image.jpg', 'https://i.ibb.co/gLYLCQfw/image.jpg', 'https://i.ibb.co/gLYLCQfw/image.jpg']
    },
    {
        id: 2,
        title: 'With Abu naser Tipu',
        description: '“জীবনের সকল স্তরের প্রাতিষ্ঠানিক শিক্ষা সাধারণত ৩০ থেকে ৩৫ বছরের মধ্যেই সম্পন্ন করা উচিত। এই সময়ের পর পড়ালেখার চাপ বহন করা সহজ হয় না।” — বিদেশে উচ্চশিক্ষা বিষয়ক সেমিনারে এমন বাস্তবধর্মী পরামর্শ দেন মোঃ আবু নাছের টিপু, উপসচিব, তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ। পাঠক ও লেখকের মধ্যে সম্পর্কের সেতুবন্ধন গড়ে তোলার লক্ষ্যে আয়োজিত ধারাবাহিক আয়োজন ‘লেখকের গল্প, গল্পের লেখক’-এর ৪র্থ পর্বে উপস্থিত ছিলেন লেখক মোঃ আবু নাছের টিপু। এই আয়োজনে তিনি বিদেশে উচ্চশিক্ষা, জনপ্রশাসনের প্রতিশ্রুতি ও পারফরম্যান্স, এবং প্রশাসনের সঙ্গে জনগণের পারস্পরিক আস্থার গুরুত্ব নিয়ে আলোচনা করেন। অনুষ্ঠানে আরও বক্তব্য প্রদান করেন লেখক ও সংগঠক গিয়াস উদ্দিন পিয়াস, লেখক ও ব্যাংকার কামরুজ্জামান মোহন, সুলতান মাহমুদ ডিগ্রি কলেজের সহকারী অধ্যাপক মোঃ মমিন উল্যাহ এবং লেখক ও রাষ্ট্রচিন্তক আসাদ পারভেজ। তাঁরা লেখালেখির তাৎপর্য, সমাজে লেখকের ভূমিকা এবং ব্যক্তিগত অভিজ্ঞতা তুলে ধরেন। অনুষ্ঠানের দ্বিতীয় পর্বে ২০২৪-২৫ শিক্ষাবর্ষে পাবলিক বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের সম্মাননা স্মারক প্রদান করা হয়। এরপর মনোজ্ঞ সাংস্কৃতিক পরিবেশনার মাধ্যমে আয়োজনের সমাপ্তি ঘোষণা করা হয়।',
        date: '8 June 2025',
        pictures: ['https://i.ibb.co/gLYLCQfw/image.jpg', 'https://i.ibb.co/gLYLCQfw/image.jpg', 'https://i.ibb.co/gLYLCQfw/image.jpg']
    }
]

// Events



// Footer Content

const footerData = {
    address: ' Kazirhat, Begumgonj, Noakhali',
    email: 'muktopathagar@gmail.com',
    number: ' +8801301437873',
    socialLink: {
        facebook: 'https://www.facebook.com/mukta.pathagara',
        instagram: 'https://www.facebook.com/mukta.pathagara',
        linkedin: 'https://www.facebook.com/mukta.pathagara',
        twitter: 'https://www.facebook.com/mukta.pathagara',
    }
}

// Footer Content

export {
    activitiesContent,
    homepageData,
    aboutContent,
    UpcomingEventData,
    faqData,
    partnersData,
    testimonialData,
    eventsData,
    footerData
}