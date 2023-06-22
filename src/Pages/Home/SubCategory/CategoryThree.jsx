/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryThree = () => {
    const notify = () => toast("Wow so easy!");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://baby-doll-server-side.vercel.app/toysThree')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    return (
        <Container>
        <Row className=' justify-content-center'>
            <Col className='d-flex'>
                 {
                    toys.map((toy) => <>
                        <div>
                            <Card >
                                <Card.Img  style={{ height: '20rem' }} variant="top" src={toy?.image} fluid />
                                <Card.Body>
                                    <Card.Title>{toy?.name}</Card.Title>
                                    <Card.Text>
                                        <p>price: $ {toy?.price}</p>
                                        <p>Rating: {toy?.rating}</p>
                                    </Card.Text>
                                    <Link to={`/btnDetails/${toy._id}`}><Button onClick={notify}  key={toy._id} className="me-2 mb-2" variant="outline-secondary">View Details</Button>
                                    <ToastContainer />
                                    </Link>
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

export default CategoryThree;