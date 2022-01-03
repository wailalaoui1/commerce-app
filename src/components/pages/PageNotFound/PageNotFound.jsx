import React from 'react'
import './PageNotFound.css'

const PageNotFound = (props) => {
    console.log('props',props)
    return (
        <div className='error'>
            <div className="error-body">
                <h1 className='error-t'>Error 404</h1>
                <p className='error-p'>Page Not Found</p>
            </div>
            <div className='error-img'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1634575325/ecommerce/undraw_warning_cyit_vveexz.svg" alt="" />
            </div>
        </div>
    )
}

export default PageNotFound
