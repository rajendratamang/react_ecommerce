import React from 'react';
import Layout from './common/Layout';
// import { link } from 'react-router-dom';
const Product = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row col-md-12">
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/home">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page"><link href="/shop">Shop</link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </Layout>
    )
}

export default Product