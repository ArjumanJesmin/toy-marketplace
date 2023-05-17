/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Banner.css'
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <section className="banner" style={{ backgroundImage: `url(${banner})`,  backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textShadow: '1px 1px 1px #000',
        height: '550px',
        width: '100%',
        objectFit: 'cover',
         }}>
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col md={6}>
              <div className="banner-content">
                <h1 className='text-secondary'>Cocooned Innocence: Unraveling the Threads of a Baby Doll is Journey</h1>
                <p className='text-secondary'>Inspired by innocence and cherished memories, our baby doll collection captures the pure joy and enchantment of childhood.</p>
                <Link to="/products">
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  
  export default Banner;