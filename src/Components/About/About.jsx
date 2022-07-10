import React from 'react'
import ArrowBlack from '../../Images/BlackArrow.png';
import Image1 from '../../Images/image1.png';
import Image2 from '../../Images/image2.png';
import './About.css';
import Object from '../../Images/Object.png';
import BlankImage from '../../Images/ImageBlank.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-wrapper">
      <div style={{
        // border: '1px solid white',
      }} className="top-section">
        <div className='left-box'>
          <p style={{
            color: '#CD916D',
            marginBottom: '9px',
            fontSize: '22px',
            fontWeight: '400',
            letterSpacing: '2px',
            fontFamily: 'Bebas Neue, cursive'
          }}>THE IDEA BEHIND</p>
          <h1 style={{
            fontSize: '40px',
            letterSpacing: '-2px',
            fontFamily: 'Libre Baskerville, serif',
            marginBottom: '14px'
          }}>We are better people when we have less on our plate.</h1>
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
            at scelerisque leo tristique. Nullam et ex
            orci. Proin laoreet pharetra sollicitudin.
            Donec ultricies pretium elementum. </p>

          <Link to="/menu"> <button className='button check-menu'>
            <div style={{
              border: '2px solid #CFCFCF'
            }} className='button-content'>
              <p style={{ color: '#222222' }} className='button-text'>
                CHECK THE MENU
              </p>
              <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowBlack} />
            </div>
          </button>
          </Link>
        </div>
        <div className="right-box">
          <div>
            <img className="image1" width={517} height={407} src={Image1} />
          </div>
          <div className="absolute-image">
            <img className="image2" width={280} height={242} src={Image2} />
          </div>
        </div>
      </div>

      <hr style={{
        display: 'flex',
        width: '84px',
        height: '5px',
        alignSelf: 'center',
        backgroundColor: '#888888',
        border: 'none',
        marginTop: '67px',
      }} />

      <div className="chefs-class-wrapper">
        <div className="chef-class-header">
          <h1 style={{
            fontSize: '22px',
            letterSpacing: '2px'
          }} className="colored-heading">OUR CHEFS</h1>
          <h1 style={{
            fontSize: '40px',
            letterSpacing: '-2.86px',
            fontFamily: 'Libre Baskerville',
            marginTop: '12px',
            width: '100%',
            textAlign: 'center',
            // paddingRight:'30px'
          }} className="white-colored-content about-chef-title">Meet the talent behind the taste</h1>
          <img style={{
            marginBottom: '14px',
            marginTop: '16px'
          }} width={53} height={10} src={Object} />
        </div>

        <div className="chef-images-wrapper">

          <div className="chef-details-wrapper">
            <img style={{
              marginBottom: '10px'
            }} width={342} height={233} src={BlankImage} />
            <h1 style={{
              fontSize: '22px',
              letterSpacing: '-1px',
              marginBottom: '10px'
            }} className="white-colored-content">Ben Burnley</h1>
            <h1 style={{
              fontSize: '16px',
              letterSpacing: '2px'
            }} className="colored-heading">MAIN CHEF</h1>
          </div>

          <div className="chef-details-wrapper">
            <img style={{
              marginBottom: '10px'
            }} width={342} height={233} src={BlankImage} />
            <h1 style={{
              fontSize: '22px',
              letterSpacing: '-1px',
              marginBottom: '10px'
            }} className="white-colored-content">Chand Williams</h1>
            <h1 style={{
              fontSize: '16px',
              letterSpacing: '2px'
            }} className="colored-heading">SOUS-CHEF</h1>
          </div>

          <div className="chef-details-wrapper">
            <img style={{
              marginBottom: '10px'
            }} width={342} height={233} src={BlankImage} />
            <h1 style={{
              fontSize: '22px',
              letterSpacing: '-1px',
              marginBottom: '10px'
            }} className="white-colored-content">Sarah Parker</h1>
            <h1 style={{
              fontSize: '16px',
              letterSpacing: '2px'
            }} className="colored-heading">MANAGER</h1>
          </div>

          <div className="chef-details-wrapper">
            <img style={{
              marginBottom: '10px'
            }} width={342} height={233} src={BlankImage} />
            <h1 style={{
              fontSize: '22px',
              letterSpacing: '-1px',
              marginBottom: '10px'
            }} className="white-colored-content">Brad Carlos</h1>
            <h1 style={{
              fontSize: '16px',
              letterSpacing: '2px'
            }} className="colored-heading">SOUS-CHEF</h1>
          </div>

          <div className="chef-details-wrapper">
            <img style={{
              marginBottom: '10px'
            }} width={342} height={233} src={BlankImage} />
            <h1 style={{
              fontSize: '22px',
              letterSpacing: '-1px',
              marginBottom: '10px'
            }} className="white-colored-content">Siena Allison</h1>
            <h1 style={{
              fontSize: '16px',
              letterSpacing: '2px'
            }} className="colored-heading">SOUS-CHEF</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;