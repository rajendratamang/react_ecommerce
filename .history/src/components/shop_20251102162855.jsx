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
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shop