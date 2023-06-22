/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import product2 from '../../assets/product/product2.jpg'
import product3 from '../../assets/product/product3.jpg'
import product4 from '../../assets/product/product4.jpg'


const Products = () => {
   

    return (
        <div style={{color:'#6f42c1'}} className='p-4'data-aos="fade-right" >
        <Container className='border border-danger mx-auto rounded m-4 text-center shadow-lg bg-white'>
            <h2 className='text-center py-3 fw-bold text-secondary'>Customer love</h2>
            <p className='text-secondary shadow-lg'>Popular product</p>
            <Row className='my-4'>
                <Col lg={4} md={6}>
                    <>
                        <img className="img-fluid img-thumbnail" src={product2} alt="" />
                    </>
                </Col>
                <Col lg={4} md={6}>
                    < >
                    <img className="img-fluid img-thumbnail" src={product3} alt="" />
                    </>
                </Col>
                <Col lg={4} md={6}>
                    <>
                    <img className="img-fluid img-thumbnail" src={product4} alt="" />
                    </>
                </Col>
            </Row>

             
        </Container>
    </div>
    );
};

export default Products;