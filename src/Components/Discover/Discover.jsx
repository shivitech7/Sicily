import React from 'react'
import './Discover.css';
import ArrowWhite from '../../Images/Arrow_white.png';
import ArrowBlack from '../../Images/BlackArrow.png';
// import RedVelvetCake from '../../Images/redVelvetCake.jpg';
import ImageBlank from '../../Images/ImageBlank.png';
import Object from '../../Images/Object.png';
import QuoteObject from '../../Images/QuoteObject.png';


const Discover = () => {
    return (
        <div className='main-wrapper'>
            <div className="top-section">
                <div className='left-box'>
                    <p style={{
                        color: '#CD916D',
                        marginBottom: '9px',
                        fontSize: '22px',
                        fontWeight: '400',
                        letterSpacing: '2px',
                        fontFamily: 'Bebas Neue, cursive'
                    }}>THE TASTE COMES FIRST</p>
                    <h1 style={{
                        fontSize: '40px',
                        letterSpacing: '-3px',
                        fontFamily: 'Libre Baskerville, serif',
                        marginBottom: '14px'
                    }}>Pull up a chair. Take a taste. Join <br /> us.
                        Life is so endlessly delicious"</h1>
                    <img style={{
                        marginBottom: '14px'
                    }} width={53} height={10} src={Object} />
                    <p style={{
                        color: '#888888',
                        fontFamily: 'Libre Baskerville, serif',
                        fontWeight: '700',
                        fontSize: '16px',
                        marginBottom: '37px'
                    }}>Morbi semper nulla ut metus vestibulum,
                        at scelerisque <br />leo tristique. Nullam et ex orci.
                        Proin laoreet pharetra <br /> sollicitudin. Donec ultricies pretium elementum.</p>

                    <button className='button check-menu'>
                        <div style={{
                            border: '2px solid #CFCFCF'
                        }} className='button-content'>
                            <p style={{ color: '#222222' }} className='button-text'>
                                CHECK THE MENU
                            </p>
                            <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowBlack} />
                        </div>
                    </button>
                </div>
                <div className="right-box">
                    <div>
                        <img width={517} height={407} src={ImageBlank} />
                    </div>
                    {/* <div className="absolute-image">
                        <img width={280} height={242} src={ImageBlank} />
                    </div> */}
                </div>
                <div className="absolute-image">
                        <img width={280} height={242} src={ImageBlank} />
                    </div>
            </div>

            <hr style={{ backgroundColor: '#3B3B3B', width: '83px', height: '3px', alignSelf: 'center', border: 'none', marginBottom: '33px' }} />

            <div className='middle-section'>

                {/* quote section */}
                <div className="quote-div">
                    <div className='quote-section'>
                        <div style={{
                            width: '55%',
                            position: 'relative',
                            marginTop: '92px',
                            marginLeft: '25px',
                            // border: '1px solid white',
                            marginBottom: '123px',
                            padding: '30px',
                        }}>
                            <img style={{ position: 'absolute', top: '0px', left: '0px' }} width={88} height={57} src={QuoteObject} />
                            <p style={{
                                // marginTop: '92px',
                                fontFamily: 'Libre Baskerville, serif',
                                fontWeight: '400',
                                fontSize: '40px',
                                letterSpacing: '-2.86px',
                                color: 'white',
                                marginBottom: '21px'
                            }}>
                                If more of us valued food & cheer and song
                                above hoarded gold, it would be a merrier
                                world.”
                            </p>
                            <img style={{
                                marginBottom: '21px'
                            }} width={53} height={10} src={Object} />
                            <p style={{
                                fontFamily: 'Bebas Neue, cursive',
                                fontWeight: '400',
                                fontSize: '24px',
                                letterSpacing: '2px',
                                color: 'white',
                                marginBottom: '12px'
                            }}>BEN BURNLEY</p>
                            <p style={{
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                fontSize: '10px',
                                letterSpacing: '2px',
                                color: 'white',
                            }}>CHEF & FOUNDER OF SICILY</p>
                        </div>
                    </div>
                    <div className="quote-image">
                        <img style={{ width: '320px', height: '440px' }} src={ImageBlank} />
                    </div>
                </div>

                {/* menu section */}
                <div className="menu-section">
                    <div className="menu-image-absolute">
                        <img width={362} height={330} src={ImageBlank} />
                    </div>
                    <div className="menu-images">
                        <img width={464} height={565} src={ImageBlank} />
                    </div>
                    <div className="menu-container">
                        <div style={{ marginTop: '99px' }}>
                            <p style={{
                                fontFamily: 'Bebas Neue, cursive',
                                fontWeight: '400',
                                fontSize: '22px',
                                letterSpacing: '2px',
                                color: '#CD916D',
                            }}>TODAY'S MENU</p>
                            <h1 style={{
                                fontFamily: 'Libre Baskerville, serif',
                                fontSize: '40px',
                                letterSpacing: '-2.86px',
                                marginBottom: '14px'
                            }}>Enjoy the day's dish, straight
                                from the chef to you.</h1>
                            <img width={53} height={10} src={Object} />

                            <div style={{ marginBottom: '33px' }}>
                                <div className="menu-item">
                                    <div className="item">
                                        <p className="item-name">Fried Spring Rolls</p>
                                        <p className="item-description">CHICKEN OR VEGETABLE</p>
                                    </div>
                                    <div>
                                        <p className="item-price">$23.00</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="menu-item">
                                    <div className="item">
                                        <p className="item-name">The Summer Roll</p>
                                        <p className="item-description">WITH SHRIMO IN A TAMARIND SAUCE</p>
                                    </div>
                                    <div>
                                        <p className="item-price">$14.50</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="menu-item">
                                    <div className="item">
                                        <p className="item-name">Gai Of Nuur Satay</p>
                                        <p className="item-description">SKEWERED CHICKEN OR BEEF WITH A PEANUT SAUCE</p>
                                    </div>
                                    <div>
                                        <p className="item-price">$15.50</p>
                                    </div>
                                </div>
                            </div>
                            <button className='button check-menu'>
                                <div style={{
                                    border: '2px solid #CFCFCF'
                                }} className='button-content'>
                                    <p style={{ color: '#222222' }} className='button-text'>
                                        CHECK THE MENU
                                    </p>
                                    <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowBlack} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover