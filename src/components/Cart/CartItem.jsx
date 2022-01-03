import React from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './CartItem.css'

function CartItem({ item, onAddToCartQty, onRemoveCart }) {
    return (

            <div className='my-box'>
                {/* image box */}
                <div className='slide-image'>
                    <img src={item.image.url} alt={item.name} />
                    <div className='my-overlay'>
                        <Link to={`/productdetails/${item.product_id}`} className='buy-btn'>View Product</Link>
                    </div>
                </div>
                {/* detail box */}
                <div className="detail-box">
                    <div className='type'>
                        <a href="#box" className='title'>{item.name}</a>
                    <a href="#box" className='price'>{item.line_total.formatted_with_symbol}</a>
                    </div>

                    <div className="cart-it">
                        <Button className='operators' type="button" size="large" onClick={() => onAddToCartQty(item.id, item.quantity - 1)}>-</Button>
                        <h4>{item.quantity}</h4>
                        <Button className='operators' type="button" size="large" onClick={() => onAddToCartQty(item.id, item.quantity + 1)}>+</Button>
                        <Button variant='contained' type='button' color="secondary" onClick={() => onRemoveCart(item.id)}>Remove</Button>
                    </div>
                </div>
            </div>
    )
}

export default CartItem
