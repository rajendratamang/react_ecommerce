import React from 'react'
import Layout from './common/Layout'
const Product = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row col-md-12">
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/home">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </Layout>
    )
}

export default Product