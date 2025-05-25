import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaUser } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import feedbacks from '../Database/Feedbacks.json'
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";


const Feedbacks = () => {

  const { t } = useTranslation();
  const link = useLocation();

  return (
    <section className="container mx-auto px-8">
      <div className="flexcode-container">
        <SectionTitle pathname={link.pathname} title={t("Testimonials")} />
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
          {feedbacks?.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <div className="flexcode-banner-bg p-5 md:p-5 mb-9 rounded-2xl  border border-slate-500 hover:border-[#fc8787f3] transition-all duration-300 cursor-pointer">
                <h2 className="text-xl font-semibold mb-5 line-clamp-1">
                  {feedback.thumbExpression}
                </h2>
                <p className="line-clamp-6">
                  {
                    feedback.details
                  }
                </p>
                <span className="flex flex-col-reverse mt-8 justify-between">
                  <h3 className="text-xl font-semibold mb-4 line-clamp-1">
                    ~ {feedback.userName}
                  </h3>

                </span>
                <div className="w-16 h-16 object-cover rounded-full border-[#fc8787f3] bg-secondary-color border absolute bottom-0">
                  {feedback?.image ? (
                    <img src={feedback.image} className="w-full rounded-full p-1" alt="" />
                  ) : (
                    <FaUser className=" text-[#fc8787f3] w-full h-full p-1 rounded-full" />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedbacks;