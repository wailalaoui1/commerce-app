import React, { useState } from 'react';
import { useParams } from 'react-router';
import PageNotFound from '../PageNotFound/PageNotFound';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import './ProductDetails.css';

const ProductDetails = ({ products, onAddToCart }) => {

    const [quantity, setQuantity] = useState(1);
    const [index, setIndex] = useState(0);
    const myId = useParams().id;
    const oneProduct = products.filter(product => product.id === myId)[0]
    if(products.length === 0) 
    return(
       <> 
        <div className='loading'>
            <h1 className='loading-title'>Loading ...</h1>
             <Loading />
        </div>
      </>
    )

    else if(products)
    return (
       <div className='product-details'>
           <div className="product-carousel">
                {oneProduct.assets.map((img, i) => (
                  <div className={index === i ? 'big-images animation' : 'big-images'}>
                    <img className='carousel-img' src={oneProduct.assets[i].url} alt="" /> 
                  </div>
                ))}
                <div className="small-images">
                    {oneProduct.assets.map((img, i) => (
                        <img 
                         key={i} 
                         onClick={
                            () => {
                             setIndex(i)
                            }
                          } 
                         className={index === i ? 'images activ' : 'images'}
                         src={img.url} 
                         alt=""  
                        />     
                    ))}
                </div>
           </div>  
           <div className="product-body">
               <div className="product-body-elements">   
                    <h1 className='p-title'>{oneProduct.name}</h1>    
                    <p className='p-one-body p-body' dangerouslySetInnerHTML={{__html: oneProduct.description}} />
                </div>
               <div className="combine">
                    <h3 className='p-price'>{oneProduct.price.formatted_with_symbol}</h3> 
                    <div className="cart-combine">
                        <Button className='operators' 
                          type="button" 
                          size="large" 
                          onClick={
                            () => setQuantity(quantity > 1 ? quantity - 1 : 1)
                          }
                        >
                        -
                        </Button>
                        <h4>{quantity}</h4>
                        <Button 
                          className='operators' 
                          type="button" 
                          size="large" 
                          onClick={
                             () => setQuantity(quantity + 1)
                            }
                        >
                        +
                        </Button>
                    </div>
               </div>
            
                <div className="p-buttons">
                    <button onClick={() => onAddToCart(oneProduct.id, quantity)} className='p-button-f buy-btn'>Add To Cart</button>
                    <button onClick={() => onAddToCart(oneProduct.id, 1)} className='p-button buy-btn'><Link to={`/cart`}>Buy Now</Link></button>
                </div>
           </div>
         
       </div> 
    )

    else return (
     <> 
       <PageNotFound />
     </>
   )
   
}

export default ProductDetails

