import React from 'react'
import Hero from './common/Hero'
import Layout from './common/Layout'

const Shop = () => {
    return (
        <Layout>
            <div className="container">
                <nav aria-label="breadcrumb" className='py-4'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <h3>Categories</h3>
                                ul>li
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shop