/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableBody = ({ singleToy, index }) => {


    const {seller_name, picture, available_quantity, categories, description, seller_email, price,rating} = singleToy;

    return (
        <>
            <tbody>
                <tr>
                    <td>{index + 1}</td>
                    <td>{seller_name}</td>
                    <td>{available_quantity}</td>
                    <td> price: $ {price}</td>
                    <td><Link to='/details'><Button variant="primary" >View Details</Button></Link></td>
                </tr>
            </tbody>
        </>
    );
};

export default TableBody;