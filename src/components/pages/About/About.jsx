import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
        <div className='ab-section'>
            <img className='ab-background' src="https://res.cloudinary.com/plvtinum/image/upload/v1637072287/ecommerce/wave-haikei_qycpqu.svg" alt="" />
            <img className='ab-background' src="https://res.cloudinary.com/plvtinum/image/upload/v1637072376/ecommerce/wave-haikei2_n3e6an.svg" alt="" />
            <h1 className='ab-title'>About Us</h1>
            <div className="contain-ab-image">
              <img className='ab-image' src="https://res.cloudinary.com/plvtinum/image/upload/v1637060290/ecommerce/undraw_team_sosmqa.svg" alt="" />
            </div>
            <div className='ab-content'>
                <p className='ab-text'><span className='ab-s'>Women Souk</span> is Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same way.</p>
            </div> 
            <div className="contain-ab-image">
              {/* <img className='ab-image' src="https://res.cloudinary.com/plvtinum/image/upload/v1637060245/ecommerce/undraw_about_yif0db.svg" alt="" />             */}
              <img className='ab-image' src="https://res.cloudinary.com/plvtinum/image/upload/v1637060245/ecommerce/undraw_team_re__bm2m7q.svg" alt="" /> 
            </div>
            <div className="ab-content">
                <p className='ab-text'>We have a really dedicated team that work hard to provide the best user experience and choose the best products to display.</p>
            </div>
        </div>
        </>
    )
}

export default About
