/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const TableBody = ({ singleToy, index, handleShow,fullscreen,show }) => {


    const { _id, title, image, available_quantity, description, email, radioGroup } = singleToy;

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
                <Button key={index} variant="primary" onClick={() => handleShow(_id)} >View Details
                {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
                </td>
            </tr>
        </tbody>

        {/* modal */}
       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
      </Modal>
        </>

    );
};

export default TableBody;