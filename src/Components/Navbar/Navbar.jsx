import React from 'react'
import Icon from '../../Images/icon.png';
import ArrowWhite from '../../Images/Arrow_white.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="logo">
                    <span className='icon restaurant'>
                        <img width={30} height={10.01} src={Icon} alt="Restaurant logo icon" />
                    </span>
                    <h1 className='logo-name'>Sicily</h1>
                </div>
            </div>
            <div className="n-right">
                <div className='n-list'>
                    <ul>
                        <li>DISCOVER</li>
                        <li>OUR MENU</li>
                        <li>ABOUT US</li>
                        <li>GALLERY</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <button className='button'>
                    <div className='button-content'>
                        <p className='button-text'>
                            BOOK A TABLE
                        </p>
                        <img style={{marginBottom: '3px'}} width={20.01} height={10} src={ArrowWhite} />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar