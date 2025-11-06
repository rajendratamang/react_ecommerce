import React from 'react'
import Layout from './common/Layout'
import Home from './home'
import Shop from './shop'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb" className='py-4'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item" ><Link to="/shop">Shop</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Cart</li>
                            </ol>
                        </nav>
                    </div>
                    .col-md-12
                </div>
            </div>
        </Layout>
    
    )
}

export default Cart