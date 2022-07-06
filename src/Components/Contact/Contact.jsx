import React from 'react'
import Object from '../../Images/Object.png';
import './Contact.css';
import ArrowWhite from '../../Images/Arrow_white.png';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="header-wrapper">
                <h1 style={{
                    fontSize: '48px',
                    letterSpacing: '-3px'
                }} className="white-colored-content">Contact us</h1>
                <img width={53} height={10} src={Object} />
            </div>
            <div className="contact-form-wrapper">
                <div className="contact-details">
                    <h1 style={{
                        letterSpacing: '2px',
                        fontSize: '22px',
                        marginBottom: '10px'
                    }} className="colored-heading">CONTACT US</h1>
                    <h1 style={{
                        marginBottom: '10px'
                    }} className="white-colored-content contact-detail">+891 364 7013</h1>
                    <h1 className="white-colored-content contact-detail">contact@sicily.theme</h1>
                    <h1 className="white-colored-content contact-detail">1418 Canis Heights Drive</h1>
                    <h1 className="white-colored-content contact-detail">Los Angeles,CA</h1>
                    <img width={53} height={10} src={Object} />
                </div>
                <div className="form">
                    <div className="input-section">
                        <input className="input-field" placeholder="NAME" />
                    </div>
                    <div className="input-section">
                        <input className="input-field" placeholder="EMAIL" />
                    </div>
                    <div className="input-section">
                        <input className="input-field" placeholder="SUBJECT" />
                    </div>
                    <div style={{
                        marginBottom: '28px',
                        height: '160px'
                    }} className="input-section">
                        <textarea style={{
                            paddingTop: '15px',
                            height: '160px'
                        }} className="input-field" placeholder="MESSAGE" />
                    </div>
                    <button style={{
                        alignSelf: 'flex-end',
                        marginBottom: '105px'
                    }} className='button'>
                        <div className='button-content'>
                            <p className='button-text'>
                                SEND MESSAGE
                            </p>
                            <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;