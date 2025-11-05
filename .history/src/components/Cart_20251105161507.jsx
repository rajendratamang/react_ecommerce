import React from 'react'
import Layout from './common/Layout'

const Cart = () => {
  return (
   <Layout>
   <div className="container">
    <div className="row">
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

export default Cart