/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import TableBody from './TableBody';

const AllToys = () => {
    return (
       <Container className='my-4'>
        <Row>
            <Col>
            <Table  striped bordered hover>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
          </tr>
        </thead>
        <TableBody/>
       
      </Table>
            </Col>
        </Row>
       </Container>
    );
};

export default AllToys;
