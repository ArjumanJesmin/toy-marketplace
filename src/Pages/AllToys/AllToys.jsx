/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import TableBody from './TableBody';



const AllToys = () => {

  const [allToys, setAllToys] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
        console.log(data)
      })

  }, [])


  return (

    <>
      <Container className='my-4'>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                </tr>
              </thead>
              {
                allToys.map((singleToy, index) => <TableBody handleShow={handleShow} handleClose={handleClose} show={show} index={index} singleToy={singleToy} key={singleToy._id} />)
              }
            </Table>
          </Col>
        </Row>
      </Container>

     
    </>
  );
};

export default AllToys;
