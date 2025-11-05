import React, { useState } from 'react';
import Layout from './common/Layout';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImg from "../assets/images/Mens/five.jpg";
import ProductImg from "../assets/images/Mens/five.jpg";
const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Layout>
            <div className="container">
                <div className="row col-md-12">
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item" ><Link to="/shop">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dummy Product Title</li>
                        </ol>
                    </nav>
                </div>
                <div className="row col-md-5">
                    <div className="row col-2">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                            }}
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            direction={`vertical`}
                            spaceBetween={10}
                            slidesPerView={6}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-2"
                        >

                            <SwiperSlide>
                                <div className='content'>
                                    <img
                                        src={ProductImg}
                                        alt=""
                                        height={100}
                                        className='w-100' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-10">

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                            }}
                            loop={true}
                            spaceBetween={0}
                            navigation={true}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >

                            <SwiperSlide >
                                <div className='content'>
                                    <img
                                        src={ProductImg}
                                        alt=""
                                        className='w-100' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="col-md-7"></div>
            </div>
        </Layout>
    )
}

export default Product