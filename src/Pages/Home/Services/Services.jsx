/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus, FaCodeBranch, FaCottonBureau,  FaHeart, FaMobileAlt, FaRegListAlt, FaStarOfDavid, FaUserLock } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
     },[]);

    return (
        <div style={{color:'#d63384'}} className='p-4 bg-light '  data-aos="flip-right">
            <Container className='border border-danger mx-auto rounded m-4 text-center shadow-lg'>
                <h1 style={{ fontStyle: 'italic', fontFamily: 'Arial, sans-serif' }} className='text-center py-3 fw-bold'>Tons of Customer Features</h1>
                <p className='text-secondary'>Our baby toys cater to parents, caregivers, and family members seeking engaging, educational, and safe playtime experiences for infants and young children.</p>
                {/* row-1 */}
                <Row className='my-4'>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaCottonBureau size={48} />
                                <h3>Built-in QuicView</h3>

                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaHeart size={48} />
                                <h3>Wishlist Ready</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* row-2 */}
                <Row className='my-4'>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaCartPlus size={48} />
                                <h3>Custom Card Notifications</h3>

                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaCodeBranch size={48} />
                                <h3>Custom Product Attributes</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                 {/* row-3 */}
                <Row className='my-4'>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaMobileAlt size={48} />
                                <h3>Mobile Shopping Ready</h3>

                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaUserLock size={48} />
                                <h3>Custom Login Form</h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                 {/* row-4 */}
                <Row className='my-4  '>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaStarOfDavid size={48} />
                                <h3>Customer Reviews</h3>

                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <div >
                                <FaRegListAlt size={48} />
                                <h3>Customer Ajax Filters</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;