import React from 'react'


import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';
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