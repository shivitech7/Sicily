import React, { useState } from 'react'
import Object from '../../Images/Object.png';
import './Contact.css';
import ArrowWhite from '../../Images/Arrow_white.png';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [isValid, setIsValid] = useState();
    const subscribe = () => {
        setIsClicked(true);
        console.log(name);
        if (name !== '' && email !== '' && subject !== '' && message !== '') {
            setIsValid(true);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setIsValid(false);
        }
        setTimeout(() => {
            setIsClicked(false);
            setIsValid();
        }, 2000);

    }
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
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }} value={name} className="input-field" placeholder="NAME" />
                    </div>
                    <div className="input-section">
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} value={email} className="input-field" placeholder="EMAIL" />
                    </div>
                    <div className="input-section">
                        <input onChange={(e) => {
                            setSubject(e.target.value)
                        }} value={subject} className="input-field" placeholder="SUBJECT" />
                    </div>
                    <div style={{
                        marginBottom: '28px',
                        height: '160px'
                    }} className="input-section">
                        <input style={{
                            paddingTop: '15px',
                            height: '160px'
                        }} onChange={(e) => {
                            setMessage(e.target.value)
                        }} value={message} className="input-field" placeholder="MESSAGE" />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '105px'
                    }}>
                        <button style={{
                            alignSelf: 'flex-end'
                        }} className='button' onClick={() => {
                            subscribe();
                        }}>
                            <div className='button-content'>
                                <p className='button-text'>
                                    SEND MESSAGE
                                </p>
                                <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} />
                            </div>
                        </button>
                        {
                            isClicked ? (
                                isValid ? (
                                    <h1 style={{
                                        textAlign: 'end',
                                        fontSize: '20px',
                                        marginTop: '10px'
                                    }}>Message sent successfuly!</h1>
                                ) : (
                                    <h1 style={{
                                        textAlign: 'end',
                                        fontSize: '20px',
                                        color: 'red',
                                        marginTop: '10px'
                                    }}>Please fill all the fields!</h1>
                                )
                            ) :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;