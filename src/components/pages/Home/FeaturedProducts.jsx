import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedProducts.css'

const FeaturedProducts = ({ products, onAddToCart }) => {
    return (
        <>
        <div className="con">
            <div className='my-heading'> 
                <h1 className='featured-title' style={{marginTop: 20}}>Featured Products</h1>
                <hr className='line' />
            </div>

            {/* box slider */}
            <div className="box-container">

            {products.slice(0, 4).map(item => (
                <div className='my-box' key={item.id}>
                    <div className='slide-image'>
                        <img src={item.image.url} alt="" />
                        <div className='my-overlay'>
                            <a href={`/productdetails/${item.id}`} className='buy-btn'>View Product</a>
                            <Button onClick={() => onAddToCart(item.id, 1)} className='buy-btn'>Add To Cart</Button>
                            <Link to={`/cart`} className='buy-btn'>View Cart</Link>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#box" className='title'>{item.name}</a>
                            <a href="#box" className='price'>{item.price.formatted_with_symbol}</a>
                        </div>
                        <span>New Arrival</span>       
                    </div>
                </div>   
            ))}
            </div>   
        </div>
        </>
    )
}

export default FeaturedProducts

