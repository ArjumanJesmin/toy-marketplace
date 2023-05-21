/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';

const TableBody = ({ singleToy, index }) => {


    const { _id, title, image, available_quantity, description, email, radioGroup } = singleToy;
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <tbody>
                <tr>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{available_quantity}</td>
                    <td> {radioGroup}</td>
                    <td> {email}</td>
                    <td><img style={{ width: '6rem' }} src={image} alt="" /></td>
                    <td>
                        <Button variant="primary" onClick={() => setShowModal(true)} >View Details

                        </Button>
                    </td>
                </tr>
            </tbody>

            {/* modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Image src={image} alt="Modal Image" fluid />
                    <p>{email}</p>
                    <p>{description}</p>
                    <p>{available_quantity}</p>
                    <p>{description}</p>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default TableBody;