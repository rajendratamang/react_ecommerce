import React from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
const Checkout = () => {
    return (
        <Layout>
            <div className="container pb-5">
                <div div className='row' >
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb" className='py-4'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="">Home</Link></li>
                                    <li className="breadcrumb-item" ><Link to="">Check Out</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="border-bottom pb-3"><strong>Billing Address</strong></h3>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className='form-control'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>   
            </div>
        </Layout>
    )
}

export default Checkout