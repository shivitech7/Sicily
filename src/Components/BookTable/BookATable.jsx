import React, { useState } from 'react'
import './BookATable.css';
import Object from '../../Images/Object.png';
import ArrowWhite from '../../Images/Arrow_white.png';

const BookATable = () => {

    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState();

    const dropdown1_options = [
        { value: 'ROMANTIC DINNER', label: 'ROMANTIC DINNER' },
        { value: 'FAMILY DINNER', label: 'FAMILY DINNER' },
        // { value: 'REGULAR', label: 'Vanilla' },
    ];

    const dropdown2_options = [
        { value: '2 SEATS', label: '2 SEATS' },
        { value: '3 SEATS', label: '3 SEATS' },
        { value: '4 SEATS', label: '4 SEATS' },
    ];

    const dropdown3_options = [
        { value: '9:30 PM', label: '9:30 PM' },
        { value: '10:30 PM', label: '10:30 PM' },
        { value: '11:30 PM', label: '11:30 PM' },
    ];

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    const bookReservation = () => {
        if (firstName !== '' && lastName !== '' && phoneNumber !== ''
            && selectedOption1 !== '' && selectedOption2 !== '' && selectedOption3 !== '') {
            setIsValid(true);
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setSelectedOption1(null);
            setSelectedOption2(null);
            setSelectedOption3(null);
        } else {
            setIsValid(false);
        }
        setTimeout(() => {
            setIsValid();
        }, 2000);
    }
    return (
        <div className="bookTable-wrapper">
            <div className="bookTable-header-wrapper">
                <h1 style={{
                    letterSpacing: '2px'
                }} className="colored-heading">BOOK A TABLE</h1>
                <h1 style={{
                    letterSpacing: '-3px',
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: '10px'
                }} className="white-colored-content bookTable-tagLine">Let food be thy medicine and medicine <br />be thy food.</h1>
                <img width={53} height={10} src={Object} />
            </div>
            <div className="bookTable-form-wrapper">
                <div className="form-wrapper">
                    <div className="form-input-section">
                        <input onChange={(e) => {
                            setFirstName(e.target.value);
                        }} value={firstName} className="input" placeholder="FIRST NAME" />
                    </div>
                    <div className="form-input-section">
                        <input onChange={(e) => {
                            setLastName(e.target.value);
                        }} value={lastName} className="input" placeholder="LAST NAME" />
                    </div>
                    <div className="form-input-section">
                        <input onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }} value={phoneNumber} className="input" placeholder="PHONE NUMBER" />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }} className="form-input-section">

                        <Dropdown
                            className="dropdown"
                            label="CATEGORY"
                            options={dropdown1_options}
                            value={selectedOption1}
                            onChange={handleChange1}
                        />

                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }} className="form-input-section">
                        <Dropdown
                            className="dropdown"
                            label="CATEGORY"
                            options={dropdown2_options}
                            value={selectedOption2}
                            onChange={handleChange2}
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }} className="form-input-section">
                        <Dropdown
                            className="dropdown"
                            label="CATEGORY"
                            options={dropdown3_options}
                            value={selectedOption3}
                            onChange={handleChange3}
                        />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <button onClick={() => {
                        bookReservation();
                    }} className='button'>
                        <div className='button-content'>
                            <p className='button-text'>
                                BOOK A RESERVATION
                            </p>
                            <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} alt="white arrow" />
                        </div>
                    </button>
                    {
                        isValid ? (
                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '10px'
                            }}>Your reservation is successfuly done! </h1>
                        ) : (isValid == false) ? (
                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '10px',
                                color: 'orange'
                            }}>Please fill all the details above!</h1>
                        ) : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default BookATable

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label className="dropdown">
            {label}
            <select className="dropdown-select" value={value} onChange={onChange}>
                {options.map((option) => (
                    <option style={{
                        border: '1px solid red'
                    }} className="select-option" value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};