/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryOne = () => {
    const notify = () => toast("Wow so easy!");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://baby-doll-server-side.vercel.app/toysOne')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    return (
        <Container>
            <Row >
                <div className='d-flex'>
                    {
                        toys.map((toy) => <>

                            <Card key={toy._id} >
                                <Card.Img style={{ height: '20rem' }} variant="top" src={toy?.image} fluid />
                                <Card.Body>
                                    <Card.Title>{toy?.name}</Card.Title>
                                    <Card.Text>
                                        <p>price: $ {toy?.price}</p>
                                        <p>Rating: {toy?.rating}</p>
                                    </Card.Text>
                                    <Link to={`/details/${toy._id}`}><Button onClick={notify}  key={toy._id} className="me-2 mb-2" variant="primary">View Details</Button>
                                    <ToastContainer />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </>)
                    }
                </div>

            </Row>
        </Container>
    );
};

export default CategoryOne;