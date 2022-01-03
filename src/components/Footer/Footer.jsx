import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import './Footer.css'

const Footer = ({ products }) => {
    const { pathname } = useLocation();
    const [resize, setResize] = useState(false)
    const regex = /\/[a-z|A-Z]+\//g
    const windowSize = () =>  window.innerWidth <= 974 ? setResize(true) : setResize(false) 

    useEffect(() => {
        windowSize()
        window.addEventListener('resize', windowSize)
        return () => {
            // cleanup
            window.removeEventListener('resize', windowSize)
        }
    }, [])

    return (
        <>
            <footer className='m-footer' style={{marginTop: resize && regex.test(pathname) ? '140px' : '0px'}} >
                <nav className='nav'>
                    <ul className='nav-l'>
                        <h1 className='f-title'>Women Souk</h1>
                        <li className='nav-i'>Copyright &copy;</li>
                    </ul>
                    <div className='m-nav-links'>
                        <div className='div-item'>
                           <h4 className='nav-t'>Links</h4> 
                           <li className='nav-i'><a style={{color: '#fff'}} href='/about'>About Us</a></li>
                           <li className='nav-i'><a style={{color: '#fff'}} href='/contact'>Contact</a></li>
                           <li className='nav-i'><a style={{color: '#fff'}} href='/terms-of-service'>Terms Of Service</a></li>
                        </div>  
                        <div className='div-item'>
                           <h4 className='nav-t'>Social Media</h4> 
                           <li className='nav-i'>Facebook</li>
                           <li className='nav-i'>Instagram</li>
                           <li className='nav-i'>Snapchat</li> 
                        </div>     
                    </div>
                </nav>

            </footer>
       </> 
    )
}

export default Footer
