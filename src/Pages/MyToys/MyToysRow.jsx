/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';

const MyToysRow = ({ singleData, index, handleDelete, handleUpdateConfirm }) => {

    const { _id, title, image, available_quantity, description, email, radioGroup, status } = singleData;

    return (
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
                    { status === "confirm" ? <span className='text-danger'>Confirm</span> :
                        <Button onClick={() => handleUpdateConfirm(_id)} variant="success" >Confirm</Button>
                    }
                </td>
                <td>
                    <Button onClick={() => handleDelete(_id)}
                        variant="outline-danger"><CloseButton /></Button>
                </td>
            </tr>
        </tbody>
    );
};

export default MyToysRow;