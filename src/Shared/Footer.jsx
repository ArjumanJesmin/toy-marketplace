/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-right">
              <ul className="social-links d-flex">
                <li><Link  to='/'><FaFacebook/></Link></li>
                <li><Link to='/'><FaInstagram/></Link></li>
                <li><Link to='/'><FaTwitter/></Link></li>
              </ul>
            </Col>
            <Col md={12} className="text-center text-md-left">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;