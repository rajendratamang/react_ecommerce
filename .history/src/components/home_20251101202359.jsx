import React from 'react'


// Import Swiper React components


// Import Swiper styles
import 'swiper/css';

import SliderOneImg from '../assets/images/banner-1.jpg'
import SliderTwoImg from '../assets/images/banner-2.jpg'
import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';
import Header from './common/Header';
import Footer from './common/Footer';
import Hero from './common/Hero';


const Home = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* hero Section */}
      <Hero />
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