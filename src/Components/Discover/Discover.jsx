import React from 'react'
import './Discover.css';
import ArrowWhite from '../../Images/Arrow_white.png';
// import RedVelvetCake from '../../Images/redVelvetCake.jpg';
import ImageBlank from '../../Images/ImageBlank.png';
import Object from '../../Images/Object.png';

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
                    }}>Pull up a chair. Take a taste. Join us.
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
                        at scelerisque leo tristique. Nullam et ex orci.
                        Proin laoreet pharetra sollicitudin. Donec ultricies pretium elementum.</p>

                    <button className='button check-menu'>
                        <div style={{
                            border: '2px solid #CFCFCF'
                        }} className='button-content'>
                            <p style={{ color: '#222222' }} className='button-text'>
                                CHECK THE MENU
                            </p>
                            <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} />
                        </div>
                    </button>
                </div>
                <div className="right-box">
                    <div>
                        <img width={517} height={407} src={ImageBlank} />
                    </div>
                    <div className="absolute-image">
                        <img width={280} height={242} src={ImageBlank} />
                    </div>
                </div>
            </div>
            <hr style={{backgroundColor:'#3B3B3B', width:'83px', height:'3px', alignSelf:'center', border:'none'}} />
    
        </div>
    )
}

export default Discover