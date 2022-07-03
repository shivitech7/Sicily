import React from 'react'
import Object from '../../Images/Object.png';
import './Menu.css';

const Menu = () => {
    return (
        <div className="main-wrapper">
            <div className="menu-quote-wrapper">
                <h1 className="colored-heading">OUR MENU</h1>
                <h1 style={{
                    marginBottom: "32px",
                    textAlign: 'center',
                    width: '40%',
                    // border:'1px solid white'
                }} className="white-colored-content">After a good dinner one can forgive
                    anybody, even one's own relations.</h1>
                <img width={53} height={10} src={Object} />
            </div>
            <div className="middle-section-menu">

                {/* starters */}
                <div style={{
                    marginBottom: '69px'
                }} className="menu-category-wrapper">
                    <h1 style={{
                        letterSpacing: '4.1px'
                    }} className="colored-heading">ENTREES</h1>
                    <div className="category-items-wrapper">
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px',
                                    minWidth: '200px'
                                }} className="white-colored-content">Fried Spring Rolls</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">CHICKEN OR VEGETABLE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$3.00</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Gai Of Nuur Satay</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">SKEWERED CHICKEN OR WITH A PENUT SAUCE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$5.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Thai Summer Roll</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">WITH SHRIMP IN A TAMARIND SAUCE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$4.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Fried Tiger Shrimp Rolls</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">WITH A PLUM SAUCE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$4.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                {/* main dishes */}
                <div style={{
                    marginTop: '66px',
                    marginBottom: '57px'
                }} className="menu-category-wrapper">
                    <h1 style={{
                        letterSpacing: '4.1px'
                    }} className="colored-heading">MAIN DISHES</h1>
                    <div className="category-items-wrapper">
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px',
                                    minWidth: '200px'
                                }} className="white-colored-content">Beef And Broccoli</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap',
                                }} className="item-description">SAUTEED IN OYSTER SAUCE</p>
                            </div>
                            <div className="price-wrapper">
                                <h1 className="item-price">$5.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Gai Of Nuur Satay </h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap'
                                }} className="item-description">SKEWERED CHICKEN OR BEEF WITH A PENUT SAUCE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$14.00</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Chicken And Broccoli</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap'
                                }} className="item-description">SAUTEED IN OYSTER SAUCE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$12.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Capesante Basilico</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap'
                                }} className="item-description">RISOTTO WITH SCALLOPS, PUREED BASIL</p>
                            </div>
                            <div >
                                <h1 className="item-price">$19.00</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Al fontanile</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap'
                                }} className="item-description">SAFFRON RISOTTO WITH SHRIMP, CALAMARI, SCALLOPS</p>
                            </div>
                            <div >
                                <h1 className="item-price">$19.00</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Al Tartufo</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap'
                                }} className="item-description">FRESH BLACK TRUFFLE RISOTTO WITH BUTTER</p>
                            </div>
                            <div >
                                <h1 className="item-price">$18.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">All'aragosta</h1>
                                <p style={{
                                    display: 'flex',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888',
                                    flexWrap: 'wrap'
                                }} className="item-description">RISOTTO WITH LOBSTER MEAT IN A LIGHTLY TOMATO SAUCE</p>
                            </div>
                            <div >
                                <h1 className="item-price">$14.50</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                {/* deserts */}
                <div style={{
                    marginTop: '66px'
                }} className="menu-category-wrapper">
                    <h1 style={{
                        letterSpacing: '4.1px'
                    }} className="colored-heading">DESSERT</h1>
                    <div className="category-items-wrapper">
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px',
                                    minWidth: '200px'
                                }} className="white-colored-content">Crepe with Nutella</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">RICE FLOUR CREPE WITH NUTELLA AND HAZELNUTS</p>
                            </div>
                            <div className="price-wrapper">
                                <h1 className="item-price">$9.00</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Creme Fraiche Cheesecake</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">ORANGE MARMALADE AND FENNEL CRISP</p>
                            </div>
                            <div >
                                <h1 className="item-price">$11.00</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Warm Valrhona Chocolate Cake</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">COCOA BEAN BRITTLE, VANILLA ICE CREAM</p>
                            </div>
                            <div >
                                <h1 className="item-price">$7.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Pasion Pavlova</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">WHIPPED CREAM, PASSION SEEDS</p>
                            </div>
                            <div >
                                <h1 className="item-price">$12.50</h1>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="item-name">
                                <h1 style={{
                                    fontSize: '22.01px',
                                    letterSpacing: '-0.5px'
                                }} className="white-colored-content">Warm Rhubarb Crisp</h1>
                                <p style={{
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    color: '#888888'
                                }} className="item-description">BASIL ICE CREAM</p>
                            </div>
                            <div >
                                <h1 className="item-price">$5.00</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Menu;