/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const TableBody = ({ singleToy, index, handleShow, handleClose, show }) => {


    const {seller_name, picture, available_quantity, categories, description, seller_email, price,rating} = singleToy;

    return (
        <>
            <tbody>
                <tr>
                    <td>{index + 1}</td>
                    <td>{seller_name}</td>
                    <td>{available_quantity}</td>
                    <td>
                        price: $ {price} <br/>
                        rating: {rating}
                    </td>
                    {/* <td><Link to='/details'><Button variant="primary" >View Details</Button></Link></td> */}
                    <td><Button variant="primary" onClick={handleShow}>View Details</Button></td>
                </tr>
            </tbody>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{seller_name}</Modal.Title>
                </Modal.Header>
                <img src={picture} alt="" />
                <Modal.Body>{description}</Modal.Body>
                <Modal.Body>{seller_email}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TableBody;