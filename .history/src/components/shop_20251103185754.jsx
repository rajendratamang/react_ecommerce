import React from 'react'
import Hero from './common/Hero'
import Layout from './common/Layout'

const Shop = () => {
       const products = [1, 2, 3,4];
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
                        <div className="card shadow border-0 mb-3">
                            <div className="card-body p-4">
                                <h3 className='mb-3'>Categories</h3>
                                <ul>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Kids</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Mens</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Kids</label>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="card shadow border-0 mb-3">
                            <div className="card-body p-4">
                                <h3 className='mb-3'>Brands</h3>
                                <ul>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Puma</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Killer</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Levis</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Flying Machine</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='ps-2'>Mama Earth</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="product card border-0">
                            <div className="card-img">
                                <img src={ProductImg} alt="" className='w-100' />
                            </div>
                            <div className="card-body pt-3">
                                <a href="">Red Check Shirt For Woman</a>
                                <div className="price">
                                    $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shop