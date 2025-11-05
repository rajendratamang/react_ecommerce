import React from 'react'
import Layout from './common/Layout'
const Product = () => {
    return (
        <Layout>
    <div className="container">  <nav aria-label="breadcrumb" className='py-4'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav></div>
        </Layout>
    )
}

export default Product