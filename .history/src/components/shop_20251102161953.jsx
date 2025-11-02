import React from 'react'
import Hero from './common/Hero'
import Layout from './common/Layout'

const Shop = () => {
    return (
        <Layout>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
        </Layout>
    )
}

export default Shop