import React from 'react'
import Layout from './common/Layout'
import Home from './home'
import Shop from './shop'
import { Link } from 'react-router-dom'
import 

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
                    <div className="col-md-12">
                        <h2 className='border-bottom pb-3'>Cart </h2>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    
    )
}

export default Cart