import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BCarousel = () => {
    return (
        <>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/wailalaoui/image/upload/v1641227602/slide2_n1w5pn.png"
                alt="Forth slide"
                />
                <Carousel.Caption className='cs'>
                 {/* <button className='buy-btn'><a className='a-btn' href='/productdetails/prod_4OANwRGKJqovYL'>Shop Now</a></button> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/wailalaoui/image/upload/v1641227602/slide1_caeec6.png"
                alt="Third slide"
                />
                <Carousel.Caption className='cs2'>
                 {/* <button className='buy-btn'><a className='a-btn' href='/productdetails/prod_zkK6oL90nK5Xn0'>Shop Now</a></button> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>  
        </>
    )
}

export default BCarousel


