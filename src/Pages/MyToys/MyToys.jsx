/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Col, Container, Row, Table } from 'react-bootstrap';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [someData, setSomeData] = useState([])
    const url = `http://localhost:5000/someToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSomeData(data))
    }, [url]);

    // handleDelete
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/someToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount >0 ){
                        alert('deleted successfully');
                        const remaining = someData.filter(singleData => singleData._id !== id)
                        setSomeData(remaining)
                    }
                })
        }
    }


    return (
        <Container className='my-4'>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Description</th>
                                <th>available_quantity</th>
                                <th>rating</th>
                                <th>email</th>
                                <th>image</th>
                            </tr>
                        </thead>
                        {
                            someData.map((singleData, index) => <MyToysRow index={index} handleDelete={handleDelete } singleData={singleData} key={singleData._id} />)
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyToys;