import React from 'react';
import Layout from './common/Layout';
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row col-md-12">
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                            <li className="breadcrumb-item" ><Link href="/shop">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dummy Product Title</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </Layout>
    )
}

export default Product