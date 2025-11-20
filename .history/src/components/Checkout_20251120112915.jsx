import React from 'react'
import Layout from './common/Layout'

const Checkout = () => {
    return (
        <Layout>
            <div className="container">
                <row>
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb" className='py-4'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="">Home</Link></li>
                                    <li className="breadcrumb-item" ><Link to="/shop">Shop</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </row>
            </div>
        </Layout>
    )
}

export default Checkout