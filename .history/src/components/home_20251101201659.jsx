import React from 'react'

import logoBlack from '../assets/images/logo-white.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import SliderOneImg from '../assets/images/banner-1.jpg'
import SliderTwoImg from '../assets/images/banner-2.jpg'
import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';
import Header from './common/Header';


const Home = () => {
  return (
    <>
      {/* header */}
      <Header />
      <section className='section-1'>
        {/* /**** Swiper Slider Main **********/}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }}
        >
          <SwiperSlide>
            <div className="content" style={{ backgroundImage: `url(${SliderOneImg})` }}>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ backgroundImage: `url(${SliderTwoImg})` }}>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* product section */}
      <LatestProduct />

      {/* Featured Product */}
      <FeaturedProducts />

      {/* footer */}

    </>
  )
}

export default Home