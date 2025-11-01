import React from 'react'


// Import Swiper React components



import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';
import Header from './common/Header';
import Footer from './common/Footer';
import Hero from './common/Hero';
import Layout from './common/Layout';


const Home = () => {
  return (
    <>
      <Layout>
        {/* hero Section */}
        <Hero />
        {/* product section */}
        <LatestProduct />
        {/* Featured Product */}
        <FeaturedProducts />
      </Layout>
    </>
  )
}

export default Home