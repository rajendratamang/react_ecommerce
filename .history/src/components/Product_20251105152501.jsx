import React, { useState } from 'react';
import Layout from './common/Layout';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImgOne from "../assets/images/Mens/five.jpg";
import ProductImgTwo from "../assets/images/Mens/six.jpg";
import ProductImgThree from "../assets/images/Mens/seven.jpg";
const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Layout>
            <div className="container product-detail">
                <div className="row col-md-12">
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item" ><Link to="/shop">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dummy Product Title</li>
                        </ol>
                    </nav>
                </div>
                
            </div>
        </Layout>
    )
}

export default Product