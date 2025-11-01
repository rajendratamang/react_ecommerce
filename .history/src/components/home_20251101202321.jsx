import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import SliderOneImg from '../assets/images/banner-1.jpg'
import SliderTwoImg from '../assets/images/banner-2.jpg'
import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';
import Header from './common/Header';
import Footer from './common/Footer';


const Home = () => {
  return (
    <>
      {/* header */}
      <Header />
     {/* hero Section */}

      {/* product section */}
      <LatestProduct />

      {/* Featured Product */}
      <FeaturedProducts />

      {/* footer */}
      <Footer />
    </>
  )
}

export default Home