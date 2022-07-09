import React from 'react'
import Icon from '../../Images/icon.png';
import ArrowWhite from '../../Images/Arrow_white.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
                        <li><Link className='nav-link' style={{ textDecoration: 'none', color: '#888888' }} to='/'>DISCOVER</Link></li>
                        <li><Link className='nav-link' style={{ textDecoration: 'none', color: '#888888' }} to='/menu'>OUR MENU</Link></li>
                        <li><Link className='nav-link' style={{ textDecoration: 'none', color: '#888888' }} to='/about'> ABOUT US  </Link></li>
                        <li> <Link className='nav-link' style={{ textDecoration: 'none', color: '#888888' }} to='/gallery'>GALLERY</Link></li>
                        <li><Link className='nav-link' style={{ textDecoration: 'none', color: '#888888' }} to='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
                <Link to="/book-a-table"> <button className='button'>
                    <div className='button-content'>
                        <p className='button-text'>
                            BOOK A TABLE
                        </p>
                        <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} alt="white arrow" />
                    </div>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar