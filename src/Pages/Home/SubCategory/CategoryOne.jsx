/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
// import CardToy from './CardToy';
import { Link } from 'react-router-dom';

const CategoryOne = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toysOne')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    return (
        <Container>
            <Row >
                <Col className='d-flex' >
                     {
                        toys.map((toy) => <>
                            <div>
                                <Card key={toy._id} >
                                    <Card.Img  style={{ height: '20rem' }} variant="top" src={toy?.image} fluid />
                                    <Card.Body>
                                        <Card.Title>{toy?.name}</Card.Title>
                                        <Card.Text>
                                            <p>price: $ {toy?.price}</p>
                                            <p>Rating: {toy?.rating}</p>
                                        </Card.Text>
                                        <Link to={`/details/${toy._id}`}><Button key={toy._id} className="me-2 mb-2" variant="primary">View Details</Button></Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>)
                    }
                </Col>
                
            </Row>
        </Container>
    );
};

export default CategoryOne;