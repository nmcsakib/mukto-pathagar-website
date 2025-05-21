import { CiCircleChevUp, CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import member from '../assets/member.png';
import { Swiper, SwiperSlide  } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaUser, FaUserCircle } from "react-icons/fa";
// import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Members = () => {

  const {members} = useParams();
  console.log(members);
    const cards = [
      {
        id: 1,
        img: member,
        name: "Harly Rayan",

       work:"Marketing Head",
      },
      {
        id: 2,
        img: member,
        name: "Harly Rayan",
       work:"Marketing Head",
      },
      {
        id: 3,
        img: member,
       work:"Marketing Head",
        name: "Kathryn Murphy",
      },
      {
        id: 4,
        img: member,

       work:"Marketing Head",
        name: "Kathryn Murphy",
      },
      {
        id: 5,
        img: member,
       work:"Marketing Head",
        name: "Kathryn Murphy",
      },
      {
        id: 6,
        img: member,
        name: "Kathryn Murphy",
       work:"Marketing Head",
      },
      
    ];
    return (
      <div className=" py-10 font-['Poppins']" id="team">
        <div className="container mx-auto">
          <div className="">
          <SectionTitle title={members}/>
           
          </div>
          <div className="py-10 px-5">
              <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
           modules={[Autoplay, Pagination]}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
  
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >

            {cards.map((card, i) => (
                 <SwiperSlide keykey={i}>

              <div className="flex bg-[#DEDEDE] p-3 flex-col items-center  relative rounded-xl shadow-lg">
               <div className="relative">
               <img src={card.img} alt="" className="w-80 h-64 rounded-2xl" />
                
               </div>
                <p className="text-2xl  font-semibold  py-2">
                  {card.name}
                </p>
                <p>{card.work}</p>
                <div className="flex flex-row gap-5 p-3 text-xl">
                <CiFacebook className="text-orange-500"/>
                <CiTwitter/>
                <CiLinkedin/>
                <CiCircleChevUp/>
                </div>
              </div>
                 </SwiperSlide>
            ))}
        </Swiper>
          </div>
        </div>
      </div>
    );
  };
  
  export default Members;
  