/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CardToy = ({toy}) => {
    return (
        <div>
            <Card style={{ width: '24rem' }}>
                <Card.Img style={{ height: '24rem' }} variant="top" src={toy?.image} fluid />
                <Card.Body>
                    <Card.Title>{toy?.name}</Card.Title>
                    <Card.Text>
                        <p>price: $ {toy?.price}</p>
                        <p>Rating: {toy?.rating}</p>
                    </Card.Text>
                    <Link to='/details'><Button key={toy._id} className="me-2 mb-2" variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardToy;