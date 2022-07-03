import React, { useState } from 'react'
import './Footer.css';
import HighQuality from '../../Images/HighQuality.png';
import QuickService from '../../Images/QuickService.png';
import RoyalTaste from '../../Images/RoyalTaste.png';
import Map from '../../Images/map.png';
import ArrowBlack from '../../Images/BlackArrow.png';
import Object from '../../Images/Object.png';
import Twitter from '../../Images/twitter.png';
import Facebook from '../../Images/facebook.png';
import Instagram from '../../Images/instagram.png';

const Footer = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="footer-wrapper">
            < div className="restaurant-services-section" >
                <div className="restaurant-service">
                    <img width={26} height={32} src={HighQuality} />
                    <h1 className="service-type">High Quality</h1>
                    <p className="service-description">
                        We put only the best quality ingriedients
                        in every dish and plate we serve
                    </p>
                </div>
                <div className="restaurant-service">
                    <img width={22} height={32} src={RoyalTaste} />
                    <h1 className="service-type">Royal Taste</h1>
                    <p className="service-description">
                        We are dedicated to serve only the finest
                        and tastiest food to our customers
                    </p>
                </div>
                <div className="restaurant-service">
                    <img width={28} height={32} src={QuickService} />
                    <h1 className="service-type">Quick Service</h1>
                    <p className="service-description">
                        Worry not about waiting too long for your dish,
                        We got that covered for you!
                    </p>
                </div>
            </div >
            <div className="map">
                {/* <img height={442} width="100%" src={Map} /> */}
            </div>
            <div className="subscribe-container">
                <div className="subscribe-left">
                    <p style={{
                        fontFamily: 'Bebas Neue, cursive',
                        fontWeight: '700',
                        fontSize: '22px',
                        letterSpacing: '2px',
                        color: '#CD916D',
                    }}>SAVE 20% IN DEALS</p>
                    <h1 style={{
                        fontFamily: 'Libre Baskerville, serif',
                        fontWeight: '400',
                        fontSize: '42px',
                        letterSpacing: '-3px',
                        marginBottom: '15px'
                    }}>Our Weekly Newsletter</h1>
                    <img width={53} height={10} src={Object} />
                </div>
                <div className="subscribe-right">
                    <input placeholder="TYPE YOUR EMAIL" className="email-input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className='button check-menu subscribe'>
                        <div style={{
                            border: '2px solid #CFCFCF'
                        }} className='button-content'>
                            <p style={{ color: '#222222' }} className='button-text'>
                                SUBSCRIBE
                            </p>
                            <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowBlack} />
                        </div>
                    </button>
                </div>
            </div>

            {/* footer bottom */}
            <div className="footer-bottom-container">
                <div className="details-container">
                    <div className="detail-container">
                        <p className="detail-heading">More</p>
                        <p className="detail">Our Blog</p>
                        <p className="detail">Contact us</p>
                        <p className="detail">Delivery service</p>
                        <p className="detail">Terms of use</p>
                    </div>
                    <div className="detail-container">
                        <p className="detail-heading">CONTACT US</p>
                        <p className="detail">+891 364 7013</p>
                        <p className="detail">Contact@sicily.theme</p>
                        <p className="detail">1418 Canis Heights Drive</p>
                        <p className="detail">Los Angeles, CA</p>
                    </div>
                    <div className="detail-container">
                        <p className="detail-heading">FOLLOW US</p>
                        <div className="socialmedia-icons">
                            <img width={43} height={43} src={Twitter} />
                            <img width={43} height={43} src={Facebook} />
                            <img width={43} height={43} src={Instagram} />
                        </div>
                        <p className="detail">2018 <span>&copy;</span> Sicily</p>
                        <p className="detail">Made by <span style={{
                            padding:'3px',
                            borderBottom: '2px solid #888888'
                        }}>Royalz Store</span></p>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    marginBottom: '42px',
                    // border:'1px solid white'
                }} >
                    <h1 style={{
                        fontFamily: 'Libre Baskerville, serif',
                        fontWeight: '400',
                        fontSize: '48px',
                        letterSpacing: '-2px',
                        textAlign:'center',
                        width:'100%'
                    }} className="footer-name">Sicily</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer