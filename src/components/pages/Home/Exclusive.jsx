import React from 'react'
import './Exclusive.css'

const Exclusive = () => {
    return (
        <>
        <div className="con">
            <div className='my-heading'> 
                <h1 className='featured-title'>Exclusive Offer</h1>
                <hr className='line' />
             </div> 

            <div className="offer">
                <div className="my-row">
                    <div className="column-3">
                        <img className='c-img' src="https://res.cloudinary.com/plvtinum/image/upload/v1636990850/ecommerce/Shoes_sf0bz9.jpg" alt="" />
                    </div>
                    <div className="column-2">
                        <h4 className='c-h4'>Exclusively Available On Our Store</h4>
                        <h1 className='c-h1'>Puma</h1>
                        <p className='c-p'>This is our exclusive offer, check it now.</p>
                        <button className='buy-btn my-btn'><a href='/productdetails/prod_gnZO5k43Avl7MN'>View Now</a></button>
                    </div>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Exclusive
