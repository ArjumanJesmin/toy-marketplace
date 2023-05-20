/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';

const MyToysRow = ({ singleData, index,handleDelete }) => {

    const { _id, title, image, available_quantity, description, email, radioGroup } = singleData;

    // const handleDelete = id => {
    //     const proceed = confirm('Are You sure you want to delete')
    //     if (proceed) {
    //         fetch(`http://localhost:5000/someToys/${id}`,{
    //             method: 'DELETE'
    //         })
    //         .then(res=>res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //     }
    // }

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
                <td> <Link to='/'><Button variant="success" >Update</Button></Link> </td>
                <td>
                    <Button onClick={() => handleDelete(_id)}
                        variant="outline-danger"><CloseButton /></Button>
                </td>
            </tr>
        </tbody>
    );
};

export default MyToysRow;