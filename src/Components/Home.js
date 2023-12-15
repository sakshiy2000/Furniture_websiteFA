import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import HomeAllCard from './HomeAllCard';



const Home = () => {
  return (
    <>
      <div className='sliders'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src='.\assets\Images\Livingmainimg.jpeg' className='swiper-img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='.\assets\Images\Dinning.jpeg' className='swiper-img' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='.\assets\Images\Bedroom.jpeg' className='swiper-img' /> 
          </SwiperSlide>
          <SwiperSlide>
              <img src='.\assets\Images\Office.webp' className='swiper-img' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='.\assets\Images\swipe3.avif' className='swiper-img' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='.\assets\Images\swipe4.webp' className='swiper-img' />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <h1 className='text-center mt-5'>Categories......</h1>
      </div>

       {/* render home card here */}
       <HomeAllCard/>

    </>
  )
}

export default Home;