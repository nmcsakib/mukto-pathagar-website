import SectionTitle from "../SectionTitle/SectionTitle";
import { useLocation, useParams } from "react-router-dom";
import member from '../assets/member.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import "swiper/css";
import { FaXTwitter } from "react-icons/fa6";

const Members = () => {

  const { members } = useParams();
  const link = useLocation();
  console.log(members);
  const cards = [
    {
      id: 1,
      img: member,
      name: "Harly Rayan",

      work: "Marketing Head",
    },
    {
      id: 2,
      img: member,
      name: "Harly Rayan",
      work: "Marketing Head",
    },
    {
      id: 3,
      img: member,
      work: "Marketing Head",
      name: "Kathryn Murphy",
    },
    {
      id: 4,
      img: member,

      work: "Marketing Head",
      name: "Kathryn Murphy",
    },
    {
      id: 5,
      img: member,
      work: "Marketing Head",
      name: "Kathryn Murphy",
    },
    {
      id: 6,
      img: member,
      name: "Kathryn Murphy",
      work: "Marketing Head",
    },

  ];

  return (
    <div className=" py-10 font-['Poppins'] " id="team">
      <div className="container mx-auto">
        <div>
          <SectionTitle pathname={(link.pathname)} title={members} />

        </div>
        {
          members == "Founder" ? <>

            <div className="py-10 px-5 text-black">
              <div className="flex bg-[#DEDEDE] p-3 flex-col items-center  relative rounded-xl shadow-lg">
                <div className="relative">
                  <img src={member} alt="" className="w-80 h-64 rounded-2xl" />

                </div>
                <p className="text-2xl  font-semibold  py-2">
                  SAKIB
                </p>
                <p>Founder</p>
                <div className="flex flex-row gap-5 p-3 text-xl">
                  <a className="hover:text-blue-400" href="https://google.com"><FaFacebook /></a>
                  <a className="hover:text-blue-400" href="https://google.com">
                    <FaXTwitter />

                  </a>
                  <a className="hover:text-blue-400" href="https://google.com">
                    <FaInstagram />
                  </a>
                  <a className="hover:text-blue-400" href="https://google.com">
                    <FaLinkedin />
                  </a>

                </div>
              </div>
            </div>

          </> : <>

            <div className="py-10 px-5 text-black">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}


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
                      <p className="text-2xl text-black  font-semibold  py-2">
                        {card.name}
                      </p>
                      <p>{card.work}</p>
                      <div className="flex flex-row gap-5 p-3 text-xl">
                        <a href="https://google.com"><FaFacebook className="" /></a>
                        <a href="https://google.com">
                          <FaXTwitter />

                        </a>
                        <a href="https://google.com">
                          <FaInstagram />
                        </a>
                        <a href="https://google.com">
                          <FaLinkedin />
                        </a>

                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Members;
