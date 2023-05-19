/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardToy from './CardToy';

const CategoryTwo = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toysTwo')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    return (
        <Container>
        <Row>
            <Col xs={12} className='d-flex'>
                {
                    toys.map((toy) => <CardToy toy={toy} key={toy._id}/> )
                }
            </Col>
        </Row>
    </Container>
    );
};

export default CategoryTwo;
