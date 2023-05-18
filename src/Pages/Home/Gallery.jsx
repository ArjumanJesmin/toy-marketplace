/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from '../../assets/gallery/img1.jpg'
import img2 from '../../assets/gallery/img2.jpg'
import img3 from '../../assets/gallery/img3.jpg'
import img4 from '../../assets/gallery/img4.jpg'
import img5 from '../../assets/gallery/img5.jpg'
import img6 from '../../assets/gallery/img6.jpg'

const Gallery = () => {

  return (
    <section className="m-5 bg-light p-5 rounded shadow">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} >
            <Image src={img6} thumbnail />
            <Image src={img2} thumbnail />
            <Image src={img3} thumbnail />
          </Col>
          <Col xs={12} sm={6} md={4} >
            <Image src={img4} thumbnail />
            <Image src={img5} thumbnail />
            <Image src={img1} thumbnail />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={img5} thumbnail />
            <Image src={img4} thumbnail />
            <Image src={img3} thumbnail />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
