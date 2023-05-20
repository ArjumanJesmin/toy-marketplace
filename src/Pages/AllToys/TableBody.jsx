/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableBody = ({ singleToy, index }) => {


    const {title, image, available_quantity,  description, email, radioGroup} = singleToy;

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
                    <td><img style={{width:'6rem'}} src={image} alt="" /></td>
                    <td><Link to='/cardToy'><Button variant="primary" >View Details</Button></Link></td>
                </tr>
            </tbody>
        </>
    );
};

export default TableBody;