import React from 'react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  

  return (
    <div className="swiper-nav-btns w-full flex justify-center items-center">
      <button className='.swiper-button-prev cursor-pointer' onClick={() => swiper.slidePrev()}>{'<'}</button>
      <button className='.swiper-button-next cursor-pointer' onClick={() => swiper.slideNext()}>{'>'}</button>
    </div>
  );
};