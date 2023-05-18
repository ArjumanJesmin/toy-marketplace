/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
      <Container fluid className="footer-container">
        <Row className="footer-row">
          <Col xs={12} sm={6} md={6} lg={4}>
          <h4>About Our Baby Doll Store</h4>
            <p className='text-secondary'>
              At Baby Doll Haven, we are passionate about providing high-quality and adorable baby dolls for children of all ages. Our mission is to bring joy, comfort, and imaginative play into the lives of little ones through our carefully selected collection of baby dolls.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <h4>Social Links</h4>
            <div className="social-links">
              <Link to="https://www.facebook.com" className="social-link">
                <FaFacebook />
              </Link>
              <Link to="https://twitter.com" className="social-link">
                <FaTwitter />
              </Link>
              <Link to="https://www.instagram.com" className="social-link">
                <FaInstagram />
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <h4>Contact Us</h4>
            <p className='text-secondary'>
              We would love to hear from you! If you have any questions, suggestions, or feedback regarding our baby dolls or services,
            </p>
            <ul className='text-secondary'>
              <li>
                <strong>Email:</strong> info@babydollhaven.com
              </li>
              <li>
                <strong>Phone:</strong> 1-800-123-4567
              </li>
              <li>
                <strong>Address:</strong> 1234 Baby Doll Street, Toyland, USA
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;