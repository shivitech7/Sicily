import React, { useState } from 'react'
import './BookATable.css';
import Object from '../../Images/Object.png';
import ArrowWhite from '../../Images/Arrow_white.png';
import Select, { defaultTheme } from 'react-select';

const BookATable = () => {
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
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
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
                }} className="white-colored-content">Let food be thy medicine and medicine <br />be thy food.</h1>
                <img width={53} height={10} src={Object} />
            </div>
            <div className="bookTable-form-wrapper">
                <div className="form-wrapper">
                    <div className="form-input-section">
                        <input className="input" placeholder="FIRST NAME" />
                    </div>
                    <div className="form-input-section">
                        <input className="input" placeholder="LAST NAME" />
                    </div>
                    <div className="form-input-section">
                        <input className="input" placeholder="PHONE NUMBER" />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }} className="form-input-section">
                        <Select
                            autoFocus={true}
                            className="input-dropdown"
                            placeholder="CATEGORY"
                            defaultValue={selectedOption1}
                            onChange={setSelectedOption1}
                            options={dropdown1_options}
                            theme={(theme) => ({
                                ...theme,
                                border: 'none',
                                outline: 'none',
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    neutral80: '#888888',
                                    primary: '#888888',
                                    neutral0: '#222222',
                                    primary25: 'white'
                                },

                            })}
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }} className="form-input-section">
                        <Select
                            autoFocus={true}
                            className="input-dropdown"
                            placeholder="SEATS"
                            defaultValue={selectedOption2}
                            onChange={setSelectedOption2}
                            options={dropdown2_options}
                            theme={(theme) => ({
                                ...theme,
                                border: 'none',
                                outline: 'none',
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    neutral80: '#888888',
                                    primary: '#888888',
                                    neutral0: '#222222',
                                    primary25: 'white'
                                },

                            })}
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }} className="form-input-section">
                        <Select
                            autoFocus={true}
                            className="input-dropdown"
                            placeholder="TIME"
                            defaultValue={selectedOption3}
                            onChange={setSelectedOption3}
                            options={dropdown3_options}
                            theme={(theme) => ({
                                ...theme,
                                border: 'none',
                                outline: 'none',
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    neutral80: '#888888',
                                    primary: '#888888',
                                    neutral0: '#222222',
                                    primary25: 'white'
                                },

                            })}
                        />
                        {/* <input className="input" placeholder="CATEGORY" /> */}
                    </div>
                </div>
                <button className='button'>
                    <div className='button-content'>
                        <p className='button-text'>
                            BOOK A RESERVATION
                        </p>
                        <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} alt="white arrow" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default BookATable