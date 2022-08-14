import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='Navbar'>
            <span className='nav-logo'>LautyDev</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href='/'>Home</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar