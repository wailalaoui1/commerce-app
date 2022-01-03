import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Fa from 'react-icons/fa'
import * as Gi from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { Badge } from '@material-ui/core'
import './Navbar.css'

const Navbar = ({ totalItems }) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click)
    const showButton = () => window.innerWidth <= 964 ? setButton(true) : setButton(false)

    useEffect(() => {
         showButton()
        window.addEventListener('resize', showButton)
        return () => {
            // cleanup
            window.removeEventListener('resize', showButton)
        }
    //input
    }, [])

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='navbar'>
                <div className='navbar-container m-container'>
                    <Link
                     to='/' 
                     className="m-nav-links"
                    >
                    <h1 className='nav-title'>Women Souk</h1>  
                    </Link>

                    <div className='nav-con'>
                        <div className="first-n">
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <Link to='/allproducts' className='nav-links'>
                            <li className="nav-item" onClick={handleClick}>Products</li>
                            </Link>
                            <Link to='/contact' className='nav-links'>
                            <li className="nav-item" onClick={handleClick}>Contact</li>
                            </Link>
                            <Link to='/about' className='nav-links'>
                            <li className="nav-item" onClick={handleClick}>About Us</li>
                            </Link>
                            <Link to='/terms-of-service' className='nav-links'>
                            <li className="nav-item" onClick={handleClick}>Terms Of Service</li>
                            </Link>
                        </ul>
                        </div>

                        <div className="second-n">
                        <Link className='cart-icon' to='/cart'>
                         <Badge className='badge' badgeContent={totalItems} color='secondary'><Gi.GiShoppingCart className='icon' /></Badge>
                        </Link>
                        </div>
                    

                        <div 
                        style={button ? {display: 'flex'} : {display: 'none'}} 
                        className='menu-icon'
                        onClick={handleClick}
                        >
                            {click ? <Fa.FaTimes /> : <Fa.FaBars />}
                        </div>
                    </div>

                </div>
            </nav>
           </IconContext.Provider> 
        </>
    )
}

export default Navbar

