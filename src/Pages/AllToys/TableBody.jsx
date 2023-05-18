/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableBody = ({ singleToy }) => {
    const { name, available_quantity, categories } = singleToy;
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>{name}</td>
                <td>{available_quantity}</td>
                <td>
                    price: $ {categories[0]?.price}
                </td>
                <td><Link to='/details'><Button>View Details</Button></Link></td>
            </tr>
        </tbody>

    );
};

export default TableBody;